$(document).ready(function() {
    $('.hide-show').hide()
    $('#notifyBtn').on('click', function() {
      var inputValue = $('form[name="form1"] input[name="text1"]').val();
      ValidateEmail(inputValue);
      $('form[name="form1"] input[name="text1"]').focus();
    }); 
    function ValidateEmail(inputValue) {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
      if (inputValue.match(validRegex)) {
        return true;
      } else {
        $('.hide-show').show()
        $('#my_input').css('border-color', 'hsl(354, 100%, 66%)');
        return false;
      }
    }
});