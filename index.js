const express = require('express')
const app = express()
const { initializeApp } = require('firebase/app');
const { getDatabase } = require("firebase/database");
const port = 3000
const {runCrawler} = require('./src/crawler')
const getProductById = require('./src/API/getProductById')

const firebaseApp = initializeApp({
    /**
     * Yeah, I know, this is not secure. Sorry about that.
     */
    apiKey: "AIzaSyDIH1cUVz5_iuXOtpEEvW1KSIpVVN0U0S0",
    authDomain: "test-trg-4b842-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-trg-4b842",
    storageBucket: "test-trg-4b842.appspot.com",
    messagingSenderId: "871226495511",
    appId: "1:871226495511:web:77d42268460f85f2640252",
    databaseURL: "https://test-trg-4b842-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = getDatabase(firebaseApp);

app.get('/get-product-by-id', async (req, res) => {
    const response = await getProductById(req, db);
    res.send(response);
});

app.listen(port, () => {
    console.log('===== Hi TRG team! ===== \t¯\\(°_o)/¯');
    runCrawler(db);
});
