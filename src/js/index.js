
require('../less/style.less');

// require('./app/module/fx_methods');// 以动画形式的 show, hide, toggle, 和 fade*()方法.依赖fx模块。

// 引入的包根据实际情况而定
var LoadViewController = require('./app/LoadViewController');
var IndexViewController = require('./app/IndexViewController');

/*
*
*  引入lib库文件和LESS文件
*  必须要引入,过滤器会过滤lib文件夹里面的JS文件,做一个简单的复制
*  复制到相应的文件夹
*  引入的less会对less进行编译存放到css文件夹
* */
// 页面级对象池
var pagePool = {
    loadView: null,
    indexView: null
};

var init = function () {
    // load页面
    var loadPageBack = function () {
        pagePool.loadView = pagePool.loadView || new LoadViewController();

        var loadView = pagePool.loadView;
        loadView.show();
        loadView.onhide = indexPageBack;

        loadView.load();
    };

    // index页面
    var indexPageBack = function () {
        pagePool.indexView = pagePool.indexView || new IndexViewController();

        var indexView = pagePool.indexView;
        indexView.show();
        // indexView.onhide = gamePageBack;
    };

    loadPageBack();
};

init();
