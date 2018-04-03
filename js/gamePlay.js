
var player_life = 10;
function move(n){
    $("#playermove").css("transform", "translateX(" + n + "px)")
}
function moveDownward(){
    $("#playermoveY").css("animationPlayState", "running");
    
}
//return true if the player's bottom <= platform's top
function collisionWithPlatforms(nameOfObject){
    var player = $("svg #player")[0].getBoundingClientRect();
    var player_top = player.top;
    var player_bottom = player.bottom;
    var player_left = player.left;
    var player_right = player.right;

    var platform = $("svg " + nameOfObject)[0].getBoundingClientRect();
    var platform_top = platform.top;
    var platform_bottom = platform.bottom;
    var platform_left = platform.left;
    var platform_right = platform.right;


    if(Math.floor(player_bottom - platform_top) <= 10 || Math.floor(player_bottom - platform_top) >= 0){

        if(player_right - platform_left >= 8 && platform_right - player_left >= 8){
            return true;
        }

        return false;
    }
    else{
        return false;
    }

}

function supportingPlatform(nameOfObject){
    var player_bottom = $("svg #player")[0].getBoundingClientRect().bottom;
}
// return true if the player's top <= ceiling bottom position

function checkGameOver(){

}
$(document).ready(function(){
    var r = 0;
    var n = 0;
    var key ={
        LEFT: 37,
        RIGHT: 39,
        UP: 38
    };

    var obj = {
        PLATFORM: ".platform",
        STINGPLATFORM: ".stingPlatform",
        LANDSCAPE: "#lanscape"
    };

    function collisionWithceiling(){
        var player = $("svg #player")[0].getBoundingClientRect();
        var player_top = player.top;
    
        var sting = $("svg #sting")[0].getBoundingClientRect();
        var sting_bottom = sting.bottom;

    
        if (Math.floor(player_top - sting_bottom) <= 2){
            return true;
        }

        return false;
    
    }
    var checkCeiling = setInterval(function(){
                    var paused = false;
                    if(collisionWithceiling() && !paused){
                        paused = true;
                        player_life -= 1;
                        if(player_life >= 0){
                            $(".life")[player_life].remove();
                        }
                    }
                    }, 50);
    $(document).on("keydown", function(e){
        switch(e.which){
            case key.LEFT:
                r -= 10;
                move(r);
                if (collisionWithPlatforms(".platform") == false){
                    console.log("here");
                    while(collisionWithPlatforms(obj.LANDSCAPE) == false &&
                    collisionWithPlatforms(obj.PLATFORM) == false &&
                    collisionWithPlatforms(obj.STINGPLATFORM) == false){
                        console.log("aa");
                        n += 5;
                        moveDownward(n);
                    }
                    
                }
                break;
            case key.RIGHT:
                r += 10;
                move(r);
                if (collisionWithPlatforms(".platform") == false){
                    moveDownward();
                    $("#player").css("animationPlayState", "paused");

                    console.log("hey");
                    if(collisionWithPlatforms(".landscape") == true ||
                    collisionWithPlatforms(".platform") == true ||
                    collisionWithPlatforms(".stingPlatform") == true){
                        $("#playermoveY").css("animationPlayState", "paused");
                    }
                    
                }
                break;
        }
    });
});