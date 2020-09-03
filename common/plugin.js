export const imgAddress = (data) => {
	return "https://www.bhgbzx.gov.cn" + data
}

export const simpleCopy = (data) => {
	var obj = Array.isArray(data) ? [] : {}
	for (let i in data) {
		obj[i] = data[i]
	}
	return obj
}

export const deepClone = (source) => {
  const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for(let keys in source){ // 遍历目标
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){ // 如果值是对象，就递归一下
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else if (keys == 'Name') { // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      } else if (keys == 'Id') {
		 targetObj[keys] = source[keys];
	  }
    }
	targetObj.isClick = false
	targetObj.isOpen = false
  }
  return targetObj;
} 

export const formatRichText = (html) => { // 富文本格式处理
	let newContent= html.replace(/<img[^>]*>/gi,function(match,capture){
		match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
		match = match.replace(/src="[^"]+"/gi, (str) => {
			let newStr = str.slice(5)
			if (newStr.charAt(0) === '/') {
				return 'src="https://www.bhgbzx.gov.cn' + newStr
			} else {
				return str
			}
		})
		match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
		match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
		return match;
	});
	newContent = newContent.replace(/style="[^"]+"/gi,function(match,capture){
		match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
		return match;
	});
	newContent = newContent.replace(/<br[^>]*\/>/gi, '');
	newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
	return newContent;
}