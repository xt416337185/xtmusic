<template>
<div class="container">
    <div id="header" class="header">
        <div class="logo">
            <router-link  to="">网易云音乐</router-link>
        </div>
        <ul class="first_nav">
            <li class="actives">发现音乐</li>
            <li>我的音乐</li>
            <li>朋友</li>
            <li>商城</li>
            <li>音乐人</li>
            <li>下载客户端</li>
         </ul>
        <div class="search">
            <div>
                <input type="text" placeholder="音乐/电台/用户">
            </div>
        </div>
        <div class="videoUp">
            <div>
                <router-link to="">视频投稿</router-link>
            </div>
        </div>
        <div class="login nologin" v-if="!islogin">
            <router-link to="/login">登录</router-link>
            <i class="arr"></i>
            <ul>
                <li>
                    <i class='mb_icon'></i>
                    <a href="javascript:;">手机号登录</a>
                </li>
                <li>
                    <i class="wx_icon"></i>
                    <a href="javascript:;">微信登录</a>
                </li>
                <li>
                    <i class="qq_icon"></i>
                    <a href="javascript:;">QQ登录</a>
                </li>
                <li>
                    <i class="wb_icon"></i>
                    <a href="javascript:;">新浪微博登录</a>
                </li>
                <li>
                    <i class="wy_icon"></i>
                    <a href="javascript:;">网易邮箱账号登录</a>
                </li>
            </ul>
        </div>
        <div class="login islogin" v-else>
            <router-link to="">
                <img src="../../static/images/musican/153931627905286.jpg" class="avatar">
            </router-link>
            <i class="arr"></i>
            <ul>
                <li><i class='hm_icon'></i><router-link to="">我的主页</router-link></li>
                <li><i class="msg_icon"></i><router-link to="">我的消息</router-link></li>
                <li><i class="lv_icon"></i><router-link to="">我的等级</router-link></li>
                <li><i class="mbr_icon"></i><router-link to="">VIP会员</router-link></li>
                <li><i class="st_icon"></i><router-link to="">个人设置</router-link></li>
                <li @click="signout"><i class="ex_icon"></i><router-link to="" data-action='logout'>退出</router-link></li>
            </ul>
        </div>
    </div>
    <Nav></Nav>
</div>
</template>

<script>
import Nav from '../components/nav'
export default {
    data(){
         return {
        }
    },
    created(){
        
    },
    mounted(){
        this.login()
    },
    methods:{
        login(){
            var url="/user/islogin"
            this.$axios.get(url).then(result=>{
                console.log(result)
                if(result.data.code==1){
                    /**登录成功改变模板中的登录状态 */
                    this.$store.dispatch("uplogin",true)
                    this.uname=result.data.msg.uname;
                }else{
                    this.$store.dispatch("uplogin",false)
                }
            })
        },
        signout(){
            var url="/user/signout";
            this.$axios.get(url).then(result=>{
                this.$router.go(0)
            })
        }
    },
    computed : {
        islogin(){
            /**获取store中的登录状态 */
            return this.$store.state.islogin
        }
    },
    components:{
        Nav
    }
}
</script>

<style scoped>
    .container{
        position: relative;
        z-index:999
    }
    .header,.first_nav{
        display:flex;
        overflow: hidden;
    }
    .header{
        width:100%;
        padding:0 32px;
	    height:70px;
	    justify-content:space-between;
	    margin:0 auto;
	    background-color: #232323;
    }
    .logo,.search>div,.videoUp>div,.login{
        background-image:url('../../static/images/icons/topbar.png');
    }
    .logo{
        width: 176px;
        height: 70px;
        background-position: 0 0;
    }
    .logo>a{
        display:block;
        height:100%;
        text-indent:-1000px;
    }
    .first_nav{
	    width:47%;
	    color:#AAA;
    }
    .first_nav li{
        cursor:pointer;
        list-style:none;
        padding:0 19px;
        height:70px;
	    line-height: 70px;
	    text-align: center;
    }
    .first_nav li:hover, .first_nav li.actives{
	    background:#000;
	    color:white;
    }
    .search{
	    margin-left:28px;
    }
    .search>div{
	    width: 158px;
        height: 32px;
        border-radius: 16px;
        margin-top: 12%;
        background-color: #fff;
        background-position: 0 -99px;
    }
    .search>div>input{
	    font-size: 0.8em;
        background-color: transparent;
        width: 100px;
        vertical-align: sub;
        border:none;
        margin-left:12px;
    }
    .videoUp{
	    width: 90px;
	    height: 100%;
    }
    .videoUp>div{
	    background-position: 0 -139px;
	    margin-top: 20%;
	    width: 100%;
	    height: 32px;
	    border-radius: 16px;
	    line-height: 31px;	
    }
    .videoUp>div>a{
        margin-left:12px;
        font-size: 0.7em;
	    color:#ccc;	
    }
    .videoUp:hover>div{
	    background-position: -100px -139px;
        color: #fff;
    }
    .videoUp:hover>div>a{
        background-position: -100px -139px;
        color: #fff;
    }
    .login{
        width: 55px;
        font-size: 0.9em;
        line-height: 70px;
	    background-position: right -28px;
	    position: relative;
	    color:#bbb;
    }
    .login a{
	    color: inherit;
    }
    .login .arr{
	    background-image: url('../../static/images/icons/toplist.png')
    }
    .login>.arr{
	    position: absolute;
	    top: 48px;
	    left: 14px;
	    width: 14px;
	    height: 8px;
	    background-position: -20px 0;
    }
    .login>ul{
	    width: 168px;
	    position: fixed;
        z-index: 999;
	    top: 57px;
	    right: 0px;
	    background-color: #2A2A2A;
	    font-size: 1em;
	    box-shadow: 0px 8px 28px 1px #444;
	    border-radius: 5px;
	    transform-origin: center 0;
	    color:#bbb;
    }
    .login>.arr, .login>ul{
	    transform: scaleY(0);
	    opacity: 0;
	    overflow: hidden;
	    transition: transform 0.3s ease,
				opacity 0.3s ease;
    } 
    .login:hover>.arr, .login:hover>ul{
	    transform:scaleY(1);
	    opacity: 1;
    }
    .login>ul li{
	    height: 38px;
	    line-height: 38px;
	    border-bottom:1px solid #222222;
        text-align:left;
    }
    .login>ul li>i{
	    display:inline-block;
	    width: 18px;
	    height: 18px;
	    background-image: url('../../static/images/icons/toplist.png');
	    margin-left: 19px;
        margin-right: 5px;
        vertical-align: middle;
    }
    .login .mb_icon{
	    background-position: 0 0;
    }
    .login .wx_icon{
	    background-position: -20px -20px;
    }
    .login .qq_icon{
	    background-position: -20px -40px;
    }
    .login .wb_icon{
	    background-position: 0 -20px;
    }
    .login .wy_icon{
	    background-position: 0 -40px;
    }
    .login .hm_icon{
	    background-position: 0 -80px;
    }
    .login .msg_icon{
	    background-position: -20px -120px;
    }
    .login .lv_icon{
	    background-position: 0px -100px;
    }
    .login .mbr_icon{
	    background-position: 0px -220px;
    }
    .login .st_icon{
	    background-position: 0px -140px;
    }
    .login .ex_icon{
	    background-position: 0px -200px;
    }
    .login.islogin .avatar{
	    border-radius:50%;
	    width:30px;
	    height:30px;
        margin-top:20px;
    }
</style>
