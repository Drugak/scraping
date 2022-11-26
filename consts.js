const LENOVO = {
    DB_PATH: 'companies/lenovo',
    NAME: 'lenovo',
    LAPTOPS: {
        url: 'https://www.lenovo.com/gb/en/laptops/results/?visibleDatas=2515%3ABuild%20Your%20Own%2CPre-Built%100Models',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .product_item',
        crawlerType: 'laptop'
    },
    DESKTOPS: {
        url: 'https://www.lenovo.com/gb/en/desktops/results/?visibleDatas=2515%3ABuild%20Your%20Own%2CPre-Built%20Models',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .product_item',
        crawlerType: 'desktops'
    },
    TABLETS: {
        url: 'https://www.lenovo.com/gb/en/tablets/results/?visibleDatas=2822%3A7%22%20-%207.9%22%2C8%22%20-%208.9%22%2C10%22%20-%2012.9%22',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .product_item',
        crawlerType: 'tablets'
    },
    MONITORS: {
        url: 'https://www.lenovo.com/gb/en/d/eyesafe/?IPromoID=len508056&visibleDatas=2506%3A21%2522-%252024.9%2522%2C25%2522-%252027.9%2522%2C28%2522%2520-%252032.9%2522%2CAbove%252033%2522',
        XPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        waitForXPath: '.layoutGroup .content .product_list.product_list_column .skeleton_product li.product_item',
        crawlerType: 'monitors'
    }
};

const ASUS = {
    DB_PATH: 'companies/asus',
    NAME: 'asus',
    PHONES: {
        url: 'https://www.asus.com/uk/mobile/phones/all-series/filter?Series=ROG-Phone,ZenFone',
        XPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        waitForXPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        crawlerType: 'phone'
    },
    MONITORS: {
        url: 'https://www.asus.com/uk/displays-desktops/monitors/all-series/filter?Category=35-and-above,31-34-9,27-30-9,23-26-9,18-22-9,17-9-and-below',
        XPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        waitForXPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        crawlerType: 'monitors'
    },
    ACCESSORIES: {
        url: 'https://www.asus.com/uk/accessories/keyboards/all-series/filter?Series=ROG-Republic-of-Gamers,TUF-Gaming',
        XPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        waitForXPath: '#filterWrapper #productListContainer .LevelThreeFilterPage__productListTemplate__Qnsre .filter_product_list',
        crawlerType: 'accessories'
    },
}

module.exports = {LENOVO, ASUS}