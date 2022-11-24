function lenovoCrawlerCallback() {
    const XPath = '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item';
    let modelsArray = [];

    const getLaptopName = (el) => el.querySelector('.product_info.left_item .product_title a').textContent.trim();
    const getLaptopDetails = (el) => {
        let detailsArr = [];
        const detailsElemArr = el.querySelectorAll('.product_bottom .product-details .hover_ul_keyDetails li.hover_keyDetails');

        for (const element of detailsElemArr) {
            detailsArr.push({
                detailsKey: element.querySelector('.keyDetailsKey').textContent,
                description: element.querySelector('.keyDetailsKey + span').textContent
            })
        }

        return detailsArr;
    }


    const productsList = document.querySelectorAll(XPath);

    for (const element of productsList) {
        modelsArray.push({
            name: getLaptopName(element),
            details: getLaptopDetails(element)
        })
    }

    return modelsArray;
}

function calculate(listOfItems) {

}

module.exports = {lenovoCrawlerCallback};
