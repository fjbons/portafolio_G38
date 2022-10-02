//added tooltip on CV btn and icons
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


//added black navbar function when scrolling
$(document).scroll(function () {
    const y = $("html").scrollTop();
    y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
});

//added sent email alert
$("#enviarCorreo").click(function () {
    alert("Tu mensaje fue enviado correctamente");
  });

  