const IconeLink = require('../models/IconeLink');

module.exports = {

    async show(request, response)
    {
        //2 == numero de aneis, desconsiderar o PoP-PE
        const clientsA_up = await IconeLink.countDocuments({clientA_status: "up"}) -2;
        const clientsA_down = await IconeLink.countDocuments({clientA_status: "down"});

        return response.json({clients_up: clientsA_up, clients_down: clientsA_down});

       




    }

};