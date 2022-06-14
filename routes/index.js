var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  // const started = false;
  var started = true;
  if (started) {
    var fullUrl = url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    });
    res.redirect(fullUrl.replace('app.bio', 'cent.co'));
    return;
  }
  res.render('index', { title: 'We will be right back'  });
});

module.exports = router;
