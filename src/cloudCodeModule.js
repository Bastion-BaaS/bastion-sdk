const cloudCodeModule = (sendRequest) => {
  const run = (ccfName) => {
    return sendRequest(`/ccf/${ccfName}/run`, 'POST');
  };

  return {
    run,
  };
};

export default cloudCodeModule
