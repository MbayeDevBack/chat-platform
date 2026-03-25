const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
            status: err.status || 500,
        },
    });
};

module.exports = errorHandler;