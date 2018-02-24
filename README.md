# express-datadog

Datadog middleware for Express.

## Usage

`express-datadog` should be the first middleware added to the Express app.
If you add it after other routings, the response time will be wrong.

```
app.use(require('express-datadog')())
```

## Options

The middleware factory accepts an optional options object.
The following properties are supported:

* `dogstatsd`: A `node-dogstatsd` instance if you need to custom configuration.
* `stat` A name for the stat (default: `node.express`).

## License

Copyright 2018 Zazuko GmbH

`express-datadog` is licensed under the MIT License.

The initial idea for this middleware was take from [connect-datadog](https://github.com/AppPress/node-connect-datadog).
