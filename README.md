# single-events-eventemitter
[![Build Status](https://travis-ci.org/ncuillery/single-events-eventemitter.png)](https://travis-ci.org/ncuillery/single-events-eventemitter)

When you have to use the [Node.js event API](https://nodejs.org/api/events.html), you have to
create an instance of `EventEmitter`. If a module B has to listen event emitted from module A, you
can simply require A in B and do something like this:
```javascript
moduleA.on('notification', function () {
  // Do something
});
```

But if you need an single instance shared by multiple emitters and listeners (kind of an event bus)
then you need to wrap your instance in a module like this:
```javascript
var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();
module.exports = eventEmitter;
```

These 3 lines of code are exactly what this package will spare you and it's its sole purpose :wink:
