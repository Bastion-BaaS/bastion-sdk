import axios from 'axios';
import authModule from './authenticationModule';
import databaseModule from './databaseModule';
import cloudCodeModule from './cloudCodeModule';
import fileStorageModule from './fileStorageModule';

const initialize = (hostUrl, apiKey) => {
  // generic authorized sendRequest function that other modules can use
  // - all requests will use the apiKey provided in the initialize function
  const sendRequest = async (path, method, data) => {
    const config = {
      method,
      data,
      url: `${hostUrl}${path}`,
      headers: {
        'Authorization': `Basic ${apiKey}`,
        'X-Requested-By': 'client-sdk'
      }
    };

    if (data instanceof FormData) { // if data is a file upload
      config.data = data;
    } else {
      config.headers['Content-Type'] = 'application/json';
      config.data = JSON.stringify(data);
    }

    return axios(config)
      .then(result => result)
      .catch(err => console.log(err));
  }

  const auth = authModule(sendRequest);
  const db = databaseModule(sendRequest);
  const ccf = cloudCodeModule(sendRequest);
  const storage = fileStorageModule(sendRequest);

  // return object with all of the modules
  return {
    auth,
    db,
    ccf,
    storage,
  };
};

export default initialize;