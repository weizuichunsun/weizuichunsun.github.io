var app = {
  init: function() {
    var self = this;
    // self.html();
  },
  html: function() {
    var mTheme = new hyDA.theme(".m-theme", {
      map: [
        {
          iconfont: "&#xe676;",
          title: "私人FM",
          uiTitle: "享受你的音乐专属推荐"
        },
        {
          iconfont: "&#xe60b;",
          title: "每日歌曲推荐",
          uiTitle: "根据你的口味生成"
        },
        {
          iconfont: "&#xe64b;",
          title: "排行榜",
          uiTitle: "最热音乐榜"
        }
      ]
    });
    // 推荐歌单
    var tjgdBox = new hyDA.listTw(".tjgd-box", {
      map: [
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "2",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "3",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "4",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "5",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "6",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "7",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "8",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "9",
          title: "有标题"
        },
        {
          url: "#",
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "10",
          title: "有标题"
        }
      ]
    });
    var tjgdTitle = new hyDA.mnTitle(".tjgd-title", {
      iconfont: "&#xe648;",
      title: "推荐歌单",
      href: "#",
      uiTxt: "更多>"
    });

    var djfsTitle = new hyDA.mnTitle(".djfs-title", {
      iconfont: "&#xe6aa;",
      title: "独家放送",
      href: "#",
      uiTxt: "更多>"
    });

    var zxyyTitle = new hyDA.mnTitle(".zxyy-title", {
      iconfont: "&#xe714;",
      title: "最新音乐",
      href: "#",
      uiTxt: "更多>"
    });

    var tjmvTitle = new hyDA.mnTitle(".tjmv-title", {
      iconfont: "&#xe60d;",
      title: "推荐MV",
      href: "#",
      uiTxt: "更多>"
    });

    var zbdtTitle = new hyDA.mnTitle(".zbdt-title", {
      iconfont: "&#xe6f4;",
      title: "主播电台",
      href: "#",
      uiTxt: "更多>"
    });

    // 独家放送
    var djfsBox = new hyDA.listF3(".djfs-box", {
      map: [
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          url: "#",
          title: "热点专栏",
          uiTxt: ""
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          url: "#",
          title: "热点专栏",
          uiTxt: ""
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          url: "#",
          title: "热点专栏",
          uiTxt: ""
        }
      ]
    });
    // 推荐MV
    var tjmvBox = new hyDA.listF3(".tjmv-box", {
      map: [
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          url: "#",
          title: "热点专栏",
          uiTxt: "team"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          url: "#",
          title: "热点专栏",
          uiTxt: "team"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          url: "#",
          title: "热点专栏",
          uiTxt: "team"
        }
      ]
    });
    // <ul class="numli-box clearfix">
    // 				<li class="bj">
    // 					<div class="num">01</div>
    // 					<div class="img">
    // 						<img src="http://nec.netease.com/img/s/2.jpg" alt="1">
    // 					</div>
    // 					<div class="txt">
    // 						<h3>动物是世界</h3>
    // 						<span>薛之谦</span>
    // 					</div>
    // 				</li>
    // 			</ul>
    // 最新音乐
    var zxyyBox = new hyDA.numlistli(".zxyy-box", {
      map: [
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title:
            "动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "动物是世界",
          uiTxt: "薛之谦"
        }
      ]
    });

    // 最新音乐
    var zbdtBox = new hyDA.listli(".zbdt-box", {
      map: [
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "清晨静听",
          uiTxt: "一首歌的时间，一页书"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "清晨静听",
          uiTxt: "一首歌的时间，一页书"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "清晨静听",
          uiTxt: "一首歌的时间，一页书"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "清晨静听",
          uiTxt: "一首歌的时间，一页书"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "清晨静听",
          uiTxt: "一首歌的时间，一页书"
        },
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          title: "清晨静听",
          uiTxt: "一首歌的时间，一页书"
        }
      ]
    });

    var playBox = new hyDA.playHome(".play-box", {
      map: [
        {
          src: "http://nec.netease.com/img/s/2.jpg",
          alt: "1",
          value: "2",
          title: "卡西莫多的礼物",
          min: "0",
          max: "4",
          love: "1",
          playOrder: "1",
          volume: "80"
        }
      ]
    });
  }
};
app.init();
