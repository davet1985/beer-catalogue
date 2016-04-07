'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
require('sinon-as-promised');

var index = require('../src/beer-catalogue-promise.js');

describe('beer-catalogue-promise', function() {

    describe('#getBeerDetails', function() {

        describe('on success', function() {

            it('should resolve when the beer exists', function() {
                // Arrange
                var beerCode = '1001';
                var beerDetails = {
                    abv: '4.1%',
                    description: 'Light, hoppy, citrus flavours'
                };

                // Act, Assert
                expect(index.getBeerDetails(beerCode)).to.eventually.become(beerDetails);
            });

        });

        describe('on error', function() {

            it('should reject with not found error', function() {
                // Arrange
                var beerCode = '9999';
                var error = new Error(`Beer with code ${beerCode} not found.`);

                // Act, Assert
                expect(index.getBeerDetails(beerCode)).to.eventually.be.rejectedWith(error);
            });

        });

    });

});
