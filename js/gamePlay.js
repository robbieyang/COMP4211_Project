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
});