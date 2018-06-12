var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(function (req, res, next){
  //gives you the ability to see it locally as well as heroku
  if (req.headers['x-forwarded-proto']==='https'){
    res.redirect('http://' + req.hostname + req.url);
  }else {
    next();
  }
});
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port 3001');
});
