var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPatern = [];
var level = 0;
var started = false;



function nextSequence(){

    var userClickedPatern = [];      // Reset user pattern for new level

     // Increase level and update display
     level++;
     $("#level-title").text("Level " + level);

    var randomNumber =  Math.floor(Math.random()*4);
    
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
           
};

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPatern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3").play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}

$(document).keypress(function() {
    if (!started) {

      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });




