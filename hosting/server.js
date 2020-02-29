var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var webapp = express();
const ip = '3.6.101.64';
const port = 80;

webapp.use(bodyParser.urlencoded({ extended: true })); 

var server = webapp.listen(port, ip, function(){

	console.log('connected successfully');

});
webapp.get('/',function(req, res){

	try{

		res.sendFile(__dirname + "/index.html")

	}catch(err){

		console.log(err);

	}

});
webapp.post('/predict',function(req, res){

	try{

		console.log(req.body)
		res.send("working");

	}catch(err){

		console.log(err);

	}

});