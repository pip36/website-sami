$(document).on('turbolinks:load', function(){

// Moves the slider image to match the current image index
  var DisplayImage = function(slider){
    $(slider.id + ' ul').animate({left: -(slider.width * slider.imageIndex) + "px"}, 1000);
    $(slider.id + ' .image-label').html(slider.descriptionArray[slider.imageIndex]);
  };

//Styles the thumbnail image matching the displayed image
  var SetActiveThumbnail = function(slider){
    $(slider.id + '-thumbnails ul li').removeClass('active');
    $(slider.id + '-thumbnails ul li').eq(slider.imageIndex).addClass('active');
  };

// Moves the current image index onward, and loops back to beginning
  var CycleImage = function(sliderObject){
    sliderObject.imageIndex += 1;
    if (sliderObject.imageIndex >= sliderObject.numberOfImages){
      sliderObject.imageIndex = 0;
    }
    DisplayImage(sliderObject);
    SetActiveThumbnail(sliderObject);
  };


// The slider object
  function slider(id, images, descriptions, width, height){
    this.id = id;
    this.imageArray = images;
    this.descriptionArray = descriptions;
    this.width = width;
    this.height = height;
    this.imageIndex = 0;
    this.numberOfImages = images.length;
    this.thumbnails = []

    this.initialize = function(){
      var slider = this;
      //set width of slider, and the images
      $(this.id).width(this.width);

      //Add the images to the html slider with matching id
      for(var i = 0; i<this.numberOfImages; i++){
        $(this.id + ' ul').append("<li> <img style='left:"+(i*this.width) + "px'src='" + this.imageArray[i] + "'></li>");
      }
      //Set the container list width to fit all images
      $(this.id + ' ul').width((this.width) * (this.numberOfImages));
      //Set the ul height to match that of the tallest image
      $(this.id + ' ul').height(this.height);


      //Add thumbnails below image slider
      $(this.id).after("<div class='thumbnails' id='" + this.id.substr(1) + "-thumbnails'> </div>");
      $(this.id +'-thumbnails').append($(this.id + ' ul').clone().removeAttr('style'));
      this.thumbnails = $(this.id + '-thumbnails li');
      //Set the Active thumbnail styling
      SetActiveThumbnail(this)
      //Display the active image and start cycling function
      DisplayImage(this);
      slider.sliderInterval = setInterval(function(){CycleImage(slider)},5000)
      //On thumbnail click change the displayed image, and reset timer
      this.thumbnails.click(function(){
        slider.imageIndex = slider.thumbnails.index(this);
        SetActiveThumbnail(slider);
        DisplayImage(slider);
        clearInterval(slider.sliderInterval);
        slider.sliderInterval = setInterval(function(){CycleImage(slider)},5000)
      });
      // clear all interval timers when turbolinks reloads page
      $(document).on('turbolinks:before-cache', function(){
          clearInterval(slider.sliderInterval);
      });
    };
  }

var slider1 = new slider('#slider-1', ["http://cdn1.editmysite.com/uploads/4/5/6/3/45631633/background-images/874978948.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/3441917_orig.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/3734790_orig.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/3615806_orig.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/244011_orig.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/9225002_orig.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/9970413_orig.jpg"],
['Me',
 'Backstage at Cadogan hall prom concert',
 '1920\'s period costume of Acis and Galetea',
 '',
 'Me with my Da Caccia',
 '',
 ''],
 300,
400);

 slider1.initialize();

 var slider2 = new slider('#slider-2', ["http://www.samitaylor.com/uploads/4/5/6/3/45631633/6329548.jpg",
 "http://www.samitaylor.com/uploads/4/5/6/3/45631633/5737067.jpg",
 "http://www.samitaylor.com/uploads/4/5/6/3/45631633/5737067.jpg"],
 ['Oboe 1',
  'Oboe 2',
  'Oboe 3'],
  300,
360);
  slider2.initialize();

  var slider3 = new slider('#slider-3', ["http://www.samitaylor.com/uploads/4/5/6/3/45631633/3622897.jpg",
  "http://www.samitaylor.com/uploads/4/5/6/3/45631633/7350750.jpg",
  "http://www.samitaylor.com/uploads/4/5/6/3/45631633/9616526.jpg",
"http://www.samitaylor.com/uploads/4/5/6/3/45631633/1421440671.png"],
  ['Oboe 1',
   'Oboe 2',
   'Oboe 3',
 'Oboe 4'],
   300,
 270);
   slider3.initialize();

   var slider4 = new slider('#slider-4',
   ["http://www.samitaylor.com/uploads/4/5/6/3/45631633/1421439114.png"],
   ['Caccia 1'],
    300,
  600);
    slider4.initialize();

    var slider5 = new slider('#slider-5',
    ["http://www.samitaylor.com/uploads/4/5/6/3/45631633/6831411.jpg"],
    ['Oboe 1'],
     300,
   400);
     slider5.initialize();
});
