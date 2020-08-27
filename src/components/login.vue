<template>
    <div>
        <div class="main clear">
            <canvas id='login_bg'></canvas>
            <div class="login_outer">
                <div class="login_header clear">
                    <p class="title">网易云音乐</p>
                </div>
                <div class="showMsg">
                    <p class="msg">
                        <i class="icon_msg"></i>
                        <span></span>
                    </p>
                </div>
                <div class="uname">
                    <input type="text" placeholder="邮箱/手机号/ID" name="uname" v-model="uname">
                </div>
                <div class="upwd">
                    <input type="password" placeholder="登录密码" name="upwd" v-model="upwd">
                </div>
                <div class="valicode">
                    <input type="text" name="valicode"><img src="" alt="">
                </div>
                <div class="btns" @click="login">
                    <button class="login_btn" data-action="login">登录</button>
                </div>
                <div class="help" @click="regis">
                    <router-link to="#">忘记密码</router-link>
                    <router-link to="#">忘记用户名</router-link>
                    <router-link to="#" >免费注册</router-link>
                </div>
                <div class="login_footer">
                    <p class="otherway">使用其他方式登录: 
                        <router-link to="#"><i class="icon_wb"></i></router-link>
                        <router-link to="#"><i class="icon_wx"></i></router-link>
                        <router-link to="#"><i class="icon_qq"></i></router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            cans:null,
            bg_pic:new Image(),
            num:30,
            alive:[],
            red:new Image(),
            black:new Image(),
            white:new Image(),
            gray:new Image(),
            w:0,
            h:0,
            x:[],
            y:[],
            l:[],
            spd:[],
            pic:[],
            count:0,
            uname:"",
            upwd:"",
            login_bgT:null,
            logoMonitorT:null
        }
    },
    created(){
        this.init();
        this.logoMonitor()
    },
    mounted(){
        this.login_bg();
    },
    /**实例摧毁前关闭定时器 */
    destroyed(){
        window.cancelAnimationFrame(this.login_bgT);
        this.login_bgT=null;
        window.cancelAnimationFrame(this.logoMonitorT);
        this.logoMonitorT=null;
    },
    methods:{
        /*绘制背景*/ 
        login_bg(){
            this.login_bgT=window.requestAnimationFrame(this.login_bg);
            this.cans=document.getElementById("login_bg");
            this.cans.width=innerWidth;
            this.cans.height=innerHeight;
            var ctx=this.cans.getContext("2d");
            /**绘制背景大图 */
            ctx.drawImage(this.bg_pic,0,0,this.w,this.h)
            for(var i=0;i<this.num;i++){
                if(this.alive[i]){
                    this.y[i]-=this.spd[i]*15
                    if(this.y[i]<-40){
                        this.alive[i]=false
                    }
                    /**绘制背景动态图标 */
                    ctx.drawImage(this.pic[i],this.x[i],this.y[i],this.l[i],this.l[i])
                }
            }
        },
        /*初始化数据*/
        init(){
            this.red.src='../../static/images/icons/red_logo.png';
	        this.white.src='../../static/images/icons/white_logo.png';
	        this.gray.src='../../static/images/icons/gray_logo.png';
            this.black.src='../../static/images/icons/black_logo.png';
            this.bg_pic.src="../../static/images/icons/bg_profile_unlogin.jpg"
            this.w=innerWidth;
            this.h=innerHeight;
            console.log(this.red)
            for(var i=0;i<this.num;i++){
                this.alive[i]=false;
                this.x[i]=this.rand(0,this.w);
                this.y[i]=this.rand(0,this.h);
                this.l[i]=this.rand(40,70);
                this.spd[i]=this.rand(0,1)*0.017+0.03;
                var n=Math.random();
            }
            
        },
        /*创建只能定时器使背景为动态*/ 
        logoMonitor(){
            this.count=0;
            this.logoMonitorT=window.requestAnimationFrame(this.logoMonitor)
            for(var i=0;i<this.num;i++){
                if(this.alive[i]){
                    this.count++
                }
            }
            if(this.count<20){
                this.logoCreate()
                }
        },
        /*当活动的图标小于20时在页面随机挑选一个图标创建 */
        logoCreate(){
            for(var i=0;i<this.num;i++){
                if(!this.alive[i]){
                    this.alive[i]=true;
                    this.x[i]=this.rand(0,this.w);
                    this.y[i]=this.rand(0,this.h);
                    this.pic[i]=Math.random()<0.6?this.red:Math.random()<0.7?this.black:Math.random()<0.8?this.gray:this.white;
                    return
                }
            }
        },
        /**图标创建位置的随机数 */
        rand(min,max){
            return Math.random()*(max-min)+min
        },
        /**登录成功后返回首页 */
        login(){
            var msg=$('.login_outer .showMsg');
                msg.css("display","none");
            var url=`/user/login?uname=${this.uname}&upwd=${this.upwd}`;
            this.$axios.get(url).then(result=>{
                if(result.data.code==1){ 
                    msg.css("display","block");
                    msg.html('登录成功返回首页');
                    setTimeout(() => {
                        msg.css("display","none");
                        /*改变store中的登录状态 */
                        this.$store.dispatch("uplogin",true);
                        this.$router.push({path:"/index"});
                    }, 1000);
                    
                }else{
                    msg.css("display","block");
                    msg.html(result.data.msg)
                }
            })
        },
        /**跳转到注册页面 */
        regis(e){
            e.preventDefault();
            window.cancelAnimationFrame(this.login_bgT);
            this.login_bgT=null;
            window.cancelAnimationFrame(this.logoMonitorT);
            this.logoMonitorT=null;
            this.$router.push({path:"/login/register"})
        }
    }
}
</script>
<style  scoped>
    .main{
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        font-size:0
    }
    #login_bg{
        z-index:-1000;
    }
    .login_outer{
        background: rgba(0,0,0,0.5);
        color: #fff;
        position: absolute;
        width: 500px;
        height: 380px;
        left:0;
        right:0;
        top: 20%;
        margin: auto;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0px 0px 10px 5px rgba(74, 73, 73, 0.5);
    }
    .login_outer .title{
        margin-top:20px;
        font-size: 1.2rem;
    }
    .login_outer input{
        background: transparent;
        color: #fff;
    }
    .login_outer .login_header{
        font-size: 1.2em;
        font-weight: bold;
    }
    .login_outer .login_header .close{
        float: right;
        margin: 12px 12px 5px 0;
    }
    .login_outer .uname,
    .login_outer .upwd,
    .login_outer .btns, 
    .login_outer .login_footer,  
    .login_outer .valicode,
    .login_outer .help{
        border-radius: 5px;
        box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.3);
        width: 40%;
        padding:5px 10px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
    .login_outer .uname{
        top: 31%;
    }
    .login_outer .upwd{
        top: 44%;
    }
    .login_outer .valicode{
        top: 53%;
    }
    .login_outer .showMsg{
        top: 20%;
        position: absolute;
        left: 0;
        text-align: center;
        right: 0;
        font-size: 0.9rem;
    }
    .login_outer .btns{
        top: 69%;
    }
    .login_outer .help{
        top: 87%;
        left: 54%;
    }
    .login_outer .login_footer{
        top: 86%;
        left: -52%;
    }
    .login_outer .showMsg, 
    .login_outer .valicode{
        display:none;
        margin: 0 auto;
    }
    .login_outer .help a, 
    .login_outer .otherway{
        color: rgb(188, 188, 189);
        font-size: 0.9rem;
    }
    .login_outer .otherway{
        height: 40px;
        line-height: 40px;
    }
    .login_outer .otherway>a>i{
        vertical-align: middle;
        display: inline-block;
        height: 40px;
        width: 40px;
        background-image: url('../../static/images/icons/logo.png');
        transform: scale(0.8);
    }
    .login_outer .otherway .icon_wb{
        background-position: -230px -670px;
    }
    .login_outer .otherway .icon_wx{
        background-position: -150px -670px;
    }
    .login_outer .otherway .icon_qq{
        background-position: -190px -670px;
    }
    .btns{
        background:red;
    }
    .btns .login_btn{
        border:none;
        color:#fff;
        background:transparent
    }
</style>