<template>
    <div class="container">
        <div class="prom">
                <p>注册成功返回登录页面</p>
        </div>
        <div class="register">
            <div class="title">
                <p>网易云音乐</p>
            </div>
            <div class="renav">
                <div class="uname">
                    <span>用户名:</span><input type="text" @blur="valiuname($event)" v-model="uname" @focus="inituname"><span class="msg">用户名至少4位数字或字母</span>
                </div>
                <div class="upwd">
                    <span>密&nbsp;&nbsp;&nbsp;&nbsp;码:</span><input type="password" @blur="valiupwd($event)" v-model="upwd" @focus="initupwd"><span  class="msg">密码为6位数</span>
                </div>
                <div class="cupwd">
                    <span>密&nbsp;&nbsp;&nbsp;&nbsp;码:</span><input type="password" v-model="cupwd"><span  class="msg">密码确认</span>
                </div>
                <div class="email">
                    <span>邮&nbsp;&nbsp;&nbsp;&nbsp;箱:</span><input type="email" @blur="valiemail($event)" v-model="email" @focus="initemail"><span  class="msg">请输入邮箱</span>
                </div>
                <div class="phone">
                    <span>手机号:</span><input type="text" @blur="valiphone($event)" v-model="phone" @focus="initphone"><span class="msg" >请输入手机号</span>
                </div>
                <div class="sub" @click="regt">
                    <button>注册</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
    data(){
        return {
            uname:'',
            vluname:false,
            upwd:'',
            vlupwd:false,
            email:'',
            vlemail:false,
            phone:'',
            vlphone:false,
            cupwd:'',
        }
    },
    methods:{
        /**封装一个可以多次使用的方法用来验证用户名密码等 */
        vali(e,reg,type,html1,html2){
            if(reg.test(type)){
                $(e.target).next().css("color","green").html(html1);
                return true
            }else{
                $(e.target).next().css("color","red").html(html2);
                return false
            }
        },
        valiuname(e){
            var reg=/^\w{4,}$/;
            var url=`http://192.168.43.158:3000/user/uname?uname=${this.uname}`;
            /**异步函数里面使用this给this起别名 */
            var self=this;
            /**异步函数中先验证用户名是否存在在验证格式是否正确 */
            (async function(){
                await new Promise(function(open){
                    self.$axios.get(url).then(result=>{
                        if(result.data.code==1){
                            $(e.target).next().html("用户名已存在")
                            self.vluname=false
                            return 
                        }
                        open()
                    })
                 })
                await new Promise(function(open){
                    self.vluname=self.vali(e,reg,self.uname,'用户名验证通过',"用户名格式不正确")
                })
            })() 
        },
        inituname(e){
            $(e.target).next().html("用户名至少4位数字或字母").css("color","rgb(144, 144, 201)")
        },
        initupwd(e){
            $(e.target).next().html("密码为6位数").css("color","rgb(144, 144, 201)")
        },
        initemail(e){
            $(e.target).next().html("请输入邮箱").css("color","rgb(144, 144, 201)")
        },
        initphone(e){
            $(e.target).next().html("请输入手机号").css("color","rgb(144, 144, 201)")
        },
        valiupwd(e){
            var reg=/^[0-9]{6}$/;
            this.vlupwd=this.vali(e,reg,this.upwd,'密码验证通过',"密码格式不正确")
        },
        valiemail(e){
            var reg=/^[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?$/;
            this.vlemail=this.vali(e,reg,this.email,'邮箱验证通过',"邮箱格式不正确")
        },
        valiphone(e){
            var reg=/^1[3-8]{1}[0-9]{9}$/;
            this.vlphone=this.vali(e,reg,this.phone,'手机号验证通过',"手机号不正确")
        },
        regt(){
            console.log(qs.stringify({uname:this.uname,upwd:this.upwd}))
            if(this.vluname&&this.vlupwd&&this.vlemail&&this.vlphone){
                if(this.upwd==this.cupwd){
                    var url="/user/register";
                    var obj={uname:this.uname,upwd:this.upwd,email:this.email,phone:this.phone};
                    var self=this;
                    /**qs模块将对象转换为字符串参数用于axios查询 */
                    this.$axios.post(url,qs.stringify(obj)).then(result=>{
                        /**验证通过1s后跳转到登录页 */
                        if(result.data.code==1){
                            $(".prom").css("display","block");
                            setTimeout(function(){
                                $(".prom").css("display","none");
                                self.$router.push({path:"/login"})
                                },1000)
                        }
                    })
                    /**验证不通过并且不通过的地方获得鼠标焦点 */
                }else{
                    $(".upwd input").focus().next().html("两次密码输入不一样").css("color","red")
                }
            }else{
                if(!this.vluname){
                    $(".uname input").focus().next().html("用户名验证未通过").css("color","red");
                    return
                }
                if(!this.vlupwd){
                    $(".upwd input").focus().next().html("密码格式不正确").css("color","red");
                    return 
                }
                if(!this.vlemail){
                    $(".email input").focus().next().html("邮箱格式不正确").css("color","red");
                    return 
                }
                if(!this.vlphone){
                    $(".phone input").focus().next().html("手机号不正确").css("color","red");
                    return
                }
            }
        }          
    }
}
</script>
<style scoped>
    .container{
        text-align: center;
        background-image:url("../../static/images/icons/bg_profile_unlogin.jpg");
        position: relative;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        height: 700px;
    }
    .container .prom{
        position: absolute;
        width:300px;
        height: 30px;
        line-height: 30px;
        color:#fff;
        z-index:999;
        background: rgb(199, 71, 25,.5);
        left:0;
        right:0;
        top:50px;
        margin: 0 auto;
        display: none;
        }
    .register{
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
    .title{
        margin-top:20px;
        font-size: 24px;

    }
    .renav{
        margin-top:20px;
        text-align: left;
        padding-left:40px;
        color:rgb(202, 130, 82);
    }
    .renav input{
        border-radius: 5px;
        box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.3);
        width: 30%;
        padding:5px 10px;
        position: absolute;
        left:100px;
        margin: auto;
        background: transparent;
        color:#fff
    }
    .msg{
        position: absolute;
        left: 280px;
        color:rgb(144, 144, 201);
        text-align: left;
    }
    .renav .uname,.upwd,.cupwd,.email,.phone{
        margin-top:30px;
    }
    .sub{
        width: 20%;
        height: 30px;
        background:rgb(42, 207, 166,.5);
        line-height: 30px;
        text-align: center;
        margin-top:30px;
        position: absolute;
        left:0;
        right:0;
        top:85%;
        margin: 0 auto;
        border-radius: 5px;
    }
    .sub>button{
        color:#fff;
        border:none;;
        background:transparent;
    }
</style>