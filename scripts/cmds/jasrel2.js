const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');


module.exports = {
  config: {
    name: "jasrel2",
    aliases: ["joseph2", "seph2", "jas2"],
    shortDescription: "Interact with Joseph, a character with a kind-hearted persona.",
  },
  async onStart({ message, args }) {
    const query = args.join(" ");
    if (!query) {
      return message.reply("What can I do for you my friend?");
    }
    try {
      const AkhiroAIs = await axios.get(`https://akhiroai.onrender.com/api?model=jasrel2&q=${encodeURIComponent(query)}`);
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
