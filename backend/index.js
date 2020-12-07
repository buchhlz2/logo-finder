const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const axios = require("axios");
require("dotenv").config();
const clearbit = require("clearbit")(`${process.env.CLEARBIT_KEY}`);

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || "development";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Search data from frontend search term & pass to Clearbit API for company data
app.post('/api/search', (req, res) => {
  console.log("Search req to backend");
  console.log(req.body.company);
  res.status(201).send("Search data received on backend");
});

// Call to Clearbit API with hard-coded data (https://clearbit.com/docs?javascript#logo-api)
// TODO: make dynamic -- to use search terms from '/api/search' & return searched company data
app.get('/api/company', (req, res) => {
  console.log("Request to find logo");
  async function fetchLogo() {
    try {
      const companyData = await clearbit.Company.find({
        domain: "nike.com",
      });
      res.json({
        company: {
          name: companyData.name,
          description: companyData.description,
          domain: companyData.domain,
          logo: companyData.logo,
          location: {
            lat: companyData.geo.lat,
            long: companyData.geo.lng,
          },
          facebook: companyData.facebook,
          linkedin: companyData.linkedin,
          twitter: {
            handle: companyData.twitter.handle,
            avatar: companyData.twitter.avatar,
          },
          ticker: companyData.ticker,
          ein: companyData.identifiers.usEIN,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  fetchLogo();
});

if (ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/build/index.html"),
      (err) => {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
};

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port: ${PORT}`);
});
