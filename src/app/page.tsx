// src/app/page.tsx
"use client"
import { useState, useEffect } from 'react';
import { getDiscordLoginURL, getDiscordUser } from './api/discord';

const Home: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDiscordLogin = () => {
    // Redirect the user to Discord for login
    window.location.href = getDiscordLoginURL();
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
       
          <h1 className="text-4xl font-bold mb-4">Next.js Discord Login</h1>
      
          <button
            onClick={handleDiscordLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login with Discord
          </button>
   

       
      </div>
    </div>
  );
};

export default Home;
