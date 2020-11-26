import React, { Component } from 'react'
import { IdentidadAPI } from '../api/identidadAPI'

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
        return(<li>{user.nip} - {user.nombre}</li>)
    }

    renderUsers = () => {
        if (!this.state.users.length)
            return('Waiting for users API...')
        else {
            return(<div>
                        <h2>Users</h2>
                        <ul> { this.state.users.map(el => this.renderUser(el))} </ul>
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