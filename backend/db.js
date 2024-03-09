const mongoose = require("mongoose");
const { mongo_url } = require("./config");

mongoose.connect(mongo_url);


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const Todo = mongoose.model("todos",todoSchema);

model.export ={
    Todo,
}