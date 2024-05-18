import translate from '@vitalets/google-translate-api';
import {instagram} from 'instagram-web-api';
const client = new Instagram();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL NOMBRE DE ALGUN USUARIO PARA BUSCARLO*`);
  try {

  // Obtener información del perfil
const profile = await instagram.users.profile();

  // Descargar la foto de perfil
const profilePicture = await instagram.users.profilePicture();
  fs.writeFileSync('./profile_picture.jpg', profilePicture.data);

    const message = `Usuario: ${profile.username}\nNombre completo: ${profile.full_name}\nBiografía: ${profile.biography}\nNúmero de seguidores: ${profile.counts.followed_by}\nNúmero de publicaciones: ${profile.counts.media}\nNúmero de usuarios seguidos: ${profile.counts.follows}`;
getProfileInfo('<USERNAME>');
};
handler.command = /^(stalkig|infoig)$/i;
export default handler;