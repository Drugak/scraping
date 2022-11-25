const Nightmare = require("nightmare");

const {asusCrawlerPhones} = require('./utils');
const {ASUS} = require("../../../consts");
const updatedDB = require("../../../src/API/update");


const nightmare = Nightmare({ show: false, dock: true});
const crawlerTypeActions = {
    phone: asusCrawlerPhones,
};

const crawlerAction = ({url, waitForXPath, crawlerType}) =>
    (nightmare) =>
        nightmare
            .goto(url)
            .wait(waitForXPath)
            .evaluate(crawlerTypeActions[crawlerType]);

const runAsusCrawler = (db) => {
    nightmare
        /**
         * Get Laptops info.
         */
        .use(crawlerAction({...ASUS.PHONES}))
        .then((payload) => updatedDB(payload, db, ASUS.PHONES.dbPatch))

        /**
         * Get Desktops info.
         */
        // .then(() => {
        //     return nightmare.use(crawlerAction({...LENOVO.DESKTOPS}))
        // })
        // .then((payload) => updatedDB(payload, db, LENOVO.DESKTOPS.dbPatch))

        .then(() => nightmare.end())
        .then(() => console.log('Good Job!'))
        .catch((error) => console.error('Oh, again an error:', error));
};

module.exports = runAsusCrawler;
