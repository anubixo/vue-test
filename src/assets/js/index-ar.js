function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
  
  $(function() {
    $('.deals-section .close').on('click', function() {
      $(this).parent('.media').hide();
    })
  })
  
// destinations home
if($("#destinations-slider").length){
  $("#destinations-slider").camRollSlider();
}

$(function() {
    $('.loader-container').fadeOut();
})
// hotels page input focus
$('.form-control').focus(function () {
  $(this).parent().prev('label').css({ color: '#e9f536' });
})
// city search
$(function (){
  $('.search-place-input').on('focus', function() {
    $('.dist-autocomplete-list').fadeIn(500);
  });
  $('.search-place-input').on('blur', function(){
    $('.dist-autocomplete-list').fadeOut(500);
  });
  $('.guest-number-input').on('click', function() {
    $('.dist-guests-list').slideToggle(500);
  });
  // hotels search
  $('.hotels-input-search').on('focus', function() {
    $('.hotels-autocomplete-list').fadeIn(500);
  });
  $('.hotels-input-search').on('blur', function() {
    $('.hotels-autocomplete-list').fadeOut(500);
  });
});

$('#datepicker').daterangepicker();

if($("#dateTime,#check_in_date,#check_out_date").length){

  $('#dateTime,#check_in_date,#check_out_date').datepicker();
  
 }

// home page add children
var room_number = 1;
$(document).on('click', '.add-new-room', function() {
  room_number++;

  $(this).parent().siblings('.guests-body').append(`
  <div class="room-select-wrapper room-two">
    <div class="row">
          <div class="dist-guests-item d-flex">
              <span class="room-name">room <span class="room-number">`+room_number+`</span></span>
          </div>
          <div class="dist-guests-item d-flex">
              <span class="room-name">adults</span>
              <div class="number-spinner d-flex">
                  <i class="fa fa-minus sub-1" data-dir="dwn"></i>
                  <input type="text" class="field-1" name="adults[`+room_number+`][]"  value="1" maxlength="2">
                  <i class="fa fa-plus add-1" data-dir="up"></i>
              </div>
          </div> 
          <div class="dist-guests-item d-flex">
              <span class="room-name">children</span>
              <div class="number-spinner d-flex">
                  <i class="fa fa-minus remove-child sub-2" data-dir="dwn"></i>
                  <input type="text" class="pl-ns-value field-2" name="child[`+room_number+`][]"  value="0" maxlength="2">
                  <i class="fa fa-plus add-child add-2" data-dir="up"></i>
              </div>
          </div> 
          <div class="children-group">
              <div>
                  <label for="" class="child-label">How old are the children you're traveling with?</label>
              </div>
          </div> 
    </div>
    <span class="room-delete">
        <i class="fa fa-close"></i>
    </span>
  </div>
`);

 $('#room-select-copy:last-of-type').find('.room-number').html(room_number);
  
});

// adults plus and minus
$(function(){
  
$(document).on('click','.add-1',function() {
  var unit = $(this).parents('.room-select-wrapper').find('.field-1').val();
  unit++;
  var $input = $(this).prevUntil('.sub-1');
  $input.val(unit);
  
  });
$(document).on('click','.sub-1',function() {
  var unit = $(this).parents('.room-select-wrapper').find('.field-1').val();
  if (unit > 1) {
    unit--;
    var $input = $(this).nextUntil('.add-1');
    $input.val(unit);
  }
  });
});

// children plus and minus
$(function(){
    $(document).on('click','.add-2',function() {
      var unit = $(this).parents('.room-select-wrapper').find('.field-2').val();
      unit++;
      var $input = $(this).prevUntil('.sub-2');
      $input.val(unit);
      
      var childrenGroup = $(this).parents('.room-select-wrapper').find('.children-group');
      childrenGroup.css('display', 'block');
      
      var childrenNumberSelect = document.createElement('select');
      
      $(childrenNumberSelect).attr('name','child_age['+room_number+'][]');

      for (i = 0; i < 18; i++){
        $(childrenNumberSelect).append($('<option>',{value: i , text : i + " years old"}));
      };

      childrenGroup.append(childrenNumberSelect);
    });

    $(document).on('click','.sub-2', function() {

      var unit = $(this).parents('.room-select-wrapper').find('.field-2').val();
      var childrenGroup = $(this).parents('.room-select-wrapper').find('.children-group');

      if (unit > 0) {
        unit--;
        var $input = $(this).nextUntil('.add-2');
        $input.val(unit);
        childrenGroup.find('select:last-child').remove();
      }else {
        childrenGroup.css('display', 'none');
      }
    });

});

$(document).on('click', '.room-delete', function() {
  $(this).parent('.room-select-wrapper').remove();
  room_number--;
});

// hotel page
$(document).on('click', '.item-photo .add-fav', function() {
  $(this).toggleClass('added-to-favorite-color');
  $(this).toggleClass('main-fav-color');
});

