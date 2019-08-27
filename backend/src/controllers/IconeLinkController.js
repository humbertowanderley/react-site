const IconeLink= require('../models/IconeLink');

module.exports = {
    async create(request, response){
        
        const {link_name, link_upload, link_download, link_status, link_speed, link_group, link_graphs, link_coordinates, 
        clientA_name, clientA_initials, clientA_ip, clientA_interface, clientA_status,clientA_graphs, clientA_coordinates,
        clientB_name, clientB_initials, clientB_ip, clientB_interface, clientB_status,clientB_graphs, clientB_coordinates} = request.body;
        
        const linkExists = await IconeLink.findOne({link_name: link_name});

        if(linkExists){
            return response.json(linkExists);
        }

        const link = await IconeLink.create({
            link_name, link_upload, link_download, link_status, link_speed, link_group, link_graphs, link_coordinates,
            clientA_name, clientA_initials, clientA_ip, clientA_interface, clientA_status,clientA_graphs, clientA_coordinates,
            clientB_name, clientB_initials, clientB_ip, clientB_interface, clientB_status,clientB_graphs, clientB_coordinates            
        });
        return response.json(link);
    },

    async show(request, response){
        
        const links = await IconeLink.find();
        
        return response.json(links);
    }
};