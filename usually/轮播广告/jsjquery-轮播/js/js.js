/**
 * Created by lenovo on 2017/7/7.
 */
var index=1;
setInterval(function(){
  /*1.轮播图片*/
  var img=document.getElementsByTagName('img');
//      var img=document.querySelector('img');
  console.log(img);
  index++;
  (index>4)&&(index=1);
  var path="img/"+index+".jpg";
  img[0].setAttribute('src',path);

  /*2.图片相对应的li增加背景*/
  //2.1先将所有li的class-active清除
  var lis=document.getElementsByTagName('li');
  console.log(lis);
  for(var i=0;i<lis.length;i++){
    lis[i].className='';

    /*3.将li添加点击事件*/
    lis[i].onclick=function(){
      //3.1点击li时，在dom中查找带有active的li
      var oth=document.querySelector('#list>li.active');
      //如果找到active的li,将其class删除
      if(oth!==null){
        oth.className='';
        //将当前li增加背景
        this.className='active';
      }
      //3.2将点击后变为active的li对应的img增加active
      var html=this.innerHTML;
      path="img/"+html+".jpg";
      img.setAttribute('src',path);
    }
  }

  //2.2再将当前图片对应的li增加背景
  lis[index-1].className='active';
},1500)
