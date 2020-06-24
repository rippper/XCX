<template>
	<view class="content" :style="'margin-top:' + (height + 45) + 'px'">
		<view class="content_title">
			<view class="content_title_status" :style="'height:' + height + 'px'"></view>
			<view class="content_title_content">
				<view class="ctc_logo">
					<image src="../../../static/beihai_logo.png"></image>
				</view>
				<!--<view class="ctc_bigglass">
					<image src="../../../static/fangdajing.png"></image>
				</view> -->
			</view>
		</view>
		<view class="body_part">
			<view class="bp_innerbanner">
				<!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item">
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164095017&di=43133dc1b0a18fe9b722e2ccdd3f8d9f&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fv6%2F8b%2FQJ8174371961.jpg"></image>
						</view>
					</swiper-item>
				</swiper> -->
				<u-swiper :list="swiperList" mode="round" height="322"></u-swiper>
			</view>
			<view class="bp_titlelist">
				<view>
					<view class="bp_tl_imgbtn">
						<image src="../../../static/my_course.png"></image>
					</view>
					<text>我的课程</text>
				</view>
				<view>
					<view class="bp_tl_imgbtn">
						<image src="../../../static/special_training.png"></image>
					</view>
					<text>专题培训</text>
				</view>
				<view>
					<view class="bp_tl_imgbtn">
						<image src="../../../static/ranks.png"></image>
					</view>
					<text>排行榜</text>
				</view>
				<view>
					<navigator url="/examCenter/examList/examList">
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
					<view class="bp_np_title_loadmore">查看全部</view>
				</view>
				<view class="bp_np_content">
					<view class="bp_np_content_lefticon">
						<view class="bp_np_cli_hot">
							<image src="../../../static/HOT.png"></image>
						</view>
						<view class="bp_np_cli_cl">
							<image src="../../../static/clock-line.png"></image>
						</view>
						<view class="bp_np_cli_clock">
							<image src="../../../static/clock.png"></image>
						</view>
					</view>
					<view class="bp_np_content_infolist">
						<view class="bp_np_content_item" v-for="(item, index) in noticeList" :key="index">
							<text v-text="item.title"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="bp_coursepart">
				<view class="bp_cp_title">
					<view class="bp_cp_title_content">课程推荐</view>
					<view class="bp_cp_title_loadmore">更多<image src="../../../static/arrow-up.png"></image></view>
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
	import elcBookList from '../../../components/elcBookList/elcBookList.nvue'
	export default {
		data() {
			return {
				title: 'Hello',
				height: null,
				interval: 2000,
				duration: 500,
				swiperList: [
					{
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164095017&di=43133dc1b0a18fe9b722e2ccdd3f8d9f&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fv6%2F8b%2FQJ8174371961.jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				noticeList: [
					{
						title: '关于在防疫期间举办全省数字档案室建设'
					},
					{
						title: '关于在疫情防控期间支持企业开展线上职业教育'
					},
					{
						title: '关于推迟举办继续教育等面授培训班的通知' 
					}
				],
				courseList: [
					{
						url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						courseName: '科技档案管理',
						score: 2,
						level: 3.5
					},
					{
						url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						courseName: '科技档案管理',
						score: 2,
						level: 4
					},
					{
						url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						courseName: '科技档案管理',
						score: 2,
						level: 4.5
					},
					{
						url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						courseName: '科技档案管理',
						score: 2,
						level: 3.5
					},
					{
						url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						courseName: '科技档案管理',
						score: 2,
						level: 4
					},
					{
						url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591164004599&di=bba634cf31fa42f5df1d8c2c39e8411d&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0903%2F7512230abc4724321254dcac513c6ec8.jpg',
						courseName: '科技档案管理',
						score: 2,
						level: 4.5
					}
				],
				elcBookList: [
					{
						bookImg: require('../../../static/example/example001.jpg'),
						Title: '文书处理和档案管理'
					},
					{
						bookImg: require('../../../static/example/example001.jpg'),
						Title: '文书处理和档案管理'
					},
					{
						bookImg: require('../../../static/example/example001.jpg'),
						Title: '文书处理和档案管理'
					},
					{
						bookImg: require('../../../static/example/example001.jpg'),
						Title: '文书处理和档案管理'
					},
					{
						bookImg: require('../../../static/example/example001.jpg'),
						Title: '文书处理和档案管理'
					}
				]
			}
		},
		onLoad() {
			var _this = this
			uni.getSystemInfo({
				success: function (data) {
					_this.height=data.statusBarHeight;
				}
			})
		},
		methods: {
			toEBook () {
				uni.navigateTo({
					url: '/eBookCenter/eBookList/eBookList'
				})
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
			background: #2960b2;
		}
		.content_title_content{
			height: 45px;
			background: #2960b2;
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
			// .ctc_bigglass{
			// 	margin-left: 5%;
			// 	image{
			// 		width: 44rpx;
			// 		height: 44rpx;
			// 	}
			// }
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
		image{
			width: 690rpx;
			height: 322rpx;
		}
		.bp_titlelist{
			width: 690rpx;
			padding-top: 41rpx;
			margin: 0 auto;
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
						height: 60rpx;
						margin-top: 20rpx;
						image{
							width: 60rpx;
							height: 30rpx;	
						}
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
						image{
							width: 30rpx;
							height: 30rpx;
						}
					}
				}
				.bp_np_content_infolist{
					margin-left: 10rpx;
					.bp_np_content_item{
						height: 70rpx;
						line-height: 70rpx;
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
