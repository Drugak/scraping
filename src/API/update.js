const {update, ref} = require("firebase/database");

function updatedDB(payload, db, dbPatch, productName) {
    const updates = {};
    updates[dbPatch] = payload;

    update(ref(db), updates)
        .then((res) => console.log(
            payload
            ,'※\\(^o^)/※',
            "Here's what we found and saved from -->" + productName))
        .catch((err) => console.log(err, "(╯°□°)╯" , "=== Oh, again? This is ERROR! =="));
}

module.exports = updatedDB;