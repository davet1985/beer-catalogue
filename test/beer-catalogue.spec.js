var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var expect = require('chai').expect;

var index = require('../src/beer-catalogue.js');

describe('beer-catalogue', function() {

    describe('#getBeerDetails', function() {

        it('should exist', function() {
            expect(index.getBeerDetails).to.exist;
        });

        describe('onSuccess callback', function() {

            it('should be called with beer object', function() {
                // Arrange
                var beerCode = '1001';
                var beerDetails = {
                    abv: '4.1%',
                    description: 'Light, hoppy, citrus flavours'
                };
                var onSuccessSpy = sinon.spy();
                var onNotFoundSpy = sinon.spy();

                // Act
                index.getBeerDetails(beerCode, onSuccessSpy, onNotFoundSpy);

                // Asssert
                expect(onSuccessSpy).to.be.calledWith(beerDetails);
                expect(onNotFoundSpy).not.to.be.called;
            });

        });

        describe('onNotFound callback', function() {

            it('should be called when beer in not found in list', function() {
                // Arrange
                var beerCode = '9999';
                var onSuccessSpy = sinon.spy();
                var onNotFoundSpy = sinon.spy();

                // Act
                index.getBeerDetails(beerCode, onSuccessSpy, onNotFoundSpy);

                // Assert
                expect(onSuccessSpy).not.to.be.called;
                expect(onNotFoundSpy).to.be.called;
            });

        });

    });

});