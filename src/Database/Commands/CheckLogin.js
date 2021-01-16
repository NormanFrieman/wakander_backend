const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");

module.exports = async (database, info) => {
    console.log(database);
    console.log(info);

    if(database == "users"){
        return await Users.Login(info);
    }else if(database == "companies"){
        return await Companies.Login(info);
    }
}