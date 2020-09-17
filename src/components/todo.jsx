import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        todoText: "",
        todoList: [],
    };
    
    render() { 
        return ( 

            <div className="todo">
                <div>
                    <input 
                        type="text" 
                        value={this.state.todoText} 
                        onChange={this.onTextChange}
                        placeholder="Todo text"></input>
                    <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                </div>

                <div className="list"> 
                    {this.state.todoList.map( t => <div className="item" >{t}</div>)} 
                    <hr></hr>
                    {this.getTodoCount()}
                </div>
            </div>
         );
    }

    getTodoCount = () => {
        let count = this.state.todoList.length;
        if(count === 1){
            return <label>We have 1 element in the list</label>;
        }else{
            return <label>We have {count} elements in the list</label>;
        }
        
    }

    onTextChange = (event) => {
        this.setState({ todoText: event.target.value });
    }

    addTodo = () => {  
        if(this.state.todoText){
            let todoList = [...this.state.todoList, this.state.todoText];
            // this.setState({ todoList: todoList, todoText: "" });
            this.setState({ todoList, todoText: "" });
        }  
    }
}


 
export default Todo;


// create an item component for online store
// a <div> to display product
// must have image
// must have price
// and include quantity picker

////////////////
//            //
//            //