const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");
const Vacancies = require("./Entities/Vacancies");
const Courses = require("./Entities/Courses");
const Articles = require("./Entities/Articles");
const Trails = require("./Entities/Trails");

module.exports = async (database) => {
    if(database == "users"){
        return await Users.List();
    }else if(database == "companies"){
        return await Companies.List();
    }else if(database == "vacancies"){
        return await Vacancies.List();
    }else if(database == "courses"){
        return await Courses.List();
    }else if(database == "articles"){
        return await Articles.List();
    }else if(database == "trails"){
        return await Trails.List();
    }
}