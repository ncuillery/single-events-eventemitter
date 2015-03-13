'use strict';

var emitter, listener;

module.exports = {
  setUp: function (done) {
    emitter = require('./emitter');
    listener = require('./listener');
    done();
  },

  emit: function (test) {
    test.equals(listener.notification, null);

    emitter();
    test.equals(listener.notification, 'event data');

    test.done();
  }
};
