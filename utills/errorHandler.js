export const errorHandler = (message, status, res) => {
  return res.status(status).json({
    success: false,
    message: message,
  });
};
