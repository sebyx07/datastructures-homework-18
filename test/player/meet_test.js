'use strict';

var meet = require('../../lib/player/meet');
var Player = require('../../lib/player/Player');
var expect = require('chai').expect;

var player1 = new Player("123");
var player2 = new Player("124");
var player3 = new Player("125");
var player4 = new Player("126");
var player5 = new Player("127");

describe("meet", function(){
    afterEach(function(){
        player1.metPlayers = [];
        player2.metPlayers = [];
    });

    describe("valid meeting", function(){
        meet(player1, player2);
        it('player1 should have player2 met', function(){
            expect(player1.metPlayers[0]).to.equal(player2.id);
        });
    });
    describe("invalid meeting", function(){
        it('player1 should not have player2 met', function(){
            meet(player1, player2);
            try{
                meet(player2, player1);
            }catch(e){
                expect(e).to.be.instanceOf(Error);
            }
        });
    });
});

