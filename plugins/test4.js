// >>⟩ Creador original SoyPedro < GitHub.com/Pedro18ff >
// >>⟩ No quites los créditos

import fs from 'fs'

const handler = async (m, { conn }) => {
  try {
    await m.react('🕓')

    const docTypes = [
      'pdf',
      'zip',
      'vnd.openxmlformats-officedocument.presentationml.presentation',
      'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
    const document = docTypes[Math.floor(Math.random() * docTypes.length)]

    const text = `*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻-𝚃𝙴𝚁𝙼𝚄𝚇*
> https://youtu.be

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> Comandos:
- cd && termux-setup-storage
- apt-get update -y && apt-get upgrade -y
- pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
- git clone https://github.com/
- yarn
- npm install
- npm update
- npm start

------------------------------------

—◉ ✔️ ACTIVAR EN CASO DE DETENERSE EN TERMUX ✔️
> cd 
> npm start

------------------------------------

—◉ 👽 OBTENER OTRO CODIGO QR EN TERMUX 👽
> cd 
> rm -rf sesion
> npm start`.trim()

    const namebot = 'Bot Oficial ✅'

    const buttonMessage = {
      document: Buffer.from("PedroBot Tutorial"), // 👈 falso archivo
      mimetype: `application/${document}`,
      fileName: `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
      fileLength: 99999999999999,
      pageCount: 200,
      contextInfo: {
        forwardingScore: 200,
        isForwarded: true,
        externalAdReply: {
          mediaUrl: 'https://youtube.com/shorts/UFg2civm7eE?si=WY5hQJdAO5mUEsJz',
          mediaType: 2,
          previewType: 'pdf',
          title: 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
          body: namebot,
          thumbnail: fs.readFileSync('./storage/img/menu.jpg'), // 👈 preview como JPG
          sourceUrl: 'https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqbXRWY3p5bWdyX0FILTJwUkdSaDM2MG4zUmRhd3xBQ3Jtc0ttd3NxVl9CYmtDTnk0RHhmS3Z4WjRuZmhnR25kbDJmbVF6YnJCU2pnM19tZ0hRRHhjLW1hYm5oOHh1ckE4YXlzZElxVVRPWlo0a1dQSktmRm0wMnZtYURUaXEzYTliN1ZLbWowWXBRS2lZdmo0WlFuVQ&q=https%3A%2F%2Fwww.tiktok.com%2F%40pedro17_ff%3F_t%3DZS-8y6jlEaF3iP%26_r%3D1'
        }
      },
      caption: text,
      footer: namebot,
      headerType: 6
    }

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
    await m.react('✅')

  } catch (e) {
    await m.react('❌')
    await conn.reply(m.chat, `⚠️ Error al ejecutar el comando:\n\n${e.message}`, m)
  }
}

handler.command = ['instalarbot']
handler.help = ['instalarbot']
handler.tags = ['info']
export default handler