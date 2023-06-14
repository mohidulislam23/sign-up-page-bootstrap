$(document).ready(function() {
  $("button[type='submit']").click(function(e) {
    e.preventDefault();
    
    var firstName = $("#First-name").val();
    var lastName = $("#Last-name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      var errorMessage = "Please fill in all fields.";
      $(".alert").addClass("alert-danger").removeClass("d-none").html(errorMessage);
    } else {
      var successMessage = "Sign up successful!";
      $(".alert").addClass("alert-success").removeClass("d-none").html(successMessage + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
      $(".content__input--form")[0].reset(); // Reset the form
      $(".clear-button").removeClass("d-none"); // Show the clear button
    }
  });
  
  $(".alert").on("closed.bs.alert", function() {
    $(this).addClass("d-none");
  });
  
  $(".clear-button").click(function() {
    $(".content__input--form")[0].reset(); // Reset the form
    $(this).addClass("d-none"); // Hide the clear button
  });
});
