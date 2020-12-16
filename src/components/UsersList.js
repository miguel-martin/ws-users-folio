import React, { Component } from 'react'
import { IdentidadAPI } from '../api/identidadAPI'
import { UserList } from './UserView'
import { UZDatePicker } from './UZDatePicker'

const DatePickerWrapper = ({since, dateChangeHandler}) => (
  <div className="datepicker">
    <span className="datepicker__text">Updated since: </span>
    <span className="datepicker__picker">
      <UZDatePicker sinceDate={since} handleDateChange={dateChangeHandler}/>
    </span>
   </div>
)

export class UsersList extends Component {

    state = { 
              api: new IdentidadAPI(process.env.REACT_APP_IDENTIDAD_API_USERNAME,
                                     process.env.REACT_APP_IDENTIDAD_API_PWD),
              message: 'Waiting for users API...',
              //since: new Date(2020, 11, 1), // by default, list users from 1 Dec 2020
              since: new Date(), // by default, list users from today
              users: []
            }

    async listUsers(since) {

        let message, users

        // get users...
        console.log('Listing users since ', since)
        const data = await this.state.api.getUsers(since);
        console.log('Got data: ', data)
        // data can be undefined (server did not respond ok)
        
        
        if (typeof data === 'object' && Array.isArray(data) && data.length > 0){ // an array with some items
          message = `Results: ${data.length}`
          users = data
        }
        else if (typeof data === 'object' && Array.isArray(data) && data.length === 0){ // an empty array
          message = '0 results'
          users = []
        }
        else { //(typeof data === 'undefined') {
          message = 'API ERROR (check console)'
          users = []
        }
        this.setState({ 
          message: message,
          users: users
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
            <DatePickerWrapper since={this.state.since} dateChangeHandler={this.handleDateChange}/>
            { !this.state.users.length
              ? <div className='message'>
                  {this.state.message}
                </div>
              : [ <UserList users={this.state.users} 
                            year={this.state.since.getFullYear()}
                            month={this.state.since.getMonth()+1}
                            day={this.state.since.getDate()} />
                ]
            }
        </div>
      );
    }
}