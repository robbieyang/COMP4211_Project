function moveLeft(){
    
}

function moveRight(){

}
function jump(){
    
}

//return true if the player's bottom <= platform's top
function collisionWithPlatforms(height){

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
    $(document).on("keydown", function(e){
        switch(e.which){
            case key.LEFT:
                moveLeft();
                //console.log($("#player").position().left);
                break;
            case key.RIGHT:
                moveRight();
                break;
        }
    });
});