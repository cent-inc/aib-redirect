var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */

router.get('/test', function(req, res, next) {
  res.render('index', { body: 'We will be right back' });
})

router.get('*', function(req, res, next) {
  var started = false;
  var started = true;
  if (started) {
    var fullUrl = url.format({
      protocol: 'https',
      host: req.get('host'),
      pathname: req.originalUrl
    });
    var redirectUrl = fullUrl.replace('cent.app.bio', 'collect.cent.co');
    redirectUrl = redirectUrl.replace('app.bio', 'cent.co');
    if (fullUrl != redirectUrl) {
      res.redirect(redirectUrl);
      return;
    }
  }
  res.render('index', { body: 'We will be right back' });
});

module.exports = router;
