import mongoose from 'mongoose';
import User from '../models/user.js';

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).json({
                message: "User is already present!",
                success: false,
            });
        }

        const newUser = new User({
            email,
            password,
        });

        await newUser.save();
        res.status(201).json({
            message: "User added successfully!",
            success: true,
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email }); 
        if (!user) {
            return res.status(401).json({
                message: "User not found!",
                success: false,
            });
        }

        if (user.password !== password) { 
            return res.status(401).json({
                message: "Incorrect password!",
                success: false,
            });
        }

        res.status(200).json({
            message: "Login successful!",
            success: true,
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", success: false });
    }
};
const userid = async (req, res) => {
    try {
        const { email } = req.query; // Use query instead of body

        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(404).json({
                message: "User not found!",
                success: false,
            });
        }

        res.status(200).json({
            userid: user._id,
            success: true,
        });

    } catch (err) {
        res.status(500).json({ message: "Server error", success: false });
    }
};

export { register, login, userid };
