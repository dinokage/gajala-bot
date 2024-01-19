const { SlashCommandBuilder } = require('discord.js');
const { GuildQueuePlayerNode } = require('discord-player');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resume')
		.setDescription('resumes the song'),
	async execute({client, interaction}) {
		// console.log(client.player)
		let queue = await client.player.queues.get(interaction.guildId)
		let queueController = new GuildQueuePlayerNode(queue)
		console.log(queueController.setPaused(false));
		// client.player.nodes[0].pause();
		await interaction.reply("resumed");
	},
};