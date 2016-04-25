import request from 'superagent';
import fetchJsonp from 'fetch-jsonp';

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
        console.error(404);
      } else {
        console.error('Catelog API failed ', error.message || error.status);
      }

      if (failureCallback) {
        failureCallback(error.status);
      }
    } else {
      const parsedData = JSON.parse(result.text);
      successCallback(parsedData);
    }
  });

};

export const getPostDetails = (id, type, successCallback, failureCallback) => {
  request.get(`/social/${type}`)
  .query({ id })
  .accept('application/json')
  .end((error, result) => {
    if (error) {
      if (error.status === 404) {
        console.error(404);
      } else {
        console.error(`/${type} API failed`, error.message || error.status);
      }

      if (failureCallback) {
        failureCallback(error.status);
      }
    } else {
      const parsedData = JSON.parse(result.text);
      successCallback(parsedData);
    }
  });
};

export const jsonpGetRequest = (requestUrl, successCallback, failureCallback) => {
  fetchJsonp(requestUrl)
  .then((response) =>
   response.json()
  ).then((json) =>
    successCallback(json)
  ).catch((err) =>
    failureCallback(err)
  );
};
