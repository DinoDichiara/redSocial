exports.success = (req, res, message, status) => {
  const statusCode = status || 200;
  const statusMessage = message || "";

  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
};

exports.error = (req, res, message, status) => {
  const statusCode = status || 500;
  const statusMessage = message || "Internal server error";

  res.status(statusCode).send({
    error: false,
    status: status,
    body: message,
  });
};
