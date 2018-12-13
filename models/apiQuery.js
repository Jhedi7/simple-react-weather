const url = require('url');
const config = require('../config/config');

module.exports = {
  queryURL: function(localtionConfigType, localtionConfigData) {
    const baseUrlConfig = config.baseUrl;
    const APIkey = config.APIkey;
    const queryConfig = config.query;

    let requestQuery = { appid: APIkey };

    if (localtionConfigType !== 'coordinates') {
      requestQuery[queryConfig[localtionConfigType]] = localtionConfigData;
    } else {
      if (localtionConfigData.latitude) {
        requestQuery[queryConfig.coordinates.latitude] = localtionConfigData.latitude;
      }
      if (localtionConfigData.longitude) {
        requestQuery[queryConfig.coordinates.longitude] = localtionConfigData.longitude;
      }
    }

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery
    });

  }
}