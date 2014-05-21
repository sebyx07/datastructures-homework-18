var api = require('../player/api');


var parseFile = function(){
    var fs  = require("fs");

    fs.readFileSync('./input.txt').toString().split('\n').forEach(function (line) {
        var lineFormat = line.split(" ");
        try {
            if (lineFormat.length !== 2) {
                throw new Error("invalid line '" + line + "'");
            }
            var m = new api.Meeting(lineFormat[0], lineFormat[1]);
            //console.log(JSON.stringify(m));
            if(!m.successFull){
                throw new Error("invalid line '" + line + "'");
            }
            console.log("Success: '" + line + "'");
        }catch(e){
            console.log(e);
        }
    });
};

module.exports = parseFile;