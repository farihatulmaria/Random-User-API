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

module.exports.updateTwoUser = async (req,res) =>{
    // all I got from the requset
    const info = req.body;
    const userId1 = req.query.userId;
    const userId2 = req.query.userId2;
    
    // finding the user and it's index number
    const user1 = users.find(user=> user.id == userId1); 
    const user1Index = users.indexOf(user1);
    
    const user2 = users.find(user=> user.id == userId2);
    const user2Index = users.indexOf(user2);
    
    // updating the users with the info
    const updatedUser1 = {...user1,...info}; 
    const updatedUser2 = {...user2,...info};
    
    // condition to update user to the db
    if(user1Index > -1 && user2Index > -1){
        users[user1Index] = updatedUser1;
        users[user2Index] = updatedUser2;
    }else if(user1Index > -1){
        users[user1Index] = updatedUser1;
    }
    else if(user2Index > -1){
        users[user2Index] = updatedUser2;
    }
    else{
        console.log('something went wrong');
    }

    //returing the main DB 
    res.send(users)
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
