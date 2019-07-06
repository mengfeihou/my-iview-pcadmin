<template>
	<div class="layout">
		<Layout :style="{height: '100vh'}">
			<!-- 手机端 -->
			<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" v-if="isCollapsed">
				<Menu active-name="2-1" theme="dark" width="auto" :class="menuitemClasses">
					<MenuItem name="2">
					<Icon type="ios-navigate"></Icon>
					<span>Item 1</span>
					</MenuItem>
					<MenuItem name="1-1" to="text">
					<Icon type="ios-navigate"></Icon>
					<span>Option 1</span>
					</MenuItem>
					<MenuItem name="1-2" to="test">
					<Icon type="ios-search"></Icon>
					<span>Option 2</span>
					</MenuItem>
					<MenuItem name="1-3">
					<Icon type="ios-settings"></Icon>
					<span>Option 3</span>
					</MenuItem>
				</Menu>
			</Sider>
			<!-- 电脑端 -->
			<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" v-else>
				<div class="admintitle">MiTop</div>
				<Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses">
					<!-- 二级菜单 -->
					<Submenu :name="item.name" v-for="(item,index) in menuarr" :key="'f'+index">
						<template slot="title"  v-if="item.name == '1'">
							<router-link to="statistics" tag="div">
								<Icon type="ios-navigate"></Icon>
								<span>数据统计</span>
							</router-link>
						</template>
						<template slot="title" v-else>
							<Icon :type="item.icon"></Icon>
							<span>{{item.namestr}}</span>
						</template>
						<!-- sanji  -->
						<Submenu :name="gitem.name" v-if="item.children && item.children.length && gitem.children && gitem.children.length" v-for="(gitem, index) in item.children" :key="'g' + index">
							<template slot="title">{{gitem.namestr}}</template>
							<MenuItem :name="titem.name"  :to="titem.url" v-if="titem.children && gitem.children.length" v-for="(titem, index) in gitem.children" :key="'t'+ index">{{titem.namestr}}</MenuItem>
						</Submenu>
						<!-- erji -->
						<MenuItem :name="citem.name" :to="citem.url"  v-if="item.children && item.children.length && !citem.children.length" v-for="(citem, index) in item.children" :key="'s' + index">
							<span>{{citem.namestr}}</span>
						</MenuItem>
					</Submenu>





					<!-- <Submenu name="1">
						<template slot="title">
							<router-link to="statistics" tag="div">
								<Icon type="ios-navigate"></Icon>
								<span>数据统计</span>
							</router-link>
						</template>
						<Submenu name="1-1">
							<template slot="title">Submenu</template>
							<MenuItem name="1-1-1">Option 7</MenuItem>
							<MenuItem name="1-1-2">Option 8</MenuItem>
						</Submenu>
						<MenuItem name="1-2" to="userData">
						<span>用户数据</span>
						</MenuItem>
						<MenuItem name="1-3" to="FillingpData">
						<span>充提数据</span>
						</MenuItem>
						<MenuItem name="1-4" to="transactionData">
						<span>交易数据</span>
						</MenuItem>
						<MenuItem name="1-5" to="giveData">
						<span>赠送数据</span>
						</MenuItem>
						<MenuItem name="1-6" to="miningData">
						<span>挖矿数据</span>
						</MenuItem>
						<MenuItem name="1-7" to="awardData">
						<span>奖励数据</span>
						</MenuItem>
					</Submenu> -->
					<!-- 用户管理 -->
				<!-- 	<Submenu name="2">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>用户管理</span>
						</template>
						<Submenu name="2-1">
							<template slot="title">用户信息列表</template>
							<MenuItem name="2-1-1" to="ordinary">普通会员</MenuItem>
							<MenuItem name="2-1-2" to="starClass">星级会员</MenuItem>
							<MenuItem name="2-1-3" to="gravitational">引力波</MenuItem>
						</Submenu>
						<MenuItem name="2-2" to="toExamine">
							<span>用户信息审核</span>
						</MenuItem>
						<MenuItem name="2-3" to="membership">
							<span>会员权益</span>
						</MenuItem>
					</Submenu>

					<Submenu name="3">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>奖励赠送</span>
						</template>
						<MenuItem name="3-1"  to="airdrop">
							<span>赠送记录</span>
						</MenuItem>
						<MenuItem name="3-2" to="give">
							<span>空投用户名单</span>
						</MenuItem>
					</Submenu>
					<Submenu name="4">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>资产管理</span>
						</template>
						<MenuItem name="4-1" to="platformAssets">
							<span>平台资产管理</span>
						</MenuItem> -->
						<!-- 用户资产管理目前组件不确定 -->
						<!-- <Submenu name="4-2">
							<template slot="title">用户资产管理</template>
							<MenuItem name="4-2-1" to="capitalFlow">资金流水</MenuItem>
							<MenuItem name="4-2-2" to="recharge">充值记录</MenuItem>
							<MenuItem name="4-2-3" to="transfer">划转记录</MenuItem>
							<MenuItem name="4-2-4" to="withdraw">提币</MenuItem>
							<MenuItem name="4-2-5" to="userAddress">用户钱包地址管理</MenuItem>
							<MenuItem name="4-2-6" to="settlement">结算配置</MenuItem>
						</Submenu>
					</Submenu>
					<Submenu name="5">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>交易对管理</span>
						</template>
						<MenuItem name="5-1" to="marketSet">
							<span>交易对设置</span>
						</MenuItem>
						<MenuItem name="5-2" to="tradingMarket">
							<span>交易市场</span>
						</MenuItem>
					</Submenu>
					<Submenu name="6">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>委托管理</span>
						</template>
						<MenuItem name="6-1" to="tradingMarket">
							<span >委托记录</span>
						</MenuItem>
						<MenuItem name="6-2" to="clinchcording">
							<span >已成交记录</span>
						</MenuItem>
					</Submenu>
					<Submenu name="7">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>币种管理</span>
						</template>
						<MenuItem name="7-1" to="currencyList">
							<span >币种列表</span>
						</MenuItem>
						<MenuItem name="7-2" to="currencyType">
							<span >币种类型设置</span>
						</MenuItem>
					</Submenu>
					<Submenu name="8">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>运营管理</span>
						</template>
						<MenuItem name="8-1" to="ADmanage">
							<span >广告管理</span>
						</MenuItem>
						<MenuItem name="8-2" to="friendchain">
							<span >友链管理</span>
						</MenuItem>
						<MenuItem name="8-3" to="announcement">
							<span >公告</span>
						</MenuItem>
					</Submenu>
					<Submenu name="9">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>权限管理</span>
						</template>
						<MenuItem name="9-1" to="adminmanage">
							<span>管理员管理</span>
						</MenuItem>
						<MenuItem name="9-2" to="menumanage">
							<span >菜单管理</span>
						</MenuItem>
						<MenuItem name="9-3" to="adminlog">
							<span >管理员日志</span>
						</MenuItem>
						<MenuItem name="9-4" to="Charactermanage">
							<span >角色管理</span>
						</MenuItem>
					</Submenu>
					<Submenu name="10">
						<template slot="title">
							<Icon type="ios-navigate"></Icon>
							<span>常规管理</span>
						</template>
						<MenuItem name="10-1" to="clearCache">
							<span>清楚缓存</span>
						</MenuItem>
						<MenuItem name="10-2" to="SMSsettings">
							<span>短信设置</span>
						</MenuItem>
						<MenuItem name="10-3" to="VerifiedSetting">
							<span>实名认证设置</span>
						</MenuItem>
						<MenuItem name="10-4" to="TraderSetting">
							<span>操盘设置</span>
						</MenuItem>
						<MenuItem name="10-5" to="parametersetting">
							<span>参数配置</span>
						</MenuItem>
					</Submenu> -->
				</Menu>
			</Sider>
			<!-- 布局 -->
			<Layout :style="{height: '100vh'}">
				<Header :style="{padding: 0, display: 'flex',  alignItems: 'center'}" class="layout-header-bar">
					<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
					<!-- 显示栏 -->
					<template>
						<Breadcrumb>
							<BreadcrumbItem to="/">Home</BreadcrumbItem>
							<BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
							<BreadcrumbItem>Breadcrumb</BreadcrumbItem>
						</Breadcrumb>
					</template>
					<!-- 个人信息 -->
					<div style="flex: 1; text-align: right; margin-right: 20px;">
						<Dropdown style="text-align: center">
							<a href="javascript:void(0)">
								<img src="@/assets/logo.png" alt="" style="height: 20px;">
								houhou
								<Icon type="ios-arrow-down"></Icon>
							</a>
							<DropdownMenu slot="list">
								<DropdownItem>退出</DropdownItem>
								<DropdownItem>设置</DropdownItem>
								<DropdownItem>个人信息</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</Header>
				<!-- <Content  :style="{margin: '20px', background: '#fff', minHeight: '260px'}"> -->
				<Content :style="{margin: '20px', background: '#fff', flex: 1, overflowY: 'auto'}">
					Content
					<router-view></router-view>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>
