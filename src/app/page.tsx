// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";
import { getDiscordLoginURL, getDiscordUser } from "./api/discord";
import { FaDiscord } from "react-icons/fa";

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
      <h1 className="text-4xl font-bold mb-8"> Discord Login</h1>

      <button
        onClick={handleDiscordLogin}
        className="bg-blue-500 flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <FaDiscord size={50} className="mr-4" />
        <span>Login with Discord</span>
      </button>
    </div>
  </div>
  );
};

export default Home;
