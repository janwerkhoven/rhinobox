// MAIN JS

$(document).ready(function() {

  // LANDING PAGE

  var $this = $('#landing #feature .bg');
  var h = $this.height();
  var topY = $this.offset().top;
  var centerY = topY + (h / 2);

  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();
    var scrollCenterY = scrollTop+ ($(window).height() / 2);
    var scrollBottom = scrollTop + $(window).height();

    var distance = centerY - scrollCenterY;

    var y = (distance * -0.5) - (h / 2);

    console.log(centerY, scrollCenterY, distance);

    $this.css({
      'marginTop': y + 'px'
    });

  });


  // VERHUIS PAGE

  $('#verhuis #feature .left p').velocity({
    'translateX': '-40px',
    'opacity': 0
  }, 0);
  $('#verhuis #feature .right p').velocity({
    'translateX': '40px',
    'opacity': 0
  }, 0);
  $('#verhuis #feature p').waypoint({
    handler: function(direction) {
      $(this.element).velocity({
        'translateX': '0px',
        'opacity': 1
      }, 400);
    },
    offset: '70%'
  });

  // OPSLAG PAGE

});
