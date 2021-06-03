//set first slide to active
$(".seq img:first-child").addClass('active');

$( ".seq" ).hover(
  function() {
    //set it to animating fwd
    $(this).removeClass('animating--rev');
    $(this).addClass('animating--fwd');

    //animate this, direction forward
    animate($(this), true);

  }, function() {
    //on hover out, set to animating rev
    $(this).removeClass('animating--fwd');
    $(this).addClass('animating--rev');

    //animate this, direction backward
    animate($(this), false);
  }
);

function animate(thisObj,direction) {

  //get number of slides
  slides = $("img", thisObj).length;

  //if animating forward, move active class step by step to last slide
  if (direction == true) {
    var i = 0;
    var myVar = setInterval(function() {
      //check we are still hovering over
      var isHovered = thisObj.is(":hover");
      if (isHovered == true) {
        if (i < slides - 1) {
          $("img.active", thisObj).removeClass('active').next().addClass('active');
          i++;
        }
      } else {
        //not hovering anymore, so stop this
        clearInterval(myVar);
      }
    }, 20);
  }

  //if animating forward, move active class step by step back to first slide
  else {
    var i = slides;
    var myVar = setInterval(function() {
      if (i > 1) {
        $("img.active", thisObj).removeClass('active').prev().addClass('active');
        i--;
      } else {
        $(thisObj).removeClass('animating--rev');
        $("img:first-child", thisObj).addClass('active');
        clearInterval(myVar);
      }
    }, 20);
  }
}

//Language select
$( ".language-select" ).on( "click", "button", function() {
  var lang = $(this).data("lang");
  $(".project-text--info").hide();
  $(".project-text--info.lang--"+lang+"").show();

  $(".conf").hide();
  $(".conf.lang--"+lang+"").show();

});

//Filter select
$('select#filter').change(function(){
  filter = $(this).val();
  url = window.location.href;

  if (url.indexOf("filter:") > -1) {
    url = url.substr(0, url.lastIndexOf("filter:"));
    url = url +"filter:"+ filter;
  } else {
    url = url +"filter:"+ filter;
  }

  window.location = url;
  //console.log($(this).val());
});
