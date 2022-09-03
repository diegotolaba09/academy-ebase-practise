const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');
const { updateClientDomain } = require('../domain/updateClient');

exports.handler = async (command, context) => {
    return commandMapper({ command, context }, inputMode, updateClientDomain, outputMode);
};