import React, { Component } from 'react'

export class UserItem extends Component {
    constructor(){
        super();
        this.state = {
            users: [
            { 
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'},

            {
            id: '2',
            login: 'defunkt',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
            html_url: 'https://github.com/defunkt'}]
           
        }
    }

    render() {
        const {login, avatar_url, html_url} = this.state.users[0];
        return (
        <div className = "card text-center">
            <img src = {avatar_url} alt="avatar_url" className = "rounded-circle mx-auto d-block" style = {{width: '80px', padding: '7px' }} />
            <h3>{login}</h3>
            <div>
                <a href = {html_url} className = "btn btn-light btn-sm " style = {{padding: '4px', margin: '7px', backgroundColor: '#ff9999'}}> Profile </a>
            </div>
            {this.state.users.map((user) => {
                <div>
                    <p>{user.login}</p>
                </div>
            })}
            
        </div>)

        
    }
}

export default UserItem