$(document).ready(function (){
    slider_Arrow();
});

// DA RIDEFINIRE I NOMI DELLE VARIABILI (SONO TEMPORANEE)


function slider_Arrow(){

    var arrow_Right_Carousel = $(".fa-angle-right");
    var arrow_Left_Carousel = $(".fa-angle-left");
    var img = $("img");
    var circle = $(".fa-circle");

    $("body").keydown(function(e) {
        if(e.keyCode == 37) { // left
            for (var i = 0; i < img.length; i++) {
                if ($(img[i]).hasClass("active") && $(img[i]).hasClass("first")) {
                    i = img.length;
                } else if ($(img[i]).hasClass("active")) {

                    $(img[i]).removeClass("active");
                    $(img[i]).prev().addClass("active");

                    $(circle[i]).removeClass("active");
                    $(circle[i]).prev().addClass("active");

                    i = img.length;
                }
                console.log(img[i]);
            }

        }else if(e.keyCode == 39) { // right
            for (var i = 0; i < img.length; i++) {
                if ($(img[i]).hasClass("active") && $(img[i]).hasClass("last")) {
                    i = img.length;
                }
                else if ($(img[i]).hasClass("active")) {

                    $(img[i]).removeClass("active");
                    $(img[i]).next().addClass("active");

                    $(circle[i]).removeClass("active");
                    $(circle[i]).next().addClass("active");

                    i = img.length;
                }
                console.log(img[i]);
            }
        }
    });



    arrow_Right_Carousel.click( function () {

        for (var i = 0; i < img.length; i++) {
            if ($(img[i]).hasClass("active") && $(img[i]).hasClass("last")) {
                i = img.length;
            }
            else if ($(img[i]).hasClass("active")) {

                $(img[i]).removeClass("active");
                $(img[i]).next().addClass("active");

                $(circle[i]).removeClass("active");
                $(circle[i]).next().addClass("active");

                i = img.length;
            }
            console.log(img[i]);
        }
    });

    arrow_Left_Carousel.click( function () {

        for (var i = 0; i < img.length; i++) {
            if ($(img[i]).hasClass("active") && $(img[i]).hasClass("first")) {
                i = img.length;
            }
            else if ($(img[i]).hasClass("active")) {

                $(img[i]).removeClass("active");
                $(img[i]).prev().addClass("active");

                $(circle[i]).removeClass("active");
                $(circle[i]).prev().addClass("active");

                i = img.length;
            }
            console.log(img[i]);
        }
    });
}
