const Users = require("../Database/Commands/Entities/Users");

module.exports = async (req, res) => {
    const result = await Users.AddRating(req.body);

    return res.status(result.status).json({msg: result.msg});
};