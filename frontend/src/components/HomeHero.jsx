


export default function HomeHero() {
return (
<section className="flex flex-col items-center justify-center text-center px-4 sm:px-0 min-h-screen text-white max-w-3xl mx-auto">
{/* Big heading */}
<h2 className="text-4xl sm:text-5xl font-bold mb-4">
Unlimited movies, TV shows, and more.
</h2>

{/* Subheading */}
<h4 className="text-lg sm:text-xl mb-6 font-semibold">
Watch anywhere. Cancel anytime.
</h4>

{/* Smaller prompt */}
<h5 className="text-sm sm:text-base mb-6">
Ready to watch? Enter your email to create or restart your membership.
</h5>

{/* Input + Button container */}
<form className="w-full max-w-xl flex flex-col sm:flex-row gap-3">
<input
type="email"
placeholder="Email address"
className="flex-grow px-4 py-3 rounded text-black text-base"
required
/>
<button
type="submit"
className="bg-red-600 text-white px-6 py-3 rounded font-semibold flex items-center justify-center hover:bg-red-700 transition"
>
Get Started &gt;
</button>
</form>
</section>
)
}
