//Homepage slides

//set first slide to active
$(".seq img:first-child").addClass('active');

$(document).on({
  mouseenter: function () {
    //set it to animating fwd
    $(this).removeClass('animating--rev');
    $(this).addClass('animating--fwd');

    //animate this, direction forward
    animateSequence($(this), true);

  }, mouseleave: function () {
    //on hover out, set to animating rev
    $(this).removeClass('animating--fwd');
    $(this).addClass('animating--rev');

    //animate this, direction backward
    animateSequence($(this), false);
  }
}, ".seq");

function animateSequence(thisObj,direction) {

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

  //if animating backward, move active class step by step back to first slide
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

function animateSequenceMobile(thisObj,direction) {



  //get number of slides
  slides = $("img", thisObj).length;

  //if animating forward, move active class step by step to last slide
  if (direction == true) {
    var i = 0;
    var myVar = setInterval(function() {
      //check we are still hovering over
      var isHovered = true;
      if (isHovered == true) {
        if (i < slides - 2) {
          $("img.active", thisObj).removeClass('active').next().addClass('active');
          i++;
        } else {
          $("img:not(.spacer)", thisObj).last().addClass('active');
          clearInterval(myVar);


        }
      } else {
      }
    }, 20);
  }

  //if animating backward, move active class step by step back to first slide
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
});

//Filter set
url = window.location.href;
if (url.indexOf("filter:") > -1) {
  url = url.substr(url.indexOf("filter:") + 7);
  if (url == "") {
    $(".filterBar").hide();
  }
  $('select#filter').val(url);
}

//cookie code
function createCookie(name,value,days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

var visited = readCookie('visited');

if (visited || visited == "true") {
  $(".cookies").hide();
  $("body").removeClass('cookieNotification');
} else {
  $("body").addClass('cookieNotification');
}

$( ".cookies a" ).click(function(event) {
  event.preventDefault();
  createCookie('visited', "true", 30);
  $(".cookies").hide();
  $("body").removeClass('cookieNotification');
});

//video play
var video = document.getElementById('video');
if ( $( video ).length ) {
  video.addEventListener('click',function(){
      $("img.playBtn").hide();
    },false);
}

gsap.registerPlugin(ScrollTrigger);

function animateFwd(gridItem) {
  animateSequenceMobile($(gridItem), true);
  $(gridItem).addClass("animating");
}

function animateBkd(gridItem) {
  animateSequenceMobile($(gridItem), false);
  $(gridItem).removeClass("animating");
}

//mobile homepage scroll
if ($(window).width() < 600) {

const boxes = gsap.utils.toArray('.grid-item');
boxes.forEach(box => {
  gsap.to(box, {
    x: 0,
    scrollTrigger: {
      trigger: box,
      scrub: true,
      start: "bottom 98%",
      onEnter: () => animateFwd(box),
      onLeaveBack: () => animateBkd(box),
    }
  })
});

}

//infinite scroll
$('.home-grid').infiniteScroll({
  // options
  path: '.pagination .next',
  append: '.grid-item',
  history: false,
  hideNav: '.pagination'
});

// jQuery
$('.home-grid').on( 'append.infiniteScroll', function( event, body, path, items, response ) {
  $(".seq img:first-child").addClass('active');
  if ($(window).width() < 600) {
  const boxes = gsap.utils.toArray('.grid-item');
  items.forEach(box => {
    gsap.to(box, {
      x: 0,
      scrollTrigger: {
        trigger: box,
        scrub: true,
        start: "bottom 98%",
        onEnter: () => animateFwd(box),
        onLeaveBack: () => animateBkd(box),
      }
    })
  });
  ScrollTrigger.refresh();
}
});


//Intro video skip
$(document).on('mousemove', function(e){
  $('.skip').css({
     left:  e.pageX,
     top:   e.pageY
  });
});

//landing fade in

var yetVisited = sessionStorage['video'];

if (!yetVisited) {
  $(".introVideo").show();
  sessionStorage['video'] = "yes";
} else {
  $("#page").animate({opacity: 1}, 500);
}

$( ".introVideo" ).click(function() {
  $(this).fadeOut();
  $("#page").animate({opacity: 1}, 500);
});

//external links
$('a').each(function() {
  if(this.host !== window.location.host) {
    $(this).attr('target', '_blank');
  }
});
