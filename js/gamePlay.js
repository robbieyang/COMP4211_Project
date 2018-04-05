
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

    if(Math.floor(platform_top - player_bottom) == -12){
        if(Math.floor(player_right) > Math.floor(platform_left) && Math.floor(player_left) < Math.floor(platform_right)){
            console.log("coll" + nameOfObject);
            return true;
        }

        return false;
    }
    else{
        return false;
    }

}

function checkCollisions(){
    return (collisionWithPlatforms("#platform1")||
    collisionWithPlatforms("#platform2") ||
    collisionWithPlatforms("#platform3") ||
    collisionWithPlatforms("#platform4") ||
    collisionWithPlatforms("#platform5") ||
    collisionWithPlatforms("#stingPlatform1") ||
    collisionWithPlatforms("#stingPlatform2") ||
    collisionWithPlatforms("#stingPlatform3") ||
    collisionWithPlatforms("#stingPlatform4") ||
    collisionWithPlatforms("#stingPlatform5"));
}

function startAnimation(){
    $(".landscape").css("animationPlayState", "running");
    $("#landscape").css("animationPlayState", "running");
    $("#platform1").css("animationPlayState", "running");
    $("#platform2").css("animationPlayState", "running");
    $("#platform3").css("animationPlayState", "running");
    $("#platform4").css("animationPlayState", "running");
    $("#platform5").css("animationPlayState", "running");
    $("#stingPlatform1").css("animationPlayState", "running");
    $("#stingPlatform2").css("animationPlayState", "running");
    $("#stingPlatform3").css("animationPlayState", "running");
    $("#stingPlatform4").css("animationPlayState", "running");
    $("#stingPlatform5").css("animationPlayState", "running");
    $("#player").css("animationPlayState", "running");
    //$("#playermoveY").css("animationPlayState", "running");

}

function stopAnimation(){
    $(".landscape").css("animationPlayState", "paused");
    $("#landscape").css("animationPlayState", "paused");
    $("#platform1").css("animationPlayState", "paused");
    $("#platform2").css("animationPlayState", "paused");
    $("#platform3").css("animationPlayState", "paused");
    $("#platform4").css("animationPlayState", "paused");
    $("#platform5").css("animationPlayState", "paused");
    $("#stingPlatform1").css("animationPlayState", "paused");
    $("#stingPlatform2").css("animationPlayState", "paused");
    $("#stingPlatform3").css("animationPlayState", "paused");
    $("#stingPlatform4").css("animationPlayState", "paused");
    $("#stingPlatform5").css("animationPlayState", "paused");
    $("#player").css("animationPlayState", "paused");
    //$("#playermoveY").css("animationPlayState", "running");

}
// return true if the player's top <= ceiling bottom position


var timeRemaining = 181;
function countDown() {
	timeRemaining = timeRemaining - 1;
	var minutes = Math.floor(timeRemaining/60);
	var seconds = Math.floor(timeRemaining-(minutes*60));
	if (seconds == "0"){
		seconds= "00";
	} else if (seconds < 10){
		seconds = "0"+seconds;
	}
	document.getElementById("time").innerHTML = minutes+":"+seconds;
	if (timeRemaining > 0)
		setTimeout(countDown, 1000);
	if (minutes =="0" && seconds=="00") {
		console.log("Time's up");
		$("#gameOver").show();
		$("#gameOver").css("animationPlayState", "running");
		//Link the gameOver scene
		//document.getElementById("gameOver").style.display = "block";
	}
}

function checkGameOver(){




	//Game Over wordings will be shown with animation
	$("#gameOver").show();
	$("#gameOver").css("animationPlayState", "running");

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
    startAnimation();
    var r = 0;
    var n = 0;
    var key ={
        LEFT: 37,
        RIGHT: 39,
        UP: 38
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
    /*var checkCeiling = setInterval(function(){
                    var paused = false;
                    if(collisionWithceiling() && !paused){
                        paused = true;
                        player_life -= 1;
                        `if(player_life >= 0){
                            $(".life")[player_life].remove();
                        }`
                    }
                }, 50);*/

    $(document).on("keydown", function(e){
        switch(e.which){
            case key.LEFT:
                r -= 50;
                move(r);
                break;
            case key.RIGHT:
                r += 50;
                move(r);
                break;
        }
    });

    var checkCollision = setInterval(function(){
            if(!checkCollisions()){
                moveDownward();
                $("#player").css("animationPlayState", "paused");
                /*if(collisionWithPlatforms("#stingPlatform1") ||
                collisionWithPlatforms("#stingPlatform2") ||
                collisionWithPlatforms("#stingPlatform3") ||
                collisionWithPlatforms("#stingPlatform4") ||
                collisionWithPlatforms("#stingPlatform5")){

                    var bloodDeductionCount = 1;
                    player_life -= 1;
                    timeIn = true;
                    if(player_life >= 0 && bloodDeductionCount != 0){
                        $(".life")[player_life].remove();
                        bloodDeductionCount = 0;
                    }
                }*/
            }

            else{
                $("#playermoveY").css("animationPlayState", "paused");
                $("#player").css("animationPlayState", "running");

                if(collisionWithceiling()){
                    moveDownward();
                }
            }





    },1);

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



	countDown();


});
