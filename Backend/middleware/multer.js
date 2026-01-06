
import multer from "multer";

const limits= {
  fileSize: 1024* 1024* 13,
}

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage: storage, limits: limits });
