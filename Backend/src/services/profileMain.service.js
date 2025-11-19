const profileMain = require('../model/profileMain.model');

exports.getProfileMain = async () => {
    const [rows] = await profileMain.get();
    return rows[0] || null;
};

exports.updateProfileMain = async (data) => {
    await profileMain.update(data);
    return true;
};
