import mongoose, { Types } from "mongoose";
const contactSchema=mongoose.Schema({
    fullName :{
        type: String,
        required :true,
    },

     email :{
        type: String,
        required :true,
    },
    mobileNumber :{
        type: String,
        required :true,
    },
    message :{
        type: String,
        required :true,
    },
},
{ timestamps: true }

)
const contact = mongoose.model("contact",contactSchema)
export default contact;