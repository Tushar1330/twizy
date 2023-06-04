const mongoose = require("mongoose");
const mongoUri = 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]'
mongoose.set('strictQuery', true);
const mongoDb =async() => {
    await mongoose.connect(mongoUri,{useNewUrlParser:true},async (err,result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected Successfully")
            const data = await mongoose.connection.db.collection("foodCategory");
            data.find({}).toArray(function (err, data) {
                if (err) console.log("error");
                else console.log();
            })
        }
    });
}

module.exports = mongoDb;