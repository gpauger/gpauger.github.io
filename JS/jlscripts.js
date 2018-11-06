$("ul.dropList").hide();
$("ul.dropList2").hide();
$("ul.dropList3").hide();
$("#hipster-highlights").hide();
$("#blueribbon-highlights").hide();
$("#twitterbot-highlights").hide();


$("#hipster-control").on("click", function () {
    $("#hipster-highlights").slideToggle();
    var text = $("#hipster-control").text();
    if (text == "Hide Project Highlights") {
        $("#hipster-control").text("Show Project Highlights");
    } else {
        $("#hipster-control").text("Hide Project Highlights");
    }
});

$("#blueribbon-control").on("click", function () {
    $("#blueribbon-highlights").slideToggle();
    var text = $("#blueribbon-control").text();
    if (text == "Hide Project Highlights") {
        $("#blueribbon-control").text("Show Project Highlights");
    } else {
        $("#blueribbon-control").text("Hide Project Highlights");
    }
});

$("#twitterbot-control").on("click", function () {
    $("#twitterbot-highlights").slideToggle();
    var text = $("#twitterbot-control").text();
    if (text == "Show Favorite Tweets") {
        $("#twitterbot-control").text("Hide Favorite Tweets");
    } else {
        $("#twitterbot-control").text("Show Favorite Tweets");
    }
});


$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#portItem").mouseenter(function () {
    $(".dropList").stop(true, true);
    $(".dropList").show(250);
    $("#portCaret").attr("class", "glyphicon glyphicon-chevron-down");
});

$("#portItem").mouseleave(function () {
    $(".droplist").stop(true,true);
    $(".dropList").hide(250);
    $("#portCaret").attr("class", "glyphicon glyphicon-chevron-right");

});

$("#portItem2").mouseenter(function () {
    $(".droplist2").stop(true,true);
    $(".dropList2").show(250);
    $("#portCaret2").attr("class", "glyphicon glyphicon-chevron-down");
});

$("#portItem2").mouseleave(function () {
    $(".droplist2").stop(true,true);
    $(".dropList2").hide(250);
    $("#portCaret2").attr("class", "glyphicon glyphicon-chevron-right");

});

$("#portItem3").mouseenter(function () {
    $(".droplist3").stop(true,true);
    $(".dropList3").show(250);
    $("#portCaret3").attr("class", "glyphicon glyphicon-chevron-down");
});

$("#portItem3").mouseleave(function () {
    $(".droplist3").stop(true,true);
    $(".dropList3").hide(250);
    $("#portCaret3").attr("class", "glyphicon glyphicon-chevron-right");

});

$("#contactbutton").mouseenter(function () {
    $("#contactbutton").stop(true, false);
    $("#contactbutton").css("opacity", "1");
    $("#contactbutton").animate({
        left: "0"
    }, 300, function () {

    });

});

$("#contactbutton").mouseleave(function () {
    $("#contactbutton").stop(true, false);
    $("#contactbutton").animate({
        left: "-85"
    }, 300, function () {

    });

});

$("#contactbutton").click(function () {
    $("#contactbutton").css("opacity", "0.4");

});


// Scrolls to the selected menu item on the page
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

var angle = Math.PI*2 ;
var mult = 90; //max angle will be 38 degrees rotation
var swingTimer = 0;
var buttonDelay=0


$("#rickTime").click(function () {
    $("body").css("overflow", "hidden");
    angle = Math.PI * 2;
    mult = 75; //max angle will be 38 degrees rotation
    swingTimer = 0;
    buttonDelay = 0
    swingTimer = setInterval("swing()", 9);
});

$("#endGag").click(function () {
    clearInterval(swingTimer);
    killSwing();
});

function swing() {

 
    var newAngle = mult * Math.sin(angle);

    $("#everything").css({
        "-webkit-transform": "rotate(" + newAngle + "deg)",
        "-ms-transform": "rotate(" + newAngle + "deg)",
        "-moz-transform": "rotate(" + newAngle + "deg)",
        "transform": "rotate(" + newAngle + "deg)",
    });
    //if mult goes below 0, swing angle increases. Kill everything at mult=0
    if (mult >= 0) {
        mult = mult - .025
    } else {
        mult = 0;
        killSwing();
    }
    angle = angle + .005;
    if (buttonDelay == 500) {  //after delay, show kill switch.
        $('<button id="endGag" class="btn btn-danger">OK...hahaha.</button>').appendTo('body');
        buttonDelay++;
    } else {
        buttonDelay++;
    }
    $("#endGag").click(function () {  //killswitch click
        killSwing();
        $(this).remove();
    });
}


//turn off timer so it don't keep running, show scroll bars again.
function killSwing() {
    clearInterval(swingTimer);
    $("body").css("overflow", "visible");
    $("#endGag").remove();
    $("#everything").css({
        "-webkit-transform": "rotate(0deg)",
        "-ms-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "transform": "rotate(0deg)",
    })
}
