import React, { Component } from 'react'
import { IdentidadAPI } from '../api/identidadAPI'
import { renderUserDetail } from './UserView'

import './UserDetail.css'

export class UserDetail extends Component {

    state = { userData: {} };
  
    async componentDidMount() {
        // create new API object...
        const api = new IdentidadAPI(process.env.REACT_APP_IDENTIDAD_API_USERNAME,
                                     process.env.REACT_APP_IDENTIDAD_API_PWD)

        // get user details...
        // console.log('User details, user:', this.props) // dev
        const { id } = this.props.match.params
        const data = await api.getUserInfo(id);
        //console.log('Got data: ', data) // dev
        this.setState({ userData: data });
    }
  
    render() {
      return (
        <div>
            { 
                Object.keys(this.state.userData).length === 0
                ? 'Waiting for user details...' 
                : renderUserDetail(this.state.userData)
            }
        </div>
      );
    }

    // Set default props
    static defaultProps = {
        id: 0
    }
}
