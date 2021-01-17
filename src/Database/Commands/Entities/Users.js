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
        
        const email = await connection("users").where({
            email: `${info.email}`
        }).select("*");

        if(email.length > 0)
            return {
                status: 401,
                msg: "This email is already being used"
            };
        
        
        const cpf = await connection("users").where({
            cpf: `${info.cpf}`
        }).select("*");
    
        if(cpf.length > 0)
            return {
                status: 401,
                msg: "This cpf is already being used"
            };

        await connection("users").insert({
            name: info.name,
            pass: info.password,
            cpf: info.cpf,
            email: info.email,
            cell: info.cell,
            rating: 0,
            courses: [],
            articles: []
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
     * List users in the database 
     */
    // 0 -> WHERE 'NAME'
    // 1 -> WHERE 'RATING'
    // 2 -> WHERE 'COURSES'
    async ListBy(info){
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
    },




    /**
     * Add points to user rating 
     */
    async AddRating(info){
        if(
            info == undefined ||
            info.email == undefined ||
            info.password == undefined ||
            info.addRating == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };

        const results = await connection("users").where({
            email: `${info.email}`,
            pass: `${info.password}`
        }).select("rating");

        if(results.length == 0)
            return {
                status: 404,
                msg: "This user does not exist"
            };
        
        const newRating = Number(results[0].rating) + Number(info.addRating);
        await connection("users").where({
            email: `${info.email}`,
            pass: `${info.password}`
        }).update({
            rating: newRating
        });

        return {
            status: 200,
            msg: "Points added to the user's account"
        };
    },




    /**
     * Sets the course status for the user
     */
    async SetupCourse(info){
        if(
            info == undefined ||
            info.email == undefined ||
            info.password == undefined ||
            info.course == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };

        const results = await connection("users").where({
            email: `${info.email}`,
            pass: `${info.password}`
        }).select("courses");

        if(results.length == 0)
            return {
                status: 404,
                msg: "This user does not exist"
            };
        
        let courses = results[0].courses;
        courses.push(info.course);

        await connection("users").where({
            email: `${info.email}`,
            pass: `${info.password}`
        }).update({
            courses: courses
        });

        return {
            status: 200,
            msg: "Course successfully configured on user account"
        };
    },




    /**
     * Sets the article status for the user
     */
    async SetupArticle(info){
        if(
            info == undefined ||
            info.email == undefined ||
            info.password == undefined ||
            info.article == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };

        const results = await connection("users").where({
            email: `${info.email}`,
            pass: `${info.password}`
        }).select("articles");

        if(results.length == 0)
            return {
                status: 404,
                msg: "This user does not exist"
            };
        
        let articles = results[0].articles;
        articles.push(info.article);

        await connection("users").where({
            email: `${info.email}`,
            pass: `${info.password}`
        }).update({
            articles: articles
        });

        return {
            status: 200,
            msg: "Article successfully configured on user account"
        };
    }
}