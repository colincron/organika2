import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

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
                    <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                </div>

                <div className="list"> 
                    {this.props.todos.map( t => <div className="item" key={t} >{t}</div>)} 
                    <hr></hr>
                    {this.getTodoCount()}
                </div>
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