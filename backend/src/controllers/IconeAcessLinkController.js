const IconeAcessLink = require('../models/IconeAcessLink');

module.exports = {
    async create(request, response) {

        const { link_name, link_upload, link_download, link_status, link_speed, link_group, link_graphs, link_coordinates} = request.body;

        const linkExists = await IconeAcessLink.findOne({ link_name: link_name });

        if (linkExists) {
            return response.json(linkExists);
        }

        const acess_link = await IconeAcessLink.create({
            link_name, link_upload, link_download, link_status, link_speed, link_group, link_graphs, link_coordinates
        });
        return response.json(acess_link);
    },

    async show(request, response) {

        const acess_links = await IconeAcessLink.find();

        return response.json(acess_links);
    },

    async update(request, response) {


        // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
        // Find the existing resource by ID
            
            const newAcessLink = await IconeAcessLink.findOneAndUpdate (
                
                request.body.key, request.body.fields,{new:true}, (err, newAcessLink) =>{if (err) return response.json({message: "Erro!"});;
                    return newAcessLink;});
            return response.json(newAcessLink);
        
    
        


    }

};