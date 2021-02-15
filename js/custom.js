$(document).ready(function(){

    var tit1 = $(".intro #wrap h1");
    var tit2 = $(".intro #wrap h2");

    sliding(tit1, 600 ,0);
    sliding(tit2, 600, 300);

    function sliding(el, speed, delay){
        var bgColor = el.children("span").css("color");

        el.append(
            $("<div class='mask'>").css({
                width : "100%", height : "100%",
                backgroundColor : bgColor,
                position : "absolute",
                top : 0, left : "-100%"
            })
        );
        el.find(".mask").stop().delay(delay).animate({left : "0%"}, speed, "easeInExpo",function(){
            $(this).prev().css({opacity : 1});
            $(this).stop().animate({left : "100%"}, speed, "easeInExpo", function(){
                $(this).remove();
            })
        })
    }
 
});