/*jshint esversion: 6 */
const TeleBot = require("telebot");

const bot = new TeleBot("476613891:AAGRsfZ6CdXiKTu74R2kBIbKvqevnXwIHA0");

bot.on("text", msg => {
  let messaggio = msg.text;
  return msg.reply.text(modificatesto(messaggio));
});

function modificatesto(messaggio) {
  let testo = "";
  let inserimento = messaggio.toLowerCase();

  let random = (Math.random() * 10).toFixed(0);

  if (random % 2) {
    inserimento = inserimento.replace(/a/g, "Æ");
    inserimento = inserimento.replace(/e/g, "Ē");
    inserimento = inserimento.replace(/i/g, "ì");
    inserimento = inserimento.replace(/o/g, "ő");
    inserimento = inserimento.replace(/u/g, "ù");
  } else {
    inserimento = inserimento.replace(/a/g, "ą");
    inserimento = inserimento.replace(/e/g, "é");
    inserimento = inserimento.replace(/i/g, "Ĩ");
    inserimento = inserimento.replace(/o/g, "Œ");
    inserimento = inserimento.replace(/u/g, "Ü");
  }

  for (let i = 0; i < inserimento.length; i++) {
    if (i % 2) {
      testo += inserimento[i].toUpperCase();
    } else {
      testo += inserimento[i].toLowerCase();
    }
  }

  return testo;
}

bot.start();
