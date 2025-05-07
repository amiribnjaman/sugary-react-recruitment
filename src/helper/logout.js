// This function clears the access and refresh tokens from local storage
// // when the user logs out. It can be called from a logout button.
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
