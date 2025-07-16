const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const mockUser = {
email: 'user@netflix.com',
password: 'password123'
};

app.post('/login', (req, res) => {
const { email, password } = req.body;

if (email === mockUser.email && password === mockUser.password) {
res.json({ success: true });
} else {
res.json({ success: false, message: 'Invalid credentials' });
}
});

app.listen(PORT, () => {
console.log(`✅ Server running on http://localhost:${PORT}`);
});