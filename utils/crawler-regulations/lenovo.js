const {update, ref} = require("firebase/database");

function lenovoCrawlerLaptops() {
    const XPath = '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item';
    const productsList = document.querySelectorAll(XPath);

    const getProductName = (el) => el.querySelector('.product_info.left_item .product_title a').textContent.trim();
    const getProductDetails = (el) => {
        let result = [];
        const detailsElemArr = el.querySelectorAll('.product_bottom .product-details .hover_ul_keyDetails li.hover_keyDetails');
        const createDetailsObj = (element) => {
            return {
                detailsKey: element.querySelector('.keyDetailsKey').textContent,
                description: element.querySelector('.keyDetailsKey + span').textContent
            }
        };

        detailsElemArr.forEach((element) => result.push(createDetailsObj(element)));

        return result;
    };

    const createPayload = () => {
        let result = [];

        productsList.forEach((element) => {
            result.push({
                name: getProductName(element),
                details: getProductDetails(element)
            })
        });

        return result;
    };

    return createPayload();
}

function sendToDB(payload, db, dbPatch) {
    const updates = {};
    updates[dbPatch] = payload;

    update(ref(db), updates)
        .then((res) => console.log(res, "=== That was great man! =="))
        .catch((err) => console.log(err, "=== Oh, again? This is ERROR! =="));
}

module.exports = {lenovoCrawlerLaptops, sendToDB};
