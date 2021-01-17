const connection = require("../../connection");

module.exports = {
    /**
     * Insert trail in the database 
     */
    async Insert(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.knowledge == undefined ||
            info.coursesOrArticles == undefined ||
            info.points == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("trails").where({
            name: `${info.name}`
        }).select("*");

        if(results.length > 0)
            return {
                status: 401,
                msg: "This name is already being used"
            };

        await connection("trails").insert({
            name: `${info.name}`,
            knowledge: info.knowledge,
            coursesOrArticles: info.coursesOrArticles,
            points: `${info.points}`
        });

        return {
            status: 200,
            msg: "Article added to the database"
        };
    },




    /**
     * Delete trail in the database 
     */
    async Delete(info){
        if(
            info == undefined ||
            info.name == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("trails").where({
            name: `${info.name}`
        }).select("*");

        if(results.length == 0)
            return {
                status: 401,
                msg: "Unauthorized deletion"
            };

        await connection("trails").where({
                name: `${info.name}`
            })
            .delete();
    

        return {
            status: 200,
            msg: "Deleted database trail"
        };
    },




    /**
     * List trails in the database 
     */
    async List(){
        const results = await connection("trails").select("*");

        return {results};
    },




    /**
     * ListBy courses in the database 
     */
    // 0 -> WHERE 'NAME'
    // 1 -> WHERE 'KNOWLEDGE'
    async ListBy(info){
        if(info.id > 1)
            return {};

        const props = [
            {
                id: 0,
                name: "name",
                method: async () => {
                    return await connection("trails").where({name: `${info.search}`}).select("*");
                }        
            },
            {
                id: 1,
                name: "knowledge",
                method: async () => {
                    const trails = await connection("trails").select("*");
                    let selecteds = [];

                    trails.map((trail) => {
                        trail.knowledge.map((know) => {
                            console.log(know);
                            if(know == info.search){
                                selecteds.push(trail);
                                return;
                            }
                        })
                    })
                    
                    return selecteds;
                }        
            }
        ]
        
        const results = await props[info.id].method();

        return {results};
    }
}