$('.li-web').on('click', function(){
  if ($('.web').hasClass('project-active')){
    console.log("this is a thing");
  } else {
      $('.web').addClass('project-active');
      $('.qa').removeClass('project-active');
  }
});

$('.li-qa').on('click', function(){
  if ($('.qa').hasClass('project-active')){
    console.log("this is a thing");
  } else {
      $('.qa').addClass('project-active');
      $('.web').removeClass('project-active');
  }
});
