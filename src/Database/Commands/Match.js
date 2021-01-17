const connection = require("../connection");

module.exports = async (info) => {
    if(
        info == undefined ||
        info.email == undefined ||
        info.vacancy == undefined
    ) return {
        status: 400,
        msg: "There is missing data"
    };
    
    const user = await connection("users").where({
        email: `${info.email}`
    }).select("*");

    if(user.length == 0)
        return {
            status: 404,
            msg: "This email is not associated with any account"
        };

    
    const vacancy = await connection("jobVacancies").where({
        name: `${info.vacancy}`
    });

    if(vacancy.length == 0)
        return {
            status: 404,
            msg: "This vacancy does not exist"
        };


    let match = 0;
    let total = 0;
    
    const requiredTrails = vacancy[0].knowledge;

    requiredTrails.map((requiredTrail) => {
        user[0].trails.map((trail) => {
            if(requiredTrail == trail.name){
                match++;
            }
        })
        total++;
    })
    
    return {
        status: 200,
        msg: `${(match/total)*100}%`
    };
}