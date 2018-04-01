function moveRight(){
    $("#player").animate({"left":"-= 1px"}, "slow");
}

function moveLeft(){
    $("#player").animate({"left":"+= 1px"}, "slow");
}

function jump(){
    
}

$(document).ready(function(){
    $(document).on("keydown", function(e){

        if(e.keyCode == 39){
            moveRight();
        }

        if(e.keycode == 37){
            moveRight();
        }

        if(e.keycode == 38){
            jump();
        }
    });
});