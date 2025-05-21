export const ctrlWrapper = (ctrl) => {
  const func = async (res, req, next) => {
    try {
      await ctrl(res, req, next);
    } catch (error) {
      const { status = 500 } = error;
      if (status) {
        res.status(status).json({
          status,
          message: error.message,
        });
      }
    }
  };

  return func;
};
