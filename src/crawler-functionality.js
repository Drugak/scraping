const Nightmare = require('nightmare');
const {lenovoCrawlerLaptops} = require('./crawler-regulations/lenovo');
const updatedDB = require('../src/API/update');
const {LENOVO} = require('../consts');

const nightmare = Nightmare({ show: false, dock: true});
const crawlerAction = ({url, waitForXPath}) =>
    (nightmare) =>
        nightmare
            .goto(url)
            .wait(waitForXPath)
            .evaluate(lenovoCrawlerLaptops);


const runCrawler = function (db) {

    nightmare
        /**
         * Get Laptops info.
         */
        .use(crawlerAction({
            url: LENOVO.LAPTOPS.URL,
            waitForXPath: LENOVO.LAPTOPS.waitForXPath
        }))
        .then((payload) => updatedDB(payload, db, LENOVO.LAPTOPS.dbPatch))

        /**
         * Get Desktops info.
         */
        .then(() => {
            return nightmare.use(crawlerAction({
                url: LENOVO.DESKTOPS.URL,
                waitForXPath: LENOVO.DESKTOPS.waitForXPath
            }))
        })
        .then((payload) => updatedDB(payload, db, LENOVO.DESKTOPS.dbPatch))

        /**
         * Get Tablets info.
         */
        .then(() => {
            return nightmare.use(crawlerAction({
                url: LENOVO.TABLETS.URL,
                waitForXPath: LENOVO.TABLETS.waitForXPath
            }))
        })
        .then((payload) => updatedDB(payload, db, LENOVO.TABLETS.dbPatch))

        /**
         * Get Monitors info.
         */
        .then(() => {
            return nightmare.use(crawlerAction({
                url: LENOVO.MONITORS.URL,
                waitForXPath: LENOVO.MONITORS.waitForXPath
            }))
        })
        .then((payload) => updatedDB(payload, db, LENOVO.MONITORS.dbPatch))

        /**
         * Finalise all crawler actions.
         */
        .then(() => nightmare.end())
        .then(() => console.log('Good Job!'))
        .catch((error) => console.error('Oh, again an error:', error));
};

module.exports = {runCrawler};

