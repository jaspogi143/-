const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "owner",
		author: "Tokodori",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: '𝗜𝗩𝗬 𝗟𝗔𝗨𝗥𝗘𝗡𝗧',
				boyfriend: '𝗝𝗔𝗦𝗥𝗘𝗟 𝗜𝗗𝗞',
				gender: '𝗙𝗲𝗺𝗮𝗹𝗲',
				hobby: '𝗪𝗮𝘁𝗰𝗵𝗶𝗻𝗴 𝗮𝗻𝗶𝗺𝗲',
				Fb: 'https://facebook.com/swordigo.swordslush',
				Relationship: '𝗘𝗻𝗴𝗮𝗴𝗲𝗱',
				bio: '𝗟𝗼𝘃𝗲 𝗱𝗲𝗲𝗽𝗹𝘆, 𝗰𝗼𝗺𝗺𝘂𝗻𝗶𝗰𝗮𝘁𝗲 𝗼𝗽𝗲𝗻𝗹𝘆, 𝗮𝗻𝗱 𝗰𝗵𝗲𝗿𝗶𝘀𝗵 𝗲𝗮𝗰𝗵 𝗺𝗼𝗺𝗲𝗻𝘁 𝘁𝗼𝗴𝗲𝘁𝗵𝗲𝗿.'
			};

			const bold = 'https://i.imgur.com/VdsGj7H.mp4';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

			fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

			const response = `
◈ 𝖮𝖶𝖭𝖤𝖱 𝖨𝖭𝖥𝖮𝖱𝖬𝖠𝖳𝖨𝖮𝖭:\n
Name: ${ownerInfo.name}
Boyfriend: ${ownerInfo.boyfriend}
Gender: ${ownerInfo.gender}
Relationship: ${ownerInfo.Relationship}
Hobby: ${ownerInfo.hobby}
Fb: ${ownerInfo.Fb}
Bio: ${ownerInfo.bio}
			`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(videoPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(videoPath);

			api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
