// MAIN JS

$(document).ready(function() {

  // ACTION 1 - GO TO ORDER SECTION

  $('.action-1').on('click', function(e){
    e.preventDefault();
    $('#prijs').velocity("scroll", {
      duration: 900,
      easing: 'ease-out-expo'
    });
  });

  // LANDING PAGE - HERO 3D TEXT

  $('#landing #hero h2 span').velocity({
    opacity: 0,
    rotateY: 91,
  }, 0);

  $('#landing #hero h2 span').each(function(i){
    $(this).velocity({
      opacity: 1,
      rotateY: 0
    }, {
      duration: 600,
      easing: "ease-out-expo",
      delay: 0 + (i * 700),
    });
  });

  // LANDING PAGE - PARALLAX

  var $this = $('#landing #over-rhinoboxen .bg');
  var h = $this.height();
  var topY = $this.offset().top;
  var centerY = topY + (h / 2);
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var scrollCenterY = scrollTop+ ($(window).height() / 2);
    var scrollBottom = scrollTop + $(window).height();
    var distance = centerY - scrollCenterY;
    var y = (distance * -0.5) - (h / 2);
    $this.css({
      'marginTop': y + 'px'
    });
  });

  // LANDING PAGE - TESTIMONIALS

  $('#testimonials li blockquote').hide().eq(0).show();
  $('#testimonials li').velocity({
    opacity: 0.5
  }, 0).eq(0).addClass('active').velocity({
    opacity: 1
  }, 0);
  $('#testimonials li').hover(function(){
    $(this).velocity('stop').velocity({
      opacity: 1
    }, 300, 'linear');
  }, function() {
    $(this).not('.active').velocity('stop').velocity({
      opacity: 0.5
    }, 300, 'linear');
  }).on('click', function(){
    $(this).addClass('active').find('blockquote').show();
    $(this).siblings().removeClass('active').find('blockquote').hide();
    $(this).siblings().velocity('stop').velocity({
      opacity: 0.5
    }, 300, 'linear');
  });


});
