import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
  state={
    todos:[
      {id:1,icerik:"Ekmek Al"},
      {id:2,icerik:"Koz Yaz"},
      {id:3,icerik:"Spora Git"}
    ]
  }

  deleteTodo=(id)=>{
    //console.log(id);
    let r = window.confirm("Confirm?");
    if (r !== true) {
      return;
    } 

    const todos=this.state.todos.filter(todo=>{
      return todo.id !== id
    });

    this.setState({todos})
  }

  addTodo=(todo)=>{
    if (todo.icerik==='') return;
    if (todo.icerik.trim()==='') return;
    todo.id=Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({todos})
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Yapılacaklar</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
