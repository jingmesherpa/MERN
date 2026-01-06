export const uploadFileController = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
