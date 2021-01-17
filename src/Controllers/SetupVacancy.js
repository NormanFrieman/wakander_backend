const Users = require("../Database/Commands/Entities/Users");

module.exports = async (req, res) => {
    const result = await Users.SetupVacancy(req.body);

    return res.status(result.status).json({msg: result.msg});
};