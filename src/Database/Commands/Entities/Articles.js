const connection = require("../../connection");

module.exports = {
    /**
     * Insert article in the database 
     */
    async Insert(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.imageUrl == undefined ||
            info.knowledge == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("articles").where({
            name: `${info.name}`
        }).select("*");

        if(results.length > 0)
            return {
                status: 401,
                msg: "This name is already being used"
            };

        await connection("articles").insert({
            name: `${info.name}`,
            imageUrl: `${info.imageUrl}`,
            knowledge: info.knowledge
        });

        return {
            status: 200,
            msg: "Article added to the database"
        };
    },




    /**
     * Delete article in the database 
     */
    async Delete(info){
        if(
            info == undefined ||
            info.name == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("articles").where({
            name: `${info.name}`
        }).select("*");

        if(results.length == 0)
            return {
                status: 401,
                msg: "Unauthorized deletion"
            };

        await connection("articles").where({
                name: `${info.name}`
            })
            .delete();
    

        return {
            status: 200,
            msg: "Deleted database article"
        };
    },




    /**
     * List articles in the database 
     */
    async List(){
        const results = await connection("articles").select("*");

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
                    return await connection("articles").where({name: `${info.search}`}).select("*");
                }        
            },
            {
                id: 1,
                name: "knowledge",
                method: async () => {
                    const articles = await connection("articles").select("*");
                    let selecteds = [];
                    
                    console.log(articles);

                    articles.map((article) => {
                        article.knowledge.map((know) => {
                            console.log(know);
                            if(know == info.search){
                                selecteds.push(article);
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