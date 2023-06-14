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
        $(".alert").addClass("alert-success").removeClass("d-none").html(successMessage);
      }
    });
  
    $(".alert").on("closed.bs.alert", function() {
      $(this).addClass("d-none");
    });
  });
  