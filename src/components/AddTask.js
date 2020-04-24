import React, { Component } from 'react';
import "./AddTask.css";

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text: '',
        checked: false,
        date: this.minDate
     }

     handleText = e => {
        this.setState({
            text: e.target.value
        })
     }

     handleChecked = e => {
         this.setState({
             checked: e.target.checked
         })
     }

     handleDate = e => {
        this.setState({
            date: e.target.value
        })
     }

     handleClick = () => {
         const {text, date, checked} = this.state
         const add = this.props.add(text, date, checked)
         if(add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
         }
     }

    render() { 

        let maxDate = parseInt(this.minDate.slice(0,4)) + 1;
        maxDate = maxDate+"-12-31"
        return (
            <div>
                <input
                    type="text"
                    placeholder="dodaj zadanie"
                    value={this.state.text}
                    onChange={this.handleText}
                />
                <label htmlFor="important">Priorytet</label>
                <input 
                    type="checkbox"
                    checked={this.state.checked}
                    id="important"
                    onChange={this.handleChecked}
                />
                <label htmlFor="date">Do kiedy zrobić</label>
                <input 
                    type="date"
                    value={this.state.date}
                    min={this.minDate}
                    max={maxDate}
                    id="date"
                    onChange={this.handleDate}
                />
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
          );
    }
}
 
export default AddTask;