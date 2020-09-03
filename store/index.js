import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: uni.getStorageSync('userInfo')||''
	},
	getters: {
		
	},
	mutations: {
		setUserInfo: (state, value) => {
			state.userInfo = value
			console.log(state.userInfo)
		},
		deleteUserInfo: (state, value) => {
			state.userInfo = ''
		}
	},
	actions: {
		
	}
})

export default store