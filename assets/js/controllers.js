//COMMENT 1:
/*
  Next code is responsible to add a line in navbar border bottom
  and add a box-shadow
*/ 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.borderBottom = "#1e2e3e 1px solid";
    document.getElementById("navbar").style.boxShadow = "0 4px 2px -4px #0c0e11a6";
  } else {
    document.getElementById("navbar").style.borderBottom = "none";
    document.getElementById("navbar").style.boxShadow = "none";
  }
} 

//COMMENTE 2:
/* 
  Following code is commented because is only an alternative
  to made a interative navbar: when click in a link, the code
  call a functio that change the current class to active...

  if you wanna test this code, uncomment him and comment the next code
  to avoid bugs.

  READ COMMENT 3
*/

// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate()
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           window.location.hash = hash;
//         });
//       } 
//     });

//     $('li > a').click(function() {
//       $('li').removeClass();
//       $(this).parent().addClass('active');
//     });

// });


//COMMENT 3:
/*
  Now the code below changes the class to active even the window is
  scrolled... when we navigate on page, clicking on navigation links
  or not, the navigation link change to active in the current section

  scroll down or up, or click on nav link to see result.
*/

$(window).on("scroll", function() {
  var currentPos = $(window).scrollTop();

  $('.nav-menu ul li a').each(function() {
    var sectionLink = $(this);
    // capture the height of the navbar
    var navHeight = $('#nav-wrapper').outerHeight() + 30;
    var section = $(sectionLink.attr('href'));

    // subtract the navbar height from the top of the section
    if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
      $('li').removeClass('active');
      sectionLink.parent().addClass('active');
    } else {
      sectionLink.parent().removeClass('active');
    }
  });        
});
  