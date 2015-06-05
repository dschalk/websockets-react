var connect = require('connect'),
		form 		= require('./../lib/harmony');
		
var server = connect.createServer(
	form(),
	function(req, res, next) {
		if(req.form) {
			req.form.on('end', function(err, fields, files) {
				
			});
		} else {
			next();
		}
	}
)