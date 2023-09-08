const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Player } = require('discord-player');
const SpotifyWebApi = require('spotify-web-api-node');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client(
{
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildVoiceStates
	]
}
);

const player = new Player(client);
client.player=player;

const spotApi = new SpotifyWebApi(
	{
		clientId: process.env.CLID,
		clientSecret: process.env.CLSECRET
	}
	);
	
	const settings = {
		prefix: '-',
		token: process.env.BOTOKEN
};

//TODO

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});
client.login(settings.token);
