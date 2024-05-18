import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] Ingresa un texto para buscar, ejemplo: ${usedPrefix + command} @usxr_angelito`;
  const res = await fetch(global.API('instagram-web-api', '/search/usuarios', {
    q: text,
  }));
  const profilePicture = await instagram.users.profilePicture();
  fs.writeFileSync('./profile_picture.jpg', profilePicture.data);


const profile = await instagram.users.profile(); => {
    const message = `Usuario: ${profile.username}\nNombre completo: ${profile.full_name}\nBiografía: ${profile.biography}\nNúmero de seguidores: ${profile.counts.followed_by}\nNúmero de publicaciones: ${profile.counts.media}\nNúmero de usuarios seguidos: ${profile.counts.follows
`.trim()});
};
handler.help = ['cuentas'];
handler.tags = ['buscadores'];
handler.command = /^(infoig|stalkig|aserig)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}