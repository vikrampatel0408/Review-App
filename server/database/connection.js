const mongoose = require('mongoose');
const MONGO_URI='mongodb+srv://patelvikram202:vikram1111@cluster0.us7oyou.mongodb.net/?retryWrites=true&w=majority';
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB