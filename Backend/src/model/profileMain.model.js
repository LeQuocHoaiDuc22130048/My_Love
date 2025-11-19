const db = require('../config/db');

exports.get = () => {
    return db.execute('SELECT * FROM `ProfileMain`');
}

exports.update = (id, data) => {
    const { Name, Content, ContentBanner, PathImageMain } = data;

    return db.execute(
        `UPDATE \`ProfileMain\` SET Name=?, Content=?, ContentBanner=?, PathImageMain=? WHERE id=1`,
        [Name, Content, ContentBanner, PathImageMain]
    )
}