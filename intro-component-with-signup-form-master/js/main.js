$( document ).ready(function() {
  // Event handler for focusing on the input and typing
  $('.inputt').on('focus input', function() {
    if ($(this).val().trim() !== '' || $(this).is(':focus')) {
      $(this).css('borderColor', 'hsl(248, 32%, 49%)'); // Change border color on focus or when typing
    } else {
      $(this).css('borderColor', '#ccc'); // Revert to default border color
    }
  }).on('blur', function() {
    // Only revert to default if there's no text
    if ($(this).val().trim() === '') {
      $(this).css('borderColor', '#ccc'); // Revert to default border color when not focused
    }
  });
});

function validateForm() {
  var emailInput = document.getElementById('email');
  var email = emailInput.value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
      alert('Looks like this is not an email');
      return false;
  }
  return true;
}