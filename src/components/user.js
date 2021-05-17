import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            <label >Email: </label>
            {user.email}
            <br />
            <label>Name: </label>
            {user.name}
        </div>
    )
}
export default User
