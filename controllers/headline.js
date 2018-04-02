// Require all models
const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  // Scrape site to populate database with headlines, descriptions,
  // and links
  scrape: function(req, res) {
    axios.get("https://waypoint.vice.com/en_us")
    .then(function(response) {
      // Set up Cheerio
      const $ = cheerio.load(response.data);
      $("a.grid__wrapper__card").each(function(i, element) {
        let result = {};
        
        // Populate result object
        result.link = "https://waypoint.vice.com" + $(element).attr("href");
        result.title = $(element).find("h2").text();
        result.description = $(element).find(".grid__wrapper__card__text__summary").text();
  
        // Create a new Headline from result object
        db.Headline.create(result)
        .then(function(dbHeadline) {
          return res.json(dbHeadline);
        })
        .catch(function(err) {
          return res.json(err);
        });
      });
    }); 
  },
  // Populate page with Headlines
  populateHeadlines: function(req, res) {
    db.Headline
      .find({})
      .sort({created_at: -1})
      .then((dbHeadline) => res.json(dbHeadline))
      .catch((err) => res.json(err));
  },
  // Grab specific Headline by id, populate with its note
  grabHeadline: function(req, res) {
    db.Headline
      .find({
       _id: req.params.id
      })
      .populate("notes")
      .then((dbHeadline) => res.json(dbHeadline))
      .catch((err) => res.json(err));
  },
};
