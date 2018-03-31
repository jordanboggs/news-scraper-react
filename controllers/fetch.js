const scrape = require('../scripts/scrape');

Fetch = function(req, res) {
  scrape(req, res);
  res.json("Scrape successful.");
}

module.exports = Fetch;
