const db = require('../config/db');

exports.getAll = () => {
    return db.execute('SELECT * FROM `ProfileSub` ORDER BY id ASC');
};

exports.getById = (id) => {
    return db.execute('SELECT * FROM `ProfileSub` WHERE id=?', [id]);
};

exports.create = (data) => {
    const { NameProfile, Content, PathImage } = data;

    return db.execute(
        'INSERT INTO `ProfileSub` (NameProfile, Content, PathImage) VALUES (?, ?, ?)',
        [NameProfile, Content, PathImage]
    );
};

exports.update = (id, data) => {
    const { NameProfile, Content, PathImage } = data;
    return db.execute(
        'UPDATE `ProfileSub` SET NameProfile=?, Content=?, PathImage=? WHERE id=?',
        [NameProfile, Content, PathImage || null, id]
    );
};

exports.delete = (id) => {
    return db.execute('DELETE FROM `ProfileSub` WHERE id=?', [id]);
};
