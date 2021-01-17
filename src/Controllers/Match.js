const Match = require("../Database/Commands/Match");

module.exports = async (req, res) => {
    const { email, vacancy } = req.params;
    const result = await Match({ email, vacancy});
    
    return res.status(result.status).json({msg: result.msg});
};