const getUserService = require('../services/userService');
const getUserController = (req, res) => {
    const response = getUserService();
    return response
};
module.exports = getUserController;