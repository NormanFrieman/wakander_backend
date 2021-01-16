const Delete = require("../Database/Commands/Delete");

module.exports = async (req, res) => {
    const { def } = req.params;
    const result = await Delete(def, req.body);

    return res.status(result.status).json({msg: result.msg});
};