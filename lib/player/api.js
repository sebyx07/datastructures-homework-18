'use strict';
var Player = require('./Player');
var playersList = require('./players_list');
var winningReq = require('./winning_requirements');
var meet = require('./meet');

var _ = require('underscore');
var api ={
    Meeting: function(id1, id2){
        this.successFull = true;
        this.player1 = null;
        this.player2 = null;
        try{
            if(!(_.isString(id1) && _.isString(id2))){
                throw new Error('invalid player ids');
            }
            var getPlayer1 = playersList.getPlayer(id1);
            var getPlayer2 = playersList.getPlayer(id2);

            if(getPlayer1){
                this.player1 = getPlayer1
            }else{
                this.player1 = new Player(id1);
            }

            if(getPlayer2){
                this.player2 = getPlayer2
            }else{
                this.player2 = new Player(id2);
            }

            meet(this.player1, this.player2);
        }catch(e){
            throw e;
        }
        if(this.player1 && this.player2){
            [this.player1, this.player2].forEach(function(player){
                try{
                    playersList.addPlayer(player);
                }catch(e){}
            })
        }
    },
    showWinners: function(callback){
        winningReq.meetAllPlayers(playersList.storage, function(err, data){
            callback(err, data);
        })
    }
};

module.exports = api;