import React, { Component } from 'react'
import { IdentidadAPI } from '../api/identidadAPI'
import { renderUserList } from './UserView'

export class UsersList extends Component {

    state = { users: [] }
  
    async componentDidMount() {
        // create new API object...
        const api = new IdentidadAPI(process.env.REACT_APP_IDENTIDAD_API_USERNAME,
                                     process.env.REACT_APP_IDENTIDAD_API_PWD)

        // get users...
        const data = await api.getUsers();
        console.log('Got data: ', data)
        this.setState({ users: data })
    }
  
    render() {
      return (
        <div>
            { !this.state.users.length
              ? 'Waiting for users API...'
              : renderUserList(this.state.users)
            }
        </div>
      );
    }
}