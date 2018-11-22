window.hyDA={};
// 标题
(function(){
	var mnTitle=function(el,pro){
		var node=document.querySelector(el);
		var html='<div class="mn-title">\
					<div class="txt1">\
						<div class="txt2">\
							<i class="iconfont">'+pro.iconfont+'</i>\
							<span>'+pro.title+'</span>\
						</div>\
					</div>\
					<div class="more">\
						<a href="'+pro.href+'">'+pro.uiTxt+'</a>\
					</div>\
				</div>';
		node.innerHTML=html;
	}
	window.hyDA.mnTitle=mnTitle;
})();
// theme
(function(){
	var theme=function(el,pro){
		var node=document.querySelector(el),
			map=pro.map;
		var div="";
		var eachFn=function(item,index,array){
			div+='<div class="grid">\
						<div class="img">\
							<i class="iconfont">'+item.iconfont+'</i>\
						</div>\
						<div class="txt">\
							<h3>'+item.title+'</h3>\
							<span>'+item.uiTitle+'</span>\
						</div>\
					</div>';
		}
		map.forEach(eachFn);
		var html='<div class="ui-grid">'+div+'</div>';
		node.innerHTML=html;
	}
	window.hyDA.theme=theme;
})();

// 推荐歌单 listTw
(function(){
	var listTw=function(el,pro){
		var node=document.querySelector(el),
			map=pro.map;
		var li="";
		var eachFn=function(item,index,array){
			li+='<li>\
		            <div class="u-img">\
		            	<a href="'+item.url+'"><img src="'+item.src+'" alt="'+item.alt+'" /></a>\
		            </div>\
		            <h3><a href="'+item.url+'">'+item.title+'</a></h3>\
		        </li>';
		}
		map.forEach(eachFn);
		var html='<ul class="clearfix">'+li+'</ul>';
		node.innerHTML=html;
	}
	window.hyDA.listTw=listTw;
})();

// 独家放送 3flex
(function(){
	var listF3=function(el,pro){
		var node=document.querySelector(el),
			map=pro.map;

		var div="";
		var eachFn=function(item,index,array){
			div+='<div class="box">\
					<div class="img">\
						<a href="'+item.url+'"><img src="'+item.src+'" alt="'+item.alt+'"></a>\
					</div>\
					<h3><a href="'+item.url+'">'+item.title+'</a></h3>\
					<span>'+item.uiTxt+'</span>\
				</div>';
		}
		map.forEach(eachFn);
		var html='<div class="flex3-box">'+div+'</div>';
		node.innerHTML=html;
	}
	window.hyDA.listF3=listF3;
	
})();

// 最新音乐 3flex
(function(){
	var numlistli=function(el,pro){
		var node=document.querySelector(el),
			map=pro.map;
		var li="";
		var cnt=0,elseCnt=0;
		var eachFn=function(item,index,array){
			var num=index+1;
			if(cnt<2){
				li+='<li class="bj">\
					<div class="num">'+num+'</div>\
					<div class="img">\
						<img src="'+item.src+'" alt="'+item.alt+'">\
					</div>\
					<div class="txt">\
						<h3>'+item.title+'</h3>\
						<span>'+item.uiTxt+'</span>\
					</div>\
				</li>';
				cnt++;
				elseCnt=0;
				// console.log(cnt,elseCnt);
			}
			else
			{
				if(elseCnt<1){  
					elseCnt++;
				}else{
					cnt=0;
				}
				li+='<li>\
					<div class="num">'+num+'</div>\
					<div class="img">\
						<img src="'+item.src+'" alt="'+item.alt+'">\
					</div>\
					<div class="txt">\
						<h3>'+item.title+'</h3>\
						<span>'+item.uiTxt+'</span>\
					</div>\
				</li>';
				// cnt 2
			}
		}
		map.forEach(eachFn);
		var html='<ul class="numlistli-box clearfix">'+li+'</ul>';
		node.innerHTML=html;
	}
	window.hyDA.numlistli=numlistli;
})();

