const databaseModule = (sendRequest) => {
  const basePath = '/server/development/data';

  const getAllItems = (name) => {
    return sendRequest(`${basePath}/${name}`, 'GET');
  };

  const getItem = (name, id) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'GET');
  };

  const createItem = (name, data) => {
    return sendRequest(`${basePath}/${name}`, 'POST', { data });
  };

  const overwriteItem = (name, id, data) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'PATCH', { data });
  };

  const updateItem = (name, id, data) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'PUT', { data });
  };

  const deleteItem = (name, id) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'DELETE');
  };

  return {
    getAllItems,
    getItem,
    createItem,
    overwriteItem,
    updateItem,
    deleteItem,
  };
};

export default databaseModule;
