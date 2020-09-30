import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';
import "font-awesome/css/font-awesome.css";
import "./todo.css"

class Todo extends Component {
    state = { 
        todoText: "",
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
                    <button onClick={this.addTodo} className="btn btn-primary add-button">Add</button>
                </div>

                <ul className="list"> 
                    {this.props.todos.map( t => 
                    <li className="txt-task" key={t} >
                        
                        <p>{t}</p>
                        <i class="fa fa-star important"></i>
                    </li>)} 
                    <hr></hr>
                    {this.getTodoCount()}
                </ul>
            </div>
         );
    }

    getTodoCount = () => {
        let count = this.props.todos.length;
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
            this.props.addTodo(this.state.todoText);
            this.setState({todoText: ""});
        }  
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.todos,
    }
};
 
export default connect(mapStateToProps, { addTodo } )(Todo);


// create an item component for online store
// a <div> to display product
// must have image
// must have price
// and include quantity picker

////////////////
//            //
//            //