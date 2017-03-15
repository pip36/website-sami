var ready = function() {



    $('#b-oboe-button').click(function(){
      $('#b-oboe-contents').toggle("slow", function(){});
    });
    $('#b-damore-button').click(function(){
      $('#b-damore-contents').toggle("slow", function(){});
    });
    $('#b-caccia-button').click(function(){
      $('#b-caccia-contents').toggle("slow", function(){});
    });
    $('#c-oboe-button').click(function(){
      $('#c-oboe-contents').toggle("slow", function(){});
    });

       window.interval1 = setInterval("CycleImages('#cycler-b-oboe')", 5000)
       window.interval2 = setInterval("CycleImages('#cycler-b-damore')", 5000)
       window.interval3 = setInterval("CycleImages('#cycler-b-caccia')", 5000)
       window.interval4 = setInterval("CycleImages('#cycler-c-oboe')", 5000)
HideContents();
}


$(document).on('turbolinks:load', ready);
$(document).on('turbolinks:before-cache', function(){
    clearInterval(window.interval1);
    clearInterval(window.interval2);
    clearInterval(window.interval3);
    clearInterval(window.interval4);
});

var CycleImages = function(selector){
  $(selector + " img").first().appendTo(selector).fadeOut(500);
  $(selector + " img").first().fadeIn(500).css('display', 'block');
}

var HideContents = function(){
  $('.container .content').hide();
}
