const fetch = require('node-fetch');
const apiQuery = require('models').apiQuery;

module.exports = (app) => {
  
  app.post('/search-location-weather', (req, res) => {
    const requestBody = req.body;
    const apiUrl = apiQuery(requestBody.locationType, requestBody.locationData);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({
          data
        })
      })
      .catch(err => {
        res.redirect('/error')
      });
  });
};