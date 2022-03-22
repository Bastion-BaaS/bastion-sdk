const cloudCodeModule = (sendRequest) => {
  const basePath = '/server/development/ccf';

  // parameters optional
  const run = (ccfName, parameters=[]) => {
    return sendRequest(`${basePath}/${ccfName}/run`, 'POST', parameters);
  };

  return {
    run,
  };
};

export default cloudCodeModule
