const authModule = (sendRequest) => {
  const basePath = '/server/development/auth';

  const register = (email, password) => {
    return sendRequest(`${basePath}/signup`, 'POST', { email, password });
  };
  
  const login = (email, password) => {
    return sendRequest(`${basePath}/login`, 'POST', { email, password });
  };

  const logout = (email) => {
    return sendRequest(`${basePath}/logout`, 'POST', { email });
  };

  return {
    register,
    login,
    logout,
  };
}

export default authModule;