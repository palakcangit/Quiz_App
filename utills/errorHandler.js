// create a common globle function use to return errors to the client
export const errorHandler = (message, status, res) => {
  return res.status(status).json({
    success: false,
    message: message,
  });
};
