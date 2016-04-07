'use strict';

var beerList = require('./data/beer-list');

var getBeerDetails = function(beerCode, onSuccess, onNotFound) {
    var beer = beerList[beerCode];
    beer !== undefined ? onSuccess(beer) : onNotFound();
};

module.exports = {
    'getBeerDetails': getBeerDetails
}