# Running single test
nightwatch tests/1.js -e firefox
# Running individual test
nightwatch tests/1.js -e firefox tests_other/2.js -e chrome
# Running tests --groups
# target by folder example: ./tests/groupname
# Runnig by tags
nightwatch --tag login -e firefox
# Skipping test by tags
nightwatch --skiptags sanity,login -e firefox
# Not working Mocha
{"test_runner" : "mocha"}
# Extending Nightwatch 
To be continue...
