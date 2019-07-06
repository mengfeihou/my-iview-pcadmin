<template>
    <div class="layout">
        <Layout  :style="{height: '100vh'}">
             <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" v-if="isCollapsed">
                <Menu active-name="2-1" theme="dark" width="auto" :class="menuitemClasses">
                     <MenuItem name="2" >
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

                 <div style="text-align: center;">
                <Dropdown transfer placement="right">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" color="#ccc" type="ios-navigate"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <template>
                            <DropdownItem name="child.name" ><Icon type="ios-navigate"></Icon><span style="padding-left:10px;">child.title</span></DropdownItem>
                        </template>
                        <template>
                            <DropdownItem name="child.name1" ><Icon type="ios-navigate"></Icon><span style="padding-left:10px;">child.title</span></DropdownItem>
                        </template>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown transfer placement="right-start" >
                    <Button  style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" color="#ccc" type="ios-navigate"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem name="item.children[0].name"><Icon type="ios-navigate"></Icon><span style="padding-left:10px;"> item.children[0].title </span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown trigger="click" transfer placement="right-start" >
                    <Button  style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" color="#ccc" type="ios-navigate"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px" slot="list">
                        <DropdownItem name="item.children[0].name"><Icon type="ios-navigate"></Icon><span style="padding-left:10px;"> item.children[0].title </span></DropdownItem>

                        <Dropdown transfer placement="right-start" >
                             <!--<Button  style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                                <Icon :size="20" color="#ccc" type="ios-navigate"></Icon> 
                                北京烤鸭
                            </Button>-->
                            <DropdownItem>
                                北京烤鸭
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu style="width: 200px;" slot="list">
                               <DropdownItem>挂炉烤鸭</DropdownItem>
                                <DropdownItem>焖炉烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                       <!--  <Dropdown placement="right-end">
                            <DropdownItem>
                                北京烤鸭
                                <Icon type="ios-arrow-forward"></Icon>
                            </DropdownItem>
                            <DropdownMenu  style="width: 200px" slot="list">
                                <DropdownItem>挂炉烤鸭</DropdownItem>
                                <DropdownItem>焖炉烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> -->
                    </DropdownMenu>
                </Dropdown>
            </div>
            </Sider>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" v-else>
                <Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses">
                     <Submenu name="1-1" >
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>Item 1</span>
                        </template>
                        <Submenu name="1-1-1">
                            <template slot="title">Submenu</template>
                            <MenuItem name="3-1">Option 7</MenuItem>
                            <MenuItem name="3-2">Option 8</MenuItem>
                        </Submenu>
                        <MenuItem name="2-1">
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="2-2">
                            <span>
                                Option 2 
                            </span>
                        </MenuItem>
                        <MenuItem name="2-3">
                         <span>Option 3</span>
                        </MenuItem>
                    </Submenu>
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
            <Layout  :style="{height: '100vh'}">
                <Header :style="{padding: 0, display: 'flex',  alignItems: 'center'}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    <template>
                        <Breadcrumb>
                            <BreadcrumbItem to="/">Home</BreadcrumbItem>
                            <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                        </Breadcrumb>
                    </template>
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
                <Content  :style="{margin: '20px', background: '#fff', flex: 1, overflowY: 'auto'}">
                    <!-- Content -->
                    <router-view></router-view>
                    <!-- <div style="line-height: 500px">hahah aahahaha</div>
                    <div style="line-height: 500px">hahah aahahaha</div>
                    <div style="line-height: 500px">hahah aahahaha</div>
                    <div style="line-height: 500px">hahah aahahaha</div>
                    <div style="line-height: 500px">hahah aahahaha</div> -->
                </Content>
            </Layout>
        </Layout>



        <!-- <div style="text-align: center;" :key="index">
                <Dropdown transfer v-if="item.children.length !== 1" placement="right-start" :key="index" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <template v-for="(child, i) in item.children">
                            <DropdownItem :name="child.name" :key="i"><Icon :type="child.icon"></Icon><span style="padding-left:10px;">{{ child.title }}</span></DropdownItem>
                        </template>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
                    <Button @click="changeMenu(item.children[0].name)" style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem :name="item.children[0].name" :key="'d' + index"><Icon :type="item.icon"></Icon><span style="padding-left:10px;">{{ item.children[0].title }}</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div> -->

            <div style="text-align: center;">
                <Dropdown transfer>
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" color="red" type="ios-navigate"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <template>
                            <DropdownItem name="child.name" ><Icon type="ios-navigate"></Icon><span style="padding-left:10px;">child.title</span></DropdownItem>
                        </template>
                        <template>
                            <DropdownItem name="child.name" ><Icon type="ios-navigate"></Icon><span style="padding-left:10px;">child.title</span></DropdownItem>
                        </template>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer placement="right-start" >
                    <Button  style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" color="red" type="ios-navigate"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem name="item.children[0].name"><Icon type="ios-navigate"></Icon><span style="padding-left:10px;"> item.children[0].title </span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                levelList: null
            }
        },
        watch: {
            $route(n, o) {
                console.log(n.matched,o)
                this.getBreadcrumb()
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            getBreadcrumb() {
                // only show routes with meta.title
                let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
                const first = matched[0]

                if (!this.isDashboard(first)) {
                    matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
                }

                this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
                
                console.log(this.levelList)
            },
            
            isDashboard(route) {
                const name = route && route.name
                if (!name) {
                    return false
                }
                return name.trim().toLocaleLowerCase() === 'dashboard'.toLocaleLowerCase()
            },
            pathCompile(path) {
                // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
                const { params } = this.$route
                var toPath = pathToRegexp.compile(path)
                return toPath(params)
            },
            handleLink(item) {
                const { redirect, path } = item
                if (redirect) {
                    this.$router.push(redirect)
                    return
                }
                this.$router.push(this.pathCompile(path))
            }
        },
        created() {
            console.log(this.$router.currentRoute)
            this.getBreadcrumb()
        },
    }
</script>
<style lang="less" scoped>
    .layout{
        min-height: 100%;
        // border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>