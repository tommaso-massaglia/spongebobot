/*jshint esversion: 6 */
const TeleBot = require ('telebot');
const isOdd = require ('is-odd');

const bot = new TeleBot('476613891:AAGRsfZ6CdXiKTu74R2kBIbKvqevnXwIHA0');

bot.on('text', (msg) => {
    let messaggio = msg.text;
    return msg.reply.text(modificatesto(messaggio));
});

function modificatesto(messaggio){
    let testo = "";
    let inserimento = messaggio;
    for (let i=0; i<inserimento.length; i++){
        if (!isOdd(i)){
            testo+=messaggio[i].toUpperCase();
        }
        else {
            testo+=messaggio[i].toLowerCase();
        }
}
    return testo;
}

bot.start();

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);