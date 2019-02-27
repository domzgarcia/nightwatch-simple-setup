module.exports = {
    '@tags': ['login'],
    '[TEST:login] step one: navigate to google with tags' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('input[name=btnK]', 1000)
    },
    
    'step two: click input' : function (browser) {
      browser
        .click('input[name=btnK]')
        .pause(1000)
        .assert.containsText('#main', 'Night Watch')
        .end();
    }
  };
  