import request from 'superagent';

export const getApiDetail =
function getApiDetail(queryData, successCallback, failureCallback) {
  const {
    queryParameter,
    userName,
    password,
    content,
    productUrl,
  } = queryData;
  const queryValue = queryParameter ? queryParameter : '';

  let req = request.post(productUrl);
  if (userName && password && content) {
    req = req.auth(userName, password).set('Content-Type', content);
  }

  req.accept('application/json')
  .send(queryValue)
  .end((error, result) => {
    if (error) {
      if (error.status === 404) {
        console.log(404);
        failureCallback(error.status);
      } else {
        console.log('Catelog API failed ', error.message || error.status);
        failureCallback(error.status);
      }
    } else {
      const parsedData = JSON.parse(result.text);
      successCallback(parsedData);
    }
  });

};
