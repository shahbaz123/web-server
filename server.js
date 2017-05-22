var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req , res, next) {
		console.log ('private route hit!');
		next();
	},
	Logger: function(req , res , next){
		console.log('Request ' + ' ' + new Date().toString() + ' '+ req.method  + ' ' + req.originalUrl);
		next();
	}

};
app.use(middleware.Logger);

//app.use(middleware.requireAuthentication);

app.get('/about', function (req , res){
   res.send ('My Server');
});

app.use(express.static(__dirname+'/public'));

console.log(__dirname);

app.listen(PORT, function(){
	console.log('Express server started on port ' + PORT + '!');
});

