const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();  
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

const PORT = 3000;

// Hardcoded credentials
const hardcodedCredentials = {
    username: 'Autumn',
    password: 'Autumn',
};

app.post('/login', (req, res) => {
    console.log('Request body:', req.body); // Log the request body

    const { username, password } = req.body;

    if (!username || !password) {
        console.log('Missing username or password');
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (username === hardcodedCredentials.username && password === hardcodedCredentials.password) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Login successful, token generated:', token);
        return res.json({ token });
    }

    console.log('Invalid credentials:', { username, password });
    res.status(401).json({ message: 'Invalid username or password' });
});

// Root route (for testing)
app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.get('/api/discipline-data', (req, res) => {
    const data = {
        labels: ['Computer Science', 'Engineering', 'Physics', 'Chemistry', 'Social Sciences'],
        values: [75, 60, 50, 45, 30], // Research expenditures in millions
    };
    res.json(data);
});

app.get('/api/discipline-data', (req, res) => {
    const data = {
        labels: ['Computer Science', 'Engineering', 'Physics', 'Chemistry', 'Social Sciences'],
        values: [75, 60, 50, 45, 30], // Research expenditures in millions
    };
    res.json(data);
});

app.get('/api/annual-growth', (req, res) => {
    const data = {
        labels: ['2021', '2022', '2023'],
        values: [50, 70, 92], // Annual expenditures in millions
    };
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});