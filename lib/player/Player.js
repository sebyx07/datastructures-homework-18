'use strict';
var Player = function(id){
    this.id = id;
    this.metPlayers = [];

    this.meet = function(player){
        if(this.id === player.id){
            throw new Error('cannot met himself');
        }
        if(this.metPlayers.indexOf(player.id) !== -1){
            throw new Error('cannot met player previous met');
        }
        this.metPlayers.push(player.id);
    }
};

module.exports = Player;