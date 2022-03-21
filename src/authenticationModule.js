const authModule = (sendRequest) => {
  const register = (email, password) => {
    return sendRequest('/register', 'POST', { email, password })
  };
  
  const login = (email, password) => {
    return sendRequest('/login', 'POST', { email, password })
  };

  const logout = () => {
    return sendRequest('/logout', 'POST');
  };

  return {
    register,
    login,
    logout,
  };
}

export default authModule;