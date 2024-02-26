var express = require("express");
var router = express.Router();
var fetch = require('node-fetch');

const token = process.env.token;

const ROOT_URL = 'https://catfact.ninja/fact';


/* GET users listing. */
router.get('/', async function(req, res, next) {
    const catFact = await fetch(ROOT_URL)
    const catFactData = await catFact.json();
    console.log(catFactData)
    res.render('cat/fact', {catFact: catFactData.fact})
  })

module.exports = router;
