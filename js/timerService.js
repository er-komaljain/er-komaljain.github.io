var startTime;
var interval;

$( document ).ready(function() {
    console.log( "Timer started" );
    startTimer();
    $("#flashSaleButton").hide();
    $("#timer").hide();
});

function startTimer() {
    startTime = new Date().getTime();
    setTimeout(show, 3000);
}

function show() {
    $("#flashSaleButton").show();
}

function flashOffer() {
    console.log("in flash offer");
    $("#productGrid").attr("src", "./html/productGridForFlashSale.html");
    $("#flashSaleButton").hide();
    $("#timer").show();
    interval = setInterval(changeTime, 1000);
}

function changeTime() {
    var minutes = parseInt($("#minutes").text());
    var seconds = parseInt($("#seconds").text());

    console.log("minutes = "+ minutes + "seconds = "+seconds);
    if(minutes === 0 && seconds === 0) {
        clearInterval(interval);
        $("#productGrid").attr("src", "./html/productGrid.html");
        $("#timer").hide();
    } else {
        if(seconds === 0) {
            $("#seconds").html(59);
            var nextMinutesVal = (minutes - 1);
            var minuteStr = nextMinutesVal.toString();
            if(nextMinutesVal >= 0 && nextMinutesVal <=9){
                $("#minutes").html("0".concat(minuteStr));
            } else {
                $("#minutes").html(minuteStr);
            }
        } else {
            var nextSecondsVal = (seconds - 1);
            var secondsStr = nextSecondsVal.toString();
            if(nextSecondsVal >= 0 && nextSecondsVal <= 9){
                $("#seconds").html("0".concat(secondsStr));
            }else {
                $("#seconds").html(secondsStr);
            }
        }
    }

}