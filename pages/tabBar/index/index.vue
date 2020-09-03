<template>
	<view class="content" :style="'margin-top:' + (height + 45) + 'px'">
		<view class="content_title">
			<view class="content_title_status" :style="'height:' + height + 'px'"></view>
			<view class="content_title_content">
				<view class="ctc_logo">
					<image src="../../../static/beihai_logo.png"></image>
				</view>
			</view>
		</view>
		<view class="body_part">
			<view class="bp_innerbanner">
				<u-swiper :list="swiperList" mode="round" height="322" @click="linkToNoticeArt"></u-swiper>
			</view>
			<view class="bp_titlelist">
				<view>
					<navigator url="/personalCenter/myCourse/myCourse">
						<view class="bp_tl_imgbtn">
							<image src="../../../static/my_course.png"></image>
						</view>
						<text>我的课程</text>
					</navigator>
				</view>
				<view>
					<navigator url="/trainCenter/trainList/trainList">
						<view class="bp_tl_imgbtn">
							<image src="../../../static/special_training.png"></image>
						</view>
						<text>专题培训</text>
					</navigator>
				</view>
				<view>
					<navigator url="/pages/listRank/listRank">
						<view class="bp_tl_imgbtn">
							<image src="../../../static/ranks.png"></image>
						</view>
						<text>排行榜</text>
					</navigator>
				</view>
				<view>
					<navigator url="/examCenter/examList/examList?backway=Index">
						<view class="bp_tl_imgbtn">
							<image src="../../../static/my_test.png"></image>
						</view>
						<text>我的考试</text>
					</navigator>
				</view>
			</view>
			<view class="bp_noticepart">
				<view class="bp_np_title">
					<view class="bp_np_title_content">通知公告</view>
					<view class="bp_np_title_loadmore"><navigator url="/articleCenter/noticeList/noticeList" open-type="navigate">查看全部</navigator></view>
				</view>
				<view class="bp_np_content">
					<view class="bp_np_content_lefticon">
						<view class="bp_np_cli_hot">
							<image src="../../../static/HOT.png"></image>
						</view>
						<view class="bp_np_cli_nextnotice">
							<view class="bp_np_cli_cl">
								<image src="../../../static/clock-line.png"></image>
							</view>
							<view class="bp_np_cli_clock">
								<image src="../../../static/clock.png"></image>
							</view>
						</view>
					</view>
					<view class="bp_np_content_infolist">
						<view class="bp_np_content_item" v-for="(item, index) in noticeList" :key="index" @click="linkToNotice(item.NoticeId)">
							<text v-text="item.NoticeTitle"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="bp_coursepart">
				<view class="bp_cp_title">
					<view class="bp_cp_title_content">课程推荐</view>
					<view class="bp_cp_title_loadmore" @click="linkToCourse">更多<image src="../../../static/arrow-up.png"></image></view>
				</view>
				<view class="bp_cp_courselist">
					<index-course-item v-for="(item, index) in courseList" :key="index" :courseItem="item"></index-course-item>
				</view>
			</view>
			<view class="bp_elcbook">
				<view class="bp_cp_title">
					<view class="bp_cp_title_content">电子图书</view>
					<view class="bp_cp_title_loadmore" @click="toEBook">更多<image src="../../../static/arrow-up.png"></image></view>
				</view>
				<view class="bp_cp_content">
					<elc-book-list v-for="(item, index) in elcBookList" :key="index" :bookItem="item"></elc-book-list>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import indexCourseItem from '../../../components/indexCourseItem/indexCourseItem.nvue';
import elcBookList from '../../../components/elcBookList/elcBookList.nvue';
import { imgAddress } from '../../../common/plugin.js';
import { GetArticleInfoList, GetNoticeInfoList, GetCourseInfoList, GetBookInfoList, GetUserInfo } from '../../../common/getData.js';
export default {
	data () {
		return {
			title: 'Hello',
			height: null,
			interval: 2000,
			duration: 500,
			swiperList: [],
			noticeList: [],
			courseList: [],
			elcBookList: []
		}
	},
	onLoad() {
		var _this = this
		uni.getSystemInfo({
			success: function (data) {
				_this.height=data.statusBarHeight;
			}
		}),
		this.CheckLoginStatus()
	},
	onShow () {
		this.render()
	},
	methods: {
		toEBook () {
			uni.navigateTo({
				url: '/eBookCenter/eBookList/eBookList'
			})
		},
		linkToNotice (id) {
			uni.navigateTo({
				url: '/articleCenter/noticeDetail/noticeDetail?Id=' + id
			})
		},
		linkToCourse () {
			uni.reLaunch({
				url: '/pages/tabBar/courseCenter/courseCenter'
			})
		},
		linkToNoticeArt (index) {
			let _this = this
			uni.navigateTo({
				url: '/articleCenter/noticeDetail/noticeDetail?Id=' + _this.swiperList[index].Id
			})
		},
		async CheckLoginStatus () {
			let msg = await GetUserInfo()
			if (msg.Type == 1) {
				console.log(msg)
			}
		},
		async render () {
			let article = await GetArticleInfoList({
				CategoryId: 1120,
				Page: 1,
				Rows: 3
			})
			if (article.Type == 1) {
				this.swiperList = []
				article.Data.List.forEach(item => {
					item.ArticleImg = imgAddress(item.ArticleImg)
					let object = {
						image: item.ArticleImg,
						title: item.ArticleTitle,
						Id: item.ArticleId
					}
					this.swiperList.push(object)
				})
			}
			let notice = await GetNoticeInfoList({
				Page: 1,
				Rows: 3
			})
			if (notice.Type === 1) {
				this.noticeList = notice.Data.List
				notice.Data.List.forEach(item => {
					item.NoticeImg = imgAddress(item.NoticeImg)
					let object = {
						image: item.NoticeImg,
						title: item.NoticeTitle,
						Id: item.NoticeId
					}
					this.swiperList.push(object)
				})
			}
			let course = await GetCourseInfoList({
				Page: 1,
				Rows: 6,
				ChannelId: 48,
				Sort: 'Sort',
				Order: 'desc',
				CourseType: 'All'
			})
			if (course.Type === 1) {
				course.Data.List.forEach(item => {
					item.CourseImg = item.CourseImg ? imgAddress(item.CourseImg) : require('../../../static/noCourse.png')
				})
				this.courseList = course.Data.List
			}
			let eBook = await GetBookInfoList({
				Pages: 1,
				Rows: 5
			})
			if (eBook.Type === 1) {
				eBook.Data.List.forEach(item => {
					if (item.BookImg != ''){
						item.BookImg = imgAddress(item.BookImg)
					} else {
						item.BookImg = require('../../../static/errorBookImg.png')
					}
				})
				this.elcBookList = eBook.Data.List
			}
		}
	},
	components: {
		indexCourseItem,
		elcBookList
	}
}
</script>

