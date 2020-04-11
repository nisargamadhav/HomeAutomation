// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome!',
    });
});

var homeAutomationController = require('./HomeAutomation/homeAutomationController');

router.route('/devices')
    .get(homeAutomationController.index)
    .post(homeAutomationController.new);
router.route('/devices/:device_id')
    .get(homeAutomationController.view)
    .patch(homeAutomationController.update)
    .put(homeAutomationController.update)
    .delete(homeAutomationController.delete);
// Export API routes
module.exports = router;