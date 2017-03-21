window.location = "http://trevorarcher.com";

$('.li-web').on('click', function(){
  if ($('.li-web').hasClass('project-nav-active')){
    console.log("this is a thing");
  } else {
      $('.li-web').addClass('project-nav-active');
      $('.li-qa').removeClass('project-nav-active');
  }
  if ($('.web').hasClass('project-active')){
    console.log("this is a thing");
  } else {
      $('.web').addClass('project-active');
      $('.qa').removeClass('project-active');
  }
});

$('.li-qa').on('click', function(){
  if ($('.li-qa').hasClass('project-nav-active')){
    console.log("this is a thing");
  } else {
      $('.li-qa').addClass('project-nav-active');
      $('.li-web').removeClass('project-nav-active');
  }
  if ($('.qa').hasClass('project-active')){
    console.log("this is a thing");
  } else {
      $('.qa').addClass('project-active');
      $('.web').removeClass('project-active');
  }
});

$('.left-shark').on('mouseenter', function() {
  $('.nav-option-1').toggleClass('nav-option-visible');
});

$('.left-shark').on('mouseleave', function() {
  $('.nav-option-1').toggleClass('nav-option-visible');
});

$('.right-shark').on('mouseenter', function() {
  $('.nav-option-2').toggleClass('nav-option-visible');
});

$('.right-shark').on('mouseleave', function() {
  $('.nav-option-2').toggleClass('nav-option-visible');
});
