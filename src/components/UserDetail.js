import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IdentidadAPI } from '../api/identidadAPI'

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

    renderUserDetailField = (fieldDesc, fieldVal) => {
        return(
            <div className='user-detail-field' key={fieldDesc}>
                <span className='user-detail-field--desc'>
                    { fieldDesc }
                </span>
                <span className='user-detail-field--val'>
                    { fieldVal }
                </span>
            </div>
        )
    }

    renderUserDetail = (user) => {
        console.log('User data', user) // dev
        const details = Object.entries(user)
        return(
                <div className='user-page'>
                    <div className='user-detail'>
                        <h1>User details</h1>
                        { details.map(el => this.renderUserDetailField(el[0], el[1])) }
                    </div>
                    <Link className='list-users-link' to="/users">List users</Link>
                </div>
                )
    }
  
    render() {
      return (
        <div>
            { 
                Object.keys(this.state.userData).length === 0
                ? 'Waiting for user details...' 
                : this.renderUserDetail(this.state.userData)

            }
        </div>
      );
    }

    // Set default props
    static defaultProps = {
        id: 0
    }
}
