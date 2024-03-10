import { useState } from "react"


export function Todo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function postTodo(){
        fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title: title,
                description : description,
                completed: false
            }),
            headers:{
                "Content-type" : "application/json"
            }
        }).then(async (res)=>{
            const json = await res.json();
            console.log(json);
        })
    }

    function postTitle(e){
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    function postDescription(e){
        setDescription(e.target.value);
    }

    return (
        <div style = {{
            
            display: "flex",
            flexDirection: "column",
            width: "150px",
        }}>
            <input type="text" onChange={(e) => postTitle(e)} placeholder="Enter a title"></input> <br/>
            <input type="text" onChange={(e) => postDescription(e)} placeholder="Enter a description"></input> <br/>

            <button onClick={postTodo}>Add a todo</button>
        </div>
    )
}