const connection = require("../../connection");

module.exports = {
    /**
     * Insert user in the database 
     */
    async Insert(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.password == undefined ||
            info.cpf == undefined ||
            info.email == undefined ||
            info.cell == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("users").where({
            cpf: `${info.cpf}`,
            email: `${info.email}`,
        }).select("*");

        if(results.length > 0)
            return {
                status: 401,
                msg: "This email or cpf is already being used"
            };

        await connection("users").insert({
            name: info.name,
            pass: info.password,
            cpf: info.cpf,
            email: info.email,
            cell: info.cell,
            rating: 0,
            courses: []
        });

        return {
            status: 200,
            msg: "User added to the database"
        };
    },




    /**
     * Delete user in the database 
     */
    async Delete(info){
        if(
            info == undefined ||
            info.email == undefined ||
            info.cpf == undefined ||
            info.password == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("users").where({
            email: `${info.email}`,
            cpf: `${info.cpf}`,
            pass: `${info.password}`
        }).select("*");

        if(results.length == 0)
            return {
                status: 401,
                msg: "Unauthorized deletion"
            };

        await connection("users").where({
                email: `${info.email}`,
                cpf: `${info.cpf}`,
                pass: `${info.password}`
            })
            .delete();
    

        return {
            status: 200,
            msg: "Deleted database user"
        };
    },




    /**
     * List users in the database 
     */
    async List(){
        const results = await connection("users").select("*");

        return {results};
    },




    /**
     * Check login 
     */
    async Login(info){
        if(
            info == undefined ||
            info.email == undefined ||
            info.password == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("users").where({
            email: `${info.email}`,
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