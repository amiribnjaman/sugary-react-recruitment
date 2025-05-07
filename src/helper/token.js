// This file contains functions to manage access and refresh tokens in local storage.
// It includes functions to set, get, and refresh tokens, as well as a function to check if a token is expired.
export const getToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

export const refreshToken = async () => {
  const response = await fetch(
    "https://sugarytestapi.azurewebsites.net/Account/RefreshToken",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        AccessToken: getToken(),
        RefreshToken: getRefreshToken(),
      }),
    }
  );

  // Check if the response is ok
  // If not, throw an error to be handled by the calling function
  if (!response.ok) {
    throw new Error("Failed to refresh access token");
  }

  const data = await response.json();
  
  // Check if the response contains a new access token and refresh token
  if (data.Token) {
    localStorage.setItem("accessToken", data.Token);
    localStorage.setItem("refreshToken", data.RefreshToken);
  }
  return data.Token;
};
