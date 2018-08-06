

$(function(){
    $(".dynamic").load("index1.html")



    //切换
    $(".menu1").click(function() {

        $(".dynamic").load($(this).data("page"))

    })



    $(".top-gongneng").click(function() {
        $(".dynamic").load($(this).date("page"))
    })


})