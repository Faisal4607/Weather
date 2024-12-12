const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); 
    }
};

module.exports = dbConnect;
