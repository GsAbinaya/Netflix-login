import logo from '../assets/logo.png'

export default function Navbar({ onSignInClick, onLogoClick }) {
return (
<nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black absolute top-0 w-full z-10">
{/* Logo */}
<div className="cursor-pointer" onClick={onLogoClick}>
<img src={logo} alt="Netflix" className="w-28 sm:w-32" />
</div>

{/* Language + Sign In */}
<div className="flex items-center gap-4">
<select className="bg-transparent border border-gray-400 text-white px-3 py-1 rounded">
<option value="en" className="text-black">English</option>
<option value="de" className="text-black">Deutsch</option>
</select>

<button
onClick={onSignInClick}
className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
>
Sign In
</button>
</div>
</nav>
)
}
