import React from 'react';
import { useState, useEffect } from 'react';
import Users from './users';
import { addUsers, getUsers, addUsersCache } from '../pages/index.js';


const QueryData = (props) => {

    const [users, updateState] = useState([]);

    useEffect(() => {

        const getDataFromStore = async () => {

            document.getElementById("connection-status").innerHTML = await fetchPromise();
            //const data = await getUsers('Ervin Howell');
            const data = await getUsers(props.searchValue);
            updateState([...users, data])
        }
        getDataFromStore();

    }, [])

    //Network disgnosing with a Promise and wrapping the fetch query function inside it...

    const fetchPromise = () => {
        const promiseRequest = new Promise(async (resolve) => {
            try {
                await queryData();
            } catch (err) {
                resolve("NO connection, showing offline results")
            }
            resolve("Connection is ok")
        });

        const promiseHanging = new Promise((resolve) => {
            setTimeout(
                resolve,
                3000,
                "The connection is hanging, showing offline results")
        });
        return Promise.race([promiseRequest, promiseHanging]);

    }

    // const queryDataId = async (id) => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${searchValue}`);
    //     const data = await response.json();
    //     return data;
    // }

    const queryData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // Implemented offline functionailty with the help of methods written in Landing page(index.js)

        await addUsers(data);
        data.forEach(addUsersCache);
    }

    return (
        <div>
            <h3 id="connection-status"></h3>

            {users.length > 0 ? <Users users={users} /> : 'No users found...'}

        </div>
    )
}

export default QueryData
