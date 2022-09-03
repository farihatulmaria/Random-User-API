const users = require('../users');

module.exports.getAllUsers = async (req,res)=>{
    const {limit} = req.query;
    const allUsers = users.slice(0,limit); // add a limit to show the users list 
    res.json(allUsers);
}

module.exports.getARandomUser =  async (req,res)=>{
    const randomNumber = Math.floor(Math.random() * users.length) + 1 ;
    const randomUser = users.find(user=> user.id === randomNumber);
    res.send(randomUser);
}

module.exports.saveAUser = async (req,res)=>{
    const {gender,name,contact,address,photoUrl} = req.body;
    const id = users.length + 1;
    const newUsers = {
        "id": id,
        "gender":gender,
        "name": name,
        "contact": contact,
        "address": address,
        "photoUrl": photoUrl
    }
    users.push(newUsers)
   
   res.send(users);
}

module.exports.updateAUser = async (req,res)=>{
    const id = req.params.id;
    let userFounded = users.find(user=> user.id == Number(id))
    res.send('saved')
}

module.exports.deleteAUser = async (req,res) =>{
    const id = req.params.id;
    const deletedUser = users.find(user=> user.id == Number(id));
    
    res.send(deletedUser)
}
