exports.success = (res, data = null, message = 'Success') => {
    return res.json({ status: 'success', message, data });
};

exports.error = (res, message = 'Error', data = null) => {
    return res.json({ status: 'error', message, data });
};
