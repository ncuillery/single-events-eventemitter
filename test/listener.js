'use strict';

var bus = require('../lib/main');

var listener = {
  notification: null
}

bus.on('notification', function (eventData) {
  listener.notification = eventData;
});

module.exports = listener;
