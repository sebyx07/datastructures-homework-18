# Data Structures Homework 18

Tests are found in test/
all are passing

I used non-sql ideas for this problem 

How player is stored:


```
player1: { id: 1234,
           metPlayers: [1235, 1256]
player2: { id: 1235,
           metPlayers: [1234, 1257]
           
...
```

So when a meeting is made player1 is inserted in player2 list and vice versa


To run it you need Node

```
cd /lib
node app.js
```