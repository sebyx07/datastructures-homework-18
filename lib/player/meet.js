'use strict';

var meet = function(player1, player2){
    try{
        player1.meet(player2);
        player2.meet(player1);
    }catch(e){
        throw new Error("cannot meet these players");
    }
};

module.exports = meet;