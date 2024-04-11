var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var started=false;
var level=0;
$(document).keydown(function(){
    if(!started){
        started=true;
       
        nextSequence();
    }

    
});
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
     checkSequence(userClickedPattern.length);
    
    
})
function nextSequence(){
     level++;
     userClickedPattern=[];
     $("h1").text("Level "+level);
     var random=Math.floor(Math.random()*4);
     var randomChosenColor=buttonColors[random];
     gamePattern.push(randomChosenColor);
     $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChosenColor);
     checkSequence();

     }
function playSound(name){
    switch(name){
        case "red":var audio1=new Audio("sounds/red.mp3");
                   audio1.play();
                   break;
        case "blue":var audio2=new Audio("sounds/blue.mp3");
                   audio2.play(); 
                   break;
        case "green":var audio3=new Audio("sounds/green.mp3");
                   audio3.play();  
                   break;   
        case "yellow":var audio4=new Audio("sounds/yellow.mp3");
                   audio4.play();
                   break; 
        case "wrong":var audio5=new Audio("sounds/wrong.mp3");
                   audio5.play();
                   break;   
    }
}
function animatePress(passById){
    $("#"+passById).addClass("pressed");
    setTimeout(function(){$("#"+passById).removeClass("pressed");},100 );
    
}

function checkSequence(currentLevel){
    
    if(currentLevel<gamePattern.length){
        if(userClickedPattern[currentLevel-1]!==gamePattern[currentLevel-1]){
            $("h1").text("Game Over,Press Any Key to Restart☠️")
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){$("body").removeClass("game-over")},200 );
            startOver();
        }
        }
    else if(currentLevel===gamePattern.length){
        if(userClickedPattern[currentLevel-1]!==gamePattern[currentLevel-1]){
            $("h1").text("Game Over,Press Any Key to Restart☠️")
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){$("body").removeClass("game-over")},200) ;
            startOver();
        }
        else{
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    } 
    function startOver(){
        started=false;
        gamePattern=[];
        level=0;
    }

