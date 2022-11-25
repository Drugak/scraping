function asusCrawlerPhones() {
    const XPath = '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list';
    const productsList = document.querySelectorAll(XPath);

    const getProductName = (el) => el.querySelector('.headingRow > h2').textContent.trim();
    // const getProductDetails = (el) => {
    //     let result = [];
    //     const detailsElemArr = el.querySelectorAll('.product_bottom .product-details .hover_ul_keyDetails li.hover_keyDetails');
    //     const createDetailsObj = (element) => {
    //         return {
    //             detailsKey: element.querySelector('.keyDetailsKey').textContent,
    //             description: element.querySelector('.keyDetailsKey + span').textContent
    //         }
    //     };
    //
    //     detailsElemArr.forEach((element) => result.push(createDetailsObj(element)));
    //
    //     return result;
    // };

    const createPayload = () => {
        let result = [];

        productsList.forEach((element) => {
            result.push({
                name: getProductName(element),
                // details: getProductDetails(element)
            })
        });

        return result;
    };

    return createPayload();
}

module.exports = asusCrawlerPhones;