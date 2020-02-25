$(document).ready(function(){

var magicBall = {};
magicBall.answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Don't count on it.", "My reply is no.", "My sources say no."];

$("#answer").hide();

magicBall.predictFuture = function (question){
	$("#answer").fadeIn(5000);

	var randomNumber = Math.random();	
	var numberList = randomNumber * this.answers.length;
	var randomIndex = Math.floor(numberList);
	var finalAnswer = this.answers[randomIndex];
	
		
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").text(finalAnswer);

	console.log(question);
	console.log(finalAnswer);
};
	
var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	
	var question;
	setTimeout(
    function() {
        question = prompt("ASK ME ANYTHING!");
		$("#8ball").effect("shake");
		magicBall.predictFuture(question);
    }, 500);
	
};
 
$("#questionButton").click( onClick );
});
