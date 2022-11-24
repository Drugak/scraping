const express = require('express')
const app = express()
const { initializeApp } = require('firebase/app');
const { getDatabase } = require("firebase/database");
const port = 3000
const {runCrawler} = require('./utils/crawler-functionality')

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDIH1cUVz5_iuXOtpEEvW1KSIpVVN0U0S0",
    authDomain: "test-trg-4b842-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-trg-4b842",
    storageBucket: "test-trg-4b842.appspot.com",
    messagingSenderId: "871226495511",
    appId: "1:871226495511:web:77d42268460f85f2640252",
    databaseURL: "https://test-trg-4b842-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = getDatabase(firebaseApp);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    runCrawler(db);
});
