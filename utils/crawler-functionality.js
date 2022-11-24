const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false, dock: true});

const {lenovoCrawlerLaptops, sendToDB} = require('./crawler-regulations/lenovo');
const {LENOVO} = require('../consts');


const crawlerAction = ({url, waitForXPath, dbPatch}) =>
    (nightmare) =>
        nightmare
            .goto(url)
            .wait(waitForXPath)
            .evaluate(lenovoCrawlerLaptops);


const runCrawler = function (db) {

    nightmare
        .use(crawlerAction({
            url: LENOVO.LAPTOPS.URL,
            waitForXPath: LENOVO.LAPTOPS.waitForXPath
        }))
        .then((payload) => {
            return sendToDB(payload, db, LENOVO.LAPTOPS.dbPatch);
        })

        .then(() => {
            return nightmare.use(crawlerAction({
                url: LENOVO.DESKTOPS.URL,
                waitForXPath: LENOVO.DESKTOPS.waitForXPath
            }))
        })
        .then((payload) => {
            return sendToDB(payload, db, LENOVO.DESKTOPS.dbPatch);
        })

        .then(() => {
            return nightmare.use(crawlerAction({
                url: LENOVO.TABLETS.URL,
                waitForXPath: LENOVO.TABLETS.waitForXPath
            }))
        })
        .then((payload) => {
            return sendToDB(payload, db, LENOVO.TABLETS.dbPatch);
        })

        .then(() => {
            return nightmare.use(crawlerAction({
                url: LENOVO.MONITORS.URL,
                waitForXPath: LENOVO.MONITORS.waitForXPath
            }))
        })
        .then((payload) => {
            return sendToDB(payload, db, LENOVO.MONITORS.dbPatch);
        })

        .then(() => nightmare.end())
        .then(() => console.log('done'))
        .catch(function(error) {
            console.error('Search failed:', error);
        });
};

module.exports = {runCrawler};

