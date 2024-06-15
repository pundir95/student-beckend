const express=require("express");

const router =express.Router();

const studentController=require("../controller/studentController");

router.post('/add',studentController.createStudent)
router.get('/list',studentController.getStudent)

module.exports = router;