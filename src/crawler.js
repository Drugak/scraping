const {runLenovoCrawler, runAsusCrawler} = require('./crawler-regulations');

const runCrawler = function (db) {
    runLenovoCrawler(db);
    runAsusCrawler(db);
};

module.exports = {runCrawler};

