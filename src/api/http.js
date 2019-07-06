import axios from 'axios'
import router from '../router'

import store from '../store'
//创建axios实例
export const Axios = axios.create({
	// baseURL: 'https://api.cloudpet.org/',
	// timeout: 5000,
})

// Axios.defaults.withCredentials = true;
//添加请求拦截器
Axios.interceptors.request.use((config) => {
	// console.log('123',config.data)
	//在发送请求之前设置token
// 	if (store.state.token) {
// 		config.headers.common['Authorization'] = store.state.token;
// 	}
	return config;
}, (err) => {
	//对请求错误做些什么
	return Promise.reject(err);
})

//添加响应拦截器
Axios.interceptors.response.use((res) => {
	// console.log('resp',res);
// 	if (res.data.error && res.data.error.code && res.data.error.code == -101) {
// 		router.push('/login');
// 		store.commit('LOGOUT');
// 		Toast(res.data.error.message);
// 	}
// 	if(res.data.error && res.data.error.code){
// 		// Toast(res.data.error.message);
// 	}
	return res;
})

// 将 Axios 实例添加到Vue的原型对象上
export default {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$http', {
			value: Axios
		})
	}
}
