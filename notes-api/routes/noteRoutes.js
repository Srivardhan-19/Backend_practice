const express=require("express");
const router=express.Router();
const noteController=require("../controllers/noteController.js");

router
    .route("/")
    .post(noteController.createNote)
    .get(noteController.getNotes);

router
    .route("/:id")
    .get(noteController.getNoteByID)
    .put(noteController.updateNote)
    .delete(noteController.deleteNote);

module.exports=router;