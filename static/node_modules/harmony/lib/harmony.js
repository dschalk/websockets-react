/*!
 * Harmony - form parsing middleware for Connect.
 * Copyright(c) 20111 Nicholas Young / Original Machine
 * See the included LICENSE document.
 */

/**
 * Module dependencies.
 */

var formidable = require('formidable');

module.exports = function(options) {
	options = options || {};
	return function(req, res, next) {
		if(formRequest(req)) {
			var form = req.form = new formidable.IncomingForm;
			merge(form, options)
		}
		next();
	}
}

function formRequest(req) {
	var contentType = req.headers['content-type'];
	if(!contentType) return;
	return req.body === undefined
		&& (req.method === 'POST' || req.method === 'PUT')
		&& (~contentType.indexOf('multipart/form-data') 
		|| ~contentType.indexOf('urlencoded'));
}

function merge(a, b) {
	var keys = Object.keys(b);
	for (var i = 0, len = keys.length; i < len; ++i) {
		a[keys[i]] = b[keys[i]];
	}
	return a;
}