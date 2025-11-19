const ProfileSub = require('../model/profileSub.model');

exports.getAll = async () => {
    const [rows] = await ProfileSub.getAll();
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await ProfileSub.getById(id);
    return rows[0] || null;
};

exports.create = async (data) => {
    const [result] = await ProfileSub.create(data);
    return { id: result.insertId };
};

exports.update = async (id, data) => {
    await ProfileSub.update(id, data);
    return true;
};

exports.delete = async (id) => {
    await ProfileSub.delete(id);
    return true;
};
