const Users = require("./Entities/Users");
const Companies = require("./Entities/Companies");
const Vacancies = require("./Entities/Vacancies");
const Courses = require("./Entities/Courses");
const Articles = require("./Entities/Articles");
const Trails = require("./Entities/Trails");

module.exports = async (database, info) => {
    if(database == "users"){
        return await Users.Insert(info);
    }else if(database == "companies"){
        return await Companies.Insert(info);
    }else if(database == "vacancies"){
        return await Vacancies.Insert(info);
    }else if(database == "courses"){
        return await Courses.Insert(info);
    }else if(database == "articles"){
        return await Articles.Insert(info);
    }else if(database == "trails"){
        return await Trails.Insert(info);
    }
}