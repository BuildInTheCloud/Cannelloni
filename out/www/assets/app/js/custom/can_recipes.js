$traceurRuntime.options.symbols = true;
System.registerModule("../../../../../../www/assets/app/js/custom/can_recipes.js", [], function(require) {
  "use strict";
  var __moduleName = "../../../../../../www/assets/app/js/custom/can_recipes.js";
  var searchVisible = 0;
  var transparent = true;
  var transparentDemo = true;
  var fixedTop = false;
  var navbar_initialized = false;
  $(document).ready(function() {
    $('[data-toggle="morphing"]').each(function() {
      $(this).morphingButton();
    });
    $('[rel="tooltip"]').tooltip();
    if ($('.switch').length != 0) {
      $('.switch')[$traceurRuntime.toProperty('bootstrapSwitch')]();
    }
    if ($("[data-toggle='switch']").length != 0) {
      $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    }
    if ($(".selectpicker").length != 0) {
      $(".selectpicker").selectpicker();
    }
    if ($(".tagsinput").length != 0) {
      $(".tagsinput").tagsInput();
    }
    if ($('.datepicker').length != 0) {
      $('.datepicker').datepicker({
        weekStart: 1,
        color: '{color}'
      });
    }
    gsdk.fitBackgroundForCards();
    gsdk.initNavbarSearch();
    gsdk.initPopovers();
    gsdk.initCollapseArea();
    gsdk.initSliders();
    gsdk.initVideoCards();
  });
  $(window).resize(function() {
    if ($(window).width() < 768) {
      gsdk.initRightMenu();
    }
  });
  gsdk = {
    misc: {navbar_menu_visible: 0},
    fitBackgroundForCards: function() {
      $('.card').each(function() {
        if (!$(this).hasClass('card-product') && !$(this).hasClass('card-user')) {
          image = $(this).find('.image img');
          image.hide();
          image_src = image.attr('src');
          $(this).find('.image').css({
            "background-image": "url('" + image_src + "')",
            "background-position": "center center",
            "background-size": "cover"
          });
        }
      });
    },
    initPopovers: function() {
      if ($('[data-toggle="popover"]').length != 0) {
        $('body').append('<div class="popover-filter"></div>');
        $('[data-toggle="popover"]').popover().on('show.bs.popover', function() {
          $('.popover-filter').click(function() {
            $(this).removeClass('in');
            $('[data-toggle="popover"]').popover('hide');
          });
          $('.popover-filter').addClass('in');
        }).on('hide.bs.popover', function() {
          $('.popover-filter').removeClass('in');
        });
      }
    },
    initCollapseArea: function() {
      $('[data-toggle="gsdk-collapse"]').each(function() {
        var thisdiv = $(this).attr("data-target");
        $(thisdiv).addClass("gsdk-collapse");
      });
      $('[data-toggle="gsdk-collapse"]').hover(function() {
        var thisdiv = $(this).attr("data-target");
        if (!$(this).hasClass('state-open')) {
          $(this).addClass('state-hover');
          $(thisdiv).css({'height': '30px'});
        }
      }, function() {
        var thisdiv = $(this).attr("data-target");
        $(this).removeClass('state-hover');
        if (!$(this).hasClass('state-open')) {
          $(thisdiv).css({'height': '0px'});
        }
      }).click(function(event) {
        event.preventDefault();
        var thisdiv = $(this).attr("data-target");
        var height = $(thisdiv).children('.panel-body').height();
        if ($(this).hasClass('state-open')) {
          $(thisdiv).css({'height': '0px'});
          $(this).removeClass('state-open');
        } else {
          $(thisdiv).css({'height': height + 30});
          $(this).addClass('state-open');
        }
      });
    },
    initSliders: function() {
      if ($('#slider-range').length != 0) {
        $("#slider-range").slider({
          range: true,
          min: 0,
          max: 500,
          values: [75, 300]
        });
      }
      if ($('#refine-price-range').length != 0) {
        $("#refine-price-range").slider({
          range: true,
          min: 0,
          max: 999,
          values: [100, 850],
          slide: function(event, ui) {
            min_price = ui.values[0];
            max_price = ui.values[1];
            $(this).siblings('.price-left').html('&euro; ' + min_price);
            $(this).siblings('.price-right').html('&euro; ' + max_price);
          }
        });
      }
      if ($('#slider-default').length != 0 || $('#slider-default2').length != 0) {
        $("#slider-default, #slider-default2").slider({
          value: 70,
          orientation: "horizontal",
          range: "min",
          animate: true
        });
      }
      if ($('#recipe-difficulty').length != 0) {
        $("#recipe-difficulty").slider({
          value: 2,
          orientation: "horizontal",
          range: "min",
          min: 1,
          max: 4,
          animate: true,
          slide: function(event, ui) {
            switch (ui.value) {
              case 1:
                $('#recipe_difficulty_label').html('Beginner');
                break;
              case 2:
                $('#recipe_difficulty_label').html('Novice');
                break;
              case 3:
                $('#recipe_difficulty_label').html('Advanced');
                break;
              case 4:
                $('#recipe_difficulty_label').html('Expert');
                break;
            }
          }
        });
      }
    },
    initVideoCards: function() {
      $('[data-toggle="video"]').click(function() {
        id_video = $(this).data('video');
        video = $('#' + id_video).get(0);
        card_parent = $(this).closest('.card');
        if (video.paused) {
          video.play();
          $(this).html('<i class="fa fa-pause"></i> Pause');
          card_parent.addClass('state-play');
        } else {
          video.pause();
          $(this).html('<i class="fa fa-play"></i> Play');
          card_parent.removeClass('state-play');
        }
      });
    },
    initNavbarSearch: function() {
      $('[data-toggle="search"]').click(function() {
        if (searchVisible == 0) {
          searchVisible = 1;
          $(this).parent().addClass('active');
          $('.navbar-search-form').fadeIn(function() {
            $('.navbar-search-form input').focus();
          });
        } else {
          searchVisible = 0;
          $(this).parent().removeClass('active');
          $(this).blur();
          $('.navbar-search-form').fadeOut(function() {
            $('.navbar-search-form input').blur();
          });
        }
      });
    }
  };
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
          args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate)
          func.apply(context, args);
      }, wait);
      if (immediate && !timeout)
        func.apply(context, args);
    };
  }
  ;
  return {};
});
System.get("../../../../../../www/assets/app/js/custom/can_recipes.js" + '');
