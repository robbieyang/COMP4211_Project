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
    document.getElementById(id+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById(id+"svg").setAttribute("y", 2500);
    var newid="#"+id;
     var temp =  Math.floor((Math.random() * 2000)); 
    setTimeout(function() {
        $(newid).css("animationPlayState", "running");
    }, Math.floor((Math.random() * 10000)+2000));


}

function init(){
    document.getElementById("platform2"+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById("platform3"+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById("platform4"+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById("platform5"+"svg").setAttribute("x",  Math.floor((Math.random() * 2000)));
    document.getElementById("platform2"+"svg").setAttribute("y",  Math.floor((Math.random() * 2000)+1000));
    document.getElementById("platform3"+"svg").setAttribute("y",  Math.floor((Math.random() * 2000)+500));


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

    init();
    setTimeout(function() {
        $("#platform1").css("animationPlayState", "running");
        $("#platform2").css("animationPlayState", "running");
        $("#platform3").css("animationPlayState", "running");
        makePlatform("platform4");
        makePlatform("platform5");
        $("#player").css("animationPlayState", "running");
        $(".landscape").css("animationPlayState", "running");
        $("#landscape").css("animationPlayState", "running")
        $(".stingPlatform").css("animationPlayState", "running");
    }, 3000);



});