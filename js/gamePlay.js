function moveRight(){
    $("#player").animate({"left":"-= 1px"}, "slow");
}

function moveLeft(){
    $("#player").animate({"left":"+= 1px"}, "slow");
}

function jump(){
    
}

$(document).ready(function(){

    var key ={
        LEFT: 37,
        RIGHT: 39,
        UP: 38
    };
    $(document).on("keydown", function(e){
        switch(e.which){
            case key.LEFT:
                $("#player").css('left', function(i, v){
                    return parseInt(v,10) - width;
                });
                break;
            case key.RIGHT:
                $("#player").css('left', function(i, v){
                    return parseInt(v,10) + width;
                });
                break;
        }
    });
});