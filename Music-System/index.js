// Dependencies
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
require('dotenv').config();
const prefix = "-"

// initialize bot
const client = new Discord.Client();


// initialize files
const baseCommands = require("./Music-Function/base_commands")


client.once('ready', () => {
    console.log('Groovy');

    baseCommands(client)
});


client.once('reconnecting', () => {
    console.log('Reconnecting!');   
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});









client.login(process.env.TOKEN)