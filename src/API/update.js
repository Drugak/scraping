const {update, ref} = require("firebase/database");

function updatedDB(payload, db, dbPatch) {
    const updates = {};
    updates[dbPatch] = payload;

    update(ref(db), updates)
        .then((res) => console.log(res, "=== That was great man! =="))
        .catch((err) => console.log(err, "=== Oh, again? This is ERROR! =="));
}

module.exports = updatedDB;