// hotel details page
if($(".hotel-gallery-imgs").length){

  $('.hotel-gallery-imgs').slick({
    rtl: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });
  
 }


 if($(".fancybox").length){
  $('.fancybox').fancybox({
  });
}


//apartments page
if($(".three_items_carousel").length){
  $('.three_items_carousel').slick({
    rtl: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }
  ]
  });
}


// hurghada hotels available properties 
if($(".four_items_carousel").length){
  $('.four_items_carousel').slick({
    rtl: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }
  ]
  });
}

// egypt page
if($(".five_items_carousel").length){
  $('.five_items_carousel').slick({
    rtl: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }
  ]
  });
}

// save hotel
$(document).on('click', '.hotel-save', function() {
  $(this).children('.fa').toggleClass('fa-heart-o');
  $(this).children('.fa').toggleClass('fa-heart');
});

// profile sidebar
$(document).on('click', '.sidebar .open-menu', function() {
  $('.sidebar').toggleClass('sidebar-show');
  $('.profile .profile-info, .booking-table, .reviews .card').toggleClass('profile-hidden');
});

// slide toggle reviews
$('.see-more-reviews').each(function(){
  $(this).siblings('div:gt(2)').slideToggle();
}); 
$(document).on('click', '.see-more-reviews', function() {
  $(this).siblings('div:gt(2)').slideToggle();
  $(this).toggleClass('see-less-reviews')
  if($(this).hasClass('see-less-reviews')){
    $(this).html('see less');
  }else {
    $(this).html('see more');
  }
});

// slide toggle facilities
$(document).on('click', '.toggle-insts-section', function() {
  $(this).siblings(':not(h4)').slideToggle(1000);
  $(this).toggleClass('toggle-collapse');
});

$(function(){
  var pageWidth = $(window).innerWidth();
  if(pageWidth < '576') {
    $('.toggle-insts-section').click();
    $('.collapse-sidebar').click();
  }
})

// slide toggle faqs
$(document).on('click', '.card-header', function() {
  $(this).children('.toggle-accordion').toggleClass('toggle-collapse');
});

// forget password animation
if($("#forget_pass").length){
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('forget_pass'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/forget-password-animation.json'
  });
}

$(function (){

  $(document).on('click', '.fa-eye', function() {
    var password_field =  $(this).prev('input');
    $(this).toggleClass('fa-eye-slash');
    password_field.toggleClass('show-password');
    if(password_field.hasClass('show-password')) {
      password_field.attr('type', 'text');
    }else {
      password_field.attr('type', 'password');
    }
  });
});
// property owl slider
$('.owl-carousel.property-carousel').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  /*autoplay: 1000,*/
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    }

  }
});
// stays owl slider
$('.owl-carousel.stays-carousel').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: 1000,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    }

  }
});
// particular hotels owl slider
$('.owl-carousel.hotel-carousel').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    }

  }
});

// booking table form
$(function() {
  $('.custom-select-trigger').click(function() {
    $('.custom-select').toggleClass('opened');
  });
  $('.custom-option').click(function() {
    $(this).addClass('selection').siblings().removeClass('selection');
    $('.custom-select-trigger').text($(this).text());
    $('.custom-select').removeClass('opened');
  });
});

// check availability page form
$('.booking-now-form .form-control').on('blur',function(){
  if($(this).val() == ''){
    $(this).next('.hotel-contact-details').show();
    $(this).prev('label').css('color','#d61143');
    $(this).css('border','1px solid #d61143')
  }
})

// check availability page sidebar toggle
$(document).on('click', '.collapse-sidebar', function() {
  $(this).parent().siblings().slideToggle(1000);
  $(this).toggleClass('toggle-collapse');
});

// scroll top button
$(function () {

  var scrollButton = $('.go-top');

  $(window).scroll(function () {

    if($(window).scrollTop() >= 500) {
      scrollButton.show();
    }else {
      scrollButton.hide();
    }
  });

  scrollButton.click(function () {
    $('html, body').animate({scrollTop: 0});
  })
});

// category owner type page 

$(document).on('click', '.selectable-box, .selectable-sub-box', function() {
  $(this).addClass('selectable-box-selected');
  $(this).siblings().removeClass('selectable-box-selected');

  if($('.selectable-box:nth-of-type(2)').hasClass('selectable-box-selected')) {
    $(this).parent().siblings(":not('.btn-wrapper')").fadeIn();
  }else {
    $(this).parent().siblings(":not('.btn-wrapper')").fadeOut();
    $(this).parent().siblings('.selectable-box-group').children('.selectable-sub-box').removeClass('selectable-box-selected');
  }
});

// checkout page

$(function() {
  $('.options-trigger').click(function() {
    $('.toggle-inner').slideToggle();
  });
});

$(function() {
  $('.sign-in-trigger').click(function() {
    $('.toggle-sign-form').slideToggle();
  });
})
  
  