// 最新音乐 3flex
(function(){
	var listli=function(el,pro){
		var node=document.querySelector(el),
			map=pro.map;
		var li="";
		var cnt=0,elseCnt=0;
		var eachFn=function(item,index,array){
			var num=index+1;
				li+='<li>\
					<div class="img">\
						<img src="'+item.src+'" alt="'+item.alt+'">\
					</div>\
					<div class="txt">\
						<h3>'+item.title+'</h3>\
						<span>'+item.uiTxt+'</span>\
					</div>\
				</li>';
		}
		map.forEach(eachFn);
		var html='<ul class="listli-box clearfix">'+li+'</ul>';
		node.innerHTML=html;
	}
	window.hyDA.listli=listli;
})();
// playHome
(function(){
	var playHome=function(el,pro){
		var node=document.querySelector(el),
			map=pro.map;
			// console.log(map);
		// map:[
		// 	{
			// src:"http://nec.netease.com/img/s/2.jpg",
			// alt:"1",
			// value:"2",
			// title:"卡西莫多的礼物",
			// min:"0",
			// max:"4",
			// love:"1",
			// playOrder:"1",
			// volume:"80",
		// 	}]

		var playIcon={
			pre:"&#xe650;",
			play:"&#xe6fe;",
			stop:"&#xe7fc;",
			next:"&#xe88a;"
		}
		var btnICOn={
			love0:"&#xe602;",
			love1:"&#xe602;",
			order:"&#xe62f;",
			volume:"&#xe87a;",
			list:"&#xe600;"
		}
		var mapIndex=map[0];
		var html='<div class="m-play">\
					<div class="left">\
						<div class="btn-area">\
							<div class="pre">\
								<i class="iconfont">'+playIcon.pre+'</i>\
							</div>\
							<div class="play">\
								<i class="iconfont">'+playIcon.play+'</i>\
							</div>\
							<div class="next">\
								<i class="iconfont">'+playIcon.next+'</i>\
							</div>\
						</div>\
					</div>\
					<div class="right">\
						<div class="img">\
							<img src="'+mapIndex.src+'" alt="'+mapIndex.alt+'">\
						</div>\
						<div class="txt">\
							<div class="mn">\
								<div class="mn2c">\
									<div class="slide-txt">\
										<span>'+mapIndex.title+'</span>\
										<span class="slide-value">'+mapIndex.value+"/"+mapIndex.max+'</span>\
									</div>\
									<div class="slide-box">\
										<div class="mover"></div>\
				                        <div class="cover"></div>\
				                        <div class="show"></div>\
									</div>\
								</div>\
							</div>\
							<div class="sd">\
								<div class="min-btn">\
									<div class="btn" data-key="love">\
										<i class="iconfont">'+btnICOn.love0+'</i>\
									</div>\
									<div class="btn" data-key="order">\
										<i class="iconfont">'+btnICOn.order+'</i>\
									</div>\
									<div class="btn" data-key="volume">\
										<i class="iconfont" >'+btnICOn.volume+'</i>\
									</div>\
									<div class="btn" data-key="list">\
										<i class="iconfont">'+btnICOn.list+'</i>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>';
			node.innerHTML=html;
			var dom=document.querySelector(".m-play");
			this.init(dom,this);
	}

	playHome.prototype.init=function(dom,self){
		// 滑动条 start;
		var slideTxt=dom.querySelector(".slide-txt"),
			slideBox=dom.querySelector(".slide-box");
		var slide={
			txt:slideTxt,
			box:slideBox
		}
		self.slide(slide,self);
		// 滑动条 end;


		// 歌曲列表 start;
		var minBtn=dom.querySelector(".min-btn");


		self.musiclist(minBtn,self);
		// 歌曲列表 end;


	}
	playHome.prototype.slide=function(slide,self){
		var mover=slide.box.querySelector(".mover"),
			cover=slide.box.querySelector(".cover"),
			show=slide.box.querySelector(".show");

		var coverWidth=parseFloat(window.getComputedStyle(cover)["width"]),   //滑动触点	
			shopWidth=parseFloat(window.getComputedStyle(show)["width"]),    // 整条形状（灰色）	
			maxWidth=shopWidth-coverWidth; //最大值

		var clientX,moving;
		var coverWidth,shopWidth,maxWidth;
		var startHander=function(event){
			event=event||window.event;
			event.preventDefault();

		    coverWidth=parseFloat(window.getComputedStyle(cover)["width"]);   //滑动触点	
			shopWidth=parseFloat(window.getComputedStyle(show)["width"]);    // 整条形状（灰色）	
			maxWidth=shopWidth-coverWidth; //最大值

			clientX=event.clientX;  //PC
			// clientX=event.touches[0].clientX;  //手机
			moving=!0;
		}
		var moverHander=function(event){
			if(!moving) return;
			event=event||window.event;
			event.preventDefault();

			var newClientX=event.clientX;   //PC  体验差
			// var newClientX=event.touches[0].clientX;  //手机 体验良好
			// console.log(cover.offsetLeft);
			var left=parseInt(cover.offsetLeft)||0;
			var	moveX=left+(newClientX-clientX);
			moveX=Math.min(maxWidth, Math.max(0,moveX));
			cover.style.left=moveX+"px";
			mover.style.width=moveX+"px";
			clientX=newClientX;
			// console.log(event)
		}
		var endHander=function(event){
			event=event||window.event;
			event.preventDefault();
			moving=!1;			
		}

		//  PC
		cover.addEventListener("mousedown",startHander);
		document.addEventListener("mousemove",moverHander);
		document.addEventListener("mouseup",endHander);

		//  手机
		// cover.addEventListener("touchstart",startHander);
		// cover.addEventListener("touchmove",moverHander);
		// cover.addEventListener("touchend",endHander);
	}

	playHome.prototype.musiclist=function(minBtn,self){
		var btnlist=minBtn.querySelectorAll(".btn");
		// <div class="music-list"></div>
		var bd=document.querySelector(".g-bd");
		var fnTF=true;
		var musiclist=bd.querySelector(".music-list");

		// musiclist.innerHTML='<ul class="music-ul clearfix">\
		// 						<li></li>\
		// 						<li></li>\
		// 						<li></li>\
		// 						<li></li>\
		// 						<li></li>\
		// 						<li></li>\
		// 						<li></li>\
		// 					</ul>';

		var fn={
			movelist:function(){
				if(fnTF){
					musiclist.style.cssText="right:0;";	
					fnTF=false;
				}else{
					musiclist.style.cssText="right:-320px;";	
					fnTF=true;
				}
			}
		}
		// 展示列表
		btnlist[3].addEventListener("click",fn.movelist);

	}
	window.hyDA.playHome=playHome;
})();

