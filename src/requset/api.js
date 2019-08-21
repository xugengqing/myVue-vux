import request from './requset.js';

const preUrl = process.env.NODE_ENV === 'development' ? '/api/coding' : '';

export const loginPost = params => request.post(`${preUrl}/tokens`,params);