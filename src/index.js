import axios from 'axios';
import authModule from './authModule';
import databaseModule from './databaseModule';

const initialize = (hostUrl, apiKey) => {
  // generic authorized sendRequest function that other modules can use
  // - all requests will use the apiKey provided in the initialize function
  const sendRequest = async (path, method, body) => {
    return axios({
      method,
      body,
      url: `${hostUrl}${path}`,
      headers: {
        'Authorization': `Basic ${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  }

  const auth = authModule(sendRequest);
  const db = databaseModule(sendRequest);

  // return object with all of the modules
  return {
    auth,
    db
  };
};

export default initialize;