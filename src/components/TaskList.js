import React from 'react';
import Task from './Task';

const TaskList = props => {

    const active = props.tasks.filter(task=> task.active)
    const done = props.tasks.filter(task=> !task.active)

    if(done.length >= 2) {
        done.sort((a,b) =>  b.finishDate - a.finishDate)
    }

    if(active.length >= 2) {
        active.sort((a,b) =>  a.text.toLowerCase() - b.text.toLowerCase())
    }
    
    const activeTasks = active.map(task=> <Task 
        key={task.id} 
        task={task}
        delete={props.delete}
        change={props.change} />)

    const doneTasks = done.map(task=> <Task 
        key={task.id} 
        task={task}
        delete={props.delete}
        change={props.change} />)
        
    return (
        <>
            <div className="active-tasks">
                <h2>Zadania do zrobienia</h2>
                {activeTasks}
            </div> 
            <hr />
            <div className="done-tasks">
                <h3>Zadania zrobione <em>({done.length})</em></h3>
                {doneTasks}
            </div>
        </>
     );
}
 
export default TaskList;