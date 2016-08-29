$(function(){
var h=document.documentElement.clientHeight+'px';
  $('.header').height(h)

  //  投放铺源

    $('.checkarea ').bind('click',function(){
           $('.bodyshade').remove();
          $(' <div class="bodyshade"></div>').appendTo($('body'))
           $('.'+$(this).attr('data')).show();
           $('.'+$(this).attr('data')).find('li').removeClass('checkli')
    })
    $('.checkArea3 li').click(function(){
        $('.checkArea3 li').removeClass('checkli')//位置单选

        $(this).addClass('checkli')
        $('.checkArea3 input[type="text"]').val('');
        $('#addinput').val(CheckList.getList('.checkArea3'))
        $('input[name="shopsPosition"]').val(CheckList.getList('.checkArea3'))
        $('.bodyshade').remove();
        $('.checkArea1').hide();
       })
    $('.checkArea2 li').click(function(){

       if($(this).hasClass('checkli')){
        $(this).removeClass('checkli')
       }else{
        $(this).addClass('checkli')
       }
      //类型多选  委托找铺
    })

    $('.checkArea2 button').click(function(){
        if($(this).hasClass('savebtn')){
          if(CheckList.getInput('.checkArea2')){
            if(CheckList.getList('.checkArea2')){
          $('#manage,.addinput').val(CheckList.getList('.checkArea2')+','+CheckList.getInput('.checkArea2'))//类型保存   
           }else{
          $('#manage,.addinput').val(CheckList.getInput('.checkArea2'))//类型保存   

           }
        }else{
          $('#manage,.addinput').val(CheckList.getList('.checkArea2'))//类型保存 
        }
          // $('#manage,#addinput').val(CheckList.getList('.checkArea2')+','+CheckList.getInput('.checkArea2'))//类型保存 
          $('input[name="expectArea"]').val(CheckList.getList('.checkArea2'))//保存多选的类型 委托找铺
          $('input[name="otherExpectArea"]').val(CheckList.getInput('.checkArea2'))//保存填写的值 委托找铺
          $('input[name="operateType"]').val(CheckList.getList('.checkArea2'))//保存多选的类型 委托找铺
          $('input[name="otherOperateType"]').val(CheckList.getInput('.checkArea2'))
        }
       
        $('.bodyshade').remove();
        $('.checkArea1').hide();
    })
    $('.checkArea3 button').click(function(){

       if($(this).hasClass('savebtn')){
         
          if(CheckList.getInput('.checkArea3')){
            if(CheckList.getList('.checkArea3')){
               $('#addinput').val(CheckList.getList('.checkArea3')+','+CheckList.getInput('.checkArea3'))//类型保存
             }else{
               $('#addinput').val(CheckList.getInput('.checkArea3'))//类型保存

             }
          

        }else{
           
          $('#addinput').val(CheckList.getList('.checkArea3'))//类型保存 

        }
          // $('#addinput').val(CheckList.getList('.checkArea3')+','+CheckList.getInput('.checkArea3'))//类型保存 
          $('input[name="shopsPosition"]').val(CheckList.getList('.checkArea3'))
          $('input[name="otherShopsPosition"]').val(CheckList.getInput('.checkArea3'))
        }
       
        $('.bodyshade').remove();
        $('.checkArea1').hide();
    })

    // 弹窗
    var CheckList={    
    getList:function(ele){  //获得多选选项
        var $ele=$(ele);
        var arr=[];
        $ele.find('li').each(function(i,obj){
          if($(obj).hasClass('checkli')){
            arr.push($(obj).html())
          }
        })
        // arr.push($ele.find('input').val())
        return arr.join(',') 
      },
    getInput:function(ele){
      return $(ele).find('input').val();//其他选项框的值
     }
      };
    
       


})
function Funtip(html){
  $('<div class="bodyshade"></div>').appendTo($('body'));
  $('<div class="popup">'+html+'</div>').appendTo($('body'))
  $('.popup').css('margin-left',-($('.popup').width()/2)+'px');
  $('.popup').css('margin-top',-($('.popup').height()/2)+'px');
  setTimeout(function(){
    $('.bodyshade,.popup').remove();
  },1000)
}
