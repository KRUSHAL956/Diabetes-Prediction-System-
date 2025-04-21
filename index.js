const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080; // Change the port if needed

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

