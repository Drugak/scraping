const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false, dock: true});

const {lenovoCrawlerCallback} = require('./crawler-regulations/lenovo');
const {LENOVO} = require('../consts');



const runCrawler = function () {
    nightmare
        .goto(LENOVO.LAPTOPS.URL)
        .wait(LENOVO.LAPTOPS.waitForXPath)
        .evaluate(lenovoCrawlerCallback)
        .end()
        .then(console.log)
        .catch(error => {
            console.error('Search failed:', error)
        });
};

module.exports = {runCrawler};

