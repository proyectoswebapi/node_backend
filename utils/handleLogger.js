const { IncomingWebhook } = require('@slack/webhook');
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK || 'https://hooks.slack.com/services/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';
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