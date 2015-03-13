'use strict';

var bus = require('../lib/main');

module.exports = function() {
  bus.emit('notification', 'event data');
};
