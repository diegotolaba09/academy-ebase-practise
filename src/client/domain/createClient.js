const uuid = require('uuid');
const { validationData } = require('../helper/utils');
const { createClientInputSchema } = require('../schema/input/createClientValidation');
const createService = require('../service/saveClientCreated');

const createClientDomain = async (commandPayload, commandMeta) => {
    try {
        validationData(commandPayload)
        const client = new createClientInputSchema(commandPayload, commandMeta).get();
        await createService(client);
        return { status: 200, body: client };
    } catch (error) {
        console.log(error);
    }
};

module.exports = createClientDomain;