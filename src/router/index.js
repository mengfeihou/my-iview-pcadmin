import Vue from 'vue'
import Router from 'vue-router'
const layout = r => require.ensure([], () => r(require('@/views/layout')), 'layout'); //首页

const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login'); //首页
const statistics = r => require.ensure([], () => r(require('@/views/1statistics/1statistics')), '1statistics'); //数据统计
const awardData = r => require.ensure([], () => r(require('@/views/1statistics/awardData')), 'awardData'); //奖励数据
const FillingpData = r => require.ensure([], () => r(require('@/views/1statistics/FillingpData')), 'FillingpData'); //充提数据
const giveData = r => require.ensure([], () => r(require('@/views/1statistics/giveData')), 'giveData'); //赠送数据
const miningData = r => require.ensure([], () => r(require('@/views/1statistics/miningData')), 'miningData'); //挖矿数据
const transactionData = r => require.ensure([], () => r(require('@/views/1statistics/transactionData')), 'transactionData'); //交易
const userData = r => require.ensure([], () => r(require('@/views/1statistics/userData')), 'userData'); //用户数据

const userguanli = r => require.ensure([], () => r(require('@/views/2userguanli/2userguanli')), '2userguanli'); //用户管理
const gravitational = r => require.ensure([], () => r(require('@/views/2userguanli/gravitational')), 'gravitational'); //引力波
const membership = r => require.ensure([], () => r(require('@/views/2userguanli/membership')), 'membership'); //会员权益
const ordinary = r => require.ensure([], () => r(require('@/views/2userguanli/ordinary')), 'ordinary'); //普通会员
const starClass = r => require.ensure([], () => r(require('@/views/2userguanli/starClass')), 'starClass'); //星级会员
const toExamine = r => require.ensure([], () => r(require('@/views/2userguanli/toExamine')), 'toExamine'); //用户信息审核

// const reward = r => require.ensure([], () => r(require('@/views/3reward/3reward')), '3reward'); //
const airdrop = r => require.ensure([], () => r(require('@/views/3reward/airdrop')), 'airdrop'); //空头
const give = r => require.ensure([], () => r(require('@/views/3reward/give')), 'give'); //赠送记录
// 4
const platformAssets = r => require.ensure([], () => r(require('@/views/4assetguanli/platformAssets')), 'platformAssets'); //平台资产管理

const capitalFlow = r => require.ensure([], () => r(require('@/views/4assetguanli/capitalFlow')), 'capitalFlow'); //用户资产管理  -资金流水
const recharge = r => require.ensure([], () => r(require('@/views/4assetguanli/recharge')), 'recharge'); //用户资产管理  -充值记录
const transfer = r => require.ensure([], () => r(require('@/views/4assetguanli/transfer')), 'transfer'); //用户资产管理  -转账

const withdraw = r => require.ensure([], () => r(require('@/views/4assetguanli/withdraw')), 'withdraw'); //用户资产管理  -提币
const userAddress = r => require.ensure([], () => r(require('@/views/4assetguanli/userAddress')), 'userAddress'); //用户资产管理  -用户地址
const settlement = r => require.ensure([], () => r(require('@/views/4assetguanli/settlement')), 'settlement'); //用户资产管理  -结算

