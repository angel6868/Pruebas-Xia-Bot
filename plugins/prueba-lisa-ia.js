const wa = require('whatsapp-web.js');
const client = new wa();

// Iniciar sesión en WhatsApp Web
client.on('qr', (qr) => {
  console.log('Escanee este código QR con WhatsApp Web:');
  console.log(qr);
});

client.on('message', (message) => {
  // Respondiendo a los mensajes de WhatsApp con Lisa Chat IA
if (message.body === 'Hola') {
    client.sendMessage(message.from, '¡Hola! ¿Cómo estás?');
  } else if (message.body === '¿Cómo te llamas?') {
    client.sendMessage(message.from, 'Me llamo Lisa Chat IA');
  } else {
    client.sendMessage(message.from, 'Lo siento, no entiendo tu mensaje. Por favor, envía "Hola" para iniciar la conversación.');
  }
});