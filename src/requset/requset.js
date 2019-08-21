import axios from 'axios';
import qs from 'qs'
// 创建一个拥有配置的axios的实例
const service = axios.create({
    timeout: 5000 // 单位：ms
});
// 请求拦截器
service.interceptors.request.use(config => {
        console.log(config);
        if (config.method === 'post'){
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);
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