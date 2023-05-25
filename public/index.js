#!/user/bin/nodejs


// --------------- load packages --------------- //
var express = require('express');
var app = express();
  
// tell express that the view engine is hbs
var hbs = require('hbs');
app.set('view engine', 'hbs');

// initialize the built-in library 'path'
var path = require('path');
console.log(__dirname);
app.use(express.static(path.join(__dirname,'static')));

// json data
const dma = require('./static/json/dma.json');
const footer = require('./static/json/footer.json');
const experience = require('./static/json/experience.json');
const projects = require('./static/json/projects.json');
const tools = require('./static/json/tools.json');

// --------------- express 'get' handlers --------------- //
app.get('/', function(req, res) {
    params = {
        dma: dma,
        footer: footer,
        experience: experience,
        projects: projects,
        tools: tools
    };
    res.render('home', params);
});

// --------------- listener --------------- //

// The listener is what keeps node 'alive'.
var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});