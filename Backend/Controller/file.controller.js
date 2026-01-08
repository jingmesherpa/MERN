export const uploadFileController = async (req, res) => {
  try {
    // multer stores file info in req.file
    const file = req.file.filename;

    res.status(200).json({
      message: "File Uploaded Successfully",
      url: `http://localhost:1000/${file}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
