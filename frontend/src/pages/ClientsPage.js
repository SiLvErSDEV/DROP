// frontend/src/pages/ClientsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientsTable from '../components/ClientsTable';

function ClientsPage() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/clients')
            .then(response => setClients(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteClient = (id) => {
        axios.delete(`http://localhost:5000/clients/${id}`)
            .then(() => {
                setClients(clients.filter(client => client.id !== id));
            })
            .catch(error => console.error(error));
    };

    const editClient = (id) => {
        // Implement edit functionality here
    };

    return (
        <div>
            <h1>Clients</h1>
            <ClientsTable clients={clients} onDelete={deleteClient} onEdit={editClient} />
        </div>
    );
}

export default ClientsPage;
