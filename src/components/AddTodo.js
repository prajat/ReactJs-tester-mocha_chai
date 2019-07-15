import React from 'react';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.props.inputText);
    }
    handleChange(e){
        this.props.handleInput(e.target.value);
    }
    render(){
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <label className="todo-form__label">Add Todo:</label>
                <input className="todo-form__textbox" maxLength="40" type="text" placeholder="Your Todo Here..." value={this.props.inputText} onChange={this.handleChange}></input>
            </form>
        )
    }
}
export default AddTodo;