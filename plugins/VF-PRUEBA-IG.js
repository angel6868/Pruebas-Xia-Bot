import translate from '@vitalets/google-translate-api';
import {Anime} from 'instagram-web-api';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL NOMBRE DE ALGUN ANIME A BUSCAR*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const message = `Usuario: ${profile.username}\nNombre completo: ${profile.full_name}\nBiografía: ${profile.biography}\nNúmero de seguidores: ${profile.counts.followed_by}\nNúmero de publicaciones: ${profile.counts.media}\nNúmero de usuarios seguidos: ${profile.counts.follows}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] ERROR, INTENTELO DE NUEVO*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;