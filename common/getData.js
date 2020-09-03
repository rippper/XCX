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

/* 考试部分信息 */
// 获取考试列表
export const  GetExamList = (data) => fetch.postMethods(Api.GetExamList.url, {
	...Api.GetExamList.data, ...data 
})
// 获取考试详情信息
export const GetExam = (data) => fetch.postMethods(Api.GetExam.url, {
	...Api.GetExam.data, ...data
})
// 考试答案提交
export const UpdateUserExam = (data) => fetch.postMethods(Api.UpdateUserExam.url, {
	...Api.UpdateUserExam.data, ...data
})

/* 文章部分信息 */
// 获取文章种类信息
export const GetArticleChannelInfoList = (data) => fetch.postMethods(Api.GetArticleChannelInfoList.url, {
	...Api.GetArticleChannelInfoList.data, ...data
})
// 获取文章列表
export const GetArticleInfoList = (data) => fetch.postMethods(Api.GetArticleInfoList.url, {
	...Api.GetArticleInfoList.data, ...data
})
// 获取文章详情
export const ArticleDetail = (data) => fetch.postMethods(Api.ArticleDetail.url, {
	...Api.ArticleDetail.data, ...data
})

/* 通知公告部分信息 */
// 通知列表
export const GetNoticeInfoList = (data) => fetch.postMethods(Api.GetNoticeInfoList.url, {
	...Api.GetNoticeInfoList.data, ...data
})
// 通知详情
export const NoticeDetail = (data) => fetch.postMethods(Api.NoticeDetail.url, {
	...Api.NoticeDetail.data, ...data
})

/* 电子书部分信息 */
// 电子书列表
export const GetBookInfoList = (data) => fetch.postMethods(Api.GetBookInfoList.url, {
	...Api.GetBookInfoList.data, ...data
})
// 电子书章节
export const GetBookChapterInfoList = (data) => fetch.postMethods(Api.GetBookChapterInfoList.url, {
	...Api.GetBookChapterInfoList.data, ...data
})
// 电子书章节详情
export const GetBookChapterContent = (data) => fetch.postMethods(Api.GetBookChapterContent.url,{
	...Api.GetBookChapterContent.data, ...data
})

/* 培训班部分信息 */
// 培训班种类列表
export const GetTrainingTypeList = (data) => fetch.postMethods(Api.GetTrainingTypeList.url, {
	...Api.GetTrainingTypeList.data, ...data
})
// 培训班列表
export const GetTrainingClass = (data) => fetch.postMethods(Api.GetTrainingClass.url, {
	...Api.GetTrainingClass.data, ...data
})
// 培训班详情信息
export const GetTrainingDetail = (data) => fetch.postMethods(Api.GetTrainingDetail.url, {
	...Api.GetTrainingDetail.data, ...data
})
// 培训班课程列表
export const GetClassCourseInfoList = (data) => fetch.postMethods(Api.GetClassCourseInfoList.url, {
	...Api.GetClassCourseInfoList.data, ...data
})
// 培训班考试列表
export const GetClassExamList = (data) => fetch.postMethods(Api.GetClassExamList.url, {
	...Api.GetClassExamList.data, ...data
})
// 培训班报名
export const UpdateTrainingStudentup = (data) => fetch.postMethods(Api.UpdateTrainingStudentup.url, {
	...Api.UpdateTrainingStudentup.data, ...data
})
// 取消培训班报名
export const UpdateTrainingStudentdown = (data) => fetch.postMethods(Api.UpdateTrainingStudentdown.url, {
	...Api.UpdateTrainingStudentdown.data, ...data
})

/* 个人中心部分信息 */
// 获取用户个人信息
export const GetUserInfo = (data) => fetch.postMethods(Api.GetUserInfo.url, {
	...Api.GetUserInfo.data, ...data
})
// 获取部门列表信息
export const GetGroupList = (data) => fetch.postMethods(Api.GetGroupList.url, {
	...Api.GetGroupList.data, ...data
})
// 提交用户修改的个人信息
export const UpdateUserInfo = (data) => fetch.postMethods(Api.UpdateUserInfo.url, {
	...Api.UpdateUserInfo.data, ...data
})
// 用户提交修改密码
export const SetUserPassword = (data) => fetch.postMethods(Api.SetUserPassword.url, {
	...Api.SetUserPassword.data, ...data
})
// 用户扫码登录
export const LoginQRCode = (data) => fetch.postMethods(Api.LoginQRCode.url, {
	...Api.LoginQRCode.data, ...data
})

/* 排行榜部分信息 */
// 获取排行信息
export const GetRankInfoList = (data) => fetch.postMethods(Api.GetRankInfoList.url, {
	...Api.GetRankInfoList.data, ...data
})

