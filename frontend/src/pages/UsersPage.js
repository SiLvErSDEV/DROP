// frontend/src/pages/UsersPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from '../components/UsersTable';

function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => console.error(error));
    };

    const editUser = (id) => {
        // Implement edit functionality here
    };

    return (
        <div>
            <h1>Users</h1>
            <UsersTable users={users} onDelete={deleteUser} onEdit={editUser} />
        </div>
    );
}

export default UsersPage;
