//--> Hecho por Pedro17_ff (https://www.tiktok.com/@pedro17_ff?is_from_webapp=1&sender_device=pc)
// •|• No quites créditos..
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`*Uso correcto:* ${usedPrefix + command} Tu texto`);

    try {
        let url = `https://api.nekorinn.my.id/tools/openai-tts?text=${encodeURIComponent(text)}&voice=nova`;
        let res = await fetch(url);

        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        let audioBuffer = await res.arrayBuffer();

        await conn.sendMessage(m.chat, {
            audio: Buffer.from(audioBuffer),
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: m });
    } catch (e) {
        m.reply(`❌ *Error al generar audio:* ${e.message}`);
    }
};

handler.help = ['tts <texto>'];
handler.tags = ['tools'];
handler.command = /^tts$/i;

export default handler;