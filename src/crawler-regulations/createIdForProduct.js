const createIdForProduct = (productList) => productList.map((item) => {
        return {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            ...item
        }
    }
);

module.exports = createIdForProduct;