import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLoginSuccess }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');


const handleSubmit = async (e) => {
e.preventDefault();

if (!email || !password) {
setError('All fields are required');
return;
}

try {
const res = await axios.post('http://localhost:5000/login', { email, password });
if (res.data.success) {
onLoginSuccess()
} else {
setError(res.data.message);
}
} catch {
setError('Server error. Please try again later.');
}
};

return (
<div className="flex items-center justify-center h-screen bg-black text-white">
<form onSubmit={handleSubmit} className="bg-[#111] p-10 rounded w-96 shadow-lg">
<h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
{error && <p className="text-red-500 text-sm mb-3">{error}</p>}
<input
type="email"
placeholder="Email"
className="w-full p-3 mb-4 rounded bg-gray-700"
onChange={(e) => setEmail(e.target.value)}
/>
<input
type="password"
placeholder="Password"
className="w-full p-3 mb-4 rounded bg-gray-700"
onChange={(e) => setPassword(e.target.value)}
/>
<button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
Sign In
</button>
<p className="text-gray-400 text-sm mt-4">
New to Netflix? <span className="text-white underline cursor-pointer">Sign up now.</span>
</p>
</form>
</div>
);
}

