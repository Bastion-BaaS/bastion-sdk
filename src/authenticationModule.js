const authModule = (sendRequest) => {
  const basePath = '/server/development/auth';

  const register = (username, email, password) => {
    return sendRequest(`${basePath}/signup`, 'POST', { username, email, password });
  };
  
  const login = (username, password) => {
    return sendRequest(`${basePath}/login`, 'POST', { username, password });
  };

  const logout = () => {
    return sendRequest(`${basePath}/logout`, 'POST');
  };

  return {
    register,
    login,
    logout,
  };
}

export default authModule;