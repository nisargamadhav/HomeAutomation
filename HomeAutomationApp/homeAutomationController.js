
Device = require('./deviceModel');
exports.index = function (req, res) {
    Device.get(function (err, devices) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Devices retrieved successfully",
            data: devices
        });
    });
};
exports.new = function (req, res) {
    var device = new Device();
    device.name = req.body.name ? req.body.name : device.name;
    device.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New device created!',
            data: device
        });
    });
};
// Handle view device info
exports.view = function (req, res) {
    Device.findById(req.params.device_id, function (err, device) {
        if (err)
            res.send(err);
        res.json({
            message: 'Device details loading..',
            data: device
        });
    });
};
// Handle update device info
exports.update = function (req, res) {
Device.findById(req.params.device_id, function (err, device) {
        if (err)
            res.send(err);
device.name = req.body.name ? req.body.name : device.name;
        
        device.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Device Info updated',
                data: device
            });
        });
    });
};
exports.delete = function (req, res) {
    Device.remove({
        _id: req.params.device_id
    }, function (err, device) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Device deleted'
        });
    });
};