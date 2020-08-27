<template>
    <div class="container">
        <div class="banner_bg">
	        <div id="banner" class="banner" >
		        <div class="wrap">
			        <div class="ban" @mouseenter="showMousee($event)" @mouseleave="showMousel($event)">
                        <img :src="shbimg" class="active">
				        <img v-for="items in bimg.slice(1)" :key="items.mid" :src="items.murl">
			        </div> 
			        <ul class="dots" @click="showBan">
                        <li data-toggle="1" class="atdots"></li>
                        <li v-for="items in bimg.slice(1)" :key="items.mid" :data-toggle="items.mid"></li>
				    <!-- indecator -->
			        </ul>
                    <div class="btn">
		                <button class="prev" @click="showPrev">
			                <i class="icon_prev"></i>
		                </button>
		                <button class="next" @click="showNext">
			                <i class="icon_next"></i>
		                </button>
	                </div>
		        </div>
		        <!-- <div class="shadow">
			        <img src="../../static/images/icons/shadow_min.png">
		        </div> -->
		        <!-- <div class="btn">
			        <button class="prev"></button>
			        <button class="next"></button>
		        </div> -->
	        </div>
        </div>
        <div class="recommend_bg">
	        <div id="recommend" class="recommend">
		        <h2 class="title">歌单推荐</h2>
		        <div class="second_nav">
			        <ul>
				        <li><router-link to="">为你推荐</router-link></li>
				        <li><router-link to="">90年代</router-link></li>
				        <li><router-link to="">民谣</router-link></li>
				        <li><router-link to="">日韩</router-link></li>
				        <li><router-link to="">情歌</router-link></li>
				        <li><router-link to="">网络歌曲</router-link></li>
			        </ul>
		        </div>
		        <div class="playlists">
			        <ul class="wrapper">
				        <li v-for="item in rimg" :key="item.mid">
					        <div class="play_btn"></div> 
					        <img :src="item.murl">
					        <div class="text_container">						
						        <p class="pl_intro">歌单介绍</p>
						        <p class="pl_amo">播放量<span>156.1</span>万</p>
					        </div>
				        </li>
			        </ul>
		        </div>
	        </div>
        </div>
        <div class="n_arr_bg">
	        <div id="n_arrival" class="n_arrival recommend">
		        <h2 class="title">新歌首发</h2>
		        <div class="second_nav">
			        <ul>
				        <li><router-link to="">内地</router-link></li>
				        <li><router-link to="">港台</router-link></li>
				        <li><router-link to="">欧美</router-link></li>
				        <li><router-link to="">日本</router-link></li>
				        <li><router-link to="">韩国</router-link></li>
			        </ul>
		        </div>
		        <div class="n_a_list">
			        <ul class="n_a_wrap">
				        <li class="sub_slide">
					        <ul>
						        <li class='pix' v-for="item in nimg" :key="item.mid">
							        <div class="cover_con">
								        <img :src="item.murl" alt=""><!-- 100*100 -->
								        <div class="play_btn"></div>
							        </div>
							        <div class="pix_info">
								        <router-link to="" class='music_name'>{{item.title}}</router-link>
								        <router-link to="" class='artist'>{{item.pname}}</router-link>
							        </div>
							        <p class="duration">{{item.timer}}</p>
						        </li>							
					        </ul>
				        </li>
			        </ul>
                    <ul class="ndots" @click="ndotClick">
                        <li class="acdot"></li>
                        <li v-for="i in pnimg" :key='i'></li>
                    </ul>		
	            </div>
	        </div>
        </div>
        <div class="recommend_bg">
	        <div id="recommend" class="recommend">
		        <h2 class="title">新碟推荐</h2>
		        <div class="second_nav">
			        <ul>
				        <li>
					        <router-link to="">为你推荐</router-link>
				        </li>
				        <li>
					        <router-link to="">90年代</router-link>
				        </li>
				        <li>
					        <router-link to="">民谣</router-link>
				        </li>
				        <li>
					        <router-link to="">日韩</router-link>
				        </li>
				        <li>
					        <router-link to="">情歌</router-link>
				        </li>
				        <li>
					        <router-link to="">网络歌曲</router-link>
				        </li>
			        </ul>
		        </div>
		        <div class="playlists">
			        <ul class="wrapper">
				        <li v-for="item in rimg" :key="item.mid">
					        <div class="play_btn"></div>
					        <img :src="item.murl">
					        <div class="text_container">
						        <p class="pl_intro">歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍歌单介绍</p>
						        <p class="pl_amo">播放量
							        <span>156.1</span>万</p>
					        </div>
				         </li>
			        </ul>
		        </div>
	        </div>
        </div>
        <div class="toplist_bg">
	        <div id="toplist" class="toplist">
		        <h2 class="title">排行榜</h2>
		        <ul class="lists">
			        <li class="toplist_item" v-for="i in 5" :key="i">
				        <div class="ban">
					        <div class="item_left">
						        <p class="toplist_title">巅峰榜</p>
						        <p class="item_title">流行指数</p>
						        <i class="item_line"></i>
						        <ul class="item_songlist">
							        <li>
								        <div class="s_num">1</div>
								        <div class="s_name">红蔷薇</div>
								        <div class="s_artist">张靓颖</div>
							        </li>
							        <li>
								        <div class="s_num">2</div>
								        <div class="s_name">我们的时光</div>
								        <div class="s_artist">林俊杰</div>
							        </li>
							        <li>
								        <div class="s_num">3</div>
								        <div class="s_name">刘海砍樵</div>
								        <div class="s_artist">张艺兴</div>
							        </li>
							        <li>
								        <div class="s_num">4</div>
								        <div class="s_name">都选C</div>
								        <div class="s_artist">缝纫机乐队</div>
							        </li>
						        </ul>
					        </div>
					        <div class="item_right">
						        <p class="toplist_title">巅峰榜</p>
						        <p class="item_title">流行指数</p>
						        <i class="item_line"></i>
						        <ul class="item_songlist">
							        <li>
								        <div class="s_num">1</div>
								        <div class="s_name">红蔷薇</div>
								        <div class="s_artist">张靓颖</div>
							        </li>
							        <li>
								        <div class="s_num">2</div>
								        <div class="s_name">我们的时光</div>
								        <div class="s_artist">林俊杰</div>
							        </li>
							        <li>
								        <div class="s_num">3</div>
								        <div class="s_name">刘海砍樵</div>
								        <div class="s_artist">张艺兴</div>
							        </li>
							        <li>
								        <div class="s_num">4</div>
								        <div class="s_name">都选C</div>
								        <div class="s_artist">缝纫机乐队</div>
							        </li>
						        </ul>
					        </div>
				        </div>		
			        </li>
		        </ul>
	        </div>
        </div>
        <div class="mv_bg">
	        <div id="mv" class="mv recommend">
		        <h2 class="title">MV</h2>
		        <div class="second_nav">
			        <ul>
				        <li><router-link to="">推荐</router-link></li>
				        <li><router-link to="">内地</router-link></li>
				        <li><router-link to="">港台</router-link></li>
				        <li><router-link to="">欧美</router-link></li>
				        <li><router-link to="">日本</router-link></li>
				        <li><router-link to="">韩国</router-link></li>
			        </ul>
		        </div>
		        <div class="mv_list">
			        <ul class="mv_wrap">
				        <li class="item_box" v-for="i in 8" :key="i">
					        <div class="play_btn"></div>
					        <div class="mv_item_cont">
						        <div class="mv_item">
							        <img src="../../static/images/mv/mv_1.png">
							        <div class="mv_intr">
								        <p class="mv_title">
									        <router-link to="">烟花 (《烟花》电影同名主题曲)</router-link>
								        </p>
								        <p class="mv_artist">
									        <router-link to="">DAOKO</router-link>
								        </p>
								        <div class="amo">
									        <i class="mv_icon"></i>
									        <span>156.1</span>
									        <span>万</span>
								        </div>
							        </div>
						        </div>
						        <div class="mv_item">
							        <img src="../../static/images/mv/mv_2.png">
							        <div class="mv_intr">
								        <p class="mv_title">
									        <router-link to="">分裂时空</router-link>
								        </p>
								        <p class="mv_artist">
									        <router-link to="">鞠婧祎</router-link>
								        </p>
								        <div class="amo">
									        <i class="mv_icon"></i>
									        <span>156.1</span>
									        <span>万</span>
								        </div>
							        </div>
						        </div>
					        </div>
				        </li>				
		            </ul>
			        <ul class="indecator">
				        <li class='active'></li>
				        <li></li>
			        </ul>
		        </div>
	        </div>
	        <div class="btn">
		        <button class="prev" @click="clickshowMv">
			        <i class="icon_prev"></i>
		        </button>
		        <button class="next" @click="clickshowMv">
			        <i class="icon_next"></i>
		        </button>
	        </div>
        </div>
        <div class="playbar_box" @mouseleave="mouseHide">
	        <div class="playbar_bg">
		        <div class="trigger_up" @mouseenter="mouseShow"></div>
		        <div class="playbar">
			        <div class="pb_btns">
				        <router-link to="">
					        <i class="pre_icon"></i>
				        </router-link>
				        <router-link to="" data-action="pause">
					        <i class="pau_icon" @click="player($event)" ></i>
				        </router-link>
				        <router-link to="">
					        <i class="nxt_icon"></i>
				        </router-link>
			        </div>
			        <div class="pb_cover">
				        <img src="../../static/images/icons/default_album.jpg" alt="cover">
			        </div>
			        <div class="pb_play">
				        <div class="mu_title">
					        <span class="mu_name">The Good Side</span>
					        <span class="musician">Troye Sivan</span>
				        </div>
				        <div class="pb_con">
					        <div class="pb_tbar" @click="changeProcess($event)">
						        <div class="pb_cbar"></div>
					        </div>
					        <div class="pb_dot"></div>
					        <div class="duration">
						        <span class="ctime">{{currenttime}}</span>
						        <span> / </span>
						        <span class="ttime">{{duration}}</span>
					        </div>
				        </div>
			        </div>
			        <div class="pb_ctrls">
				        <router-link to="">
					        <i class="coll_icon"></i>
				        </router-link>
				        <router-link to="">
					        <i class="share_icon"></i>
				        </router-link>
				        <router-link to="">
					        <i class="vol_icon"></i>
				        </router-link>
				        <router-link to="">
					        <i class="loop_icon"></i>
				        </router-link>
				        <router-link to="">
					        <i class="plist_icon"></i>
				        </router-link>
			        </div>
		        </div>
		        <audio src="../../static/src/3331052726.mp3" id='aud'>
                </audio>
		        <div class="pb_lock">
			        <router-link to="">
				        <i class="unlock_icon"></i>
			        </router-link>
		        </div>
	        </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header";
