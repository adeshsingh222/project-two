const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const multer = require('multer')
const mongoose = require("mongoose")
const route = require("./routes/route")


app.use(bodyParser.json())
app.use(multer().any())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://Parshant_rao:C4fIOvHGi74DVINv@newcluster.squkrr6.mongodb.net/InternGroup43",
    {
        useNewUrlParser:true
    }
).then(()=>console.log("MongoDB is connected"))
    .catch((err)=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 3001, function() {
	console.log("Express app running on port " + (process.env.PORT || 3001));
});