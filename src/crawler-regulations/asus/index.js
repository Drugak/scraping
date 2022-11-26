const Nightmare = require("nightmare");

const {asusCrawlerPhones, asusCrawlerMonitors, crawlerForAccessories} = require('./utils');
const createIdForProduct = require('../createIdForProduct');
const {ASUS} = require("../../../consts");
const updatedDB = require("../../../src/API/update");
const crawlerAction = require('../crawlerAction');
const updateIdCatalog = require("../createIdCatalog");

const nightmare = Nightmare({ show: false, dock: true});

let totalResult = {};

const collectOfPayload = (payload, productType) => {
    console.log('...Save:', productType);
    return totalResult[productType] = [...payload];
};

const runAsusCrawler = (db) => {
    console.log('Start Asus crawler');
    nightmare
        /**
         * Get Phones info.
         */
        .use(crawlerAction({...ASUS.PHONES}, asusCrawlerPhones))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, ASUS.PHONES.crawlerType))

        /**
         * Get Monitors info.
         */
        .then(() => nightmare.use(crawlerAction({...ASUS.MONITORS}, asusCrawlerMonitors)))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, ASUS.MONITORS.crawlerType))

        /**
         * Get Monitors info.
         */
        .then(() => nightmare.use(crawlerAction({...ASUS.ACCESSORIES}, crawlerForAccessories)))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, ASUS.ACCESSORIES.crawlerType))

        /**
         * Send result to DB
         */
        .then(() => updatedDB(totalResult, db, ASUS.DB_PATH))
        .then(() => updateIdCatalog(ASUS.NAME, db))

        /**
         * Finalise all crawler actions.
         */
        .then(() => nightmare.end())
        .catch((error) => console.error('Oh, again an error:', error));
}



module.exports = runAsusCrawler;
