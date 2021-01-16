const CheckLogin = require("../Database/Commands/CheckLogin");

module.exports = async (req, res) => {
    const { def } = req.params;
    const result = await CheckLogin(def, req.body);
    
    return res.status(result.status).json({msg: result.msg});
};