const fetch = require('node-fetch');

async function dareCommand(sock, chatId, message) {
    try {
        const res = await fetch('https://apis.davidcyriltech.my.id/dare');
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        
        // Validate API response structure
        if (!json.success || !json.question) {
            throw new Error('Invalid API response format');
        }

        const dareMessage = json.question;

        // Send the dare message
        await sock.sendMessage(chatId, { text: dareMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in dare command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Failed to get dare. Please try again later!' 
        }, { quoted: message });
    }
}

module.exports = { dareCommand };
