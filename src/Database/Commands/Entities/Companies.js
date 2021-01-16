const connection = require("../../connection");

module.exports = {
    /**
     * Insert company in the database 
     */
    async Insert(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.password == undefined ||
            info.cnpj == undefined ||
            info.plan == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("companies").where({
            cnpj: `${info.cnpj}`
        }).select("*");

        if(results.length > 0)
            return {
                status: 401,
                msg: "This CNPJ is already being used"
            };

        await connection("companies").insert({
            name: info.name,
            pass: info.password,
            cnpj: info.cnpj,
            plan: info.plan
        });

        return {
            status: 200,
            msg: "Company added to the database"
        };
    },




    /**
     * Delete company in the database 
     */
    async Delete(info){
        if(
            info == undefined ||
            info.cnpj == undefined ||
            info.password == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("companies").where({
            cnpj: `${info.cnpj}`,
            pass: `${info.password}`
        }).select("*");
        
        if(results.length == 0)
            return {
                status: 401,
                msg: "Unauthorized deletion"
            };

        await connection("companies").where({
                cnpj: `${info.cnpj}`,
                pass: `${info.password}`
            })
            .delete();
    

        return {
            status: 200,
            msg: "Deleted database company"
        };
    },




    /**
     * List companies in the database 
     */
    async List(){
        const results = await connection("companies").select("*");

        return {results};
    },




    /**
     * Check login 
     */
    async Login(info){
        if(
            info == undefined ||
            info.cnpj == undefined ||
            info.password == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("companies").where({
            cnpj: `${info.cnpj}`,
            pass: `${info.password}`,
        }).select("*");

        if(results.length == 0)
            return {
                status: 401,
                msg: "Error when logging in"
            };

        return {
            status: 200,
            msg: "Login allowed"
        };
    }
}