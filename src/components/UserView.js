import React from 'react'
import { Link } from 'react-router-dom'
import './UserDetail.css'
import './UsersList.css'

const renderUserDetailFieldValue = (fieldVal) => {
    if (fieldVal instanceof Array)
        return fieldVal.map(el => JSON.stringify(el))
    else
        return fieldVal
}

const renderUserDetailField = (fieldDesc, fieldVal) => {
    return(
        <div className={`user-detail-field user-detail-field-${fieldDesc}`} key={fieldDesc}>
            <span className='user-detail-field--desc'>
                { fieldDesc }
            </span>
            <span className='user-detail-field--val'>
                { renderUserDetailFieldValue(fieldVal) }
            </span>
        </div>
    )
}

export const renderUserDetail = (user) => {
    console.log(`Rendering user data for user ${user.nip}`, user) // dev
    const details = Object.entries(user)
    return(
            <div className='user-page'>
                <div className='user-detail'>
                    <h1>User {user.nip} details</h1>
                    { details.map(el => { 
                            // console.log('Field', el[0], el[1]) // dev
                            return(renderUserDetailField(el[0], el[1]))
                        }) 
                    }
                </div>
                <Link className='list-users-link' to="/users">List users</Link>
            </div>
    )
}

const renderUserListItem = (nip) => {
    return(<li className='user' key={nip} >
            <Link className='user-detail-link'
                  to={`/users/${nip}`}>
                      {nip}
            </Link>
          </li>)
}

export const renderUserList = (users) => {
    return(<div className='users'>
                <h1 className='users-title'>Users</h1>
                <ul className='users-list'> 
                    { users.map(el => renderUserListItem(el))} 
                </ul>
            </div>)
}
