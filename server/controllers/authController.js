const User = require('../models/User');
const jwt = require('jwt-simple');

const authController = {
    register: async (req, res) => {
        try {
            const { nom, prenom, numero, email, mot_de_passe } = req.body;
            const userExists = await User.findOne({ where: { numero } });
            if (userExists) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const user = await User.create({ nom, prenom, numero, email, mot_de_passe, role: 'USER' });
            const token = jwt.encode({ id: user.id }, process.env.JWT_SECRET);
            res.status(201).json({ message: 'User registered successfully', token, user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { numero, mot_de_passe } = req.body;
            const user = await User.findOne({ where: { numero } });
            if (!user || !(await user.verifyPassword(mot_de_passe))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jwt.encode({ id: user.id }, process.env.JWT_SECRET);
            res.status(200).json({ message: 'Login successful', token, user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    logout: (req, res) => {
        res.status(200).json({ message: 'Logout successful' });
    }
};

module.exports = authController;
