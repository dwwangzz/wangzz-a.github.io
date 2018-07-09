;
$(function () {
    $('.clear-url').click(function () {
        $('.naisidamowang').val('');
    });
    $('.go-video').click(function () {
        goVideo($('.naisidamowang').val());
    });
    $('.naisidamowang').keydown(function (event) {
        if (event.keyCode == 13) {
            var url = $(this).val();
            if (url.trim().length == 0) {
                return false;
            }
            goVideo(url);
        }
    });
});

// 跳转页面
function goVideo(url) {
    // url = 'https://v.youku.com/v_show/id_XMjI2ODA4MTYw.html?spm=a2h0k.11417342.soresults.dselectbutton&s=cbfb80fe962411de83b1';
    var apis = getAPIUrl();
    url = apis[0].url + url;
    window.open('./video.html?url=' + url);
}

function getAPIUrl() {
    var apis = [
        {name: "百域阁", url: "http://api.baiyug.cn/vip/index.php?url=", title: "转圈圈就换线路", intab: 1},
        {name: "够低调", url: "http://goudidiao.com/?url=", title: "转圈圈就换线路", intab: 1},
        {name: "搜你妹", url: "http://www.sonimei.cn/?url=", title: "综合接口，VIP视频*** 更新可用【作者sonimei134】脚本的接口", intab: 0},
        {name: "vParse", url: "https://api.vparse.org/?url=", title: "支持腾讯", intab: 1},
        {name: "猫云", url: "https://jx.maoyun.tv/index.php?id=", title: "支持腾讯", intab: 1},
        {name: "噗噗电影", url: "http://pupudy.com/play?make=url&id=", title: "综合接口，破解全网VIP视频会员-去广告【作者ttmsjx】脚本的接口", intab: 0},
        {name: "抢先影院", url: "http://www.qxyingyuan.vip/play?make=url&id=", title: "据说优酷比较稳定", intab: 0},
        {
            name: "酷绘",
            url: "http://appapi.svipv.kuuhui.com/svipjx/liulanqichajian/browserplugin/qhjx/qhjx.php?id=",
            title: "综合接口，酷绘*【作者ahuiabc2003】脚本的接口",
            intab: 0
        },
        {name: "旋风解析", url: "http://api.xfsub.com/index.php?url=", title: "1905优先使用", intab: 1},
        {name: "石头解析", url: "https://jiexi.071811.cc/jx.php?url=", title: "手动点播放", intab: 1},
        {name: "无名小站", url: "http://www.sfsft.com/admin.php?url=", title: "无名小站同源", intab: 1},
        {name: "VIP看看", url: "http://q.z.vip.totv.72du.com/?url=", title: "更换线路成功率会提高", intab: 1},
        {name: "ODFLV", url: "http://aikan-tv.com/?url=", title: "不稳定，广告过滤软件可能有影响", intab: 1},
        {name: "163人", url: "http://jx.api.163ren.com/vod.php?url=", title: "偶尔支持腾讯", intab: 1},
        //{name:"CKFLV",url:"http://www.0335haibo.com/tong.php?url=",title:"CKFLV云,部分站点不支持",intab:1},
        {name: "无名小站2", url: "http://www.wmxz.wang/video.php?url=", title: "转圈圈就换线路", intab: 1},
        //{name:"眼睛会下雨",url:"http://www.vipjiexi.com/yun.php?url=",title:"www.vipjiexi.com",intab:1},
        {name: "人人发布", url: "http://v.renrenfabu.com/jiexi.php?url=", title: "综合，多线路", intab: 0}
    ];
    return apis;
}