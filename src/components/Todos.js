import React from 'react';

const Todos= ({todos,deleteTodo}) =>{
        let handleClick=(id)=>{
            deleteTodo(id);
        }
        let myTodos=todos.length?todos.map(todo=>{
            return (
                <li key={todo.id} className="todos__todo-item" onClick={()=>{handleClick(todo.id)}}><p className="todos__todo-item__text">{todo.task}</p></li>
            )
        }):null;
        return (
            <ul type="none" className="todos">
                {myTodos}
            </ul>
        )
}
export default Todos;