export function Todos({todos}){

    return (
        <div>
            {todos.map((x) => {
                return( <div>
                            <p> {x.title}</p>
                            <p>{x.description}</p>
                            <button> {x.completed?"completed":"mark as Complete!"}</button>
                        </div>)
            })}
        </div>
    )
}