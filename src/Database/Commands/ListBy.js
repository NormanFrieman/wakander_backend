const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");
const Vacancies = require("./Entities/Vacancies");
const Courses = require("./Entities/Courses");
const Articles = require("./Entities/Articles");

module.exports = async (database, info) => {
    if(database == "users"){
        return await Users.ListBy(info);
    }else if(database == "companies"){
        return await Companies.ListBy(info);
    }else if(database == "vacancies"){
        return await Vacancies.ListBy(info);
    }else if(database == "courses"){
        return await Courses.ListBy(info);
    }else if(database == "articles"){
        return await Articles.ListBy(info);
    }
}