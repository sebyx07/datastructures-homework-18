'use strict';

var _ = require('underscore');

var playersList = {
    addPlayer: function(player){
        var self = this;
        if(self.storedIds.indexOf(player.id) !== -1){
            throw new Error('player already in list');
        }
        self.storage.push(player);
        self.storedIds.push(player.id);
    },

    getPlayer: function(id){
        var player = _.find(this.storage, function(player) {
            return player.id === id;
        });
        return player;
    },
    storedIds: [],
    storage: []
};
module.exports = playersList;