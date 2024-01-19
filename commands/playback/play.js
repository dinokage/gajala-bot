const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")
const { QueryType } = require("discord-player")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("play a song from YouTube.")
        .addSubcommand(subcommand => 
            subcommand
            .setName("search")
            .setDescription("searches for a song on YT")
            .addStringOption(option => 
                option
                .setName("search-terms")
                .setDescription("search keywords")
                // .setRequired(true)
                )
            )
            .addSubcommand(subcommand => 
                subcommand
                .setName("playlist")
                .setDescription("playlist URL form YT")
                .addStringOption(option => 
                    option
                    .setName("playlist-url")
                    .setDescription("URL of playlist")
                    // .setRequired(true)
                    )
                )
            .addSubcommand( subcommand =>
                subcommand
                .setName("song")
                .setDescription("play from URL")
                .addStringOption(option => 
                    option.setName("song-url")
                    .setDescription("URL of song")
                    // .setRequired(true)
                    )
            ),

	execute: async({client, interaction}) => {
		// await interaction.reply('Pong!');
        if (!interaction.member.voice.channel) return interaction.reply("anna voice channel join avvu mundhu")

        const res = await client.player.queues.create(interaction.guildId)
        

        // console.log(res)

        // console.log(interaction.user.voice);

        // console.log(interaction.user.avatarURL());

        let embed = new EmbedBuilder();

        const subCommand = interaction.options.getSubcommand();

        switch(subCommand) {
            case "song":
                {let songURL = interaction.options.getString("song-url");
                let songResult = await client.player.search(songURL);
                client.player.play(interaction.member.voice.channel,songResult)
                console.log(songResult);
                break;}
            case "playlist":
                {let playlistURL = interaction.options.getString("playlist-url");
                // console.log(playlistURL);
                break;}
            default:
                console.log("issue");
        }
        await interaction.reply(`sulli ${subCommand}`)

	},
};