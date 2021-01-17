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
            info.state == undefined ||
            info.workload == undefined
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

        const date = new Date();

        await connection("jobVacancies").insert({
            name: `${info.name}`,
            company: `${info.company}`,
            knowledge: info.knowledge,
            city: `${info.city}`,
            state: `${info.state}`,
            workload: `${info.workload}`,
            publicationDate: `${date}`
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
    // 0 -> company
    // 1 -> knowledge
    // 2 -> city / state
    // 3 -> workload
    async ListBy(info){
        if(info.id > 1)
            return {};

        const props = [
            {
                id: 0,
                name: "company",
                method: async () => {
                    return await connection("jobVacancies").where({
                        company: `${info.search}`
                    }).select("*");
                }        
            },
            {
                id: 1,
                name: "knowledge",
                method: async () => {
                    const vacancies = await connection("jobVacancies").select("*");
                    let selecteds = [];
                    
                    console.log(vacancies);

                    vacancies.map((vacancy) => {
                        vacancy.knowledge.map((know) => {
                            console.log(know);
                            if(know == info.search){
                                selecteds.push(course);
                                return;
                            }
                        })
                    })
                    
                    return selecteds;
                }        
            },
            {
                id: 2,
                name: "city / state",
                method: async () => {
                    return await connection("jobVacancies").where({
                        city: `${info.search[0]}`,
                        state: `${info.search[1]}`
                    }).select("*");
                } 
            },
            {
                id: 3,
                name: "workload",
                method: async () => {
                    return await connection("jobVacancies").where({
                        workload: `${info.search}`
                    }).select("*");
                } 
            }
        ]
        
        const results = await props[info.id].method();

        return {results};
    }
}