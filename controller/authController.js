const User = require("../models/user");
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    //     // Hash the password
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User(req.body);
    const registerUser = await user.save();
    res.status(201).json({
      message: "User register successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function loginUser(req, res) {
  try {
    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    // const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (req.body.password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "secret");
    res.status(200).json({ token: token, message: "User login successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
