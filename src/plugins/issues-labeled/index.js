const util = require('util');

const plugins = [
  require('./needs-info'),
  require('./question')
];

module.exports = robot => {
  robot.on('issues.labeled', context => {
    plugins.forEach(plugin => plugin(context));
  });
};