// Require controllers
const headlinesController = require('../controllers/headline');
const Notes = require('../controllers/note');
const router = require('express').Router();

// module.exports = function(app) {
  // Scrape Polygon.com
  router.route('/scrape')
  .get(headlinesController.scrape);

  // Populate page with Headlines
  router.route('/headlines/populate')
  .get(headlinesController.populateHeadlines);

  // app.get("/headlines/populate", function(req, res) {
  //   Headlines.populateHeadlines(req, res);
  // });

  // // Route for grabbing specific Headline by id, populate with its note
  // app.get("/headlines/grab/:id", function(req, res) {
  //   Headlines.grabHeadline(req, res);
  // });

  // // Route for posting a Note associated with a Headline
  // app.post("/notes/post/:id", function(req, res) {
  //   Notes.postNote(req, res);
  // });

  // // Route for deleting a Note
  // app.post("/notes/delete/:id", function(req, res) {
  //   Notes.deleteNote(req, res);
  // });
// };

module.exports = router;
