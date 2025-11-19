const service = require('../services/profileMain.service');

const { success, error } = require('../utils/response');

exports.get = async (req, res) => {
    try {
        const profile = await service.getProfileMain();
        return success(res, profile);
    } catch (err) {
        return error(res, err.message);
    }
};

exports.update = async (req, res) => {
    try {
        const body = req.body;
        if (req.file) body.PathImageMain = req.file.path;
        await service.updateProfileMain(body);
        return success(res, null, 'Profile main updated successfully');
    } catch (err) {
        return error(res, err.message);
    }
};
