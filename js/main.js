
$(document).ready(function(){
 $('.header').height($(window).height());
})


$(document).ready(function(){
  $('#alertbox').click(function(){
    $("#thanks").html("Thanks for joining us!");
      $('#myModal').modal("show");
    });
  });