import Api from './api'
import fetch from './fetch.js'

/* 用户登陆 */
// 用户本地账号登陆
export const Login = (data) => fetch.postMethods(Api.Login.url, {
	...Api.Login.data, ...data
})

// 用户本地账号登出
export const LoginOut = (data) => fetch.postMethods(Api.LoginOut.url, {
	...Api.LoginOut.data, ...data
})


/* 课程部分信息 */
// 课程列表信息
export const GetCourseInfoList = (data) => fetch.postMethods(Api.GetCourseInfoList.url, {
	...Api.GetCourseInfoList.data, ...data
})
// 课程种类列表
export const GetChannelInfoList = (data) => fetch.postMethods(Api.GetChannelInfoList.url, {
	...Api.GetChannelInfoList.data, ...data
})
// 课程详情
export const GetCourseDetail = (data) => fetch.postMethods(Api.GetCourseDetail.url,{
	...Api.GetCourseDetail.data, ...data
})
// 提交视频观看进度(MP4)
export const UploadTimeNode = (data) => fetch.postMethods(Api.UploadTimeNode.url,{
	...Api.UploadTimeNode.data, ...data
})
// 提交视频观看进度(三分频)
export const SyncUserStudyDataXCX = (data) => fetch.postMethods(Api.SyncUserStudyDataXCX.url,{
	...Api.SyncUserStudyDataXCX.data, ...data
})
// 用户订阅课程列表
export const GetUserCourseInfoList = (data) => fetch.postMethods(Api.GetUserCourseInfoList.url, {
	...Api.GetUserCourseInfoList.data, ...data
})

