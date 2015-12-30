'use strict';

const moment = require('moment');

module.exports = function parseDate(lines) {
  const date = lines.split('\n').filter(l =>
    /^Date:/.test(l)
  )[0].split(/:\s+/)[1];

  const momentInstance = moment(new Date(date));

  if (!momentInstance.isValid()) {
    throw new Error('Invalid Date');
  }

  return momentInstance;
};
