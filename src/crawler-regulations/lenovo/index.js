const Nightmare = require("nightmare");

const {lenovoCrawlerLaptops} = require('./utils');
const {LENOVO} = require("../../../consts");
const updatedDB = require("../../../src/API/update");
const crawlerAction = require('../crawlerAction');
const createIdForProduct = require("../createIdForProduct");
const updateIdCatalog = require('../createIdCatalog')


const nightmare = Nightmare({ show: false, dock: true});
let totalResult = {};

const collectOfPayload = (payload, productType) => {
    console.log('...Save:', productType);
    return totalResult[productType] = [...payload];
};


const runLenovoCrawler = (db) => {
    nightmare
        /**
         * Get Laptops info.
         */
        .use(crawlerAction({...LENOVO.LAPTOPS}, lenovoCrawlerLaptops))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, LENOVO.LAPTOPS.crawlerType))

        /**
         * Get Desktops info.
         */
        .then(() => nightmare.use(crawlerAction({...LENOVO.DESKTOPS}, lenovoCrawlerLaptops)))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, LENOVO.DESKTOPS.crawlerType))

        /**
         * Get Tablets info.
         */
        .then(() => nightmare.use(crawlerAction({...LENOVO.TABLETS}, lenovoCrawlerLaptops)))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, LENOVO.TABLETS.crawlerType))

        /**
         * Get Monitors info.
         */
        .then(() => nightmare.use(crawlerAction({...LENOVO.MONITORS}, lenovoCrawlerLaptops)))
        .then((payload) => createIdForProduct(payload))
        .then((payload) => collectOfPayload(payload, LENOVO.MONITORS.crawlerType))

        /**
         * Send to DB.
         */
        .then(() => updatedDB(totalResult, db, LENOVO.DB_PATH, LENOVO.NAME))
        .then(() => updateIdCatalog(LENOVO.NAME, db))

        /**
         * Finalise all crawler actions.
         */
        .then(() => nightmare.end())
        .catch((error) => console.error('Oh, again an error:', error));
};

module.exports = runLenovoCrawler;
