import React, { Component } from 'react'
import { IdentidadAPI } from '../api/identidadAPI'
import './UsersList.css'

export class UsersList extends Component {

    constructor() {
      super();
      this.state = { users: [] };
    }
  
    async componentDidMount() {
        // create new API object...
        const api = new IdentidadAPI(process.env.REACT_APP_IDENTIDAD_API_USERNAME,
                                     process.env.REACT_APP_IDENTIDAD_API_PWD)

        // get users...
        const data = await api.getUsers();
        console.log('Got data: ', data)
        this.setState({ users: data });
    }

    renderUser = (user) => {
        return(<li className='user'>{user.nip} - {user.nombre}</li>)
    }

    renderUsers = () => {
        if (!this.state.users.length)
            return('Waiting for users API...')
        else {
            return(<div className='users'>
                        <h2 className='users-title'>Users</h2>
                        <ul className='users-list'> { this.state.users.map(el => this.renderUser(el))} </ul>
                    </div>
                    )
        }
    }
  
    render() {
      return (
        <div>
            { this.renderUsers() }
        </div>
      );
    }
}