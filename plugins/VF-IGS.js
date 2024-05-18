const Instagram = require('instagram-web-api');
const fs = require('fs');

async function getProfileInfo(username) {
  const instagram = new Instagram({ username });

  // Obtener información del perfil
const profile = await instagram.users.profile();

  // Descargar la foto de perfil
const profilePicture = await instagram.users.profilePicture();
  fs.writeFileSync('./profile_picture.jpg', profilePicture.data);

  console.log('Usuario:', profile.username);
  console.log('Nombre completo:', profile.full_name);
  console.log('Biografía:', profile.biography);
  console.log('Número de seguidores:', profile.counts.followed_by);
  console.log('Número de publicaciones:', profile.counts.media);
  console.log('Número de usuarios seguidos:', profile.counts.follows);
}

getProfileInfo('<USERNAME>');
