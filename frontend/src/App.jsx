
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';





function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)


  const goHome = () => {
    setShowLogin(false)
    setLoggedIn(false)
  }
  
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar onSignInClick={ () => setShowLogin(true)} 
      onLogoClick={goHome} />


{!loggedIn && !showLogin && <HomeHero />}


        {!loggedIn && showLogin && (
          <LoginPage onLoginSuccess={() => setLoggedIn(true)} />
        )}

        {loggedIn && <Dashboard />}
        </div>
   
  )
}

export default App;
