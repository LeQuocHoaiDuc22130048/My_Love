const service = require('../services/feedback.service');
const { success, error } = require('../utils/response');

const db = require('../config/db');

exports.create = async (req, res) => {
    try {
        const { NameUser, EmailUser, ContentFeedback, profileSubId } = req.body;

        if (!ContentFeedback)
            return error(res, 'ContentFeedback is required', 400);

        const connection = await db.getConnection();

        try {
            await connection.beginTransaction();
            const [result] = await connection.execute(
                'INSERT INTO Feedback (NameUser, EmailUser, ContentFeedback, profileSubId) VALUES (?, ?, ?, ?)',
                [NameUser || null, EmailUser || null, ContentFeedback]
            );

            const feedbackId = result.insertId;

            if (profileSubId) {
                await connection.execute(
                    'UPDATE `ProfileSub` SET `FeedbackId` = ? WHERE `id` = ?',
                    [feedbackId, profileSubId]
                );
            }

            await connection.commit();
            connection.release();

            return success(
                res,
                { id: feedbackId },
                'Feedback created successfully'
            );
        } catch (err) {
            await connection.rollback();
            connection.release();
            throw err;
        }
    } catch (err) {
        return error(res, err.message);
    }
};

exports.getAll = async (req, res) => {
    try {
        const list = await service.getAll();
        return success(res, list);
    } catch (err) {
        return error(res, err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await service.delete(req.params.id);
        return success(res, null, 'Feedback deleted successfully');
    } catch (err) {
        return error(res, err.message);
    }
};
