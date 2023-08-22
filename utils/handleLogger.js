const { IncomingWebhook } = require('@slack/webhook');
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK || ***;
const webHook = new IncomingWebhook(SLACK_WEBHOOK_URL);

const loggerStream = {
    write: message => {
        webHook.send({
            text: message
        })
        console.log('Capturando el LOG', message); // eslint-disable-line no-console
    },
};

module.exports = loggerStream