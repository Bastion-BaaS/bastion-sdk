const fileStorageModule = (sendRequest) => {
  const basePath = '/server/development/files';

  const getAllFiles = () => {
    return sendRequest(`${basePath}`, 'GET');
  };

  const getFile = (id) => {
    return sendRequest(`${basePath}/${id}`, 'GET');
  };

  const uploadFile = (data, name) => {
    const formData = new FormData();
    formData.append('file', data);
    formData.append('fileName', name);

    return sendRequest(`${basePath}`, 'POST', formData);
  };

  const deleteFile = (id) => {
    return sendRequest(`${basePath}/${id}`, 'DELETE');
  };

  return {
    getAllFiles,
    getFile,
    uploadFile,
    deleteFile,
  };
};

export default fileStorageModule;