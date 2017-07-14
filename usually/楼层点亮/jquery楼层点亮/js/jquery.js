//判断query是否加载成功
if(window.$==undefined){
  throw new Error('必须依赖jquery加载');
}
//为jquery对象添加插件函数
jQuery.fn.scrollspy=function(options){
  //获取options参数中对应target字符串
  var str=options.target;
  //依据字符串转换为jquery对象
  var opt=$(str);
  //为window对象绑定事件-滚动条移动事件scroll
  $(window).scroll(function(){
    //获取滚动条到页面顶部距离
    var top=$(window).scrollTop();
    //判断<800 输出“隐藏”
    //判断800-2000 输出“显示”
    //超过 输出“隐藏”
    if(top>800){
      opt.fadeOut();
    }else if(top<2000){
      opt.fadeIn();
    }else{
      opt.fadeOut();
    }


    /*点亮当前li滚动到楼层的开关*/
    //获取导航开关
    var $liList=opt.find('li');
    //对导航开关遍历 each
    $liList.each(function(i,li){
      //获取当前元素下的a元素的href属性--对应楼层的ID
      var floorId=$(this).children('a').attr('href');
      //依据楼层ID来获取当前楼层对象
      var floorTop=$(floorId).offset().top;

      /*判断*/
      //如果当前楼层位置小于top位置--显示
      if(scrollTop<top){
        //当前li添加class-active，兄弟元素删除class-active
        $(li).addClass('active').siblings('active').removeClass('active');
      }
    })

  })
}
