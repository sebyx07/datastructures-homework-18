'use strict';

var win = require('../../lib/player/winning_requirements');
var expect = require('chai').expect;

describe("win", function(){
   describe("meetAllPlayers", function(){
       var playerList1 = [
           {id: "1234", metPlayers: ["1235", "1236"]},
           {id: "1235", metPlayers: ["1234"]},
           {id: "1236", metPlayers: ["1234"]}
       ];

       var playerList2 = [
           {id: "1234", metPlayers: ["1235"]},
           {id: "1235", metPlayers: ["1234"]},
           {id: "1236", metPlayers: []}
       ];

       describe("winner available", function(){
           it('player 1234, must be the only winner', function(done){
               win.meetAllPlayers(playerList1, function(err, winners){
                   expect(err).to.be.null;
                   expect(winners.length).to.equal(1);
                   expect(winners[0].id).to.equal("1234");
                   done();
               });
           });
       });

       describe("no winner", function(){
           it('there are no winners', function(done){
               win.meetAllPlayers(playerList2, function(err, winners){
                   expect(err).not.to.be.null;
                   expect(winners).to.be.null;
                   done();
               });
           });
       })
   })
});
