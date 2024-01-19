const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Player } = require('discord-player');
// const SpotifyWebApi = require('spotify-web-api-node');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord.js'); 
const dotenv = require('dotenv');

dotenv.config();
process.setMaxListeners(0);
// discord client setup
const client = new Client(
{ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
	GatewayIntentBits.MessageContent
  ]}
);

// discor player setup
const player = new Player(client, {ytdlOptions : {
	quality : "highestaudio",
	highWaterMark : 1 << 25
}});
player.extractors.loadDefault();
client.player=player;

// spotify api connection

// const spotApi = new SpotifyWebApi(
// 	{
// 		clientId: process.env.CLID,
// 		clientSecret: process.env.CLSECRET
// 	}
// 	);

// loading all commands
commands=[]
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command)
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
	
const settings = {
		prefix: '-',
		token: process.env.BOT_TOKEN,
		clientId: process.env.CLIENT_ID
};
const rest = new REST().setToken(settings.token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

//TODO

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	// console.log(interaction.toJSON())
	if(!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);
	// console.log(interaction);
	// console.log(interaction.client.commands)

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute({client, interaction});
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
})


client.login(settings.token);
