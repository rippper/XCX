export const imgAddress = (data) => {
	return "https://test75.jy365.net" + data
}

export const simpleCopy = (data) => {
	var obj = Array.isArray(data) ? [] : {}
	for (let i in data) {
		obj[i] = data[i]
	}
	return obj
}