
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

//Hide all extra content tabs, delay so image sliders size correctly
setTimeout(HideContents, 50);

}

// Calls ready function when page is loaded with turbolinks
$(document).on('turbolinks:load', ready);

var HideContents = function(){
  $('.container .content').hide();
}
