

$(window).on('load', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });


  $(".close-btn").on("click", function() {
    document.location.href="../index.html";
  })

  $(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
       // <DO YOUR WORK HERE>
       document.location.href="../index.html";
   }
});