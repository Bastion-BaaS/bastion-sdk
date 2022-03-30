const cloudCodeModule = (sendRequest) => {
  const basePath = '/server/development/ccfs';

  // parameters optional
  const run = (ccfName, parameters) => {
    return sendRequest(`${basePath}/${ccfName}/run`, 'POST', { code: parameters });
  };

  return {
    run,
  };
};

export default cloudCodeModule
