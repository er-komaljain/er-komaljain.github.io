var startTime;

$( document ).ready(function() {
    console.log( "Timer started" );
    startTimer();
    $("#flashSaleButton").hide()
});

function startTimer() {
    startTime = new Date().getTime();
    setTimeout(show, 10000)
}

function show() {
    $("#flashSaleButton").show()
}