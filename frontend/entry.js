require('bootstrap/dist/css/bootstrap.min.css');
require('./css/style.css');
require('imports?jQuery=jquery!bootstrap/dist/js/bootstrap.min.js');

require('./lib/controller');
var template = require('imports?_=underscore!./views/template.ejs');
document.write(template());
