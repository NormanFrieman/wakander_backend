const List = require("../Database/Commands/List");

module.exports = async (req, res) => {
    const { def } = req.params;
    const result = await List(def);

    return res.status(200).json(result);
};