const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set('strictQuery', true);
const mongoDb =async() => {
    await mongoose.connect(process.env.mongoUri,{useNewUrlParser:true},async (err,result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected Successfully")
            const data = await mongoose.connection.db.collection("foodCategory");
            data.find({}).toArray(function (err, data) {
                if (err) console.log("error");
                else console.log(data);
            })
        }
    });
}

module.exports = mongoDb;