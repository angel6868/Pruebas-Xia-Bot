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
`.trim()}));
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});  
};
handler.help = ['cuentas'];
handler.tags = ['buscadores'];
handler.command = /^(infoig|stalkig|aserig)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}