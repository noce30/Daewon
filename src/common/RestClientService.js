import * as _ from "lodash";
import storageService from "./StorageService";
import Constants from "./Constants";

const RequestMethod = {
  HEAD: "HEAD",
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

/**
 * Represent Centralize Ajax Service
 */

const applicationJsonType = "application/json";
let defaultHeaders = {};
const authTokenKey = 'authtoken';

export class RestClientService {
  static singleInstance = null;

  static _singleInstance() {
    return (
      RestClientService.singleInstance ||
      (RestClientService.singleInstance = new RestClientService())
    );
  }

  getUrls = [];

  async getAuthToken() {
    let authToken = await storageService.retrieve(Constants.Store.AccessToken);
    if (authToken)
      defaultHeaders[authTokenKey] = authToken;
  }

  async request(url, type, data, customHeaders) {
    let headers = {
      'Content-Type': applicationJsonType,
      'Accept': applicationJsonType
    };

    // if (!defaultHeaders[authTokenKey]) {
    //   await this.getAuthToken();
    // }

    headers = _.merge(headers, defaultHeaders);

    if (customHeaders) {
      headers = _.merge(headers, customHeaders);
    }

    const options = {
      method: type,
      headers
    };

    if (data && headers["Content-Type"] === applicationJsonType) {
      options.body = JSON.stringify(data);
    }

    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          const headers = response.headers;

          return response.text().then(textResponse => {
            try {
              const jsonResponse = JSON.parse(textResponse);

              jsonResponse.originalResponse = () => response;
              jsonResponse.headers = () => headers;
              return jsonResponse;
            } catch (e) {
              return textResponse;
            }
          });
        }

        if (response.status === 401) {
          let unauthorizedResponse = {
            message: response.statusText,
            stack: response.url
          };
          throw unauthorizedResponse;
        }

        return response.json().then((actualResponse) => {
          // actualResponse.originalResponse = () => response;
          throw actualResponse;
        });
      })
      .then((response) => {
        try {
          return JSON.parse(response);
        } catch (e) {
          return response;
        }
      })
      .catch(error => console.log("error", error));
  }

  head(url) {
    return this.request(url, RequestMethod.HEAD);
  }

  get(url, customHeaders) {
    return this.request(url, RequestMethod.GET, null, customHeaders);
  }

  singleGet(url, customHeaders) {
    const existingRequest = this.getUrls.find(
      getRequest => getRequest.url === url
    );
    if (existingRequest) {
      return existingRequest.request;
    }

    const promise = this.request(
      url,
      RequestMethod.GET,
      null,
      customHeaders
    ).then(response => {
      setTimeout(() => {
        this.getUrls = _.filter(
          this.getUrls,
          getRequest => getRequest.url !== url
        );
      }, 700);

      return response;
    });

    this.getUrls.push({
      url: url,
      request: promise
    });

    return promise;
  }

  post(url, data, customHeaders) {
    return this.request(url, RequestMethod.POST, data, customHeaders);
  }

  async postWithOriginal(url, data, customHeaders) {
    return this.request(url, RequestMethod.POST, data, customHeaders);
  }

  put(url, data, customHeaders) {
    return this.request(url, RequestMethod.PUT, data, customHeaders);
  }

  delete(url, customHeaders) {
    return this.request(url, RequestMethod.DELETE, null, customHeaders);
  }
}

const restClientService = RestClientService._singleInstance();

export default restClientService;
