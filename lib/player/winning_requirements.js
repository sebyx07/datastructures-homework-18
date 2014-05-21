var winning = {
    meetAllPlayers: function(players, callback){
        var winners = [];
        players.forEach(function(player){
            if(player.metPlayers.length === players.length - 1){
                winners.push(player);
            }
        });
        if(winners.length === 0){
            callback(new Error('no winners'), null);
        }else{
            callback(null, winners);
        }
    }
};

module.exports = winning;