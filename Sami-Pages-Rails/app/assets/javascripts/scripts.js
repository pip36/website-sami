var ready = function() {
//When Learn more buttons are clicked display the extra content
    $('.content-button').click(function(event){
      var curr_button = $('#'+event.target.id);
      var content = curr_button.parent().prev();

      content.toggle("slow", function(){});
      if (curr_button.html() == "Learn more")
      {
        curr_button.html("Close");
      }
      else{
        curr_button.html("Learn more");
      }
    });

//Hide all extra content tabs
   HideContents();

//If screen width is small display mobile front page
$(window).resize(function(){
    if ($(window).width() < 1024){
      $('.inner-image-text').css('display', 'none');
      $('.front-mobile-text').css('display', 'block');
    }
    else{
      $('.inner-image-text').css('display', 'block');
      $('.front-mobile-text').css('display', 'none');
    }
});


}

// Calls ready function when page is loaded with turbolinks
$(document).on('turbolinks:load', ready);



var HideContents = function(){
  $('.container .content').hide();
}
