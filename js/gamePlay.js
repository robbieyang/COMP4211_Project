
var player_life = 10;
var add = false;
var randomGen;
var randomGenPlatform;
var stopTimeOut;
var makePlatformRequest;
var makePlatformRequest1;
var checkPlatformRequest;
var checkPlatformRequest1;
var checkOutsideRequest;
var checkOutsideRequest1;
var score;

var canMoveL = true;
var canMoveR = true;

var previousCollision = "";

var counter = 0;
var lastCollideCeilling = false;


function move(n){
    $("#playermove").css("transform", "translateX(" + n + "px)")
}
function moveDownward(){
    $("#playermoveY").css("animationPlayState", "running");
    //console.log("nope!")

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

    //console.log(player_bottom - platform_top);
    if(Math.floor(platform_top - player_bottom) == -12){
        if(player_right > platform_left && player_left < platform_right){
            //console.log(platform_top - player_bottom + nameOfObject);
            return true;
        }

        return false;
    }
    else{
        return false;
    }

}


function startAnimation(){
    $("#platform1").css("animationPlayState", "running");
    $("#platform2").css("animationPlayState", "running");
    $("#platform3").css("animationPlayState", "running");
    /*$("#platform4").css("animationPlayState", "running");
    $("#platform5").css("animationPlayState", "running");*/
    $("#stingPlatform1").css("animationPlayState", "running");
   // $("#stingPlatform2").css("animationPlayState", "running");
    /*$("#stingPlatform3").css("animationPlayState", "running");
    $("#stingPlatform4").css("animationPlayState", "running");
    $("#stingPlatform5").css("animationPlayState", "running");*/
    $("#player").css("animationPlayState", "running");
    //$("#playermoveY").css("animationPlayState", "running");
    $("#landscape1").css("animationPlayState", "running");
    $("#landscape1Y").css("animationPlayState", "running");


}

function stopAnimation(){
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
    for (var i = 0;i<5; i++) {
        var k=i+1;
		$("#landscape"+k+"Y").css("animationPlayState", "paused");
        $("#landscape"+k).css("animationPlayState", "paused");

    }

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
		gameOver();

	}
}

/*function checkGameOver(){
	if (player_life == 0){
		cancelAnimationFrame(checkPlatformRequest);
		cancelAnimationFrame(checkPlatformRequest1);
		stopAnimation();
		clearTimeout(randomGen);
		clearTimeout(randomGenPlatform);
		cancelAnimationFrame(makePlatformRequest);
		cancelAnimationFrame(makePlatformRequest1);

		console.log("Game Over");
		$("#gameOver").show();
		$("#gameOver").css("animationPlayState", "running");
		setTimeout(function(){
				window.location.assign("gameOverScene.html")
			},700);

	}else{
        requestAnimationFrame(checkGameover);
	}

}*/



/*function makePlatform(id) {
    console.log("id "+id);
    var tempId = id+"svg";
    var newid="#"+id;
    if(id.includes("platform")){
        document.getElementById(id+"svg").setAttribute("x",  Math.floor((Math.random() * 1000)));
        document.getElementById(id+"svg").setAttribute("y", 2500);

            $(newid).css("animationPlayState", "running");

    }else if(id.includes("stingPlatform")){
        document.getElementById(id+"svg").setAttribute("x", Math.floor((Math.random() * 770)) );
        document.getElementById(id+"svg").setAttribute("y", 1000);
       // setTimeout(function() {
            $(newid).css("animationPlayState", "running");
       // }, Math.floor((Math.random() * 40000)));

    }else if(id.includes("landscape")){
        document.getElementById(id+"svg").setAttribute("x", Math.floor((Math.random() * 600))+100 );
        document.getElementById(id+"svg").setAttribute("y", 720);
       // setTimeout(function() {
            $(newid).css("animationPlayState", "running");
            $(newid+"Y").css("animationPlayState", "running");

      //  }, Math.floor((Math.random() * 40000)));

    }


}*/

function gameOver(){
    cancelAnimationFrame(checkPlatformRequest);
    cancelAnimationFrame(checkPlatformRequest1);
    stopAnimation();
	clearTimeout(stopTimeOut);
    clearTimeout(randomGen);
    clearTimeout(randomGenPlatform);
	cancelAnimationFrame(checkOutsideRequest1);
	cancelAnimationFrame(checkOutsideRequest);
    cancelAnimationFrame(makePlatformRequest);
    cancelAnimationFrame(makePlatformRequest1);

    console.log("Game Over");
    $("#gameOver").show();
    $("#gameOver").css("animationPlayState", "running");

	var queryString = "?Score=" + score;

	setTimeout(function(){
		window.location.assign("gameOverScene.html"+ queryString);
	},2300);
}

