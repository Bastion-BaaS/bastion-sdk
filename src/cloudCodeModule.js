const cloudCodeModule = (sendRequest) => {
  const run = (ccfName) => {
    return sendRequest(`/ccf/${ccfName}/run`, 'GET');
  };

  return {
    run,
  };
};

export default cloudCodeModule