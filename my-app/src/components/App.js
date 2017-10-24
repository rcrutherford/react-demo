import React, { Component } from 'react';
import Reset from "../styles/reset.css";
import '../styles/App.css';
import Header from "./Header";
import InputForm from "./InputForm";
import List from "./List";

class App extends Component {
    // getInitialState
    state = {
        list: [
            {
                name: "Inventive Academy Logo Design",
                id: 0,
                isEditing: false
            },
            {
                name: "Daily Standup",
                id: 1,
                isEditing: false
            },
            {
                name: "Reschedule lunch meeting",
                id: 2,
                isEditing: false
            },
            {
                name: "Read emails",
                id: 3,
                isEditing: false
            }
        ],
        pendingItem: ""
    };

    lastItemId = 4;

    newItemId = () => {
      const id = this.lastItemId;
      this.lastItemId +=1;
      return id;
    }

    newItemSubmitHandler = e => {
      e.preventDefault();
      const id = this.newItemId();
      this.setState({
        list: [
          {
            name: this.state.pendingItem,
            isEditing: false,
            id
          },
          ...this.state.list
        ],
        pendingItem: ""
      });
    };

    handleItemInput = e => this.setState({pendingItem: e.target.value});

    removeItemAt = id => {
      this.setState({list: this.state.list.filter(item => id !== item.id)});
    };

    render() {
        return ( <
            div className = "wrapper" >
              <Header />
              <InputForm 
                handleItemInput={this.handleItemInput} 
                pendingItem={this.state.pendingItem}
                newItemSubmitHandler={this.newItemSubmitHandler}
              />
              <List 
                list = { this.state.list }
                removeItemAt ={this.removeItemAt}
              /> 
            </div>
        );
    }
}

export default App;