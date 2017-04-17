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
}

// Calls ready function when page is loaded with turbolinks
$(document).on('turbolinks:load', ready);

$(document).ready(function(){
  $('.navbar-nav li').click(function(){
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
  });

});

var HideContents = function(){
  $('.container .content').hide();
}
