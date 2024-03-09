const express = require("express");
const {createTodo, updateTodo } = require("./types")
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/todo', () => {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "enter valid inputs",
        })
        return;
    }

})

app.get('/todos', ()=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "enter valid inputs",
        })
        return;
    }
})

app.put('/todo', () => {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "enter valid inputs",
        })
        return;
    }
})



app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})