<script>
import { menuarr } from "@/assets/menu";
	export default {
		data() {
			return {
				isCollapsed: false,
				menuarr: menuarr
			}
		},
		computed: {
			rotateIcon() {
				return [
					'menu-icon',
					this.isCollapsed ? 'rotate-icon' : ''
				];
			},
			menuitemClasses() {
				return [
					'menu-item',
					this.isCollapsed ? 'collapsed-menu' : ''
				]
			}
		},
		methods: {
			collapsedSider() {
				this.$refs.side1.toggleCollapse();
			}
		},
		mounted() {
			console.log("menuarr",this.menuarr)
		}
	}
</script>
<style lang="less" scoped>
	.admintitle{
		background: black;
		color: #fff;
		width: 100%;
		height: 63px;
		line-height: 63px;
		text-align: center;
		font-size: 20px;
	}
	.layout {
		min-height: 100%;
		// border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		overflow: hidden;
	}

	.layout-header-bar {
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}

	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}

	.menu-icon {
		transition: all .3s;
	}

	.rotate-icon {
		transform: rotate(-90deg);
	}

	.menu-item span {
		display: inline-block;
		overflow: hidden;
		// width: 69px;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: bottom;
		transition: width .2s ease .2s;
	}

	.menu-item i {
		transform: translateX(0px);
		transition: font-size .2s ease, transform .2s ease;
		vertical-align: middle;
		font-size: 16px;
	}

	.collapsed-menu span {
		width: 0px;
		transition: width .2s ease;
	}

	.collapsed-menu i {
		transform: translateX(5px);
		transition: font-size .2s ease .2s, transform .2s ease .2s;
		vertical-align: middle;
		font-size: 22px;
	}
	/deep/.ivu-layout-sider-children{
		overflow-y: auto;
		&::-webkit-scrollbar{
		width: .213333rem;
		cursor: pointer;
		}
		// scroll 滑块
		&::-webkit-scrollbar-thumb{
		border-radius: .213333rem;
		background: #D3D3D3;
		}
		// scroll 滑道
		&::-webkit-scrollbar-track{
		border-radius: .213333rem;
		background: #E5E5E5;
		}
	}
</style>
