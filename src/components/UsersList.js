import React, { Component } from 'react'
import { IdentidadAPI } from '../api/identidadAPI'
import { UserList } from './UserView'
import { UZDatePicker } from './UZDatePicker'

export class UsersList extends Component {

    state = { 
              api: new IdentidadAPI(process.env.REACT_APP_IDENTIDAD_API_USERNAME,
                                     process.env.REACT_APP_IDENTIDAD_API_PWD),
              message: 'Waiting for users API...',
              since: new Date(2000, 0, 1),
              users: []
            }

    async listUsers(since) {
        // get users...
        console.log('Listing users since ', since)
        const data = await this.state.api.getUsers(since);
        console.log('Got data: ', data)
        this.setState({ 
          message: (typeof data === 'undefined') ? 'API ERROR (check console)' : '',
          users: (typeof data !== 'undefined') ? data : []
        })
    }
  
    async componentDidMount() {
        // get users...
        await this.listUsers(this.state.since)
    }

    handleDateChange = (date) => {
      // console.log('Date changed to ', date) // dev
      this.setState({ since: date, users: [], message: 'New date. Waiting for users API...' })
      this.listUsers(date)
    }
  
    render() {
      console.log(this.state) // dev
      return (
        <div>
            { !this.state.users.length
              ? this.state.message
              : [ <div className="datepicker">
                    <span className="datepicker__text">Updated since: </span>
                    <span className="datepicker__picker">
                      <UZDatePicker sinceDate={this.state.since} handleDateChange={this.handleDateChange}/>
                    </span>
                  </div>,
                  <UserList users={this.state.users} 
                            year={this.state.since.getFullYear()}
                            month={this.state.since.getMonth()+1}
                            day={this.state.since.getDate()} />
                ]
            }
        </div>
      );
    }
}