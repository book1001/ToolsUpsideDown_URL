// // Masonry
// var $grid = $('.thumbnail-view').masonry({
//   itemSelector: '.thumbnail-view-item',
//   horizontalOrder: true,
//   columnWidth: '.thumbnail-view-sizer',
//   percentPosition: true,
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });
//
// $(window).on( 'load', function() {
//   $grid.masonry('layout');
// });

// init Masonry after all images have loaded
// var $grid = $('.grid').imagesLoaded( function() {
//   $grid.masonry({
//     itemSelector: '.grid-item',
//     horizontalOrder: true,
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//   });
// });
//
// $(window).on( 'load', function() {
//   $grid.masonry('layout');
// });

//
// // Masonry
// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   horizontalOrder: true,
//   columnWidth: '.grid-sizer',
//   percentPosition: true,
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });
//
//
// $(window).on( 'load', function() {
//   $grid.masonry('layout');
// });

// // init Masonry
// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   columnWidth: '.grid-sizer'
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// });


function P6_SoJungYoon_1() {
  document.getElementById("P6_SoJungYoon_1").style.display = "block";
}


// Modal: image zoom

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");

// Get the <span> element that closes the modal
var xIcon = document.getElementsByClassName("close")[0];
var modalBg = document.getElementsByClassName("modal-dimbg")[0];

let images = document.getElementsByClassName("zoomIn");

for(let i=0; i<images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    // xIcon.style.display = "block";
    modalImg.src = this.src;
    // document.body.style.overflowY = "hidden";
  }
}

// When the user clicks on <span> (x), close the modal
xIcon.onclick = function() {
  modal.style.display = "none";
  xIcon.style.display = "none";
  // document.body.style.overflowY = "scroll";
}

modalBg.onclick = function() {
  modal.style.display = "none";
  xIcon.style.display = "none";
  // document.body.style.overflowY = "scroll";
}
