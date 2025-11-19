const db = require('../config/db');

exports.create = (data) => {
    const { NameUser, EmailUser, ContentFeedback } = data;

    return db.execute(
        'INSERT INTO `Feedback` (NameUser, EmailUser, ContentFeedback) VALUES (?, ?, ?)',
        [NameUser, EmailUser || null, ContentFeedback || null]
    );
};

exports.getAll = () => db.execute('SELECT * FROM `Feedback` ORDER BY id ASC');
exports.delete = (id) => db.execute('DELETE FROM `Feedback` WHERE id=?', [id]);
