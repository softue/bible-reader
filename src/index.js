const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const path = require("path");
const Version = require('./versiculo.js')
require('dotenv').config()

const sessionData = JSON.parse(process.env.sessionData);
const client = new Client({ session: sessionData });

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
  const ver = new Version(message.body)
  if (ver.getVersion()) {
    message.reply(ver.getVersion());
  }
});

client.initialize();