require('dotenv').config();
module.exports = {
    webpack5: true,
    and: [/\.(js|ts)x?$/],
    env: {
        REACT_APP_MY_KEY: process.env.REACT_APP_MY_KEY,
        REACT_APP_MY_AUTH_DOMAIN: process.env.REACT_APP_MY_AUTH_DOMAIN,
        REACT_APP_MY_PROJECT_ID: process.env.REACT_APP_MY_PROJECT_ID,
        REACT_APP_MY_STORAGE_BUCKET: process.env.REACT_APP_MY_STORAGE_BUCKET,
        REACT_APP_MY_MESSAGING_SENDERID: process.env.REACT_APP_MY_MESSAGING_SENDERID,
        REACT_APP_MY_APP_ID: process.env.REACT_APP_MY_APP_ID,
        REACT_APP_FOOD_KEY_ID: process.env.REACT_APP_FOOD_KEY_ID,
        REACT_APP_FOOD_KEY: process.env.REACT_APP_FOOD_KEY
    },
    // images: {
    //     domains: [
    //     ],
    // },
};
