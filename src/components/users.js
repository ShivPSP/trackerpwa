import React from 'react';
import User from './user';

const Users = ({ users }) => {
    return (
        <div>

            {users.map((item) => (<User user={item} />))}

        </div>
    )
}

export default Users
