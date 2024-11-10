// axiosWrapper.ts
import axios from 'axios';

const isNodeEnv = typeof window === 'undefined';

// 根据环境设置基础URL
const baseURL = isNodeEnv
  ? process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000' // Node环境使用环境变量
  : ''; // 浏览器环境不需要基础URL

const request = axios.create({
  baseURL,
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(config => {
  // 在这里添加请求拦截逻辑，例如设置Token
  return config;
}, error => {
  // 处理请求错误
  return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(response => {
  // 任何HTTP状态码为2xx的响应数据都会触发此函数
  return response;
}, error => {
  // 任何超出2xx的HTTP状态码都会触发此函数
  // 这里可以处理错误，例如token过期重新登录等
  return Promise.reject(error);
});

export default request;