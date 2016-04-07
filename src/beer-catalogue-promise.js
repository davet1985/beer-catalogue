'use strict';

var beerList = require('./data/beer-list');

var getBeerDetails = function(beerCode) {
    return new Promise(function(resolve, reject) {
        var beer = beerList[beerCode];
        beer !== undefined ? resolve(beer) : reject(new Error(`Beer with code ${beerCode} not found.`));
    });
};

module.exports = {
    'getBeerDetails': getBeerDetails
}