const {child, get, getDatabase, ref, update} = require("firebase/database");

const createIdCatalog = (data, companyName) => {
    let idCatalog = {};

    for (const [key, value] of Object.entries(data)) {
        value.forEach((item) => {
            idCatalog[item.id] = `${companyName+'/'+key}`
        })
    }

    return idCatalog;

}

const updateIdCatalog = (companyName, db) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `companies/${companyName}`))
        .then((snapshot) => createIdCatalog(snapshot.val(), companyName))
        .then((payload) => {
            const updates = {};
            updates['idCatalog'] = payload;

            console.log("============================");
            console.log("======= Product ID's =======");
            console.log(payload);
            console.log("============================");
            console.log("============================");

            /**
             * Yes, I know :-(
             * Nested promises is bad idea, will be better to use async/await
             */
            return update(ref(db), updates)
                .then((res) => console.log('catalog has created'))
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = updateIdCatalog;