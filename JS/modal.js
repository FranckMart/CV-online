

$(window).on('load', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });


  $(".close-btn").on("click", function() {
    document.location.href="index.html";
  })