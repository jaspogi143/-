const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');


module.exports = {
  config: {
    name: "jasrel",
    aliases: ["joseph", "seph", "jas"],
    shortDescription: "Interact with Joseph, a character with a strong and assertive persona",
  },
  async onStart({ message, args }) {
    const query = args.join(" ");
    if (!query) {
      return message.reply("What do you want bitch??!");
    }
    try {
      const AkhiroAIs = await axios.get(`https://akhiroai.onrender.com/api?model=jasrel1&q=${encodeURIComponent(query)}`);
      const response = AkhiroAIs.data.message;
      message.reply(response);
    } catch (error) {
      console.log(error);
      await message.reply(`ERROR: ${error.message}`);
    }
  }
}

const wrapper = new GoatWrapper(module.exports);

wrapper.applyNoPrefix({ allowPrefix: true });
