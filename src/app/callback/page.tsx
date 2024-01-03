"use client"
import { useState, useEffect } from "react";
import { getDiscordUser } from "../api/discord";
import Image from 'next/image';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const handleCallback = async () => {
    // Extract code from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code && window.location.pathname === "/callback") {
      setLoading(true);
      // Get user details from Discord
      const discordUser = await getDiscordUser(code);
      setUser(discordUser);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mb-8">
        <div
        className=" mb-8 flex items-center justify-center">
     <span>
              {user.avatar ? (
                <Image
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              ) : (
                <Image
                  src="/avatar.png" // Replace with your placeholder image
                  alt="Placeholder Avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
            </span>
        </div>
        {user && (
          <div>
       
            <p className="bg-red-500 text-white p-2 mb-2">User ID: {user.id}</p>
            <p className="bg-red-500 text-white p-2">Username: {user.username}</p>
          </div>
        )}
      </div>
    </div>
  );
              }  
export default Profile;
