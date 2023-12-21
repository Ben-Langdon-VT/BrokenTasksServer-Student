require('dotenv').config();
const jwt = require('jsonwebtoken');
const {User} = require('../models');


const validateSession = async (req,next) => {
    try {
        
        const token = req.headers.authorization;
        const decoded = await jwt.verify(token, process.env.JWT);

        const user = await User.findById(decoded.id);
        if(!user) throw new Error(`User not found`);

        req.user = user;

        

    } catch (err) {
        res.json({message: err.message})
    }
    next();
}

module.exports = validateSession;