const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var gameScores = []

var temp = [
    {id:"Player2", score:102280, time:"1/2/4", game:"VR Adventure"},
    {id:"Player3", score:10000, time:"1/2/5", game:"Hangman"},
    {id:"Player3", score:99, time:"1/2/6", game:"Escape the Maze"},
    {id:"Player4", score:8973, time:"1/3/1", game:"Hangman"},
    {id:"Player5", score:98732, time:"1/3/2", game:"Hangman"},
    {id:"Player6", score:10, time:"1/3/3", game:"Escape the Maze"},
    {id:"Player1", score:10280, time:"1/2/3", game:"Escape the Maze"}
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/version', (req, res) => {
    res.send({ msg:"0.0.1 - Initialized Receiver"});
});


app.post('/SubmitScore', (req, res) => {
    // console.log(req.body)
    gameScores.push(req.body)

    res.send({data:"Score Successfully Submitted"});
});


app.get('/getScores', (req, res) => {
    res.send({ scores:gameScores});//Serve all new scores

    gameScores = [] //Reset it

    gameScores = temp.splice(0, 1); // Pull random item
});





app.listen(process.env.PORT || 3000);
console.log("Running on http://localhost:3000/")