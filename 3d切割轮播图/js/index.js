$(function(){
    var index=0;
    var flag=true;
    $(".left").on("click",function(){
        if(!flag) return false;
        flag=false;
        index--;
        var angle=-index*90;
        $("li").css("transform","rotateX("+angle+"deg)").each(function(i,elem){
            $(this).css("transition-delay",i*0.25+"s");
        });
    });
    $(".right").on("click",function(){
        if(!flag) return false;
        flag=false;
        index++;
        var angle=-index*90;
        $("li").css("transform","rotateX("+angle+"deg)").each(function(i,elem){
            $(this).css("transition-delay",i*0.25+"s");
        });
    });
    $("li:last").on("transitionend",function(){
        flag=true;
    });

});