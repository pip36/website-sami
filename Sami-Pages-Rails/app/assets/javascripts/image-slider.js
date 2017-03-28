$(document).on('turbolinks:load', function(){
  var DisplayImage = function(id){
    $('.image-slider ul').animate({left: -(imageWidth * id) + "px"}, 1000);
    $('.image-slider .image-label').html(imageDescriptions[id]);
  };

  var GenerateThumbnails = function(){
    $('.thumbnails').append($('.image-slider ul').clone().removeAttr('style'));
  };

  var SetActiveThumbnail = function(id){
    $('.thumbnails ul li').removeClass('active');
    $('.thumbnails ul li').eq(id).addClass('active');
  };

  var SetSize = function(width, height){
    $('.image-slider').width(width).height(height);
    $('.image-slider ul li').width(width).height(height);
  };

  var CycleImage = function(num){
    imageIndex += num;
    if (imageIndex >= numberOfImages){
      imageIndex = 0;
    }
    if (imageIndex < 0){
      imageIndex = numberOfImages -1;
    }
    DisplayImage(imageIndex);
    SetActiveThumbnail(imageIndex);
  };

  var Initialize = function(imagearray, descriptionarray, width, height){
    imageDescriptions = descriptionarray;
    $('.image-slider').prepend('<ul>  </ul>');

    for(var i = 0; i<imagearray.length; i++){
      $('.image-slider ul').append("<li> <img style='left:"+(i*width) + "px'src='" + imagearray[i] + "'></li>");
    }

    $('.image-slider ul').width((width) * (imagearray.length));
    imageWidth = width;
    GenerateThumbnails();
    SetActiveThumbnail(imageIndex);
    //SetSize(width, height);
    DisplayImage(imageIndex);
    window.sliderInterval = setInterval(function(){CycleImage(1)},5000);
  };

  var imageIndex = 0;
  var imageWidth = 0;
  var numberOfImages = 7;
  Initialize(["http://cdn1.editmysite.com/uploads/4/5/6/3/45631633/background-images/874978948.jpg",
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
         300, 200);

  $('.thumbnails ul li').click(function(){
    imageIndex = $('.thumbnails ul li').index(this);
    DisplayImage(imageIndex);
  });

  $(document).on('turbolinks:before-cache', function(){
      clearInterval(window.sliderInterval);
  });
});
