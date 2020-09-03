const API_URL = "https://www.bhgbzx.gov.cn/api"
// const API_URL = "http://192.168.1.208:8336/api"
const weChatPlant = '/Wechat'
const auth = '/auth'

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
			Finish: '', // 1:完成; 0:未完成; 2:表示全部;
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
	},
	// 提交用户考试数据
	UpdateUserExam: {
		url: API_URL + weChatPlant + '/UpdateUserExam',
		data: {
			ExamId: '',
			Ticket: '',
			PassExam: '',
			TrainingId: '',
			Data: ''
		}
	},
	
	/* 文章部分信息 */
	// 获取文章种类列表
	GetArticleChannelInfoList: {
		url: API_URL + weChatPlant + '/GetArticleChannelInfoList',
		data: {
			ParentId: 0
		}
	},
	// 获取文章列表
	GetArticleInfoList: {
		url: API_URL + weChatPlant + '/GetArticleInfoList',
		data: {
			CategoryId: '',
			Keyword: '',
			Page: '',
			Rows: ''
		}
	},
	// 文章详情
	ArticleDetail: {
		url: API_URL + weChatPlant + '/ArticleDetail',
		data: {
			Id: ''
		}
	},
	
	/* 通知公告部分信息 */
	// 获取通知列表
	GetNoticeInfoList: {
		url: API_URL + weChatPlant + '/GetNoticeInfoList',
		data: {
			Keyword: '',
			Page: '',
			Rows: ''
		}
	},
	// 获取通知列表详情信息
	NoticeDetail: {
		url: API_URL + weChatPlant + '/NoticeDetail',
		data: {}
	},
	
	/* 电子书部分信息 */
	// 获取电子书列表信息
	GetBookInfoList: {
		url: API_URL + weChatPlant + '/GetBookInfoList',
		data: {
			Keyword: '',
			BookTypeId: '',
			Page: '',
			Rows: ''
		}
	},
	// 获取电子书章节列表信息
	GetBookChapterInfoList: {
		url: API_URL + weChatPlant + '/GetBookChapterInfoList',
		data: {
			BookId: '',
			Page: '',
			Rows: ''
		}
	},
	// 获取电子书章节内容
	GetBookChapterContent: {
		url: API_URL + weChatPlant + '/GetBookChapterContent',
		data: {
			Id: ''
		}
	},
	
	/* 培训班部分信息 */
	// 获取培训班种类列表
	GetTrainingTypeList: {
		url: API_URL + weChatPlant + '/GetTrainingTypeList',
		data: {}
	},
	// 培训班列表
	GetTrainingClass: {
		url: API_URL + weChatPlant + '/GetTrainingClass',
		data: {
			TypeId: '',
			TrainName: '',
			JoinStatus: '',
			Page: '',
			Rows: ''
		}
	},
	// 培训班详情信息
	GetTrainingDetail: {
		url: API_URL + weChatPlant + '/GetTrainingDetail',
		data: {
			Id: ''
		}
	},
	// 培训班课程列表
	GetClassCourseInfoList: {
		url: API_URL + weChatPlant + '/GetClassCourseInfoList',
		data: {
			TrainingId: '',
			Page: '',
			Rows: ''
		}
	},
	// 培训班考试列表
	GetClassExamList: {
		url: API_URL + weChatPlant + '/GetClassExamList',
		data: {
			Id: ''
		}
	},
	// 报名培训班
	UpdateTrainingStudentup: {
		url: API_URL + weChatPlant + '/UpdateTrainingStudentup',
		data: {
			Id: ''
		}
	},
	// 取消报名培训班
	UpdateTrainingStudentdown: {
		url: API_URL + weChatPlant + '/UpdateTrainingStudentdown',
		data: {
			Id: ''
		}
	},
	
	/* 个人中心部分信息 */
	// 获取用户个人信息
	GetUserInfo: {
		url: API_URL + weChatPlant + '/GetUserInfo',
		data: {}
	},
	// 获取部门列表信息
	GetGroupList: {
		url: API_URL + weChatPlant + '/GetGroupList',
		data: {
			ParentId: ''
		}
	},
	// 提交用户信息
	UpdateUserInfo: {
		url: API_URL + weChatPlant + '/UpdateUserInfo',
		data: {
			Account: '',
			Name: '',
			DepartmentName: '',
			GroupId: '',
			IdCard: '',
			Email: '',
			Grade: 0,
			Business: '', 
			Sex: '',
			Nation: '',
			Degree: '',
			Party: '',
			Birthday: '',
			Tel: '',
			SmgCode: ''
		}
	},
	// 用户修改密码
	SetUserPassword: {
		url: API_URL + weChatPlant + '/SetUserPassword',
		data: {
			OldPassword: '',
			Password: ''
		}
	},
	// 用户扫码登录
	LoginQRCode: {
		url: API_URL + auth + '/LoginQRCode',
		data: {
			token: '',
			ac: ''
		}
	},
	
	/* 排行榜部分信息获取 */
	// 获取排行榜列表信息
	GetRankInfoList: {
		url: API_URL + weChatPlant + '/GetRankInfoList',
		data:{
			RankType: '', // 1:学时; 2:课程; 3:单位; 6:专题排行;
			TotalCount: ''
		}
	}
}
