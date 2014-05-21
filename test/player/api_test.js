'use strict';

var api = require('../../lib/player/api');
var playerList = require('../../lib/player/players_list');
var expect = require('chai').expect;

var _mettingGood = "123 124";
var _mettingBad = "123 123";
var _metting2 = "555 666";
var _metting3 = "555 777";
var _metting4 = "666 777";
var _metting5 = "888 777";
var _metting6 = "888 999";

describe("api", function(){
    describe("#Metting", function(){
        describe("good meeting", function(){
            var metting1 = _mettingGood.split(" ");
            var m = new api.Meeting(metting1[0], metting1[1]);
            expect(m.successFull).to.be.true;
        });
        describe("bad meeting", function(){
            var metting1 = _mettingBad.split(" ");
            try{
                new api.Meeting(metting1[0], metting1[1]);
            }catch(e){
                expect(e).to.be.instanceOf(Error);
            }
        });

        describe("showWinners", function(){
            describe("one winner",function(){
                before(function(){
                    playerList.storage = [];
                    playerList.storedIds = [];
                    var metting2 = _metting2.split(" ");
                    var metting3 = _metting3.split(" ");
                    var metting4 = _metting4.split(" ");
                    var metting5 = _metting5.split(" ");
                    new api.Meeting(metting2[0], metting2[1]);
                    new api.Meeting(metting3[0], metting3[1]);
                    new api.Meeting(metting4[0], metting4[1]);
                    new api.Meeting(metting5[0], metting5[1]);
                });

                it('should show only 777', function(){
                    api.showWinners(function(err, data){
                        expect(err).to.be.null;
                        expect(data[0].metPlayers.length).to.equal(3);
                    })
                })
            });
            describe("multiple winner",function(){
                before(function(){
                    playerList.storage = [];
                    playerList.storedIds = [];
                    var metting2 = _metting2.split(" ");
                    var metting3 = _metting3.split(" ");
                    var metting4 = _metting4.split(" ");
                    new api.Meeting(metting2[0], metting2[1]);
                    new api.Meeting(metting3[0], metting3[1]);
                    new api.Meeting(metting4[0], metting4[1]);
                });

                it('should show [555,666,777]', function(){
                    api.showWinners(function(err, data){
                        expect(err).to.be.null;
                        expect(data.length).to.equal(3);
                    })
                })
            });
            describe("no winner",function(){
                before(function(){
                    playerList.storage = [];
                    playerList.storedIds = [];
                    var metting2 = _metting2.split(" ");
                    var metting3 = _metting3.split(" ");
                    var metting4 = _metting4.split(" ");
                    var metting5 = _metting5.split(" ");
                    var metting6 = _metting6.split(" ");
                    new api.Meeting(metting2[0], metting2[1]);
                    new api.Meeting(metting3[0], metting3[1]);
                    new api.Meeting(metting4[0], metting4[1]);
                    new api.Meeting(metting5[0], metting5[1]);
                    new api.Meeting(metting6[0], metting6[1]);
                });

                it('should show error', function(){
                    api.showWinners(function(err, data){
                        expect(err).to.be.instanceOf(Error);
                        expect(data).to.be.null
                    })
                })
            });
        })
    })
});