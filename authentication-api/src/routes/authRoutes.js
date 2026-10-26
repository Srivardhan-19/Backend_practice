const express=require("express");
const router=express.Router();

const authController=require("../controllers/authController");
const authMiddleware=require("../middleware/authMiddleware");

router
    .route("/")
    .post(authController.registerUser);

router
    .route("/login")
    .post(authController.loginUser);

router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed successfully",
        userId: req.userId
    });
});
module.exports=router;