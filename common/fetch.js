function postMethods (url, datas) {
	const aspxauth = uni.getStorageSync('ASPXAUTH');
	if (aspxauth) { // 当存在aspxauth时，调用存在aspxauth的方法
		return new Promise((resolve, reject) => {
			uni.request({
				url,
				data: datas,
				method: 'POST',
				timeout: 10000,
				header: {
					"Content-Type": "application/json",
					"ASPXAUTH": aspxauth
				},
				success: function (res) {
					resolve(res.data)
				},
				fail: function (error) {
					reject(error)
				}
			})
		}).then((res) => {
			return checkStatusToken(res)
		}).catch((err) => {
			if (err.errMsg == 'request:fail timeout') {
				return {
					Type: -10,
					Message: '请求超时'
				}
			} else {
				console.log(err)
			}
		})
	} else {
		return new Promise((resolve, reject) => {
			uni.request({
				url,
				data: datas,
				method: 'POST',
				timeout: 10000,
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				success: function (res) {
					resolve(res)
				},
				fail: function (error) {
					reject(error)
				}
			})
		}).then((res) => {
			return checkStatus(res)
		}).catch((err) => {
			if (err.errMsg == 'request:fail timeout') {
				return {
					Type: -10,
					Message: '请求超时'
				}
			} else {
				console.log(err)
			}
		})
	}
}

function getMethods (url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			success: function (res) {
				resolve(res)
			},
			fail: function (error) {
				reject(error)
			}
		})
	})
}

function checkStatus (response) {
	if (response) {
		if (response.data.Type === 1) {
			let getAspxauth = response.header.ASPXAUTH || response.header.aspxauth
			if (getAspxauth) {
				uni.setStorageSync('ASPXAUTH', getAspxauth)
				return response.data
			} else {
				return response.data
			}
		} else if (response.data.Type === 0) {
			return response.data
		} else if (response.data.Type == 401) {
			let app1 = uni.getStorageSync('a_app')
			let app2 = uni.getStorageSync('p_app')
			let remember = uni.getStorageSync('remember')
			uni.clearStorageSync()
			uni.setStorageSync('a_app', app1)
			uni.setStorageSync('p_app', app2)
			uni.setStorageSync('remember',remember)
			uni.navigateTo({
				url: "/pages/login/login?type=unlogin"
			})
		} else {
			return response.data
		}
	}
	return {
		status: 404,
		msg: '网络异常'
	}
}

function checkStatusToken (response) {
	if (response) {
		if (response.Type === 1) {
			return response
		} else if (response.Type === 401) {
			let app1 = uni.getStorageSync('a_app')
			let app2 = uni.getStorageSync('p_app')
			let remember = uni.getStorageSync('remember')
			uni.clearStorageSync()
			uni.setStorageSync('a_app', app1)
			uni.setStorageSync('p_app', app2)
			uni.setStorageSync('remember',remember)
			uni.navigateTo({
				url: "/pages/login/login?type=unlogin"
			})
		} else if (response.Type === 0) {
			return response
		} else {
			return response
			console.log('非记录状态：' + response)
		}
	}
	return {
		status: 404,
		msg: '网络异常'
	}
}

export default { getMethods, postMethods }
