module.exports = {
config: {
name: "autoreact",
version: "1.0.1",
author: "Kaizenji",
countDown: 0,
role: 0,
shortDescription: "autoreact",
longDescription: "autoreact base on keywords",
category: "system",
guide: "{p}",
},

onChat: async function({ api, event }) {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
    "😆": ["haha", "lol", "funny", "nah", "i'd", "win", "hahah", "hahaha", "masaya", "tawo", "happy", "tomboy", "natomba", "natumba", "tomomba", "tumumba", "tomumba", "side eye", "awooop jumpscare", "naol", "sana all", "bakla", "bading", "bayot","biot", "gay","akla", "nalo", "nalu", "nigga", "niga", "nega", "puta", "pota", "tangina", "tae", "taenamo", "inamo", "namo", "puking", "wutdahel", "blud","wala", "hinde", "ngayon", "bukas", "pangit", "umay", "omay", "panget","ogag", "bulok", "bolok", "bobo", "bubu", "bogo", "bugo", "tanga", "amp", "tungek", "tangek","obob", "boang", "buang", "sira","ulo", "ulol", "tite", "bayag", "burat", "bilat", "borat", "bhielat", "😆", "😁", "😅", "😄" ,"🤣", "🖕", "😂", "pak", "pakyo", "shit", "bato", "batu", "unggoy", "suntukan", "lou", "Lou", "hindot", "sinto","kupal", "kopal","omsim", "mismo", "omsem", "nanento", "gago", "gagu", "gagi", "otenan", "putanginamo", "pwet", "pw3t", "fuck", "bisaya", "bisakol", "bastos", "bastus", "hayop", "hayup", "hayp", "lmao", "lamaw", "xd", "bayut", "poor", "hampas", "mahirap", "mahina", "tulog", "tolog", "negro", "kingina", "indiano", "beki", "shokoy", "lods", "uwu", "nyoging", "omai", "bantot", "baho", "piste", "peste", "bulbol", "tubol", "pastilan", "giatay", "unsa", "jakul", "jakol", "abdul", "salsal", "cp", "lubot", "gisalpak", "oten", "imong", "kasi", "oo", "char", "chariz", "joke"],

"😢": ["cry", "sad", "crying", "lungkot", "huhu", "iyak", "hays", "🥲", "😓", "😭", "eyak", "sakit", "peyn", "pain", "pighati", "dalamhati", "condolence", "paalam", "gwenchana", "saktan", "minsan", "mamatay", "depress", "kalungkutan", "🙃", "😔", "😢", "🥹", "☹"], 

 "❤": ["hi", "hey", "hello", "yo", "sup", "zup", "halo", "henlo", "love", "mahal", "salamat", "thank", "ty", "tnx", "thx", "thnx", "yup", "crush", "sarap", "ugh", "pogi", "iyot", "kantot", "kiss", "ganda", "babe", "baby", "darling", "labyu", "eve", "morning", "good", "aft", "❤", "🥰", "😘", "😍", "🤩", "gm", "gn", "mwa", "mwua", "mwhehe", "nice", "mahusay", "galing", "miss", "bot", "jaycee", "kaizen", "pusa"],

      "🎮": ["laro", "laru", "game", "mc", "minecraft", "ml", "mlbb", "mobile legends", "mobile legends bang bang", "cod", "call of duty", "play", "1v1", "farlight", "f84", "coc", "basketball"],

      "😮": ["wow", "waw", "shish", "sheesh", "angas", "lakas", "lopit", "mamaw", "pro", "god", "mod apk", "hakir", "haker", "hacker", "way", "omahghadd", "omg", "bro", "💀", "😮", "🥶", "😱", "😲", "⁉", "‼", "🔥", "main karaktir", "karaktir"],
   
  "🎉": ["congratulations","congrats"," welcome","happy birthday"],

"🔥": ["apoy", "lakas", "astig", "damn", "angas", "galing", "husay"],
};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);

}
}
},

onStart: async function({ api, event }) {

  api.sendMessage("Autoreact in chat messages base on keywords in commands.", event.threadID, event.messageID);
}
};
