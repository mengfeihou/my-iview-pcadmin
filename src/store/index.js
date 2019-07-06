import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: window.localStorage.getItem('token'),
		
	},
	mutations: {
		// 获取token的值
		LOGIN:(state,data)=>{
			state.token = data;
			localStorage.setItem('token',state.token);
			console.log('jwtoken',data)
		},
		// 登出
		LOGOUT:(state)=>{
			state.token='',
			localStorage.removeItem('token');
			localStorage.clear()
		},
	}
})
