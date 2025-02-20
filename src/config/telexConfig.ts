import dotenv from 'dotenv';
dotenv.config();

export const config = {
  telexWebhookUrl: process.env.TELEX_WEBHOOK_URL || 'https://ping.telex.im/v1/webhooks/01952392-06d8-7996-9037-4270155f88f6',
  responseTimeThreshold: process.env.RESPONSE_TIME_THRESHOLD 
    ? parseInt(process.env.RESPONSE_TIME_THRESHOLD, 10) 
    : 500,
  port: process.env.PORT || 4000
};