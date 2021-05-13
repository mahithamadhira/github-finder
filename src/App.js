import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import Users from './components/users/Users'

class App extends Component {

  render(){
    return (
      <div>
        <Navbar title = "Github-Finder" icon = "fa fa-github fa-2x"/>
        <UserItem />
        <Users />
      </div>
    );
  }
}

export default App;
