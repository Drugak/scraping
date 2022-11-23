const Crawler = require('crawler');
const {lenovoCrawlerCallback} = require('./crawler-regulations/lenovo');
const {LENOVO} = require('../consts');

const crawlerInstance = new Crawler({
    maxConnections: 10
});

const runCrawler = function () {
    console.log('run crawler ===');
    crawlerInstance.queue([{uri: LENOVO.LAPTOPS.URL, callback: lenovoCrawlerCallback}]);
};

module.exports = {runCrawler};

