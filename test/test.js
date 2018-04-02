const HeadlineContoller = require('../controllers/headline');
const expect = require('chai').expect;

describe('HeadlineController.populateHedlines', () => {
  it("Should return a JSON object", () => {
    expect(HeadlineContoller.populateHeadlines).to.be.have.property("_id");
  })
})
