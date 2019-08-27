const User = require('../models/User');
const bcrypt = require('bcrypt');

let userController = {};

module.exports = {
    async create(request, response){

        if(request.body.username && request.body.password)
        {
            if(request.body.password2 && (request.body.password == request.body.password2)){
                User.findOne({'isername': request.body.username})
                .then(user =>{
                    if(user){
                         return response.json({sucess: false, message: "username não disponível."});
                    }else
                    {
                        bcrypt.hash(request.body.password,10)
                        .then(hash => {
                            let encryptedPassword = hash;
                            let newUser = new User({
                                name: request.body.name,
                                username: request.body.username,
                                password: encryptedPassword,
                                email: request.body.email,
                                isAdmin: request.body.isAdmin
                            });

                            newUser.save()
                                .then(() => response.json({sucess: true, message: "Usuário criado com sucesso."}))
                                .catch(err => response.json({sucess: false, message: err}));

                        }).catch(err => response.json({sucess: false, message: err}));
                    }
                        
                })
            }else{
                return response.json({sucess: false, message: "Passwords diferentes."});
            }
        }else{
            return response.json({sucess: false, message: "Campos necessários não preenchidos."});
        }
        


    },

    async show(request, response){
        
        const users = await User.find();
        
        return response.json(users);
    },

    async auth(request, response){
        try{
            const user = await User.findOne({username: request.body.username});
            
            if(await bcrypt.compare(request.body.password, user.password))
            {
                return response.json({sucess: true, message: "Usuário logado."});
            }else
            {
                return response.json({sucess: false, message: "Credenciais inválidas."});
            }

        }catch{
            return response.json({sucess: false, message: "Usuário não cadastrado."});
        }
        

    
        
    }

};