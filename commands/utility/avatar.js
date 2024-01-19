const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pfp')
		.setDescription('return your avatar')
        .addMentionableOption(option => 
            option
            .setName("user")
            .setDescription("mention user")
            .setRequired(false)
            
            ),
	async execute({interaction}) {
        console.log(interaction.options.getMember("user").user.avatarURL());
		// await interaction.reply(interaction.user.avatarURL());
		await interaction.reply(interaction.options.getMember("user").user.avatarURL());
	},
};

