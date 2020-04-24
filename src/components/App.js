import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 1;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Treść zadania',
        date: '2021',
        important: false,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task=>task.id !== id)
    this.setState({tasks})
  }

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task=> {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({tasks})
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    this.setState(prevState=> ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
  
}

export default App;
