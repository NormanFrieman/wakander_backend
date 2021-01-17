const connection = require("../../connection");

module.exports = {
    /**
     * Insert vacancy in the database 
     */
    async Insert(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.company == undefined ||
            info.knowledge == undefined ||
            info.city == undefined ||
            info.state == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("jobVacancies").where({
            name: `${info.name}`,
            company: `${info.company}`,
        }).select("*");

        if(results.length > 0)
            return {
                status: 401,
                msg: "This name and company is already being used"
            };
        
        const checkCompany = await connection("companies").where({
            name: `${info.company}`
        })

        if(checkCompany.length == 0)
            return {
                status: 400,
                msg: "This company is not registered in the system"
            }

        await connection("jobVacancies").insert({
            name: `${info.name}`,
            company: `${info.company}`,
            knowledge: info.knowledge,
            city: `${info.city}`,
            state: `${info.state}`
        });

        return {
            status: 200,
            msg: "Vacancy added to the database"
        };
    },




    /**
     * Delete vacancy in the database 
     */
    async Delete(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.company == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("jobVacancies").where({
            name: `${info.name}`,
            company: `${info.company}`
        }).select("*");

        if(results.length == 0)
            return {
                status: 401,
                msg: "Unauthorized deletion"
            };

        await connection("jobVacancies").where({
                name: `${info.name}`,
                company: `${info.company}`
            })
            .delete();
    

        return {
            status: 200,
            msg: "Deleted database vancancy"
        };
    },




    /**
     * List vacancies in the database 
     */
    async List(){
        const results = await connection("jobVacancies").select("*");

        return {results};
    },




    /**
     * List vacancies in the database 
     */
    async ListBy(info){
        const results = await connection("jobVacancies").select("*");

        return {results};
    }
}