// Menu Buttons ------------------------------------------------

$(".menu-btn").click(function (e) {
    e.preventDefault();

    $('[class^=row]').not($('.'+this.id)).hide();

    var btns = $(".menu-btn");
    for(var i=0; i<btns.length; i++) {
      var btn = btns.eq(i);
      if(btn[0] !== $(this)[0]) {
        btn.removeClass("menu-btn-upsidedown");
      }
    }

    if($(this).hasClass("menu-btn-upsidedown")) {
      $(this).removeClass("menu-btn-upsidedown");
    }
    else {
      $(this).addClass("menu-btn-upsidedown")
    }

    $('.'+this.id).slideToggle(500);
});

// function menuSyllabus() {
//   if (document.getElementById("row1").style.transform === "scaleY(-1)") {
//     document.getElementById("row1").style.transform = "none";
//   } else {
//     document.getElementById("row1").style.transform = "scaleY(-1)";
//   }
// }





// $(".menu-btn").click(function(e){
//      e.preventDefault();
//       id=$(this).data('target');
//       //console.log(id);
//
//
//     if($('.menu' +'#'+id).is(":visible") ) {
//       $(".menu"+'#'+id).slideUp(500);
//     }
//       else {
//            $(".menu"+'#'+id).slideToggle(500);
//             $(".menu"+'#'+id).siblings('.menu').slideUp(500);
//       }
//
//  });

// function menuSyllabus() {
//   if (document.getElementById("syllabusIframe").style.display === "block") {
//     document.getElementById("syllabusIframe").style.display = "none";
//     document.getElementById("menuSyllabusId").style.transform = "none";
//   } else {
//     document.getElementById("syllabusIframe").style.display = "block";
//     document.getElementById("menuSyllabusId").style.transform = "scaleY(-1)";
//
//     // iFrame: Schedule
//     document.getElementById("scheduleIframe").style.display = "none";
//     document.getElementById("menuScheduleId").style.transform = "none";
//     // iFrame: Are.na
//     document.getElementById("arenaIframe").style.display = "none";
//     document.getElementById("menuArenaId").style.transform = "none";
//   }
// }
//



// function menuArena(button)
// {
//   if(document.getElementById("menuArena").value=="OFF") {
//    document.getElementById("menuArena").value="ON";
//    document.getElementById("arenaIframe").style.display = "block";
//  }
//
//   else if(document.getElementById("menuArena").value=="ON") {
//    document.getElementById("menuArena").value="OFF";
//    document.getElementById("arenaIframe").style.display = "none";
//  }
// }


// iFrame: Draggable ------------------------------------------------

// $(".draggable").draggable({
//   handle: ".handle",
//   iframeFix: true,
//   start: function(event, ui) {
//     $('.frameOverlay').show();
//   },
//   stop: function(event, ui) {
//     $(".frameOverlay").hide();
//   }
// });