function makePlatform() {
	//console.log ("platform generated");
    var id= randomGenerate();
    var tempId = id+"svg";
    var newid="#"+id;
    var status =  document.getElementById(id).style.animationPlayState;
    while (status.includes("running")){
        id = randomGenerate();
        status =  document.getElementById(id).style.animationPlayState;
    }
   // console.log(id);
    if(id.includes("platform")){
        document.getElementById(id+"svg").setAttribute("x",  Math.floor((Math.random() * 1000)));
        document.getElementById(id+"svg").setAttribute("y",2500);

            $(newid).css("animationPlayState", "running");

    }else if(id.includes("stingPlatform")){
        document.getElementById(id+"svg").setAttribute("x", Math.floor((Math.random() * 770)) );
        document.getElementById(id+"svg").setAttribute("y", 1000);
       // setTimeout(function() {
            $(newid).css("animationPlayState", "running");
       // }, Math.floor((Math.random() * 40000)));

    }else if(id.includes("landscape")){
        document.getElementById(id+"svg").setAttribute("x", Math.floor((Math.random() * 600))+100 );
        document.getElementById(id+"svg").setAttribute("y", 720);
       // setTimeout(function() {
            $(newid).css("animationPlayState", "running");
            $(newid+"Y").css("animationPlayState", "running");

      //  }, Math.floor((Math.random() * 40000)));

    }
    var waitTime = (Math.floor((Math.random() * 30))+15)*100;

    randomGenPlatform = setTimeout(function() {
            makePlatformRequest1 = requestAnimationFrame(makePlatform);

    }, waitTime);



}

function randomGenerate(){
    var temp = Math.floor(Math.random()*3)+1;
    var num = Math.floor(Math.random()*5)+1;
    var id= "";
    if (num >5){
        temp=1;
    }
    switch (temp){
        case 1:
            id="platform";
            break;
        case 2:
            id="landscape";
            break;
        case 3:
            id="stingPlatform";

    }
    return id+num;
}

function collisionWithceiling(){
    var player = $("svg #player")[0].getBoundingClientRect();
    var player_top = player.top;

    var sting = $("svg #sting")[0].getBoundingClientRect();
    var sting_bottom = sting.bottom;

    if (player_top - sting_bottom < 2){
        return true;
    }

    return false;

}

var collisionCounter = 0;
var prevColli;

function checkOnPlatform(){
    $("#player").css("animationName", "player-animation");
    var platforms = document.getElementsByClassName("stand");

    var playerX = $("#playersvg")[0].getBoundingClientRect().x;
    var playerY = $("#playersvg")[0].getBoundingClientRect().bottom;
	var bgBottom = $("#background")[0].getBoundingClientRect().bottom;
    var on = false;
    var timeIn = false;
    //$("#player").css("animationPlayState", "running");
    //console.log(playerY);

    if(playerY > 700){
        gameOver();
    }
    for (var i = 0; i <platforms.length; i++) {
        var id =platforms[i].getAttribute("id");
        var platform_top = $("#"+id+"svg")[0].getBoundingClientRect().top;
        //console.log("player: "+playerY+"  platform: "+ platform_top);
        if(platform_top<bgBottom){
            var idsvg = document.getElementById(id+"svg");
            var platform_left = $("#"+id+"svg")[0].getBoundingClientRect().left;
            var platform_right = $("#"+id+"svg")[0].getBoundingClientRect().right;
            var platform_bottom= $("#"+id+"svg")[0].getBoundingClientRect().bottom;
            if(playerX>platform_left && playerX < platform_right && playerY >platform_top && playerY < platform_bottom ){
                //console.log("onPlatform");
                //collisionCounter += 1;
                console.log(lastCollideCeilling);
                console.log(prevColli);
                if (lastCollideCeilling && prevColli == id){
                    console.log("come here");
                    prevColli = id;
                }
                else{
                    prevColli = id;
                    lastCollideCeilling = false;
                    on = true;
                }
                break;
            }

        }
    }
    if(on){
        $("#playermoveY").css("animationPlayState", "paused");
        $("#player").css("animationPlayState", "running");
        /*player_life -= 1;
                timeIn = true;
                if(player_life >= 0 && !timeIn){
                    $(".life")[player_life].remove();
                    setTimeout(function(){
                        timeIn = false;
                    }, 2000);
                }*/

       // console.log(previousCollision)
        if (id.includes("stingPlatform") && previousCollision != id){
            if(player_life > 4){
                lifeDeduct(4);
                previousCollision = id;
            }
            else{
                while(player_life > 0){
                    lifeDeduct(1);
                }
                gameOver();
            }

        }
            //lifeDeduct(4);
        if(!id.includes("stingPlatform") && previousCollision != id){
                addScore();
                add= false;
                //console.log(player_life);
                if(player_life < 10){
                    //console.log("!!!!!!")
                    lifeAdd(1);
                }
                previousCollision = id;
        }
        if(collisionWithceiling()){
            //print("what?")
                //$("#player").css("animationPlayState", "paused");
            lastCollideCeilling = true;
            if(lastCollideCeilling){
                $("#playermoveY").css("transform", "translateY(100px)");
                //lastCollideCeilling = false;
            }
            moveDownward();
            if(player_life > 3){
                lifeDeduct(3);
            }
            else{
                while(player_life > 0){
                    lifeDeduct(1);
                }
                gameOver();
            }
        }
    }else{
        moveDownward();
        $("#player").css("animationPlayState", "paused");
        add = true;
        //checkPlatformRequest1 = requestAnimationFrame(checkOnPlatform);


    }

    checkPlatformRequest1 = requestAnimationFrame(checkOnPlatform);

}

