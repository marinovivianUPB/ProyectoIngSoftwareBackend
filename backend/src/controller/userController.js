const getUserService = require('../services/userService');
const getUserController = (req, res) => {
    console.log(':)')
    const response = getUserService();
    res.status(200).json(response)
};
module.exports = getUserController;