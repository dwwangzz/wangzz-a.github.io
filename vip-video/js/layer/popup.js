/*layer查件再次封装*/
;
var Popup = {};

//普通弹窗
Popup.msg = function (msg) {
    layer.msg(msg);
};
//错误弹窗
Popup.error = function (msg) {
    layer.alert(msg, {icon: 2});
};
//自定义窗口 - 蓝
Popup.open = function (title, content, area) {
    var _area = ['500px', '300px'];
    if (area) {
        _area = area;
    }
    layer.open({
        type: 1, //Page层类型
        area: _area,
        skin: 'layui-layer-lan', //样式类名
        title: title,
        shade: 0.6, //遮罩透明度
        maxmin: true, //允许全屏最小化
        anim: 1, //0-6的动画形式，-1不开启
        content: content
    });
};

//自定义窗口 - 绿
Popup.openGreen = function (title, content, area) {
    var _area = ['500px', '300px'];
    if (area) {
        _area = area;
    }
    layer.open({
        type: 1, //Page层类型
        area: _area,
        skin: 'layui-layer-molv', //样式类名
        title: title,
        shade: 0.6, //遮罩透明度
        maxmin: true, //允许全屏最小化
        anim: 1, //0-6的动画形式，-1不开启
        content: content
    });
};

//iframe层-多媒体
Popup.video = function (url) {
    layer.open({
        type: 2,
        title: false,
        area: ['630px', '360px'],
        shade: 0.8,
        // closeBtn: 0,
        // shadeClose: true,
        content: url
    });
};

//关闭所有layer弹窗
Popup.close = function () {
    layer.closeAll();
};

