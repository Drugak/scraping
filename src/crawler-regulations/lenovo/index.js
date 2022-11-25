const Nightmare = require("nightmare");

const {lenovoCrawlerLaptops, lenovoCrawlerPhones} = require('./utils');
const {LENOVO} = require("../../../consts");
const updatedDB = require("../../../src/API/update");


const nightmare = Nightmare({ show: false, dock: true});
const crawlerTypeActions = {
    laptop: lenovoCrawlerLaptops,
    phone: lenovoCrawlerPhones,
};

const crawlerAction = ({url, waitForXPath, crawlerType}) =>
    (nightmare) =>
        nightmare
            .goto(url)
            .wait(waitForXPath)
            .evaluate(crawlerTypeActions[crawlerType]);

const runLenovoCrawler = (db) => {
    nightmare
        /**
         * Get Laptops info.
         */
        .use(crawlerAction({...LENOVO.LAPTOPS}))
        .then((payload) => updatedDB(payload, db, LENOVO.LAPTOPS.dbPatch))

        /**
         * Get Desktops info.
         */
        .then(() => {
            return nightmare.use(crawlerAction({...LENOVO.DESKTOPS}))
        })
        .then((payload) => updatedDB(payload, db, LENOVO.DESKTOPS.dbPatch))

        /**
         * Get Tablets info.
         */
        .then(() => {
            return nightmare.use(crawlerAction({...LENOVO.TABLETS}))
        })
        .then((payload) => updatedDB(payload, db, LENOVO.TABLETS.dbPatch))

        /**
         * Get Monitors info.
         */
        .then(() => {
            return nightmare.use(crawlerAction({...LENOVO.MONITORS}))
        })
        .then((payload) => updatedDB(payload, db, LENOVO.MONITORS.dbPatch))

        /**
         * Finalise all crawler actions.
         */
        .then(() => nightmare.end())
        .then(() => console.log('Good Job!'))
        .catch((error) => console.error('Oh, again an error:', error));
};

module.exports = runLenovoCrawler;
