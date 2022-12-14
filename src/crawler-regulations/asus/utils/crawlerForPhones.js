function crawlerForPhones() {
    const XPath = '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list';
    const productsList = document.querySelectorAll(XPath);

    const getName = (el) => el.querySelector('.headingRow > h2').textContent.trim();
    const getOriginImageUrl = (el) => el.querySelector(
        '.SingleSlideCarousel__innerSlides__1lHTK > div img').src

    const createPayload = () => {
        let result = [];

        productsList.forEach((element) => {
            result.push({
                name: getName(element),
                originImageUrl: getOriginImageUrl(element)
                // details: getProductDetails(element)
            })
        });

        return result;
    };

    return createPayload();
}

module.exports = crawlerForPhones;