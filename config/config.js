module.exports = {
  baseUrl: {
    protocol: 'http',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather'
  },
  query: {
    name: 'q',
    id: 'id',
    coordinates: {
      latitude: 'lat',
      longitude: 'lon'
    },
    zipcode: 'zip'
  },
  APIkey: '79ade67a6c7a31026970e54ac6ac796e'
}