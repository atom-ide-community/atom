const fs = require('fs-extra');
const rimrafDir = require('@lerna/rimraf-dir');
const CONFIG = require('../config');

module.exports = function() {
  if (fs.existsSync(CONFIG.buildOutputPath)) {
    console.log(`Cleaning ${CONFIG.buildOutputPath}`);
    return rimrafDir(CONFIG.buildOutputPath);
  }
  return Promise.resolve();
};
