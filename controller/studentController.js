const Student=require("../models/student");

async function createStudent(req,res){
    const student=new Student(req.body);
    try{
        const savedStudent=await student.save();
        res.status(201).json({
            message: 'Student created successfully',
            student: savedStudent
        });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
}


async function getStudent(req,res){
    try{
        const student=await Student.find();
        res.status(200).json(student)
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createStudent,
    getStudent
};