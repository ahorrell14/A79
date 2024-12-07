import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p>Message from backend: {message}</p>
        </div>
    );
}

export default App;