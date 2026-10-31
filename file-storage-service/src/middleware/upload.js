const multer=require("multer");
const path=require("path");


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"..","uploads"));
    },
    filename:function (req,file,cb){
        const uniqueName=Date.now()+"-"+Math.round(Math.random()*1E9);
        const extension=path.extname(file.originalname);
        
        cb(null,uniqueName+extension);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only PDF, JPG, and PNG files are allowed"));
    }
};

const upload=multer({
    storage:storage,
    limits:{
        fileSize:5*1024*1024
    },
    fileFilter:fileFilter
});

module.exports=upload;