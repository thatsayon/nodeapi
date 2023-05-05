const data = require("../data.json");
const getAllProducts = async (req, res) => {
    res.status(200).json({
    data
    })
}

module.exports = { getAllProducts };