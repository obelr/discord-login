"use client"
import { useState, useEffect } from "react";
import { getDiscordUser } from "../api/discord";
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
    <div>
      {" "}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          {user && (
            <div>
              <p className="bg-red-500 text-white p-2 mb-2">
                User ID: {user.id}
              </p>
              <p className="bg-red-500 text-white p-2">
                Username: {user.username}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
