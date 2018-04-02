function move(n){
    $("#playermove").css("transform", "translateX(" + n + "px)")
}
function jump(){
    
}

//return true if the player's bottom <= platform's top
function collisionWithPlatforms(nameOfObject){
    var platform = $(nameOfObject).css("transform");
    var platform_x = parseFloat(platform.split(" ")[4]);
    var platform_y = parseFloat(platform.split(" ")[5]);

    var player_xy = $("#player").css("transform");
    var player_x = parseFloat(player_xy.split(" ")[4]);
    var player_y = parseFloat(player_xy.split(" ")[5]);


    
}

// return true if the player's top <= ceiling bottom position
function collisionWithceiling(){

}

function checkGameOver(){

}


function makePlatform(id) {
    console.log("id "+id);
    var tempId = id+"svg";
    var newid="#"+id;
    if(id.includes("platform")){
        document.getElementById(id+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
        document.getElementById(id+"svg").setAttribute("y", 2500);
        setTimeout(function() {
            $(newid).css("animationPlayState", "running");
        }, Math.floor((Math.random() * 10000)+2000));
    }else if(id.includes("stingPlatform")){
        document.getElementById(id+"svg").setAttribute("x", Math.floor((Math.random() * 770)) );
        document.getElementById(id+"svg").setAttribute("y", 1000);
        setTimeout(function() {
            $(newid).css("animationPlayState", "running");
        }, Math.floor((Math.random() * 40000)));

    }


}

function init(){
    document.getElementById("platform2"+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById("platform3"+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById("stingPlatform1"+"svg").setAttribute("x",  Math.floor((Math.random() * 770)));
    document.getElementById("stingPlatform2"+"svg").setAttribute("x",  Math.floor((Math.random() * 770)));
    document.getElementById("platform2"+"svg").setAttribute("y",  Math.floor((Math.random() * 2000)+1000));
    document.getElementById("platform3"+"svg").setAttribute("y",  Math.floor((Math.random() * 2000)+500));
    document.getElementById("stingPlatform1"+"svg").setAttribute("y",  Math.floor((Math.random() * 1000)+250));
    document.getElementById("stingPlatform2"+"svg").setAttribute("y",  Math.floor((Math.random() * 1000)+250));


}
$(document).ready(function(){
    var r = 0;
    var key ={
        LEFT: 37,
        RIGHT: 39,
        UP: 38
    };

    console.log($(".landscape").position())
    $(document).on("keydown", function(e){
        switch(e.which){
            case key.LEFT:
                r -= 10;
                move(r);
                console.log($(".platform").css("transform"));
                break;
            case key.RIGHT:
                r += 10;
                move(r);
                break;
        }
    });

    $("#platform1").on("animationend", function() {
            // You need to stop the animation here
            $("#platform1").css("display","none");

        });
    $("#platform2").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform2").css("animation-play-state","paused");
            makePlatform("platform2");

        });


    $("#platform3").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform3").css("animation-play-state","paused");
            makePlatform("platform3");

        });

     $("#platform4").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform4").css("animation-play-state","paused");
            makePlatform("platform4");

        });
      $("#platform5").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform5").css("animation-play-state","paused");
            makePlatform("platform5");

        });

      $("#stingPlatform1").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform1").css("animation-play-state","paused");
            makePlatform("stingPlatform1");

        });
      $("#stingPlatform2").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform2").css("animation-play-state","paused");
            makePlatform("stingPlatform2");

        });
      $("#stingPlatform3").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform3").css("animation-play-state","paused");
            makePlatform("stingPlatform3");

        });
      $("#stingPlatform4").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform4").css("animation-play-state","paused");
            makePlatform("stingPlatform4");

        });
      $("#stingPlatform5").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform5").css("animation-play-state","paused");
            makePlatform("stingPlatform5");

        });

    init();
    setTimeout(function() {
        $("#platform1").css("animationPlayState", "running");
        $("#platform2").css("animationPlayState", "running");
        $("#platform3").css("animationPlayState", "running");
        makePlatform("platform4");
        makePlatform("platform5");
        $("#player").css("animationPlayState", "running");
        $(".landscape").css("animationPlayState", "running");
        $("#landscape").css("animationPlayState", "running");
        $("#stingPlatform1").css("animationPlayState", "running");
        $("#stingPlatform2").css("animationPlayState", "running");
        makePlatform("stingPlatform3");
        makePlatform("stingPlatform4");
        makePlatform("stingPlatform5");

    }, 3000);



});