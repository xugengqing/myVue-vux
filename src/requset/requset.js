import axios from 'axios';
import qs from 'qs'
// 创建一个拥有配置的axios的实例
const service = axios.create({
    timeout: 5000 // 单位：ms
});
// 请求拦截器
service.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (config.method === 'post' || config.method === 'put') {
        if (token) {
            config.data = config.data || {};
            config.data.token = token
        }
        config.data = qs.stringify(config.data, {arrayFormat: 'repeat', allowDots: true})
    } else if (config.method === 'delete' || config.method === 'get') {
        if (token) {
            config.params = config.params || {};
            config.params.token = token
        }
    }
    return config
}, error => {
    return Promise.reject(error)
});
// 请求结果返回拦截器
service.interceptors.response.use(response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
);
// 导出axios实例
export default service