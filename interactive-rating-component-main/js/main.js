$(function() {
  let selectedRating = null; 

  $('.rating').click(function() {
    selectedRating = $(this).data('rating');
    $('.rating').removeClass('selected'); 
    $(this).addClass('selected'); 
  });
  
  $('#submit-btn').click(function() {
    if(selectedRating) {
      
      $('.first').hide()
      $('.second').show()
      $('p.selection').text('You selected '+ selectedRating + ' out of 5')
    } else {
      $('.warning').show()
      setTimeout(function() {
        $('.warning').fadeOut();
      }, 4000);
    }
  });
});