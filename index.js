const StatsD = require('node-dogstatsd').StatsD

function factory (options) {
  options = options || {}

	const datadog = options.dogstatsd || new StatsD()
	const stat = options.stat || 'node.express'

	return function (req, res, next) {
    const startTime = new Date()

		res.on('finish', () => {
			const tags = [
			  'hostname:' + req.hostname,
        'method:' + req.method.toLowerCase(),
				'url:' + req.url,
        'status_code:' + res.statusCode
			]

      datadog.increment(stat + '.response_code.' + res.statusCode, 1, tags)
      datadog.increment(stat + '.response_code.all', 1, tags)
			datadog.histogram(stat + '.response_time', new Date() - startTime, 1, tags)
		})

		next()
	}
}

module.exports = factory
