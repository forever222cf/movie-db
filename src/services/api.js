import axios from 'axios';
import env from './../utils/env';

const config = {
  // withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': env.X_RAPIDAPI_HOST,
    'x-rapidapi-key': env.X_RAPIDAPI_KEY
  }
}

const _generateParams = obj => {
  return Object.keys(obj).map(key => {
    return key + '=' + encodeURIComponent(obj[key])
  }).join('&');
}

const _combineHeader = headers => {
  let obj = Object.assign(config, {});
  if (headers) {
    for (let p in headers) {
      obj.headers[p] = headers[p];
    }
  }
  return obj;
}

export default {
  install () {
    axios.defaults.baseURL = env.BASE_URL;
    for (let name in config.headers) {
      axios.defaults.headers.common[name] = config.headers[name];
    }
    // API Timeout
    axios.defaults.timeout = env.TIMEOUT;
    // Config interceptors
    axios.interceptors.request.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });
    axios.interceptors.response.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    })
  },
  get: obj => {
    return axios.get(obj.url + (obj.data ? ('?' + _generateParams(obj.data)) : ''), _combineHeader(obj.headers));
  },
  post: obj => {
    return axios.post(obj.url, obj.data, _combineHeader(obj.headers));
  },
  put: obj => {
    return axios.put(obj.url, JSON.stringify(obj.data), _combineHeader(obj.headers));
  },
  patch: obj => {
    return axios.patch(obj.url, JSON.stringify(obj.data), _combineHeader(obj.headers));
  },
  detele: obj => {
    return axios.delete(obj.url + (obj.data ? ('?' + _generateParams(obj.data)) : ''), _combineHeader(obj.headers));
  }
}
