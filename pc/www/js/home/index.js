"use strict";var app=new Vue({el:"#APP",delimiters:["${","}"],data:{isLogin:T.isLogin,userInfo:T.userInfo,banner:[],summaryContents:null,investList:null,show_servertan:false,consultationIndex:0,show_servertan_sucesse:false,contactName:"",contactTel:"",contactMsg:"",isnew:false,isnotice:true,news:null,newsList:null,newsliderImg:null,notice:null,linkUrl:null},mounted:function mounted(){var self=this;T.setNavCurrent("home");bus.$on("userInfo",function(obj){self.isLogin=obj.isLogin;self.userInfo=obj.userInfo});this.getUserInfo();T.ajax({url:"/banner",callback:true,success:function success(_data){self.banner=_data.map.banner;self.$nextTick(function(){$("#Slideshow").slide({mainCell:"#Slideshow .swiper-img",titCell:"#Slideshow .pagina ul li",effect:"fold",titOnClassName:"current",interTime:3e3,autoPlay:true})})}});T.getScript("/js/about/geturl.json.js",function(){try{self.linkUrl=result.url}catch(e){}});T.getScript("/js/home/news.json.js",function(){try{self.newsliderImg=result}catch(e){}});T.ajax({url:"/indexArticle",callback:true,success:function success(_data){try{self.summaryContents=_data.map.urgentNotice[0].summaryContents;self.summaryTime=_data.map.urgentNotice[0].create_time}catch(e){}self.newsList=_data.map.newsList;self.news=_data.map.news;self.notice=_data.map.notice;self.$nextTick(function(){self.newsimg();self.newsTab()})}});T.ajax({url:"/indexInvestLogs",callback:true,success:function success(_data){var arr=[],arr1=[];$.each(_data.map.page.rows,function(i){arr1.push(this);if((i+1)%1==0){arr.push(arr1);arr1=[]}});self.investList=arr;self.$nextTick(function(){$(".funds").slide({mainCell:".options",effect:"topLoop",interTime:3e3,autoPlay:true})})}});this.linkEvent();this.highcharts();this.tips();this.rightMenu()},filters:{format_number:function format_number(n){return T.format_number(n)},format_date:function format_date(val){return new Date(val).Format("yyyy-MM-dd hh:mm")}},methods:{login:T.go.login,reg:T.go.reg,goTop:function goTop(){T.goTop()},getUserInfo:function getUserInfo(){T.getUserInfo()},detail:function detail(item){window.location.href="/billDetail/billDetal_html_"+item.id+".html"},pjdetail:function pjdetail(item){window.location.href="/billDetail/pjDetal_html_"+item.id+".html"},newsimg:function newsimg(){$(".newslider").slide({mainCell:".newsimg ul",titCell:".imgspagina ul li",effect:"leftLoop",interTime:3e3,autoPlay:true})},newsTab:function newsTab(){var self=this;$("#newBox").slide({mainCell:".tablist .options",titCell:".tabtitle li",titOnClassName:"current",effect:"left",trigger:"click",endFun:function endFun(i){if(i==0){self.isnotice=true;self.isnew=false}else{self.isnotice=false;self.isnew=true}},autoPlay:false})},rightMenu:function rightMenu(){var $window=$(window),$up=$(".float-window .up");$up.hide();$window.on("scroll",function(){var winHeight=$window.height(),scrollTop=$window.scrollTop();if(scrollTop>winHeight/2){$up.show()}else{$up.hide()}})},exit:function exit(){T.exit()},consultation:function consultation(){var self=this;this.show_servertan=true;layui.use("layer",function(){self.consultationIndex=layer.open({type:1,title:false,closeBtn:0,shadeClose:true,end:function end(){self.show_servertan=false},content:$("#servertan")})})},consultation_sucess:function consultation_sucess(){var self=this;this.show_servertan_sucesse=true;layui.use("layer",function(){self.consultationIndex=layer.open({type:1,title:false,closeBtn:0,shadeClose:true,end:function end(){self.show_servertan_sucesse=false},content:$("#servertan_success")})})},servertanClose:function servertanClose(){var self=this;layui.use("layer",function(){layer.close(self.consultationIndex)})},servertanEvent:function servertanEvent(){var self=this,contactName=this.contactName,contactTel=this.contactTel;if(contactName.search(/^([A-Za-z\u0391-\uFFE5]){2,20}$/)<0){return this.contactMsg="请填写您的姓名"}if(contactTel.search(/^1[3|4|5|7|8][0-9]{9}$/)<0){return this.contactMsg="请填写正确的手机号码"}if(!this.servertanEventClick){this.servertanEventClick=true;T.ajax({url:"/index/customerInquiry.do",callback:true,data:{realName:contactName,mobilephone:contactTel},success:function success(_data){if(_data.success){self.servertanClose();self.consultation_sucess()}self.servertanEventClick=false}})}},linkEvent:function linkEvent(){$(".cooperation").slide({mainCell:".coopimg ul",autoPage:true,effect:"left",autoPlay:true,vis:6,prevCell:".left-btn",nextCell:".right-btn"})},tips:function tips(){layui.use("layer",function(){var layer=layui.layer,index;$(".tag-tips").each(function(){$(this).mouseover(function(){$(this).addClass("currentTips");index=layer.tips($(this).attr("data-tips"),".currentTips",{tips:1,skin:"tips",time:0})}).mouseleave(function(){layer.close(index);$(this).removeClass("currentTips")})})})},setHeicharts:function setHeicharts(id,pert){new Highcharts.chart(id,{colors:["#fa9c21","#edeeeb"],chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:false,spacingBottom:5},title:{text:""},credits:{text:""},tooltip:{enabled:false},plotOptions:{pie:{dataLabels:{enabled:false},startAngle:-90,endAngle:90,center:["50%","75%"]}},series:[{states:{hover:{halo:{size:0,attributes:{"stroke-width":0}}}},type:"pie",innerSize:"88%",data:[["已募集",pert],["剩余可投",100-pert],{name:"Proprietary or Undetectable",y:.2,dataLabels:{enabled:false}}]}]})},newVip:function newVip(){rookieList.length&&this.setHeicharts(hcircle6,rookieList[0].pert)},fixedterm:function fixedterm(){var self=this,fixedterm1=document.getElementById("fixedterm1");if(fixedterm1&&termHot.length){this.setHeicharts(fixedterm1,termHot[0].pert)}$.each(termList,function(i,arr){var fixedterms=document.getElementById("fixedterms"+(i+1));if(fixedterms){self.setHeicharts("fixedterms"+(i+1),arr.pert)}})},p2pHoterr:function p2pHoterr(){var self=this,p2pHot1=document.getElementById("p2pHot1");if(p2pHot1&&p2pHot.length){this.setHeicharts(p2pHot1,p2pHot[0].pert)}$.each(p2pList,function(i,arr){var p2pList=document.getElementById("p2pList"+(i+1));if(p2pList){self.setHeicharts("p2pList"+(i+1),arr.pert)}})},highcharts:function highcharts(){this.newVip();this.fixedterm();this.p2pHoterr()}}});