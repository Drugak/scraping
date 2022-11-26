function crawlerForMonitors() {
    const XPath = '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list';
    const productsList = document.querySelectorAll(XPath);

    const getName = (el) => el.querySelector('.headingRow > h2').textContent.trim();
    const getDescription = (el) => el.querySelector('.featureDescriptionRow .itemModelSpec').textContent.trim();
    const getOriginImageUrl = (el) => el.querySelector(
        '.SingleSlideCarousel__innerSlides__1lHTK > div img').src

    const createPayload = () => {
        let result = [];

        productsList.forEach((element) => {
            result.push({
                name: getName(element),
                details: getDescription(element),
                originImageUrl: getOriginImageUrl(element)
            })
        });

        return result;
    };

    return createPayload();
}

module.exports = crawlerForMonitors;