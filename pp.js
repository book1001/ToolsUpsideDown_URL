// pp: Detail Open/Close ------------------------------------------------

function ppOpen1() {
  document.getElementById("ppDetail1").style.display = "block";
  document.getElementById("ppDetail2").style.display = "none";
}
function ppOpen2() {
  document.getElementById("ppDetail2").style.display = "block";
  document.getElementById("ppDetail1").style.display = "none";
}
function ppOpen3() {
  document.getElementById("ppDetail3").style.display = "block";
}
function ppOpen4() {
  document.getElementById("ppDetail4").style.display = "block";
}
function ppOpen5() {
  document.getElementById("ppDetail5").style.display = "block";
}
function ppOpen6() {
  document.getElementById("ppDetail6").style.display = "block";
}
function ppOpen7() {
  document.getElementById("ppDetail7").style.display = "block";
}
function ppOpen8() {
  document.getElementById("ppDetail8").style.display = "block";
}
function ppOpen9() {
  document.getElementById("ppDetail9").style.display = "block";
}
function ppOpen10() {
  document.getElementById("ppDetail10").style.display = "block";
}
function ppOpen11() {
  document.getElementById("ppDetail11").style.display = "block";
}
function ppOpen12() {
  document.getElementById("ppDetail12").style.display = "block";
}
function ppOpen13() {
  document.getElementById("ppDetail13").style.display = "block";
}
function ppOpen14() {
  document.getElementById("ppDetail14").style.display = "block";
}
function ppOpen15() {
  document.getElementById("ppDetail15").style.display = "block";
}
function ppOpen16() {
  document.getElementById("ppDetail16").style.display = "block";
}
function ppOpen17() {
  document.getElementById("ppDetail17").style.display = "block";
}
function ppOpen18() {
  document.getElementById("ppDetail18").style.display = "block";
}
function ppOpen18() {
  document.getElementById("ppDetail19").style.display = "block";
}


function ppClose() {
  document.getElementById("ppDetail1").style.display = "none";
  document.getElementById("ppDetail2").style.display = "none";
  document.getElementById("ppDetail3").style.display = "none";
  document.getElementById("ppDetail4").style.display = "none";
  document.getElementById("ppDetail5").style.display = "none";
  document.getElementById("ppDetail6").style.display = "none";
  document.getElementById("ppDetail7").style.display = "none";
  document.getElementById("ppDetail8").style.display = "none";
  document.getElementById("ppDetail9").style.display = "none";
  document.getElementById("ppDetail10").style.display = "none";
  document.getElementById("ppDetail11").style.display = "none";
  document.getElementById("ppDetail12").style.display = "none";
  document.getElementById("ppDetail13").style.display = "none";
  document.getElementById("ppDetail14").style.display = "none";
  document.getElementById("ppDetail15").style.display = "none";
  document.getElementById("ppDetail16").style.display = "none";
  document.getElementById("ppDetail17").style.display = "none";
  document.getElementById("ppDetail18").style.display = "none";
  document.getElementById("ppDetail19").style.display = "none";
}




// Door: Open/Close ------------------------------------------------

// $(".open-door").click(function () {
//             $(this).text(function(i, v){
//                return v === 'Open The Door' ? 'Close           The Door' : 'Open The Door'
//             })
//         });


$("#openDoor").click(function() {
  $(this).text("\u00a0");
    // $(this).text("Close \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The Door");
});

// pp: Random Moving Div ------------------------------------------------

$(document).ready(function(){
  $("#openDoor").click(function(){
    animateDiv('.pp1');
    animateDiv('.pp2');
    animateDiv('.pp3');
    animateDiv('.pp4');
    animateDiv('.pp5');
    animateDiv('.pp6');
    animateDiv('.pp7');
    animateDiv('.pp8');
    animateDiv('.pp9');
    animateDiv('.pp10');
    animateDiv('.pp11');
    animateDiv('.pp12');
    animateDiv('.pp13');
    animateDiv('.pp14');
    animateDiv('.pp15');
    animateDiv('.pp16');
    animateDiv('.pp17');
    animateDiv('.pp18');
    animateDiv('.pp19');
  });
});

// $(document).ready(function(){
//     animateDiv('.pp1');
//     animateDiv('.pp2');
//     animateDiv('.pp3');
//     animateDiv('.pp4');
//     animateDiv('.pp5');
//     animateDiv('.pp6');
//     animateDiv('.pp7');
//     animateDiv('.pp8');
//     animateDiv('.pp9');
//     animateDiv('.pp10');
//     animateDiv('.pp11');
//     animateDiv('.pp12');
//     animateDiv('.pp13');
//     animateDiv('.pp14');
//     animateDiv('.pp15');
//     animateDiv('.pp16');
//     animateDiv('.pp17');
//     animateDiv('.pp18');
//     animateDiv('.pp19');
// });

function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    var oldq = $(myclass).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(myclass).css("display", "block");
    $(myclass).css("pointer-events", "auto");
    $(myclass).animate({ top: newq[0], left: newq[1] }, speed,   function(){
      animateDiv(myclass);
      // $(myclass).css("display", "block");
    });

    $(myclass).hover(function() {
        $(this).stop();
        $(this).children().css("display", "block");
    },
    function() {
      $(this).children().css("display", "block");
      // $(myclass).animate({ top: newq[0], left: newq[1] }, speed,   function(){
      //   animateDiv(myclass);
      // });
    });
};


function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.05;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
}
