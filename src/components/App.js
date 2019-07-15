import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:[
                {id:0,task:"Buy Milk"},
                {id:1,task:"Make the bed"}
            ],
            inputText:''
        }
        this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.handleInput=this.handleInput.bind(this);
    }
    deleteTodo(id){
        let myTodos=this.state.todos.filter(todo=>{
            return id!=todo.id
        })
        this.setState({
            todos:myTodos
        })
    }
    addTodo(myTask){
        let myId=Math.random();
        let todo={id:myId,task:myTask};
        let myTodos=[...this.state.todos,todo];
        this.setState({
            todos:myTodos
        })
        this.setState({
            inputText:''
        })
    }
    handleInput(text){
        this.setState(
            {inputText:text}
        )
    }
    render(){
        return (
            <React.Fragment>
                <header className="header"><h1 className="header__heading">TODO APP</h1></header>
                <section className="section">
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                    <AddTodo addTodo={this.addTodo} inputText={this.state.inputText} handleInput={this.handleInput}/>
                </section>
            </React.Fragment>
        )
    }
}
export default App;
