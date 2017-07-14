/**
 * Created by lenovo on 2017/7/7.
 */
var index=1;
function task(){
  /*1.轮播图片*/
  var $img=$('img');
  console.log($img);
  index++;
  (index>4)&&(index=1);
  var path="img/"+index+".jpg";
  $img.attr('src',path);

  /*2.轮播li*/
  var $page=$('ul>li');
  console.log($page);
  $page.removeClass('active');
  $("li:eq("+(index-1)+")").addClass('active');

}
var timer=setInterval(task,1500);
