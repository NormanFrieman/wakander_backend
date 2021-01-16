const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");
const Vacancies = require("./Entities/Vacancies");
const Courses = require("./Entities/Courses");

module.exports = async (database, info) => {
    console.log(database);
    console.log(info);

    if(database == "users"){
        return await Users.Delete(info);
    }else if(database == "companies"){
        return await Companies.Delete(info);
    }else if(database == "vacancies"){
        return await Vacancies.Delete(info);
    }else if(database == "courses"){
        return await Courses.Delete(info);
    }
}