const express=require("express");
const router=express.Router();
const upload=require("../middleware/upload");
const fileController=require("../controllers/fileController");
const multer = require("multer");

const handleUpload = (req, res, next) => {
    upload.single("file")(req, res, (error) => {

        if (error instanceof multer.MulterError) {
            if (error.code === "LIMIT_FILE_SIZE") {
                return res.status(413).json({
                    message: "File size cannot exceed 5 MB"
                });
            }

            return res.status(400).json({
                message: error.message
            });
        }

        if (error) {
            return res.status(400).json({
                message: error.message
            });
        }

        next();
    });
};

router
    .route("/upload")
    .post(handleUpload, fileController.uploadFile);
    
router
    .route("/")
    .get(fileController.getAllFiles);

router
    .route("/:id")
    .get(fileController.getFileById)
    .delete(fileController.deleteFile);

router
    .route("/:id/download")
    .get(fileController.downloadFile);

module.exports=router;