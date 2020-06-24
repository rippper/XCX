const API_URL = "https://test75.jy365.net/api"
// const API_URL = "http://192.168.1.208:8336/api"
const weChatPlant = '/Wechat'

export default {
	/* 用户登陆 */
	// 用户本地账号登陆
	Login: {
		url: API_URL + weChatPlant + '/ValidateUser',
		data: {
			UserId: '',
			Account: '',
			Password: '',
			Mac: '',
			CId: ''
		}
	},
	// 用户本地账号登出
	LoginOut: {
		url: API_URL + weChatPlant + '/LoginOut',
		data: {}
	},
	
	/* 课程部分信息 */
	// 课程列表信息
	GetCourseInfoList: {
		url: API_URL + weChatPlant + '/GetCourseInfoList',
		data: {
			TeacherName: '',
			ChannelId: '',
			ChannelCode: '',
			Type: '',
			CourseType: '',
			ChannelBaseType: '',
			Keyword: '',
			Sort: '',
			Order: '',
			Page: '',
			Rows: ''
		}
	},
	// 课程种类列表
	GetChannelInfoList: {
		url: API_URL + weChatPlant + '/GetChannelInfoList',
		data: {
			ParentId: 0
		}
	},
	// 课程详情
	GetCourseDetail: {
		url: API_URL + weChatPlant + '/GetCourseDetail',
		data: {
			Id: 0
		}
	},
	// 提交视屏观看进度(MP4)
	UploadTimeNode: {
		url: API_URL + weChatPlant + '/UploadTimeNode',
		data: {
			CourseId: '',
			TimeNode: ''
		}
	},
	// 提交视屏观看进度(三分屏)
	SyncUserStudyDataXCX: {
		url: API_URL + weChatPlant + '/SyncUserStudyDataXCX',
		data: {
			courseId: '',
			NodeId: '',
			Time: '',
			Status: ''
		}
	},
	// 用户已选课程列表
	GetUserCourseInfoList: {
		url: API_URL + weChatPlant + '/GetUserCourseInfoList',
		data: { 
			Keyword: '',
			Finish: '',
			Page: '',
			Rows: ''
		}
	},
	
	/* 考试部分信息 */
	// 获取考试列表
	GetExamList: {
			url: API_URL + weChatPlant + '/GetExamList',
			data: {
				ExamType: '', // 考试对于用来说的类型
				Type: '',
				Keyword: '',
				Page: '',
				Rows: ''
			}
	},
	// 获取考试详情信息
	GetExam: {
		url: API_URL + weChatPlant + '/GetExam',
		data: {
			Id: ''
		}
	}
}
