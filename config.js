import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51994884471', 'TuNombre', true]
]

global.mods = []
global.prems = []

global.namebot = 'SoyPedro-Bot 🧃'
global.packname = 'SoyPedro 🥞'
global.author = 'Pedro | © 2025 🪸'
global.moneda = 'Soles'



global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.yukiJadiBots = false

global.namecanal = '❇️SoyPedro-Bot🧃'
global.idcanal = '120363403739366547@newsletter'
global.idcanal2 = '120363403739366547@newsletter'
global.canal = 'https://chat.whatsapp.com/Jbi0UN57afA7rN8RyvqwDX'
global.canalreg = '120363402895449162@newsletter'

global.ch = {
  ch1: '120363420941524030@newsletter'
}

global.multiplier = 69
global.maxwarn = 2

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("🔄 Se actualizó 'config.js'"))
  import(`file://${file}?update=${Date.now()}`)
})