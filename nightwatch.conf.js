const chromedriver = require("chromedriver");
const geckodriver  = require("geckodriver");

module.exports = (function(settings) {
  // # Live output
  settings.live_output = false;

  // Compliance  
  settings.test_workers = false;
  settings.webdriver.server_path = chromedriver.path;
  
  // Alter chrome driver's path
  settings.test_settings.chrome.webdriver.server_path = chromedriver.path;
  // Alter firefox driver's path
  settings.test_settings.firefox.webdriver.server_path = geckodriver.path;

  return settings;

})(require('./nightwatch.json'));



