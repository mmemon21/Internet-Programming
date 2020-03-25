var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/results', function(req, res){
   var query = req.query.search;
   var url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + query + '&format=json&jscmd=data';
   request(url, function(error, response, dataStream){
       if(!error && response.statusCode == 200){
          
          var data = JSON.parse(dataStream);
        //   console.log(data);
          res.render('results', {data : data, query:query});
       }
   })
});

app.get('*', function(req, res){
    res.render('error');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server has started");
});