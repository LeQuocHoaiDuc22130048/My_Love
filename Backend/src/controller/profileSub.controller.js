const service = require('../services/profileSub.service');

const { success, error } = require('../utils/response');

exports.getAll = async (req, res) => {
    try {
        const list = await service.getAll();
        return success(res, list);
    } catch (err) {
        return error(res, err.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const item = await service.getById(req.params.id);
        if (!item) return error(res, 'Profile sub not found', 404);
        return success(res, item);
    } catch (err) {
        return error(res, err.message);
    }
};

exports.create = async (req, res) => {
    try {
        console.log('body', req.body);
        console.log('file', req.file);

        const data = {
            NameProfile: req.body.NameProfile,
            Content: req.body.Content,
            PathImage: req.file ? '/upload/' + req.file.filename : null
        };

        const result = await service.create(data);

        return success(res, result, 'Profile sub created successfully');
    } catch (err) {
        return error(res, err.message);
    }
};

exports.update = async (req, res) => {
    try {
        const data = { ...req.body };
        if (req.file) data.PathImageSub = req.file.path;
        await service.update(req.params.id, data);
        return success(res, null, 'Profile sub updated successfully');
    } catch (err) {
        return error(res, err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await service.delete(req.params.id);
        return success(res, null, 'Profile sub deleted successfully');
    } catch (err) {
        return error(res, err.message);
    }
};
