var jefit = require('../index.js');
var config = require('./config.example.json');

jefit.fetchMostRecent(config.username, function (error, result) {
  console.log(JSON.stringify(result, null, 2));

});