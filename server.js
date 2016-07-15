var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var fs = require('fs')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/savedata', function(req, res) {
	var body = ''
	var filePath = __dirname + '/public/data/data-' + new Date() + '.json'
	req.on('data', function(data) {
		body += data
	})
	req.on('end', function (){
		fs.writeFile(filePath, body, function() {
			res.end('success! Data is' + JSON.stringify(body));
		});
	});
})
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
