
require('dotenv').config();
const connection = process.env.MONGO;
const collection = process.env.COLL;
const mongoose = require("mongoose");

const db = async () => {
    try {
        
        mongoose.set(`strictQuery`, true);

        await mongoose.connect(`${connection}/${collection}`);

        console.log(`DB Connected to: ${connection}/${collection}`);

    } catch (err) {
        throw new Error(`DB Connection Error: ${err.message}`);
    }
}

module.exports = { db};