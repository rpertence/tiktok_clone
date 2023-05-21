import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cross-platform.rp.devfactory.com',
});

export default axiosInstance;
