require('dotenv').config();
module.exports = {
    webpack5: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
                // for webpack 5 use
                // { and: [/\.(js|ts)x?$/] }
            },
            use: ['@svgr/webpack'],
        });
        return config;
    },
    env: {
        apiKey: process.env.api_Key,
        authDomain: process.env.auth_Domain,
        projectId: process.env.project_Id,
        storageBucket: process.env.storage_Bucket,
        messagingSenderId: process.env.messaging_SenderId,
        appId: process.env.app_Id
    }
};