function checkOutsideScreen(){
    var playerL = $("#playersvg")[0].getBoundingClientRect().left;
    var playerR = $("#playersvg")[0].getBoundingClientRect().right;
    var bgL = $("#background")[0].getBoundingClientRect().left;
    var bgR = $("#background")[0].getBoundingClientRect().right;

        if((playerL-20)<bgL){
            canMoveL = false;
        }else{
            canMoveL = true;
        }
        //requestAnimationFrame(checkOutsideScreen("left"));


        if((playerR+20)>bgR){
            canMoveR = false;
        }else{
            canMoveR = true;
        }
        checkOutsideRequest1 = requestAnimationFrame(checkOutsideScreen);


}
function addScore(){
    score = document.getElementById("score").innerHTML;
    score =  parseInt(score);
    score+=1
    document.getElementById("score").innerHTML = score + " &nbsp &nbsp";
}

function lifeDeduct(n){
    $("progress").fadeOut(100);
    $("progress").fadeIn(100);
    var progress = document.getElementById("health");
    player_life -= n;

    progress.value -= n*10;

}
function lifeAdd(){
    var progress = document.getElementById("health");
    player_life += 1;
    progress.value += 10;
}

function init(){
    document.getElementById("platform2"+"svg").setAttribute("x",  Math.floor((Math.random() * 1000)));
    document.getElementById("platform3"+"svg").setAttribute("x",  Math.floor((Math.random() * 1000)));
    document.getElementById("stingPlatform1"+"svg").setAttribute("x",  Math.floor((Math.random() * 770)));
    //document.getElementById("stingPlatform2"+"svg").setAttribute("x",  Math.floor((Math.random() * 770)));
    document.getElementById("platform2"+"svg").setAttribute("y",  Math.floor((Math.random() * 10)+10)*100);
    document.getElementById("platform3"+"svg").setAttribute("y",  Math.floor((Math.random() * 10)+20)*100);
    document.getElementById("stingPlatform1"+"svg").setAttribute("y",  Math.floor((Math.random() * 1000)+250));
    //document.getElementById("stingPlatform2"+"svg").setAttribute("y",  Math.floor((Math.random() * 1000)+250));
    document.getElementById("landscape1"+"svg").setAttribute("x",Math.floor(Math.random()*600)+100);
    document.getElementById("landscape1"+"svg").setAttribute("y",Math.floor(Math.random()*700)+100);
    var landscape = document.getElementsByClassName("landscape");
    for (var i = 1;i<landscape.length; i++) {
        var k=i+1;
        document.getElementById("landscape"+k+"svg").setAttribute("y", 720);
       // makePlatform("landscape"+k);
    }
    //makePlatform("platform4");
    //makePlatform("platform5");

}

