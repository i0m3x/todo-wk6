import React from 'react'

class Todo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
                
        }
    }
            
    render(){
        return (
            <div>
                {this.props.todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
            </div>
    )
}
}

export default Todo;
