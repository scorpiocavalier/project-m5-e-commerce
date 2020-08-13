const express = require('express');
const router = express.Router();
const firebase = require("../firebase/firebase");
const database = firebase.database();

router.get('/', (req, res) => {
  database
    .ref('companies')
    .once('value')
    .then(companiesSnapshot => companiesSnapshot.val() || null)
    .then(companies => {
      console.log('Retrieved all companies.')
      res.status(200).json(companies);
    })
});

module.exports = router;