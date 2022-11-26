const crawlerAction = ({url, waitForXPath}, crawlerTypeActions) => {
    return (nightmare) =>
        nightmare
            .goto(url)
            .wait(waitForXPath)
            .evaluate(crawlerTypeActions);
}

module.exports = crawlerAction;