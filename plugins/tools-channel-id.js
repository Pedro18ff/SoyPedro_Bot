import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { text, conn }) => {
  if (!text) return m.reply('📎 Por favor proporciona el enlace.')
  if (!text.includes('https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqbXRWY3p5bWdyX0FILTJwUkdSaDM2MG4zUmRhd3xBQ3Jtc0ttd3NxVl9CYmtDTnk0RHhmS3Z4WjRuZmhnR25kbDJmbVF6YnJCU2pnM19tZ0hRRHhjLW1hYm5oOHh1ckE4YXlzZElxVVRPWlo0a1dQSktmRm0wMnZtYURUaXEzYTliN1ZLbWowWXBRS2lZdmo0WlFuVQ&q=https%3A%2F%2Fwww.tiktok.com%2F%40pedro17_ff%3F_t%3DZS-8y6jlEaF3iP%26_r%3D1/')) return m.reply('❗ Enlace no válido.')

  let result = text.split('https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqbXRWY3p5bWdyX0FILTJwUkdSaDM2MG4zUmRhd3xBQ3Jtc0ttd3NxVl9CYmtDTnk0RHhmS3Z4WjRuZmhnR25kbDJmbVF6YnJCU2pnM19tZ0hRRHhjLW1hYm5oOHh1ckE4YXlzZElxVVRPWlo0a1dQSktmRm0wMnZtYURUaXEzYTliN1ZLbWowWXBRS2lZdmo0WlFuVQ&q=https%3A%2F%2Fwww.tiktok.com%2F%40pedro17_ff%3F_t%3DZS-8y6jlEaF3iP%26_r%3D1')[1]
  let res = await conn.newsletterMetadata('invite', result)

  let teks = `🆔 *ID:* ${res.id}\n📛 *Nombre:* ${res.name}\n👥 *Suscriptores:* ${res.subscribers}\n📶 *Estado:* ${res.state}\n✅ *Verificado:* ${res.verification === 'VERIFIED' ? 'Sí' : 'No'}`

  await m.reply(teks)
}

handler.help = handler.command = ['channel-id']
handler.tags = ['tools']

export default handler