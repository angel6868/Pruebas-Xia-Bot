const Instagram = require('instagram-web-api');
const wa = require('whatsapp-web.js');
const fs = require('fs');

async function getProfileInfo(username) {
  const instagram = new Instagram({ username });

  // Obtener información del perfil
const profile = await instagram.users.profile();

  // Descargar la foto de perfil
const profilePicture = await instagram.users.profilePicture();
  fs.writeFileSync('./profile_picture.jpg', profilePicture.data);

  const message = `Usuario: ${profile.username}\nNombre completo: ${profile.full_name}\nBiografía: ${profile.biography}\nNúmero de seguidores: ${profile.counts.followed_by}\nNúmero de publicaciones: ${profile.counts.media}\nNúmero de usuarios seguidos: ${profile.counts.follows}`;

  // Iniciar sesión en WhatsApp Web
const client = new wa();
  client.on('qr', (qr) => {
    console.log('Escanee este código QR con WhatsApp Web:');
    console.log(qr);
  });

  client.on('ready', async () => {
    await client.sendMessage('<PHONE_NUMBER>', message, ['./profile_picture.jpg']);
  });
}

getProfileInfo('<USERNAME>');