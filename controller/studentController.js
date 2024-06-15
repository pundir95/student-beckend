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


async function getStudentById(req, res) {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateStudent(req, res) {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({
            message:"Student is updated",
            data:updatedStudent
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteStudent(req, res) {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createStudent,
    getStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};