const { users } = require("../users");

module.exports.getAllUsers = async (req,res)=>{
    const {limit} = req.query;
    const allUsers = users.slice(0,limit); // add a limit to show the users list 
    res.json(allUsers);
}

module.exports.getARandomUser=  async (req,res)=>{
    const randomNumber = Math.floor(Math.random() * users.length) + 1 ;
    const randomUser = users.find(user=> user.id === randomNumber);
    res.send(randomUser);
}