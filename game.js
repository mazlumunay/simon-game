var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPatern = [];
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPatern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userClickedPatern);
});


function nextSequence(){

    var randomNumber =  Math.floor(Math.random()*4);
    
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
           

};

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3").play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}

nextSequence();




