const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); // Add this line to import the path module

const { generateEuromilhoesKey } = require('./server/euromilhoes');

const routes = {
    '/api/euromilhoes/generate-key': generateEuromilhoesKey,
}

app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.use('/static', express.static(path.join(__dirname, 'static')));

Object.keys(routes).forEach((route) => {
    app.get(route, routes[route]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});