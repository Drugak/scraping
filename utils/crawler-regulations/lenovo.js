const {LENOVO} = require('../../consts');

const toCrawlProduct = () => {
    let title = $(this).find('.product_right .product_info.left_item .product_title > a').text();
    console.log(title);
};

const lenovoCrawlerCallback = (error, res, done) => {
    if (error) {
        console.log(error);
    } else {
        const $ = res.$;
        const productsList = $(LENOVO.LAPTOPS.htmlQuery);

        productsList.each(toCrawlProduct);
    }
    done();
};

module.exports = {lenovoCrawlerCallback};
