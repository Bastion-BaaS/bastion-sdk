// return object with all the methods
export const databaseModule = (sendRequest) => {
  const getCollections = () => {
    return sendRequest('/collections', 'GET');
  };

  const getCollection = (id) => {
    return sendRequest(`/collections/${id}`, 'GET');
  };

  const createCollection = (collectionName) => {
    return sendRequest(`/collections`, 'POST', { collectionName });
  };

  const deleteCollection = (id) => {
    return sendRequest(`/collections/${id}`, 'DELETE');
  };

  const getItem = (collection, id) => {
    return sendRequest(`/collections/${collection}/${id}`, 'GET');
  };

  const createItem = (collection, data) => {
    return sendRequest(`/collections/${collection}`, 'POST', data);
  };

  const updateItem = (collection, id, data) => {
    return sendRequest(`/collections/${collection}/${id}`, 'PUT', data);
  };

  const deleteItem = (collection, id) => {
    return sendRequest(`/collections/${collection}/${id}`, 'DELETE');
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