// 5
const marketSet = r => require.ensure([], () => r(require('@/views/5transaction/marketSet')), 'marketSet'); //交易对设置
const tradingMarket = r => require.ensure([], () => r(require('@/views/5transaction/tradingMarket')), 'tradingMarket'); //交易市场
//6
const clinchcording = r => require.ensure([], () => r(require('@/views/6trusteeship/clinchcording')), 'clinchcording'); //已成交记录
const trustrecording = r => require.ensure([], () => r(require('@/views/6trusteeship/trustrecording')), 'trustrecording'); //委托记录
//7
const currencyList = r => require.ensure([], () => r(require('@/views/7currency/currencyList')), 'currencyList'); //币种列表
const currencyType = r => require.ensure([], () => r(require('@/views/7currency/currencyType')), 'currencyType'); //币种类型设置
//8
const ADmanage = r => require.ensure([], () => r(require('@/views/8operate/ADmanage')), 'ADmanage'); //广告管理
const announcement = r => require.ensure([], () => r(require('@/views/8operate/announcement')), 'announcement'); //公告
const friendchain = r => require.ensure([], () => r(require('@/views/8operate/friendchain')), 'friendchain'); //友链管理
//9
const adminlog = r => require.ensure([], () => r(require('@/views/9power/adminlog')), 'adminlog'); //管理员日志
const adminmanage = r => require.ensure([], () => r(require('@/views/9power/adminmanage')), 'adminmanage'); //管理员管理
const Charactermanage = r => require.ensure([], () => r(require('@/views/9power/Charactermanage')), 'Charactermanage'); //角色管理
const menumanage = r => require.ensure([], () => r(require('@/views/9power/menumanage')), 'menumanage'); //菜单管理
//10
const clearCache = r => require.ensure([], () => r(require('@/views/10routine/clearCache')), 'clearCache'); //清除缓存
const parametersetting = r => require.ensure([], () => r(require('@/views/10routine/parametersetting')), 'parametersetting'); //参数配置
const setting = r => require.ensure([], () => r(require('@/views/10routine/setting')), 'setting'); //系统设置
const SMSsettings = r => require.ensure([], () => r(require('@/views/10routine/SMSsettings')), 'SMSsettings'); //短信设置
const TraderSetting = r => require.ensure([], () => r(require('@/views/10routine/TraderSetting')), 'TraderSetting'); //操盘设置
const VerifiedSetting = r => require.ensure([], () => r(require('@/views/10routine/VerifiedSetting')), 'VerifiedSetting'); //实名认证设置



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login', name: 'login',component: login,
    },
    { path: '/', name: 'layout',component: layout,redirect: '/statistics',
      children: [
        //1
        { path: '/statistics',name: 'statistics', component: statistics,meta:{title:'数据统计'}},
        { path: '/awardData',name: 'awardData', component: awardData,meta:{title:'奖励数据'}},
        { path: '/FillingpData',name: 'FillingpData', component: FillingpData,meta:{title:'充提数据'}},
        { path: '/giveData',name: 'giveData', component: giveData,meta:{title:'赠送数据'}},
        { path: '/miningData',name: 'miningData', component: miningData,meta:{title:'挖矿数据'}},
        { path: '/transactionData',name: 'transactionData', component: transactionData,meta:{title:'交易'}},
        { path: '/userData',name: 'userData', component: userData,meta:{title:'用户数据'}},
        //2
        { path: '/2userguanli',name: '2userguanli', component: userguanli,meta:{title:'用户管理'}},
        { path: '/gravitational',name: 'gravitational', component: gravitational,meta:{title:'引力波'}},
        { path: '/membership',name: 'membership', component: membership,meta:{title:'会员权益'}},
        { path: '/ordinary',name: 'ordinary', component: ordinary,meta:{title:'普通会员'}},
        { path: '/starClass',name: 'starClass', component: starClass,meta:{title:'星级会员'}},
        { path: '/toExamine',name: 'toExamine', component: toExamine,meta:{title:'用户信息审核'}},
        //3
        { path: '/airdrop',name: 'airdrop', component: airdrop,meta:{title:'空头'}},
        { path: '/give',name: 'give', component: give,meta:{title:'赠送记录'}},
        //4
        { path: '/platformAssets',name: 'platformAssets', component: platformAssets,meta:{title:'平台资产管理'}},
				{ path: '/recharge',name: 'recharge', component: recharge,meta:{title:'充值记录'}},
				{ path: '/transfer',name: 'transfer', component: transfer,meta:{title:'转账'}},
				{ path: '/withdraw',name: 'withdraw', component: withdraw,meta:{title:'提币'}},
				{ path: '/userAddress',name: 'userAddress', component: userAddress,meta:{title:'用户地址'}},
				{ path: '/settlement',name: 'settlement', component: settlement,meta:{title:'结算'}},
				{ path: '/capitalFlow',name: 'capitalFlow', component: capitalFlow,meta:{title:'资金流水'}},
				 //5
        { path: '/marketSet',name: 'marketSet', component: marketSet,meta:{title:'交易对设置'}},
        { path: '/tradingMarket',name: 'tradingMarket', component: tradingMarket,meta:{title:'交易市场'}},
        //6
        { path: '/clinchcording',name: 'clinchcording', component: clinchcording,meta:{title:'已成交记录'}},
        { path: '/trustrecording',name: 'trustrecording', component: trustrecording,meta:{title:'委托记录'}},
        //7
        { path: '/currencyList',name: 'currencyList', component: currencyList,meta:{title:'币种列表'}},
        { path: '/currencyType',name: 'currencyType', component: currencyType,meta:{title:'币种类型设置'}},
        //8
        { path: '/ADmanage',name: 'ADmanage', component: ADmanage,meta:{title:'广告管理'}},
        { path: '/announcement',name: 'announcement', component: announcement,meta:{title:'公告'}},
        { path: '/friendchain',name: 'friendchain', component: friendchain,meta:{title:'友链管理'}},
        //9
        { path: '/adminlog',name: 'adminlog', component: adminlog,meta:{title:'管理员日志'}},
        { path: '/adminmanage',name: 'adminmanage', component: adminmanage,meta:{title:'管理员管理'}},
        { path: '/Charactermanage',name: 'Charactermanage', component: Charactermanage,meta:{title:'角色管理'}},
        { path: '/menumanage',name: 'menumanage', component: menumanage,meta:{title:'菜单管理'}},
        //10
        { path: '/clearCache',name: 'clearCache', component: clearCache,meta:{title:'清除缓存'}},
        { path: '/parametersetting',name: 'parametersetting', component: parametersetting,meta:{title:'参数配置'}},
        { path: '/setting',name: 'setting', component: setting,meta:{title:'系统设置'}},
        { path: '/SMSsettings',name: 'SMSsettings', component: SMSsettings,meta:{title:'短信设置'}},
        { path: '/TraderSetting',name: 'TraderSetting', component: TraderSetting,meta:{title:'操盘设置'}},
        { path: '/VerifiedSetting',name: 'VerifiedSetting', component: VerifiedSetting,meta:{title:'实名认证设置'}},
      ]
    },
  ]
})
