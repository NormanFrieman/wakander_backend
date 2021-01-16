const Insert = require("../Database/Commands/Insert");

module.exports = async (req, res) => {
    const { def } = req.params;
    const result = await Insert(def, req.body);

    return res.status(result.status).json({msg: result.msg});
};