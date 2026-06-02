

const{Schema}= require("mongoose");
const ObjectId= mongoose.Types.ObjectId; 


const userSchema= new Schema({
    email:{type:String, unique:true},
    password: String,
    firstName: String,
    lastname: String
});

const adminSchema= new Schema({
    email:{type:String, unique:true},
    password: String,
    firstName: String,
    lastname: String
});

const courseSchema= new Schema({
    title:String,
    descriptionn :String,
    price: Number,
    imageUrl:String,
    createrId: ObjectId
})

const purchaseSchema=new Schema({
    userId: ObjectId,
    courseId: ObjectId
})

const userModel= mongoose.model("user", userSchema);
const adminModel= mongoose.model("admin", adminSchema);
const courseModel= mongoose.model("course", courseSchema);
const purchaseModel= mongoose.model("purchase", purchaseSchema);

module.export ={
    userModel, adminModel, courseModel, purchaseModel
}