import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw m.reply('¿𝘾𝙤𝙢𝙤 𝙥𝙪𝙚𝙙𝙤 𝙖𝙮𝙪𝙙𝙖𝙧𝙡𝙚 𝙝𝙤𝙮? 🔮')
    try {
        conn.reply(m.chat, `¡𝙀𝙨𝙥𝙚𝙧𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧! 𝙀𝙨𝙩𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙤 𝙥𝙪𝙚𝙙𝙚 𝙩𝙖𝙧𝙙𝙖𝙧 𝙝𝙖𝙨𝙩𝙖 𝙫𝙖𝙧𝙞𝙤𝙨 𝙢𝙞𝙣𝙪𝙩𝙤𝙨 🔮`, m);
        let data = await fetch(`https://api.ibeng.tech/api/ai/bingcreate?q=${text}&apikey=uYmf6Sgjxl`);
        let json = await data.json();
        let results = await json.result;
        if (!results || results.length === 0) throw '𝙉𝙤 𝙨𝙚 𝙝𝙖𝙣 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.🔮';
        
        let links = results.map((link, index) => `*(${index + 1}).* [${link}]`).join('\n');
        conn.sendFile(m.chat, results[0], 'bing.png', `𝙇𝙤𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙨𝙤𝙣 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚 𝙪𝙣𝙖 𝙗ú𝙨𝙦𝙪𝙚𝙙𝙖 𝙘𝙤𝙣 𝙡𝙖 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖:\n_${text}_\n\n𝘼 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙘𝙞𝙤𝙣 𝙨𝙚 𝙢𝙪𝙚𝙨𝙩𝙧𝙖𝙣 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙛𝙤𝙩𝙤𝙨 𝙜𝙚𝙣𝙚𝙧𝙖𝙙𝙤𝙨 𝙖 𝙥𝙖𝙧𝙩𝙞𝙧 𝙙𝙚 𝘽𝙞𝙣𝙜 𝘼𝙄:\n${links}\n\n\n𝘾𝙤𝙢𝙤 𝙧𝙚𝙘𝙪𝙥𝙚𝙧𝙖𝙧 𝙢𝙚𝙙𝙞𝙤𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙖𝙧𝙧𝙞𝙗𝙖:\n_.get <link>_\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n_.get ${results.getRandom()}_`, m);
    } catch (err) {
        m.reply('Error: ' + err.reason);
    }
};

handler.command = handler.help = ['bing'];
handler.tags = ['ai'];

export default handler;