'use strict';

var api = require('./player/api');
var readFile = require('./process_players/read_file');
var _ = require('underscore');
readFile();

api.showWinners(function(err, data){
    if(err){
        console.log(err);
    }else{
        var baseString = "";
        console.log("Winner(s) are " + _.reduce(data, function(baseString, winner){ return baseString + winner.id + " " }, ""));
    }
});