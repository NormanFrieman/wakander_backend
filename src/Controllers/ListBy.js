const ListBy = require("../Database/Commands/ListBy");

module.exports = async (req, res) => {
    const { def, id, search } = req.params;
    const result = await ListBy(def, {id, search});

    return res.status(200).json(result);
};