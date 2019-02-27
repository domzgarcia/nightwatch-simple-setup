module.exports = {
    'default': {
        isLocal: true
    },
    'integration': {
        isLocal: false
    },

    reporter : function(results, cb){
        console.log('called global reporter');
        cb();
    },

    before : function(browser, done) {
        console.log('before...');
        done();
    },

    after : function(browser, done) {
        console.log('after...');
        done();
    },

    beforeEach : function(browser, done) {
        console.log('beforeEach...');
        done();
    },

    afterEach : function(browser, done) {
        console.log('afterEach...');
        done();
    }
};
  