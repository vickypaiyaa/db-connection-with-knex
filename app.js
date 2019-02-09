/**
 * Created by vicky on 25/03/2017.
 */

var express = require('express');
var app = express();
//var knex = require('knex');

var config      = require('./knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);
//knex.migrate.latest([config]);

knex.select('*').from('patients').asCallback(function(err,values) {
   if(err) console.log(err);
    else console.log(values);
    knex.destroy();
});

app.listen(4000);
console.log('app is listening on port : 4000');