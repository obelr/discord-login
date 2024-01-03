// src/app/api/discord.ts
'use strict';

const redirect_uri = 'http://localhost:3000/callback';

export const getDiscordLoginURL = () => {
  const scopes = ['identify']; // Add more scopes if needed
  const clientId = '1191542978213335171';

  return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&response_type=code&scope=${encodeURIComponent(scopes.join(' '))}`;
};

export const getDiscordUser = async (code: string) => {
  const clientId = '1191542978213335171';
  const clientSecret = 'iHVP8eBlgIQ8cS38N9HWw8jyrvjKhTTs';

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('code', code);
  params.append('redirect_uri', redirect_uri);
  params.append('grant_type', 'authorization_code');

  const response = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const tokenData = await response.json();

  const userResponse = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  const discordUser = await userResponse.json();

  return discordUser;
};
