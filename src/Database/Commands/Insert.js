const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");
const Vacancies = require("./Entities/Vacancies");
const Courses = require("./Entities/Courses");

module.exports = async (database, info) => {
    console.log(database);
    console.log(info);

    if(database == "users"){
        return await Users.Insert(info);
    }else if(database == "companies"){
        return await Companies.Insert(info);
    }else if(database == "vacancies"){
        return await Vacancies.Insert(info);
    }else if(database == "courses"){
        return await Courses.Insert(info);
    }
}