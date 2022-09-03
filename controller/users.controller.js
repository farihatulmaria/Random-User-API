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
    let userFound = users.find(user=> user.id == Number(id));
    const userIndex = users.indexOf(userFound);
    const data = req.body;
    const updatedUser = {...userFound,...data};
    if (userIndex > -1) {
        users[userIndex] = updatedUser;
    }
    res.send(users);
}

module.exports.deleteAUser = async (req,res) =>{
    const id = req.params.id;
    const deletedUser = users.find(user=> user.id == Number(id));
    const userIndex = users.indexOf(deletedUser) 
    if (userIndex > -1) { 
        users.splice(userIndex, 1); 
    }
    res.send(users);
}
