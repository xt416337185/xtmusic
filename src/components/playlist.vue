<template>
    <div>
        <div class="header_bg" id="header_bg"></div>
        <div class="nav_bg" id="nav_bg"></div>
        <div class="main">
            <div class="pl_nav_cont">
                <div class="tag_list" data-filter='language'>
                    <div class="catogery"></div>
                    <div class="tags" @click="change_width">
                        <router-link to="#" class="aactive">全部</router-link>
                        <router-link to="#">内地</router-link>
                        <router-link to="#">港台</router-link>
                        <router-link to="#">欧美</router-link>
                        <router-link to="#">韩国</router-link>
                        <router-link to="#">日本</router-link>
                    </div>
                    <div class="slide_cube"></div>
                </div>
                <div class="tag_list" data-filter='genre'>
                    <div class="catogery">
                        <p>流派</p>
                    </div>
                    <div class="tags" @click="change_width">
                        <router-link to="#" class="aactive">全部</router-link>
                        <router-link to="#">流行</router-link>
                        <router-link to="#">古典</router-link>
                        <router-link to="#">爵士</router-link>
                        <router-link to="#">摇滚</router-link>
                        <router-link to="#">电子</router-link>
                        <router-link to="#">拉丁</router-link>
                        <router-link to="#">世界音乐</router-link>
                        <router-link to="#">轻音乐</router-link>
                        <router-link to="#">嘻哈</router-link>
                        <router-link to="#">原声</router-link>
                        <router-link to="#">乡村</router-link>
                        <router-link to="#">舞曲</router-link>
                        <router-link to="#">R&B</router-link>
                        <router-link to="#">民谣</router-link>
                        <router-link to="#">金属</router-link>
                    </div>
                    <div class="slide_cube"></div>
                </div>
                 <div class="tag_list" data-filter='category'>
                    <div class="catogery">
                        <p>类别</p>
                    </div>
                    <div class="tags" @click="change_width">
                        <router-link to="#" class="aactive">全部</router-link>
                        <router-link to="#">专辑</router-link>
                        <router-link to="#">EP</router-link>
                        <router-link to="#">Single</router-link>
                        <router-link to="#">演唱会</router-link>
                        <router-link to="#">动漫</router-link>
                        <router-link to="#">游戏</router-link>
                    </div>
                    <div class="slide_cube"></div>
                </div>
                <div class="tag_list filter">
                    <div class="catogery">
                        <p>筛选</p>
                    </div>
                    <div class="tags"  @click="cfilter">
                        <router-link to="#" data-filter='ages'><span>年代</span><i class="arrow_down"></i></router-link>
                        <router-link to="#" data-filter='music_comp'><span>唱片公司</span><i class="arrow_down"></i></router-link>
                    </div>
                </div>
                <div class="tag_list condition">
                    <div class="catogery">
                        <p>条件</p>
                    </div>
                    <div class="tags total" >
                        <router-link to="#" data-filter="total" v-if="Object.keys(total).length<1"><span>全部</span></router-link>
                        <!-- <router-link to="#" data-filter="total"><span>全部</span></router-link> -->
                        <router-link to="#" data-filter="total" v-for="item in total" :key="item.index"><span>{{item}}</span></router-link>
                    </div>
                </div>
                <div class="popup_tag ages" data-sub='ages' @click="rfilter">
                    <router-link to="#" class="active">全部</router-link>
                    <router-link to="#">2018</router-link>
                    <router-link to="#">2017</router-link>
                    <router-link to="#">2016</router-link>
                    <router-link to="#">2015</router-link>
                    <router-link to="#">2014</router-link>
                    <router-link to="#">2013</router-link>
                </div>
                <div class="popup_tag music_comp" data-sub='music_comp' @click="rfilter">
                    <router-link to="#" class="aactive">全部</router-link>
                    <router-link to="#">环球唱片</router-link>
                    <router-link to="#">华纳唱片</router-link>
                    <router-link to="#">索尼唱片</router-link>
                    <router-link to="#">杰威尔音乐有限公司</router-link>
                    <router-link to="#">英皇唱片</router-link>
                    <router-link to="#">金牌大风</router-link>
                    <router-link to="#">福茂唱片</router-link>
                    <router-link to="#">宏声音乐</router-link>
                    <router-link to="#">通力唱片</router-link>
                    <router-link to="#">滚石唱片</router-link>
                    <router-link to="#">相信音乐</router-link>
                    <router-link to="#">华研国际音乐</router-link>
                </div>
            </div>
            <div class="playlist_cont">
                <ul class="wrapper">
                    <li>
                        <div class="play_btn"></div>
                        <img src="../../static/images/recommond/304.jpg">
                        <div class="text_container">
                            <p class="pl_intro">歌单介绍</p>
                            <p class="pl_amo">播放量
                                <span>156.1</span>万
                            </p>
                        </div>
                    </li>
                     <li>
                        <div class="play_btn"></div>
                        <img src="../../static/images/recommond/304.jpg">
                        <div class="text_container">
                            <p class="pl_intro">歌单介绍</p>
                            <p class="pl_amo">播放量
                                <span>156.1</span>万
                            </p>
                        </div>
                    </li>
                     <li>
                        <div class="play_btn"></div>
                        <img src="../../static/images/recommond/304.jpg">
                        <div class="text_container">
                            <p class="pl_intro">歌单介绍</p>
                            <p class="pl_amo">播放量
                                <span>156.1</span>万
                            </p>
                        </div>
                    </li>
                     <li>
                        <div class="play_btn"></div>
                        <img src="../../static/images/recommond/304.jpg">
                        <div class="text_container">
                            <p class="pl_intro">歌单介绍</p>
                            <p class="pl_amo">播放量
                                <span>156.1</span>万
                            </p>
                        </div>
                    </li>
                     <li>
                        <div class="play_btn"></div>
                        <img src="../../static/images/recommond/304.jpg">
                        <div class="text_container">
                            <p class="pl_intro">歌单介绍</p>
                            <p class="pl_amo">播放量
                                <span>156.1</span>万
                            </p>
                        </div>
                    </li>
                </ul>
            </div> 
            <div class="pagination clear">
                <ul class="clear">
                    <li><router-link to="#">上一页</router-link></li>
                    <li class="active"><router-link to="#" >1</router-link></li>
                    <li><router-link to="#">2</router-link></li>
                    <li><router-link to="#">3</router-link></li>
                    <li><router-link to="#">4</router-link></li>
                    <li><router-link to="#">5</router-link></li>
                    <li><router-link to="#">下一页</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            total:{}
        }
    },
    created(){
    },
    mounted(){
        this.tot()
    },
    methods:{
        change_width(e){
            e.preventDefault();
            var $elm=$(e.target);
            /**利用冒泡在父元素上绑定方法并且判断子元素触发的标签名 */
            if($elm.prop('nodeName')==='A'){
                var $cube=$elm.parent().parent().find('.slide_cube');
                var filter=$elm.parent().parent().attr('data-filter');
                var fhtml=$elm.html();
                var cube_width=$elm[0].offsetWidth+16;
                var left = $elm[0].offsetLeft + $elm[0].offsetParent.offsetLeft-8;
                /**给当前点击的标签加样式并且给其他兄弟元素删除该样式 */
                $elm.addClass('aactive').siblings().removeClass('aactive');
                $cube.css({'left':left,'width':cube_width});
                /**判断该标签的html内容,并且给查询的数组添加或者删除查询的条件 */
                if(fhtml!="全部"){
                    this.total[filter]=fhtml; 
                    /**vue对象无法检测到数组的属性的添加删除，手动调用跟新的api */ 
                    this.$forceUpdate();
                }else{
                    delete this.total[filter];
                    console.log(this.total);
                    this.$forceUpdate();
                }               
            }
        },
        cfilter(e){
            e.preventDefault();
            var $elm=$(e.target);
            /**利用冒泡判断子元素触发的标签名 */
            if($elm.prop("nodeName")==="SPAN"){
                var filter=$elm.parent().attr("data-filter");
                var $cur=$(`.popup_tag.${filter}`);
                var sibling=$(`.popup_tag:not(.${filter})`)
                $elm.next().toggleClass('arrow_down').toggleClass('arrow_up');
                /**当前元素的显示或者隐藏 */
                if($cur.is(":visible")){
                    $cur.hide()
                }else{
                    $cur.show()
                }
                /**如果其兄弟元素是显示的,隐藏该兄弟元素 并且将箭头修改方向 */
                if(sibling.is(":visible")){
                    sibling.hide();
                    $elm.parent().siblings().children('i').toggleClass('arrow_down').toggleClass('arrow_up');
                }
            } 
        },
        rfilter(e){
            e.preventDefault();
            var $elm=$(e.target)
            if($elm.prop("nodeName")==="A"){
                var sub=$elm.parent().attr("data-sub");
                var fhtml=$elm.html();
                var $cur=$(`[data-filter=${sub}]`);
                var ori_txt={'ages':'年代', 'music_comp':"唱片公司"};
                console.log($cur);
                $elm.addClass('aactive').siblings().removeClass('aactive');
                if(fhtml!="全部"){
                    $cur.addClass('aactive').children('span').html(fhtml)
                    this.total[sub]=fhtml;
                    this.$forceUpdate();
                }else{
                    delete this.total[sub];
                    console.log(this.total);
                    this.$forceUpdate();
                    $cur.removeClass('aactive').children('span').html(ori_txt[sub])
                }
                $elm.parent().hide();
                $cur.children('i').toggleClass('arrow_down').toggleClass('arrow_up')     
            }
        },
        tot(){
            // console.log(Object.keys(this.total).length)
            // if(Object.keys(this.total).length<1){
            //     $('.tags.total').html('<router-link to="#" data-filter="total"><span>全部</span></router-link>')
            // }
            // this.$forceUpdate();
        }
    }
}
</script>
<style scoped>
.main{
    width: 1200px;
    margin: 0 auto;
}
.pl_nav_cont{
    margin-top:40px;
    position: relative;
    font-size:0.9em;
}
.tags>a,
.popup_tag>a{
    color: #999999;
    margin: 0 14px;
}
.tags{
    position: absolute;
    z-index: 2;
    left:7%;
}
.tag_list{
    display: flex;
    position: relative;
    background: rgba(235, 235, 235, 1);
    display: flex;
    /* border-bottom: 1px solid #666; */
    border-radius: 5px;
    margin-bottom: 10px;
    color: #aaa;
    height: 38px;
    line-height: 38px;
}
.tag_list>.catogery{
    width: 7%;
    text-align: center;
}
.tag_list>.slide_cube{
    width: 45px;
    height: 41px;
    position: absolute;
    border-radius: 5px;
    background-image: linear-gradient(to bottom, #ed1c24, #aa1317);
    left: 91px;
    top: -2px;
    z-index: 1;
    box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.4);
    transition: left 0.3s;
}
.popup_tag>a,
.filter>.tags>a{
    display: inline-block;
    height: 26px;
    margin: 0px 14px 0px 6px;
    padding: 0px 5px;
    line-height: 26px;
}
.tags>a.aactive{
  background:transparent;
  color:#fff;
}
.popup_tag{
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    padding: 10px 0;
    padding-left: 7%;
    background: rgba(235, 235, 235,1);
    border-radius: 5px;
    display:none;
    top: 81%;    
    z-index: 10;
    text-align: left;
}
.popup_tag>a.aactive,
.filter>.tags>a.aactive,
.filter>.tags>a:hover{
    border-radius: 3px;
    background-image: linear-gradient(to bottom, #ed1c24, #aa1317);
    color: #fff;
}
.filter>.tags>a.aactive>i,
.filter>.tags>a:hover>i{
    border-color: #fff;
}

.playlist_cont .wrapper{
  display: flex;
  flex-wrap: wrap;
  height: 230px;
}
.playlist_cont .wrapper li {
    /* opacity:0;*/
    overflow: hidden;
    position: relative;
    width: 18%;
    margin: 0 9px 30px;
    height: 200px;
    font-size: 0.9em;
    border-radius: 15px;
    background: #fff;
    transition: transform 0.4s ease;
}
.playlist_cont .wrapper li>*{
    position: absolute;
}
.playlist_cont .wrapper li>img{
    left:0;
    width:220px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.playlist_cont .wrapper li:hover>.text_container{
    transform: translateY(-16px);
}
.playlist_cont .wrapper li:hover>.play_btn{
    transform: scale(0.6);
}
.playlist_cont .wrapper li:hover{
    overflow: hidden;
    transform: translateY(-2%);
    cursor: pointer;
    box-shadow: 3px 4px 10px 2px #c4bfbf;
}
.playlist_cont .text_container{
    width: 100%;
    bottom: -17px;
    padding: 0 11px;
    background: rgba(255,255,255,0.69);
    transition: all 0.3s ease-in-out;
}
.playlist_cont .text_container>.pl_intro{
    top: 75%;
    color: #999;
    margin: 5px 0;
}
.playlist_cont .text_container>.pl_amo{
    top: 85%;  
    color: #666;
    font-size:0.8em;
}

.playlist_cont .text_container>.pl_amo{
  top: 85%;  
  color: #666;
  font-size:0.8em;
}
.playlist_cont .wrapper .play_btn{
  top: 20%;
  left: 27%;
  width: 100px;
  height: 100px;
  background-image: url(../../static/images/icons/iconall.png);
  background-position: -8px -394px;
  z-index: 1;
  transform: scale(0);
  transition: transform 0.3s linear;
}
/*分页 */
.pagination{
  padding: 8px 20px;
  border-radius:5px;
}

.pagination>ul{
  float:right;
}
.pagination::after{
    display:block;
    content:"";
    clear:both
} 
.pagination>ul>li{
  height: 30px; 
  line-height: 30px;
  float: left;
  border-radius: 3px;
  padding: 0px 12px;
  margin-left: 5px;
  cursor: pointer;
  border: solid 1px #980c10;
  background: #d81b21;
  background-image: linear-gradient(to bottom,#f3f3f3,#e9e9e9);
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.pagination>ul>li.active{
  color:#fff;
  background-image:linear-gradient(to bottom, #ed1c24, #aa1317);
}
.pagination>ul>li>a{
   color: #595959;
}
.pagination>ul>li.active>a{
  color:#fff;
}
.pagination>ul>.disabled,
.pagination>ul>.disabled>a{
  color:#aaa;
  cursor:default;
}
/*上下尖角*/
.arrow_up, .arrow_down{
  display: inline-block;
  margin-left:10px;
  border-top: 2px solid #999;
  border-left: 2px solid #999;
  width: 7px;
  height: 7px;
}
.arrow_up{
  transform: rotateZ(45deg) translateY(2px);
}
.arrow_down{
  transform:rotateZ(225deg) translateX(3px);
}
</style>