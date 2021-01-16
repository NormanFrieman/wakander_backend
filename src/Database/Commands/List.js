const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");
const Vacancies = require("./Entities/Vacancies");
const Courses = require("./Entities/Courses");

module.exports = async (database) => {
    console.log(database);

    if(database == "users"){
        return await Users.List();
    }else if(database == "companies"){
        return await Companies.List();
    }else if(database == "vacancies"){
        return await Vacancies.List();
    }else if(database == "courses"){
        return await Courses.List();
    }
}