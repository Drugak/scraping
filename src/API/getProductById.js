const {get, child, getDatabase, ref} = require("firebase/database");

const getProductById = (req) => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `idCatalog/${req.query.productId}`))
        .then((snapshot) => snapshot.val())
        .then((dbPath) =>
            get(child(dbRef, `companies/${dbPath}/`))
                .then((response) => {
                    let result;
                    response.val().forEach((item) => {
                        if (req.query.productId === item.id) result = item;
                    })

                    return result;
                }))
        .catch((error) => {
            console.error(error);
        });
}

module.exports = getProductById