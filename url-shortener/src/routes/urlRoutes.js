const express=require("express");
const router=express.Router();
const urlController=require("../controllers/urlController");

router
.route("/")
.post(urlController.addUrl)
.get(urlController.getAllUrls);

router
.route("/:code")
.get(urlController.getUrlByCode)
.delete(urlController.deleteUrlByCode);

module.exports=router;