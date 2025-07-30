const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═════════════════════════════════════════╗
   *🤖 ${settings.botName || '𝐆𝐎𝐃𝐒𝐙𝐄𝐀𝐋 𝐗𝐌𝐃'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || 'Godszeal Tech'}
   YT: ${global.ytch}
╚═════════════════════════════════════════╝

╔═══════════════════╗
🌐 *GENERAL COMMANDS*
╠═══════════════════╣
║ ➤ .help / .menu   ║
║ ➤ .ping           ║
║ ➤ .alive          ║
║ ➤ .tts <text>     ║
║ ➤ .owner          ║
║ ➤ .joke           ║
║ ➤ .quote          ║
║ ➤ .fact           ║
║ ➤ .weather <city> ║
║ ➤ .news           ║
║ ➤ .attp <text>    ║
║ ➤ .lyrics <title> ║
║ ➤ .8ball <quest>  ║
║ ➤ .groupinfo      ║
║ ➤ .staff / .admins║
║ ➤ .vv             ║
║ ➤ .trt <txt> <lg> ║
║ ➤ .ss <link>      ║
║ ➤ .jid            ║
╚═══════════════════╝

╔═══════════════════╗
👮‍♂️ *ADMIN COMMANDS*
╠═══════════════════╣
║ ➤ .ban @user      ║
║ ➤ .promote @user  ║
║ ➤ .demote @user   ║
║ ➤ .mute <minutes> ║
║ ➤ .unmute         ║
║ ➤ .delete / .del  ║
║ ➤ .kick @user     ║
║ ➤ .warnings @user ║
║ ➤ .warn @user     ║
║ ➤ .antilink       ║
║ ➤ .antibadword    ║
║ ➤ .clear          ║
║ ➤ .tag <message>  ║
║ ➤ .tagall         ║
║ ➤ .chatbot        ║
║ ➤ .resetlink      ║
║ ➤ .welcome <on/off>║
║ ➤ .goodbye <on/off>║
╚═══════════════════╝

╔═══════════════════╗
🔒 *OWNER COMMANDS*  
╠═══════════════════╣
║ ➤ .mode           ║
║ ➤ .autostatus     ║
║ ➤ .clearsession   ║
║ ➤ .antidelete     ║
║ ➤ .cleartmp       ║
║ ➤ .setpp <image>  ║
║ ➤ .autoreact      ║
╚═══════════════════╝

╔══════════════════════════╗
🎨 *IMAGE/STICKER COMMANDS*
╠══════════════════════════╣
║ ➤ .blur <image>         ║
║ ➤ .simage <sticker>     ║
║ ➤ .sticker <image>      ║
║ ➤ .tgsticker <Link>     ║
║ ➤ .meme                 ║
║ ➤ .take <packname>      ║
║ ➤ .emojimix <emj1+emj2> ║
╚══════════════════════════╝

╔═══════════════════╗
🎮 *GAME COMMANDS*   
╠═══════════════════╣
║ ➤ .tictactoe @user║
║ ➤ .hangman        ║
║ ➤ .guess <letter> ║
║ ➤ .trivia         ║
║ ➤ .answer <ans>   ║
║ ➤ .truth          ║
║ ➤ .dare           ║
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI COMMANDS*     
╠═══════════════════╣
║ ➤ .gpt <question> ║
║ ➤ .gemini <quest> ║
║ ➤ .imagine <prompt>║
║ ➤ .flux <prompt>  ║
╚═══════════════════╝

╔═══════════════════╗
🎯 *FUN COMMANDS*    
╠═══════════════════╣
║ ➤ .compliment @user║
║ ➤ .insult @user   ║
║ ➤ .flirt          ║
║ ➤ .shayari        ║
║ ➤ .goodnight      ║
║ ➤ .roseday        ║
║ ➤ .character @user║
║ ➤ .wasted @user   ║
║ ➤ .ship @user     ║
║ ➤ .simp @user     ║
║ ➤ .stupid @user [txt]║
╚═══════════════════╝

╔═══════════════════╗
🔤 *TEXTMAKER*       
╠═══════════════════╣
║ ➤ .metallic <text>║
║ ➤ .ice <text>     ║
║ ➤ .snow <text>    ║
║ ➤ .impressive <txt>║
║ ➤ .matrix <text>  ║
║ ➤ .light <text>   ║
║ ➤ .neon <text>    ║
║ ➤ .devil <text>   ║
║ ➤ .purple <text>  ║
║ ➤ .thunder <text> ║
║ ➤ .leaves <text>  ║
║ ➤ .1917 <text>    ║
║ ➤ .arena <text>   ║
║ ➤ .hacker <text>  ║
║ ➤ .sand <text>    ║
║ ➤ .blackpink <txt>║
║ ➤ .glitch <text>  ║
║ ➤ .fire <text>    ║
╚═══════════════════╝

╔═══════════════════╗
📥 *DOWNLOADER*      
╠═══════════════════╣
║ ➤ .play <song>    ║
║ ➤ .song <name>    ║
║ ➤ .instagram <url>║
║ ➤ .facebook <url> ║
║ ➤ .tiktok <url>   ║
║ ➤ .video <name>   ║
║ ➤ .ytmp4 <Link>   ║
╚═══════════════════╝

╔═══════════════════╗
💻 *GITHUB COMMANDS* 
╠═══════════════════╣
║ ➤ .git            ║
║ ➤ .github         ║
║ ➤ .sc             ║
║ ➤ .script         ║
║ ➤ .repo           ║
╚═══════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363269950668068@newsletter',
                        newsletterName: '❦ ════ •⊰❂ AI TOOLS HUB  ❂⊱• ════ ❦',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363269950668068@newsletter',
                        newsletterName: '❦ ════ •⊰❂ AI TOOLS HUB  ❂⊱• ════ ❦',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
