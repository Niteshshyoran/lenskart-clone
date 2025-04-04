const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type:String, require:true},
    email: {type:String, require:true, unique:true},
    pass: {type:String, require:true}
},{
    versionKey:false
}
)


const UserModel = mongoose.model("user",userSchema)
module.exports = {UserModel}