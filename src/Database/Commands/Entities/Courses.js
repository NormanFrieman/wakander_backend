const { crossJoin } = require("../../connection");
const connection = require("../../connection");

module.exports = {
    /**
     * Insert course in the database 
     */
    async Insert(info){
        if(
            info == undefined ||
            info.name == undefined ||
            info.knowledge == undefined ||
            info.duration == undefined ||
            info.points == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("courses").where({
            name: `${info.name}`
        }).select("*");

        if(results.length > 0)
            return {
                status: 401,
                msg: "This name is already being used"
            };

        await connection("courses").insert({
            name: `${info.name}`,
            knowledge: info.knowledge,
            duration: `${info.duration}`,
            points: info.points
        });

        return {
            status: 200,
            msg: "Course added to the database"
        };
    },




    /**
     * Delete course in the database 
     */
    async Delete(info){
        if(
            info == undefined ||
            info.name == undefined
        ) return {
            status: 400,
            msg: "There is missing data"
        };
        
        const results = await connection("courses").where({
            name: `${info.name}`
        }).select("*");

        if(results.length == 0)
            return {
                status: 401,
                msg: "Unauthorized deletion"
            };

        await connection("courses")
            .where({
                name: `${info.name}`
            })
            .delete();
    

        return {
            status: 200,
            msg: "Deleted database course"
        };
    },




    /**
     * List courses in the database 
     */
    async List(){
        const results = await connection("courses").select("*");

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
                    return await connection("courses").where({name: `${info.search}`}).select("*");
                }        
            },
            {
                id: 1,
                name: "knowledge",
                method: async () => {
                    const courses = await connection("courses").select("*");
                    let selecteds = [];
                    
                    console.log(courses);

                    courses.map((course) => {
                        course.knowledge.map((know) => {
                            console.log(know);
                            if(know == info.search){
                                selecteds.push(course);
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