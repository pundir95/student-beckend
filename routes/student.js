const express = require("express");

const router = express.Router();

const studentController = require("../controller/studentController");
const authentication = require("../middleware/authentication");

router.use(authentication);

router.post("/add", studentController.createStudent);
router.get("/list", studentController.getStudent);
router.get("/studentById/:id", studentController.getStudentById);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
