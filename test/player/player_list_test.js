'use strict';

var playerList = require('../../lib/player/players_list');
var Player = require('../../lib/player/Player');

var expect = require('chai').expect;

describe("playerList", function(){
    var player1 = new Player("123");

    describe("#addPlayer", function(){
        before(function(){
            playerList.storage = [];
            playerList.storedIds = [];
        });

        afterEach(function(){
            playerList.storage = [];
            playerList.storedIds = [];
        });
        it('should valid player', function(){
            playerList.addPlayer(player1);
            expect(playerList.storage).to.not.be.empty;
            expect(playerList.storedIds).to.not.be.empty;
        });

        it('should not duplicate player', function(){
            playerList.addPlayer(player1);
            try{
                playerList.addPlayer(player1);
            }catch(e){
                expect(e).to.be.instanceOf(Error);
            }
            expect(playerList.storage.length).to.equal(1);
            expect(playerList.storedIds.length).to.equal(1);
        });
    })

    describe("#getPlayer", function(){
        before(function(){
            playerList.storage = [];
            playerList.storedIds = [];
        })

        it('should return the player by id', function(){
            var player1 = new Player("123");
            playerList.addPlayer(player1);
            expect(playerList.getPlayer("123").id).to.equal("123");
        })

        after(function(){
            playerList.storage = [];
            playerList.storedIds = [];
        })
    })
});