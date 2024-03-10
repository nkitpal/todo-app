const express = require("express");
const {createTodo, updateTodo } = require("./types")
const { Todo } = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/todo', async (req, res, next) => {

    try{
        const payload = req.body;
        const parsedPayload = createTodo.safeParse(payload);
        
        if(!parsedPayload.success){
            res.status(411).json({
                msg: "enter valid inputs",
            })
            return;
        }
    
        // insert in db
    
        const todo = await Todo.create({
            title : payload.title,
            description: payload.description,
            completed: false
        })
    
        res.status(200).json({
            message: "todo created successfully"
        })
    }catch(e){
        next(e);
    }
    


})

app.get('/todos', async (req, res)=>{

    const todos = await Todo.find();
    res.status(200).json({
        todos
    })
})

app.put('/todo', async (req, res) => {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "enter valid inputs",
        })
        return;
    }

    // update in db

    const todo = await Todo.updateOne({
        _id: req.body.id
    },{
        completed: true,
    }
    );

    res.status(200).json({
        message: "marked done!"
    })
})

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Internal Server Error!");
});


app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})