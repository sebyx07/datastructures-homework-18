'use strict';

var Player = require('../../lib/player/Player');

var expect = require('chai').expect;


describe("Player", function(){
    var player1 = new Player("123");
    var player2 = new Player("1234");
    it('should create a new player1', function(){
        expect(player1.id).to.equal("123");
        expect(player1.metPlayers).to.be.empty;
    });

    describe('#meet', function(){
        it('should not meet himself', function(){

            try{
                player1.meet(player1);
            }catch(e){
                expect(e).to.be.instanceOf(Error);
            }

            expect(player1.metPlayers.length).to.equal(0);
        });

        describe("meet another player1", function(){
            afterEach(function(){
                player1.metPlayers = [];
                player2.metPlayers = [];
            });

            it('should meet a valid player1', function(){
                player1.meet(player2);
                expect(player1.metPlayers[0]).to.equal("1234");
            });

            it('should not meet the same player1 twice or more', function(){
                player1.meet(player2);

                try{
                    player1.meet(player2);
                }catch(e){
                    expect(e).to.be.instanceOf(Error);
                }

                expect(player1.metPlayers.length).to.equal(1);
            });
        });
    });
});