<style lang="scss">
@import '../../../style/mixin.scss';
.content {
	background: #fff;
	.content_title{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		.content_title_status{
			background: $brand-primary;
		}
		.content_title_content{
			height: 45px;
			background: $brand-primary;
			display: flex;
			align-items: center;
			.ctc_logo{
				width: 448rpx;
				height: 45rpx;
				margin-left: 23rpx;
				image{
					width: 448rpx;
					height: 45rpx;
				}
				
			}
		}
	}
	.body_part{
		padding-top: 30rpx;
		.bp_innerbanner{
			width: 690rpx;
			margin: 0 auto;
		}
		.swiper{
			width: 690rpx;
			height: 322rpx;
			border-radius: 15rpx!important;
			overflow: hidden;
			position: relative;
			z-index: 99;
		}
		.u-swiper-indicator{
			padding: 0!important;
		}
		image{
			width: 690rpx;
			height: 322rpx;
		}
		.bp_titlelist{
			width: 690rpx;
			padding-top: 41rpx;
			margin: 0 auto;
			font-size: 32rpx;
			display: flex;
			justify-content: space-between;
			text-align: center;
			.bp_tl_imgbtn{
				width: 100%;
				text-align: center;
				image{
					width: 102rpx;
					height: 102rpx;
				}
			}
		}
		.bp_noticepart{
			width: 690rpx;
			margin: 0 auto 0;
			.bp_np_title{
				height: 126rpx;
				line-height: 126rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.bp_np_title_content{
					font-size: 39rpx;
					color: #333;
					font-weight: bold;
				}
				.bp_np_title_loadmore{
					width: 180rpx;
					height: 56rpx;
					line-height: 56rpx;
					border-radius: 56rpx;
					font-size: 32rpx;
					background: linear-gradient(to right, #5b85dc, #0099e0);
					text-align: center;
					color: #fff;
				}
			}
			.bp_np_content{
				display: flex;
				.bp_np_content_lefticon{
					text-align: center;
					.bp_np_cli_hot{
						height: 70rpx;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						image{
							width: 60rpx;
							height: 30rpx;	
						}
					}
					.bp_np_cli_nextnotice{
						height: 140rpx;
						padding-top: 5rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					.bp_np_cli_cl{
						height: 70rpx;
						margin-top: 10rpx;
						image{
							width: 30rpx;
							height: 70rpx;
						}
					}
					.bp_np_cli_clock{
						width: 100%;
						height: 50rpx;
						position: relative;
						image{
							width: 30rpx;
							height: 30rpx;
							margin-left: -15rpx;
							position: absolute;
							top: 0;
							left: 50%;
						}
					}
				}
				.bp_np_content_infolist{
					margin-left: 10rpx;
					.bp_np_content_item{
						height: 70rpx;
						line-height: 70rpx;
						font-size: 32rpx;
						text{
							@include ellipsis_two(1);
						}
					}
				}
			}
		}
		.bp_coursepart{
			width: 100%;
			height: 500rpx;
			overflow: hidden;
			.bp_cp_courselist{
				padding-left: 30rpx;
				display: flex;
				flex-wrap: nowrap;
				overflow-x: auto;
				
			}
		}
		.bp_cp_title{
			width: 690rpx;
			height: 126rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.bp_cp_title_content{
				font-size: 39rpx;
				color: #333;
				font-weight: bold;
			}
			.bp_cp_title_loadmore{
				height: 126rpx;
				line-height: 136rpx;
				font-size: 26rpx;
				color: #333;
				font-weight: bold;
				image{
					width: 14rpx;
					height: 24rpx;
					margin-left: 5rpx;
					position: relative;
					top: 3rpx;
				}
			}
		}
		.bp_elcbook{
			height: 520rpx;
			overflow: hidden;
			.bp_cp_content{
				display: flex;
				flex-wrap: nowrap;
				overflow: auto;
			}
		}
	}
}

</style>
