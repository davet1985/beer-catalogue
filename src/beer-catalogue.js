var beerList = {
    '1001': {
        abv: '4.1%',
        description: 'Light, hoppy, citrus flavours'
    },
    '1002': {
        abv: '5.2%',
        description: 'Strong craft lager'
    }
};

var getBeerDetails = function(beerCode, onSuccess, onNotFound) {
    var beer = beerList[beerCode];
    beer !== undefined ? onSuccess(beer) : onNotFound();
};

module.exports = {
    'getBeerDetails': getBeerDetails
}