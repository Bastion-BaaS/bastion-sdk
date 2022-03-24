const databaseModule = (sendRequest) => {
  const basePath = '/server/development/data';

  const getAllItems = (name) => {
    return sendRequest(`${basePath}/${name}`, 'GET');
  };

  const getItem = (name, id) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'GET');
  };

  const createItem = (name, record) => {
    return sendRequest(`${basePath}/${name}`, 'POST', record);
  };

  const overwriteItem = (name, id, record) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'PATCH', record);
  };

  const updateItem = (name, id, record) => {
    return sendRequest(`${basePath}/${name}/${id}`, 'PUT', record);
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
