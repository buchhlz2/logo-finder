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

let companyDomain = null;

// Search data from frontend search term & pass to Clearbit API for company data
// /api/search receives POST from frontend form "search" field
// /api/search allows GET request for dev purposes and potential future implementation
app.post('/api/search', (req, res) => {
  console.log("Backend POST request to /api/search");
  companyDomain = req.body.company;
});

app.get('/api/search', (req, res) => {
  console.log("Backend GET request to /api/search");
  console.log(companyDomain);
  res.json({companyDomain});
})

async function getCompanyDomain(domain) {
  return domain;
}

// Call to Clearbit API (https://clearbit.com/docs?javascript#logo-api) with company from frontend & /api/search
app.get("/api/company", (req, res) => {
  console.log(`Backend request to find logo: ${companyDomain}`);
  async function fetchCompanyData() {
    try {
      if ((await getCompanyDomain(companyDomain)) === null) {
        console.log("No domain provided to backend");
        companyDomain = "";
        res.json({});
      } else {
        const companyData = await clearbit.Company.find({
          domain: companyDomain,
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
      }
    } catch (err) {
      console.log(err);
    }
  }
  fetchCompanyData();
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
