const databaseModule = (sendRequest) => {
  const getCollections = () => {
    return sendRequest('/collections', 'GET');
  };

  const getCollection = (name) => {
    return sendRequest(`/data/${name}`, 'GET');
  };

  const createCollection = (name) => {
    return sendRequest(`/data`, 'POST', { name })
  };

  const deleteCollection = (name) => {
    return sendRequest(`/data/${name}`, 'DELETE');
  };

  const getItem = (name, id) => {
    return sendRequest(`/data/${name}/${id}`, 'GET');
  };

  const createItem = (name, data) => {
    return sendRequest(`/data/${name}`, 'POST', data);
  };

  const overwriteItem = (name, id, data) => {
    return sendRequest(`/data/${name}/${id}`, 'PUT', data);
  };

  const updateItem = (name, id, data) => {
    return sendRequest(`/data/${name}/${id}`, 'PATCH', data);
  };

  const deleteItem = (name, id) => {
    return sendRequest(`/data/${name}/${id}`, 'DELETE');
  };

  return {
    getCollections,
    getCollection,
    createCollection,
    deleteCollection,
    getItem,
    createItem,
    overwriteItem,
    updateItem,
    deleteItem,
  };
};

export default databaseModule;
