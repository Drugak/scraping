const LENOVO = {
    LAPTOPS: {
        url: 'https://www.lenovo.com/gb/en/laptops/results/?visibleDatas=2515%3ABuild%20Your%20Own%2CPre-Built%100Models',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .product_item',
        dbPatch: 'companies/lenovo/laptops',
        crawlerType: 'laptop'
    },
    DESKTOPS: {
        url: 'https://www.lenovo.com/gb/en/desktops/results/?visibleDatas=2515%3ABuild%20Your%20Own%2CPre-Built%20Models',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .product_item',
        dbPatch: 'companies/lenovo/desktops',
        crawlerType: 'laptop'
    },
    TABLETS: {
        url: 'https://www.lenovo.com/gb/en/tablets/results/?visibleDatas=2822%3A7%22%20-%207.9%22%2C8%22%20-%208.9%22%2C10%22%20-%2012.9%22',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .product_item',
        dbPatch: 'companies/lenovo/tablets',
        crawlerType: 'laptop'
    },
    MONITORS: {
        url: 'https://www.lenovo.com/gb/en/d/eyesafe/?IPromoID=len508056&visibleDatas=2506%3A21%2522-%252024.9%2522%2C25%2522-%252027.9%2522%2C28%2522%2520-%252032.9%2522%2CAbove%252033%2522',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        dbPatch: 'companies/lenovo/monitors',
        crawlerType: 'laptop'
    }
};

const ASUS = {
    PHONES: {
        url: 'https://www.asus.com/uk/mobile/phones/all-series/filter?Series=ROG-Phone,ZenFone',
        XPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        waitForXPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        dbPatch: 'companies/asus/phones',
        crawlerType: 'phone'
    }
}

module.exports = {LENOVO, ASUS}