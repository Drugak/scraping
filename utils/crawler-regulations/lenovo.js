const {update, ref} = require("firebase/database");

function lenovoCrawlerLaptops() {
    const XPath = '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item';
    const productsList = document.querySelectorAll(XPath);

    const getProductName = (el) => el.querySelector('.product_info.left_item .product_title a').textContent.trim();
    const getProductDetails = (el) => {
        let detailsArr = [];
        const detailsElemArr = el.querySelectorAll('.product_bottom .product-details .hover_ul_keyDetails li.hover_keyDetails');

        for (const element of detailsElemArr) {
            detailsArr.push({
                detailsKey: element.querySelector('.keyDetailsKey').textContent,
                description: element.querySelector('.keyDetailsKey + span').textContent
            })
        }
        return detailsArr;
    };

    const createPayload = () => {
        let modelsArray = [];
        for (const element of productsList) {
            modelsArray.push({
                name: getProductName(element),
                details: getProductDetails(element)
            })
        }

        return modelsArray;
    }

    return createPayload();
}

function sendToDB(payload, db, dbPatch) {
    const updates = {};
    updates[dbPatch] = payload;

    update(ref(db), updates)
        .then((res) => console.log(res, "===res=="))
        .catch((err) => console.log(err, "===errr"));
}

module.exports = {lenovoCrawlerLaptops, sendToDB};
