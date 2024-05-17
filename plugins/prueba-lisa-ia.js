const wa = require('whatsapp-web.js');
const client = new wa();

// Iniciar sesión en WhatsApp Web
client.on('qr', (qr) => {
  console.log('Escanee este código QR con WhatsApp Web:');
  console.log(qr);
});

client.on('message', async (message) => {
  // Verificar si el mensaje contiene un comando para Lisa Chat IA
const match = message.body.match(/^\.lisa\s+(.*)/);
  if (match) {
    const command = match[1];

    switch (command) {
      case 'hola':
        await client.sendMessage(message.from, '¡Hola! ¿Cómo estás?');
        break;
      case 'adiós':
        await client.sendMessage(message.from, '¡Adiós! Fue agradable conversar contigo.');
        break;
      default:
        await client.sendMessage(message.from, 'Lo siento, no entiendo el comando. Por favor, usa .lisa [comando] para interactuar conmigo.');
    }
  } else {
    await client.sendMessage(message.from, 'Por favor, usa el comando .lisa [mensaje] para interactuar conmigo.');
  }
});