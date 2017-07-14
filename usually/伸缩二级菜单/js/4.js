//找到所有的span
var spans=document.querySelectorAll('span');
console.log(spans);
//遍历所有的span，添加点击事件，清除class
for(var i=0;i<spans.length;i++){
  spans[i].onclick=function(){
    //如果有class-open，清空class
    if(this.className=='open'){
      this.className=''
    }else{//否则，
      //找到其父元素的兄弟中有class-open的，清空className;
      var oth=document.querySelector('.tree>li>span.open');
      if(oth!==null){
        oth.className='';
      }
      //将当前span添加class-open
      this.className='open';
    }
  }
}
