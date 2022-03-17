// return object with all the methods
export const databaseModule = (sendRequest) => {
  const getCollections = () => {
    return sendRequest('/collections', 'GET');
  };

  const getCollection = (id) => {
    return sendRequest(`/collections/${id}`, 'GET');
  };

  const createCollection = (collection, data) => {
    return sendRequest(`/${collection}`, 'POST', data);
  };

  const deleteCollection = (collection) => {
    return sendRequest(`/${collection}`, 'DELETE');
  };

  const getItem = (collection, id) => {
    return sendRequest(`/${collection}/${id}`, 'GET');
  };

  const createItem = (collection, data) => {
    return sendRequest(`/${collection}`, 'POST', data);
  };

  const updateItem = (collection, id, data) => {
    return sendRequest(`/${collection}/${id}`, 'PUT', data);
  };

  const deleteItem = (collection, id) => {
    return sendRequest(`/${collection}/${id}`, 'DELETE');
  };

  return {
    getCollections,
    getCollection,
    createCollection,
    deleteCollection,
    getItem,
    createItem,
    updateItem,
    deleteItem,
  };
};