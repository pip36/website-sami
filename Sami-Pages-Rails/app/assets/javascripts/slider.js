
var processPage = function(){
  function Slider(id){
    var self = this;
    this.id = id;
    this.sliderSelector = $(this.id);
    this.width = 0;
    this.imageCount = 0;
    this.currentImage = 1;

    this.messages = [];
    this.interval = null;

  //Call to initialize the slider
    this.Setup = function(messageArr){
      this.width = $(this.id).width();
      this.imageCount = $(this.id + ' .images li').length;
      if(this.imageCount > 1){
        this.interval = setInterval(function(){self.slide()},6000);
      }
      this.messages = messageArr;
      //generate the thumbnail images underneath

         $(this.id + ' ul').clone().removeClass("images").appendTo(this.sliderSelector.next());

      //set the css for the ul
      $(this.id + ' .images').css({'list-style': 'none',
                                   'width': this.width * (this.imageCount + 2),
                                   'padding': 0,
                                   'font-size': 0,
                                   'position': 'relative'});
      //and width for the list item
      $(this.id + ' .images li').css({'width': this.width, "display": "inline-block"});
      //and width of the images
      $(this.id + ' .images li img').css('width', 'inherit');
      //Clone first and last images for smooth looping
      $(this.id + ' .images li').last().clone().prependTo($(this.id + ' .images'));
      $(this.id + ' .images li').eq(1).clone().appendTo($(this.id + ' .images'));

      //change image when thumbnails are clicked
      this.sliderSelector.next().find("li").on("click", function(event){
        self.setImage($(this).index() + 1);
        clearInterval(self.interval);
        if(self.imageCount > 1){
          self.interval = window.setInterval(function(){self.slide()},6000);
        }

      });
      // requires the slider interval to be cleared on page exit.
      $(document).on('turbolinks:visit', function(){
        clearInterval(self.interval);
      });

      this.setImage(this.currentImage);
    }

    this.updateWidth = function(){
      this.width = $(this.id).width();
      $(this.id + ' .images').css({ 'width': this.width * (this.imageCount + 2)});
      $(this.id + ' .images li').css({'width': this.width});
    }

  //Moves directly to given image, no animation
    this.setImage = function(index){
      this.currentImage = index;
      $(this.id + ' .images').css("left", -(100 * index) + "%");
      $(this.id + ' .img-message ').html("<p>" + this.messages[index-1] + "</p>");
      this.updateThumbnails();
    }

  //Update styling of the active thumbnail
    this.updateThumbnails = function(){
      this.sliderSelector.next().find("li").removeClass('active-thumb');

      if (this.currentImage >= $(this.id + ' .images li').length -1){
        this.sliderSelector.next().find("li").eq(0).addClass('active-thumb');
      }
      else if(this.currentImage <= -1){
        this.sliderSelector.next().find("li").eq($(this.id + ' .images li').length - 2).addClass('active-thumb');
      }
      else{
        this.sliderSelector.next().find("li").eq(this.currentImage - 1).addClass('active-thumb');
      }
    }

  //Slide to the next image and account for image wrapping
    this.slide = function(){

      //set 1 for forward scrolling, -1 for backward
      this.currentImage += 1;
      //Wrap the image when going beyond last image
       if (this.currentImage >= $(this.id + ' .images li').length){
        this.setImage(1);
        this.slideToImage(2);
        this.updateThumbnails();
      }
      //wrap when going less than first image
      else if(this.currentImage <= -1){
        this.setImage($(this.id + ' .images li').length - 2);
        this.slideToImage($(this.id + ' .images li').length - 3);
        this.updateThumbnails();
      }
      //slide to next as normal
      else{
        this.slideToImage(this.currentImage);
        this.updateThumbnails();
      }
    }

  //Moves to given image with animation
    this.slideToImage = function(index){
      this.currentImage = index;
      $(this.id + ' .images').animate({left:-(100 * index) + "%"}, "slow");
      if (this.currentImage >= $(this.id + ' .images li').length-1){
       $(this.id + ' .img-message p').html("<p>" + this.messages[0] + "</p>");
     }
     else if(this.currentImage <= 0){
       $(this.id + ' .img-message p').html("<p>" + this.messages[this.imageCount - 1] + "</p>");
     }
     else{
       $(this.id + ' .img-message p').html("<p>" + this.messages[index-1] + "</p>");
     }
    }
  }

  var sliders = [];
  //initialise a slider
  var sliderCases = new Slider('#slider-cases');
  sliders.push(sliderCases);
  sliderCases.Setup([" ",
                " ",
                " ",
                " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]);

  var sliderSami = new Slider('#slider-sami');
  sliders.push(sliderSami);
  sliderSami.Setup(["",
  "Les Violon du Roi, Cadogan Hall, BBC Prom",
   "1920's Acis and Galetea", "Oboe Da Caccia", "Fairy Queen, Treasurer's House", "", ""]);

  var sliderBOboe = new Slider('#slider-b-oboe');
  sliders.push(sliderBOboe);
  sliderBOboe.Setup(["", ""]);

//  var sliderBDamore = new Slider('#slider-b-damore');
//  sliders.push(sliderBOboe);
//  sliderBDamore.Setup([" ", "", "", ""]);

  var sliderBCaccia = new Slider('#slider-b-caccia');
  sliders.push(sliderBCaccia);
  sliderBCaccia.Setup([" "]);

  //var sliderCOboe = new Slider('#slider-c-oboe');
  //sliders.push(sliderCOboe);
  //sliderCOboe.Setup([" "]);

  $(window).resize(function(){
    for(var i = 0; i < sliders.length; i++){
      sliders[i].updateWidth();
    }
  });


}

$(document).on('turbolinks:load', processPage);
//$(document).ready(processPage);


window.addEventListener("orientationchange", function(){
  for(var i = 0; i < sliders.length; i++){
    sliders[i].updateWidth();
  }
},false);