$(document).ready(function(){
	$("audio")[0].pause();
	$("audio")[0].currentTime = 0;
	$("audio")[0].loop = true;
	$("audio")[0].play();
	$("#main").css("animationPlayState", "running");
    startAnimation();
    var r = 0;
    var n = 0;
    var key ={
        LEFT: 37,
        RIGHT: 39,
        UP: 38
    };

    $(document).on("keydown", function(e){
        switch(e.which){
            case key.LEFT:

                if( canMoveL){
                    r -= 20;
                    move(r);
                }

                /*if (collisionWithPlatforms(".platform") == false){
                    console.log("here");
                    n += 5;
                    moveDownward();

                }*/
                break;
            case key.RIGHT:
                if(canMoveR){
                    r += 20;
                    move(r);
                }
                /*if (collisionWithPlatforms(".platform") == false){
                    console.log("hey");
                }*/
                break;
        }
    });

    $("#platform1").on("animationend", function() {
            // You need to stop the animation here
            $("#platform1").css("animation-play-state","paused");
           // makePlatform("platform1");
             document.getElementById("platform1svg").setAttribute("y", 2500);


        });
    $("#platform2").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform2").css("animation-play-state","paused");
           // makePlatform("platform2");
           document.getElementById("platform2svg").setAttribute("y", 2500);


        });


    $("#platform3").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform3").css("animation-play-state","paused");
            //makePlatform("platform3");
            document.getElementById("platform3svg").setAttribute("y", 2500);

        });

     $("#platform4").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform4").css("animation-play-state","paused");
           // makePlatform("platform4");
           document.getElementById("platform4svg").setAttribute("y", 2500);

        });
      $("#platform5").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform5").css("animation-play-state","paused");
           // makePlatform("platform5");
           document.getElementById("platform5svg").setAttribute("y", 2500);

        });

      $("#platform6").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform6").css("animation-play-state","paused");
           // makePlatform("platform5");
           document.getElementById("platform6svg").setAttribute("y", 2500);

        });

      $("#platform7").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform7").css("animation-play-state","paused");
           // makePlatform("platform5");
           document.getElementById("platform7svg").setAttribute("y", 2500);

        });

      $("#platform8").on("animationiteration", function() {
            // You need to stop the animation here
            $("#platform8").css("animation-play-state","paused");
           // makePlatform("platform5");
           document.getElementById("platform8svg").setAttribute("y", 2500);

        });

      $("#stingPlatform1").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform1").css("animation-play-state","paused");
           // makePlatform("stingPlatform1");
           document.getElementById("stingPlatform1svg").setAttribute("y", 1000);

        });
      $("#stingPlatform2").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform2").css("animation-play-state","paused");
           // makePlatform("stingPlatform2");
            document.getElementById("stingPlatform2svg").setAttribute("y", 1000);

        });
      $("#stingPlatform3").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform3").css("animation-play-state","paused");
            //makePlatform("stingPlatform3");
             document.getElementById("stingPlatform3svg").setAttribute("y", 1000);

        });
      $("#stingPlatform4").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform4").css("animation-play-state","paused");
           // makePlatform("stingPlatform4");
            document.getElementById("stingPlatform4svg").setAttribute("y", 1000);

        });
      $("#stingPlatform5").on("animationiteration", function() {
            // You need to stop the animation here
            $("#stingPlatform5").css("animation-play-state","paused");
            //makePlatform("stingPlatform5");
             document.getElementById("stingPlatform5svg").setAttribute("y", 1000);

        });
       $("#landscape1Y").on("animationiteration", function() {
            // You need to stop the animation here
            $("#landscape1Y").css("animation-play-state","paused");
           // makePlatform("landscape1");
           document.getElementById("landscape1svg").setAttribute("y", 720);

        });
       $("#landscape2Y").on("animationiteration", function() {
            // You need to stop the animation here
            $("#landscape2Y").css("animation-play-state","paused");
            //makePlatform("landscape2");
             document.getElementById("landscape2svg").setAttribute("y", 720);

        });
       $("#landscape3Y").on("animationiteration", function() {
            // You need to stop the animation here
            $("#landscape3Y").css("animation-play-state","paused");
           // makePlatform("landscape");
            document.getElementById("landscape3svg").setAttribute("y", 720);

        });
       $("#landscape4Y").on("animationiteration", function() {
            // You need to stop the animation here
            $("#landscape4Y").css("animation-play-state","paused");
           // makePlatform("landscape4");
            document.getElementById("landscape4svg").setAttribute("y", 720);

        });
       $("#landscape5Y").on("animationiteration", function() {
            // You need to stop the animation here
            $("#landscape5Y").css("animation-play-state","paused");
           // makePlatform("landscape5");
            document.getElementById("landscape5svg").setAttribute("y", 1020);

        });

    startAnimation();
    randomGen = setTimeout(function(){
                        makePlatformRequest = requestAnimationFrame(makePlatform);
                    }, 2000);
    checkPlatformRequest = requestAnimationFrame(checkOnPlatform);
    checkOutsideRequest = requestAnimationFrame(checkOutsideScreen);

	init();

	countDown();


});
