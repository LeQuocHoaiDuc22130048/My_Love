const Feedback = require('../model/feedback.model');

exports.create = async (data) => {
    const [result] = await Feedback.create(data);
    return { id: result.insertId };
};

exports.getAll = async () => {
    const [rows] = await Feedback.getAll();
    return rows;
};

exports.delete = async (id) => {
    await Feedback.delete(id);
    return true;
};