import Nav from "../components/nav";
import Footer from "../components/Footer"
export default {
    data(){
        return {
            bimg:[],
            shbimg:'',
            timer:null,
            rimg:[],
            nimg:[],
            pnimg:1,
            direction:1,
            $tri_up:null,
            $pb_box:null,
            $pbar:null,
            aud:null,
            canMove:false,
            dotleft:0,
            $pause:null,
            $dot:null,
            $cbar:null,
			$tbar:null,
            t$box:null,
            duration:'',
            timem:null,
            currenttime:'',
        }
    },
    created(){
        this.sbimg();
        this.showBimg();
        this.srimg();
        this.snimg(1,9);
    },
    mounted(){
        this.init();
        this.currenttime=this.gettimer(0);
    },
    updated () {
        this.duration = this.gettimer(this.aud.duration);
    },
    destroyed () {
        /**离开页面时清空定时器 */
        clearInterval(this.timer)
        this.timer = null
    },
    methods:{
        /**获取轮播图信息 */
        sbimg(){
            var url="/img/bimg"
            this.$axios.get(url).then(result=>{
                this.bimg=result.data.msg;
                this.shbimg=this.bimg.slice(0,1)[0].murl
            })
        },
        /**将轮播图改变为下一张的方法 */
        showNext(){
            if($('.active').is($('.ban img:last-child'))){
                $('.active').removeClass('active');
                $('.ban img:first-Child').addClass('active')
            }else{
                $('.active').removeClass("active").next().addClass("active")
            }
            if($('.atdots').is($('.dots li:last-child'))){
                $('.atdots').removeClass('atdots');
                $('.dots li:first-child').addClass('atdots');
            }else{
                $('.atdots').removeClass('atdots').next().addClass('atdots')
            }
            console.log(1)
        },
        /**轮播图自动播放,采用定时器自动调用下一张方法 */
        showBimg(){
            this.timer=setInterval(this.showNext,4000)
        },
        /**将轮播图换为上一张的方法*/
        showPrev(){
            if($('.active').is($('.ban img:first-child'))){
                $('.active').removeClass('active');
                $('.ban img:last-Child').addClass('active');
            }else{
                $('.active').removeClass("active").prev().addClass("active");
            }
            if($('.atdots').is($('.dots li:first-child'))){
                $('.atdots').removeClass('atdots');
                $('.dots li:last-Child').addClass('atdots');
            }else{
                $('.atdots').removeClass("atdots").prev().addClass("atdots");
            }
        },
        /**鼠标进入轮播图时清除定时器（停止轮播图片转换） */
        showMousee(e){
            e.stopPropagation();
            if(this.timer!=null){
                clearInterval(this.timer);
                this.timer=null;
            }
        },
        /**鼠标离开时启动定时器 */
        showMousel(e){
            e.stopPropagation();
            if(this.timer==null){
                this.timer=setInterval(this.showNext,4000)
            } 
        },
        showBan(e){
            /**当点击下面小点时轮播图切换为对应的轮播图片 */
            var $btn=$(e.target);
            if($btn.has([`data-toggle`])){
                /**获取当前小点相对应的下标 */
                var n=$btn.attr('data-toggle');
                var lis=$btn.parent().children();
                var bans=$('.ban').children('img');
                /**改变当前小点的状态为活动并且改变其他小点为不活动状态 */
                for(var i=0;i<lis.length;i++){
                    if($(lis[i]).has('.atdots')){
                        $(lis[i]).removeClass('atdots')
                    }
                    if($(bans[i]).has('.active')){
                        $(bans[i]).removeClass('active')
                    }
                }
                $btn.addClass('atdots');
                /**改变活动小点对应的轮播图 */
                $(bans[n-1]).addClass('active')
            }
        },
        /**获取图片信息 */
        srimg(){
            var url="/img/rimg"
            this.$axios.get(url).then(result=>{
                this.rimg=result.data.msg;
            })
        },
        /**利用分页查询获取歌手列表信息 */
        snimg(pno,pageSize){
            var url=`/img/nimg?pno=${pno}&pageSize=${pageSize}`;
            this.$axios.get(url).then(result=>{
                this.nimg=result.data.data;
                this.pnimg=parseInt((result.data.pageCount-1));
            })
        },
        /**点击下面小点获取当前的页面数 */
        ndotClick(e){
            var $li=$(e.target)
            /**利用冒泡在父元素上设置点击方法 */
            if($li.prop('nodeName')=='LI'){
                /**获取当前小点对应的页面数 */
                var n=$li.index()+1;
                var lists=$li.parent().children();
                /**给当前小点加活动状态给其他小点改为不活动状态 */
                for(var list of lists){
                    if($(list).has('.acdot')){
                        $(list).removeClass('acdot')
                    }
                };
                $li.addClass('acdot');
                /**将页面和也大小传个分页查询的方法 */
                this.snimg(n,9);
            }
            
        },
        /**设置mv图片点击翻转，并且翻转的方向随机*/
        showMv(){
            var self=this
            $('.mv .mv_item_cont').each(function(){
                 $(this).css({
                    'transform': `rotateY(${180*self.direction}deg)`,
                    'transitionDelay': `${Math.random() * 0.5}s`
                });
            })
        },
        /**点击左右按钮实现mv的翻转，并且设置mv的正反页 */
        clickshowMv(){
            this.showMv();
            this.direction=this.direction==1?0:1
        },
        /**初始化音乐播放器需要用到的数据 */
        init(){
            this.$tri_up=$('.trigger_up');
            this.$pb_box=$('.playbar_box');
            this.$pbar=$('.playbar_bg');
            this.aud=document.getElementById("aud");
            this.$pause=$('[data-action=pause]');
            this.$dot=$('.playbar .pb_dot'),
			this.$cbar=$('.playbar .pb_cbar'),
			this.$tbar=$('.playbar .pb_tbar'),
            this.$box=this.$dot.parent(),
            this.dotleft=-5
        },
        /**设置下面播放栏的显示和隐藏 */
        mouseShow(){
            this.$tri_up.hide();
		    this.$pbar.css({bottom : 0});
		    this.$pb_box.css({bottom : 0});
        },
        mouseHide(){
            this.$tri_up.show();
		    this.$pbar.css({bottom : '-55px'});
		    this.$pb_box.css({bottom : '-70px'});   
        },
        /**音乐自动播放 */
        autoPlay(){
            this.dotleft+=(1/this.aud.duration)*525;
            this.changedot(this.dotleft);
            /**获取当前歌曲的时间并且传个设置时间格式的方法 */
            this.currenttime=this.gettimer(this.aud.currentTime);
            /**当歌曲自动播放完毕改变歌曲的状态 */
            if(this.aud.ended){
                this.$pause.children('i').toggleClass('pau_icon').toggleClass('play_icon');
                clearInterval(this.timem);
                this.timem=null;
            }
        },
        /**音乐播放暂停功能 */
        player(e){
           var aud=document.getElementById("aud");
           $(e.target).toggleClass('pau_icon').toggleClass('play_icon')
           /**点击时判断当前歌曲为播放或者暂停状态并且改变其状态和相应图标 */
            if(aud.paused){
                aud.play();
                this.timem=setInterval(this.autoPlay,1000);
            }else{
                aud.pause();
                clearInterval(this.timem);
                this.timem=null;
            }
            this.duration=this.gettimer(this.aud.duration);           
        },
        /**改变音乐播放时播放条前点的位置 */
        changedot(){
            this.$dot.css('left',this.dotleft);
            var cb_width = (this.dotleft + 5) * 100 / 525 + "%";
            this.$cbar.css('width',cb_width)
        },
        /**改变音乐播放进度条的位置 */
        changeProcess(e){
            /**手动点击进度条改变播放的进度时间 */
            this.dotleft=e.offsetX  - this.$dot.width() / 2;
            var progress=(this.dotleft+5)/525
            this.changedot();
            this.aud.currentTime=progress*this.aud.duration;
            /**手动改变进度条的位置时将歌曲当前时间改变 并且将剩余时间传给设置时间格式的方法 */
            this.currenttime=this.gettimer(this.aud.currentTime);
            if(this.aud.ended){
                /**自动播放完毕改变播放和暂停按钮并且清除自动播放定时器 */
                this.$pause.children('i').toggleClass('pau_icon').toggleClass('play_icon');
                clearInterval(this.timem);
                this.timem=null;
			} 
        },
        gettimer(time){
            /**音乐播放改变音乐剩余的时间 */
            var currentTime=time|0;
            var ct_s=(100+currentTime%60+'').slice(1);
            var ct_m=(100+((currentTime-currentTime%60)/60)%60+'').slice(1);
            var ct_h;
            /**设置音乐剩余时间的格式为00：00：00或者00：00 */
            if(Math.floor(currentTime/3600)>0){
                ct_h=(100+Math.floor(currentTime/3600)+'').slice(1);
            }  
            return ct_h?ct_h+":"+ct_m+":"+ct_s:ct_m+":"+ct_s
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
    .banner_bg{
        background-color: cadetblue;
    }
    .banner{
	    width: 1200px; 
	    color: white;
	    margin:0 auto;
	    overflow:hidden;
        position: relative;
        height:336px;
    }
    .banner .ban{
        width: 750px;
        height: 336px;
        position: absolute;
        left:250px;
    }
    .banner .wrap .ban>img{
        transition: 2s linear;
        opacity: 0;
        position: absolute;
        left: 0;
    }
    .banner .wrap .ban>img.active{
        opacity: 1;
    }
    .banner .btn{
        position: absolute;
        top: 150px;
    }
    .banner .btn .prev,.next{
        position: absolute;
        background-color:rgba(0,0,0,.05);
        width: 79px;
        height: 108px;
        border:none;
        border-radius: 5px;
    }
    .banner .dots{
        display: flex;
        position: absolute;
        top:300px;
        left:550px;
        z-index: 999;
    }
    .banner .dots li{
        background:#777;
        width:10px;
        height: 10px;
        border-radius: 5px;
        margin-left:10px;
        cursor: pointer;
    }
    .banner .dots .atdots{
        background:#CCC;
    }
    .banner .btn .prev{
        left:100px
    }
    .banner .btn .next{
        left:1060px
    }
    .recommend {
        margin: 0 auto;
        width:100%;
        background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
    }
    .recommend .playlists {
        color: black;
    }
    .recommend .second_nav {
        font-size: 0.9em;
        text-align: center;
        margin-bottom: 20px;
    }
    .recommend .title {
        padding: 50px 0 20px;
        margin: 0 auto;
        width: 200px;
        text-align: center;
        letter-spacing: 10px;
        font-size: 1.7em;
        color: #323232;
    }
    .recommend .second_nav>ul {
        display: flex;
        justify-content: center;
    }
    .recommend .second_nav>ul a {
        color: #333;
    }

    .recommend .second_nav>ul li {
        width: 6.7%;
        line-height: 40px;
    }
    .recommend .second_nav a:hover {
        color: #f46262;
    }
    .recommend .wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .recommend .wrapper li {
        overflow: hidden;
        position: relative;
        width: 220px;
        margin: 0 10px 30px;
        height: 300px;
        font-size: 0.9em;
        border-radius: 15px;
        background: #fff;
        transition: transform 0.4s ease;
    }
    .recommend .wrapper li>*{
        position: absolute;
    }
    .recommend .wrapper li>img{
        left:0;
        width:220px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    .recommend .text_container{
        bottom: 3%;
        padding: 0 5px;
        background: #fff;
        transition: all 0.3s ease-in-out;
    }
    .recommend .text_container>.pl_intro{
        top: 75%;
        color: #000;
        margin: 5px 0;
        word-break:inherit;
    }
    .recommend .text_container>.pl_amo{
        top: 85%;  
        color: #666;
        font-size:0.8em;
    }
    .recommend .wrapper .play_btn{
        top: 18%;
        left: 28%;
        width: 100px;
        height: 100px;
        background-image: url('../../static/images/icons/iconall.png');
        background-position: -8px -394px;
        z-index: 1;
        transform: scale(0);
        transition: 0.4s;
    } 
    .recommend .wrapper li:hover>.play_btn{
         transform: scale(0.8);
    } 
    .recommend .wrapper li:hover>.text_container{
        transform: translateY(-10px);
    }
    .recommend .wrapper li:hover{
        overflow: hidden;
        transform: translateY(-2%);
        cursor: pointer;
        box-shadow: 1px 4px 10px 2px #CCC;
    }
    .n_arrival .n_a_list{
        background-color: transparent;
        width:100%;
        overflow: hidden;
        position: relative;
    }
    .n_arrival .n_a_wrap{
        height: 390px;
    }
    .n_arrival .n_a_wrap>li{
        position:absolute;
        width:100%;
    }
    .n_arrival .sub_slide ul{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .n_arrival .sub_slide .pix{
        display: flex;
        width: 30%;
        margin: 0 15px;
        padding: 15px 0;
        border-bottom: 1px solid #e7e4e4;
        position: relative;
    }
    .n_arrival .sub_slide .pix img{
        width:96px;
        height:96px;
    }
    .n_arrival .pix .play_btn{
        position: absolute;
        top: 13%;
        left: 1%;
        width: 100px;
        height: 100px;
        background-image: url(../../static/images/icons/iconall.png);
        background-position: -8px -394px;
        z-index: 1;
        transform: scale(0);
        transition: 0.3s 
    }
    .n_arrival .pix .cover_con:hover>.play_btn{
        transform:scale(0.5);
        cursor: pointer;
    }
    .n_arrival .pix_info{
        margin:23px 0 0 10px;
    }
    .n_arrival .duration{
        position: absolute;
        right: 0;
        top: 36px;  
    }
    .n_arrival .pix_info>a{
        display: block;
        color:#333;
    }
    .n_arrival .pix_info>a:hover{
        color: #f46262;
    }
    .ndots{
        margin-left:550px;
        margin-top:10px;
        display:flex;
        margin-bottom: 10px;
    }
    .ndots li{
        width:10px;
        height:10px;
        z-index: 1000;
        border-radius: 5px;
        background:#ccc;
        margin-left:15px;
    }
    .ndots li.acdot{
        background:rgba(219, 21, 21, 0.4);
    }
    .toplist{
        margin: 0 auto;
        width:100%;
        background-image: linear-gradient(to bottom, #F1F1F1 0%, #FEFEFE 100%);
        color: #fff;
    }
    .toplist .title{
        padding: 50px 0;
        margin: 0 auto;
        width: 200px;
        text-align: center;
        letter-spacing: 10px;
        font-size: 1.7em;
        color: #323232;
    }
    .toplist .lists{
        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 25px;
    }
    .toplist .lists .toplist_item{
        width: 220px;
        height: 500px;
        margin:0 10px;
        position: relative;
        display: flex;
        /* -moz-perspective: 500px; */
        perspective:500px;
        backface-visibility: hidden;
        flex-direction: column;
    }
    .toplist .toplist_title{
        font-size: 1.4em;
        font-weight: lighter;
        margin: 50px 0 5px;
        letter-spacing: 1px;
    }
    .toplist .item_title{
        font-weight: 500;
        font-size: 1.6em;
        letter-spacing: 2px;
    }
    .toplist .item_line{
        display: block;
        width: 36px;
        height: 2px;
        margin: 0 auto;
        background: #fff;
        margin: 28px auto;
    }
    .toplist .item_songlist>li{
        margin:0 0 15px 26px;
        padding-left:20px;
        position: relative;
    }
    .toplist .item_songlist{
        text-align: left;
    }
    .toplist .item_songlist .s_num{
        position:absolute;
        left:0;
        top:2px;
    }
    .toplist .toplist_item .item_left,.toplist .toplist_item .item_right{
        background:url('../../static/images/icons/bg_index_top.jpg') no-repeat;
        width: 100%;
        height: 500px;
        position: absolute;
        box-shadow: 3px 11px 10px 1px #a5a1a1;
        transform-origin: 50% 50% -110px;
    }
    .toplist .toplist_item .item_right{
        transform:rotateY(90deg);
    }
    .toplist .lists .toplist_item:nth-child(2) .item_left {
         background-position: -224px 0;
    }
    .toplist .lists .toplist_item:nth-child(3) .item_left{
        background-position: -448px 0;
    }
    .toplist .lists .toplist_item:nth-child(4) .item_left{
        background-position: -672px 0;
    }
    .toplist .lists .toplist_item:nth-child(5) .item_left{
        background-position: -896px 0;
    }
    .toplist .toplist_item .item_right{
        background-position: -224px 0;
    }
    .toplist .lists .toplist_item:nth-child(2) .item_right {
        background-position: -448px 0;
    }
    .toplist .lists .toplist_item:nth-child(3) .item_right{
        background-position: -672px 0;
    }
    .toplist .lists .toplist_item:nth-child(4) .item_right{
        background-position: -896px 0;
    }
    .toplist .lists .toplist_item:nth-child(5) .item_right{
        background-position: 0 0;
    }
    .toplist .toplist_item:hover .ban{
        transform: rotateY(-90deg);
    }
    .toplist .toplist_item .ban{
        transform-style: preserve-3d;
        transform-origin: 50% 50% -110px;
        z-index: 10;
        transition:  0.3s ;
    }
    .mv .mv_list{
        font-size:0.95em;
    }
    .mv .mv_wrap{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .mv .item_box{
        position: relative;
        width: 23%;
        perspective: 500px;
        height: 240px;
        margin: 8px 10px;
        border-radius: 15px;
        overflow: hidden;
    }
    .mv .item_box .mv_item_cont{
        position: relative;
        transform-style: preserve-3d;
        transform-origin: center center;
        transition-property: transform;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
    }
    .mv .mv_item_cont .mv_item{
        position: absolute;
        backface-visibility: hidden;
    }
    .mv .mv_item_cont .mv_item img{
        width:100%;
    }
    .mv .mv_item_cont .mv_item:last-child{
        transform: rotateY(-180deg);
    }
    .mv .item_box .play_btn{
        position: absolute;
        top: 15%;
        left: 33%;
        width: 100px;
        height: 100px;
        background-image: url('../../static/images/icons/iconall.png');
        background-position: -8px -394px;
        z-index: 1;
        transform: scale(0);
        transition: 0.3s;
    }
    .mv .item_box:hover .play_btn{
        transform: scale(0.5);
        cursor: pointer;
    }
    .mv .mv_item .mv_icon{
        display: inline-block;
        width: 19px;
        height: 12px;
        background-image: url('../../static/images/icons/icon_sprite.png');
        background-position: -180px -20px;
        margin-right: 5px;
    }
    .mv .mv_intr {
        text-align: left;
    }
    .mv .mv_intr .mv_title a{
        color: #333;
    }
    .mv .mv_item .mv_artist a,
    .mv .mv_item .amo{
        color:#777;
    }
    .mv .mv_list .indecator{
        margin:12px auto;
        display:flex;
        justify-content: center;
    }
    .mv .mv_list .indecator li{
        background:rgba(0, 0, 0, 0.1);
        width:12px;
        height: 12px;
        border-radius:6px;
        margin-right:20px;
        cursor: pointer;  
    }
    .mv .mv_list .indecator li:hover,
    .mv .mv_list .indecator li.active{
        background:rgba(0, 0, 0, 0.3);
    }
    .mv_bg .btn>*{
        position: absolute;
        top: 50%;
        margin-top: 10px;
        width: 79px;
        height: 108px;
        background: rgba(0,0,0,.05);
        opacity: 1;
        transition-duration: .5s;
        z-index: 2;
        cursor: pointer;   
    }
    .mv_bg .btn>*:hover{
        background:rgba(0, 0, 0, 0.1);
    }
    .mv_bg .btn>.prev,
    .mv_bg .btn>.next {
        border:none;
        transition: left 0.3s ease-in, right 0.3s ease-in;
    }
    .mv_bg{
        position: relative;
        overflow: hidden;
    }
    .mv_bg:hover .btn>.prev {
        left: 0px; 
    }
    .mv_bg:hover .btn>.next {
        right: 0px;
    }
    .mv_bg .btn>.prev {
        left: -79px;
    }
    .mv_bg .btn>.next {
        right: -79px;
    }
    .icon_prev, .icon_next {
        display: inline-block;
        background-image: url('../../static/images/icons/icon_sprite.png');
        height: 39px;
        width: 20px;
    }
    .icon_prev{
        background-position: -20px -120px;
    }
    .icon_next{
        background-position: 0 -120px;
    }
    .playbar_box{
        height: 70px;
        position: fixed;
        width: 100%;
        bottom: -70px;
        z-index: 9999;
    }
    .playbar_bg{
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 0 9px 1px #000;
        bottom: -55px;
        width: 100%;
        transition: bottom 0.6s;
    }
    .playbar_bg>.trigger_up{
        position: absolute;
        z-index: 999;
        width:100%;
        height:20px;
        background:transparent;
        top:-20px;
    }
    .playbar{
        display:flex;
        align-items: flex-start;
        flex-wrap: nowrap;
        width:100%;
        margin:0 auto;
        height: 55px;
        line-height: 55px;
    }
    .playbar .pb_cover{
         margin-right: 17px;
    }
    .playbar .pb_cover>img {
        margin-top:10px;
        width: 34px;
        height: 34px;
        border: 1px solid #000;
        border-radius: 3px;
        box-shadow: 0 0 1px 1px #000;
        cursor: pointer;
    }
    .playbar a>i{
        display: inline-block;
        background-image: url('../../static/images/icons/playbar.png');
        width : 25px;
        height : 25px;
        vertical-align: middle;
        margin-right:3px;
    }
    .playbar .pb_btns .pre_icon {
        background-position: 0px -130px;
        width: 28px;
        height: 28px;
    }
    .playbar .pb_btns .pre_icon:hover {
        background-position: -30px -130px;
    }
    .playbar .pb_btns .pau_icon {
        background-position: 0px -204px;
        width: 36px;
        height: 36px;
    }
    .playbar .pb_btns .pau_icon:hover{
        background-position: -40px -204px;
    }
    .playbar .pb_btns .play_icon{
        background-position: 0px -165px;
        width: 36px;
        height: 36px;
    }
    .playbar .pb_btns .play_icon:hover{
        background-position: -40px -165px;
    }
    .playbar .pb_btns .nxt_icon {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
    }
    .playbar .pb_btns .nxt_icon:hover {
        background-position: -110px -130px;
    }
    .playbar .pb_ctrls .coll_icon{
        background-position: -88px -163px;
    }
    .playbar .pb_ctrls .coll_icon:hover {
        background-position: -88px -189px;
    }
    .playbar .pb_ctrls .share_icon {
        background-position: -114px -163px;
    }
    .playbar .pb_ctrls .share_icon:hover {
        background-position: -114px -189px;
    }
    .playbar .pb_ctrls .vol_icon {
        background-position: -2px -248px;
    }
    .playbar .pb_ctrls .vol_icon:hover {
        background-position: -31px -248px;
    }
    .playbar .pb_ctrls .loop_icon {
        background-position: -3px -344px;
    }
    .playbar .pb_ctrls .loop_icon:hover {
        background-position: -33px -344px;
    }
    .playbar .pb_ctrls .plist_icon {
        background-position: -42px -68px;
        width:59px;
        height:27px;
    }
    .playbar .pb_ctrls .plist_icon:hover {
        background-position: -42px -98px;
    }
    .playbar .pb_play{
        display:flex;
        flex-wrap: wrap;
        width:680px;
    }
    .playbar .pb_play>.mu_title{
        width:100%;
        height:28px;
        line-height: 28px;
        font-size:0.9em;
    }
    .playbar .pb_play>.mu_title>.mu_name{
        color: #e8e8e8;
        margin-right:10px;
    }
    .playbar .pb_play>.mu_title>.musician {
        color: #9b9b9b;
    }
    .playbar .pb_play>.pb_con {
        display: flex;
        width: 100%;
        position: relative;
    }
    .playbar .pb_play>.pb_con>.pb_tbar{
        width: 80%;
        height: 9px;
        background-image: linear-gradient(to bottom, rbga(0, 0, 0, 0.6), rbga(0, 0, 0, 0.8));
        box-shadow: 0px 0 1px 1px #000 inset;
        border-radius: 5px;
        border-bottom: 1px solid rgba(194, 190, 190, 0.45);
        margin-right:10px;
    }
    .playbar .pb_play>.pb_con .pb_cbar{
        width: 0;
        border-top: 1px solid #f00;
        background: #c70b0c;
        height: 9px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .playbar .pb_play>.pb_con>.pb_dot{
        background-image: url('../../static/images/icons/iconall.png');
        display: inline-block;
        width: 22px;
        height: 24px;
        background-position: 0 -250px;
        position: absolute;
        top: -7px;
        left: -5px;
    }
    .playbar .pb_play>.pb_con>.pb_dot:hover{
        background-position: 0 -280px;
    }
    .playbar .pb_play>.pb_con>.duration {
        width:20%;
        height: 10px;
        line-height: 10px;
        color: #a1a1a1;
        font-size: 0.7em;
    }
    .playbar .pb_play>.pb_con>.duration>.ttime {
        color: #797979;
    }
    .playbar_bg .pb_lock i{
        background-image: url('../../static/images/icons/playbar.png');
        background-repeat: no-repeat;
        display: inline-block;
        width: 15px;
        height: 17px;
        margin-left: 17px;
    }
    .playbar_bg .pb_lock .lock_icon{
        background-position: -100px -380px;
    }
    .playbar_bg .pb_lock .lock_icon:hover{
        background-position: -100px -400px;
    }
    .playbar_bg .pb_lock .unlock_icon{
        background-position: -81px -380px;
    }
    .playbar_bg .pb_lock .unlock_icon:hover{
        background-position: -81px -400px;
    }
    .playbar_bg .pb_lock{
        background-image: url(../../static/images/icons/lock.png);
        background-repeat: no-repeat;
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 0;
    }
/* audio */
#aud{
  display:none;
}
</style>