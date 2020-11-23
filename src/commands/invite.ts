import { botID, sendMessage } from '../../deps.ts';
import { createCommand } from '../utils/helpers.ts';

createCommand({
    name: `invite`,
    description: 'This will send an invite link for the bot',
    execute: function (message) {
        sendMessage(
            message.channelID,
            `https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=8`
        );
    },
});
