  $('#real__1').hover(
    function (){
      content__para.innerHTML='Ce projet est travail pratique dans lequel nous avons dû reproduire le plus fidèlement possible le site web de la Ferme Belline';
    },function(){
       content__para.innerHTML='Dans le cadre de mes études j\'ai souvent été amené à créer différents projets. Voulant devenir développeur front-end, je vous présente trois de mes projets front. ';
    });

  $('#real__2').hover(
    function (){
      content__para.innerHTML='J\'ai suivis un parcours programmation dans lequel nous avons avons abboutis nos connaissances en développement front-end. J\'y ai appris à créer un site en Mobile First, à utiliser le langage SASS et à utiliser l\'outil Github. Ce site est donc la mise en pratique de toutes ces nouvelles connaissances. ';
    },
    function(){
        content__para.innerHTML='Dans le cadre de mes études j\'ai souvent été amené à créer différents projets. Voulant devenir développeur front-end, je vous présente trois de mes projets front.';
    });

  $('#real__3').hover(
    function (){
      content__para.innerHTML='Dans la formation MMI, nous sommes très souvent amené à travailler en groupe. Le CSS DAY était donc un projet de groupe (3 personnes) dans lequel nous devions imaginer et créer la page d\'acceuil d\'un site web en moins d`\'une journée tout en respecant certaines contraintes précises.';
    },
    function(){
        content__para.innerHTML='Dans le cadre de mes études j\'ai souvent été amené à créer différents projets. Voulant devenir développeur front-end, je vous présente trois de mes projets front.';
    });
var $btn=$('#contact_btn');

$btn.click (function() {
  var $textarea = $( '<textarea>' );
  $( 'body' ).append( $textarea );
  $textarea.val( $( '#contact_adresse' ).text() ).select();
  document.execCommand( 'copy' );
  $btn.remove();
});
$(function() {


// ----------------------------------CANVAS 1----------------------------------
 var pro1 = document.getElementById("canvas1");
          var por1 = pro1.getContext("2d");
          por1.beginPath();
          por1.strokeStyle = "#0f1c41";
          por1.lineWidth=10;
          por1.font="30px Arial";
          por1.fillText("",75,85);
          por1.arc(100, 75, 50, 1.5*Math.PI, 1*Math.PI);

          por1.stroke();


    var por11 = document.getElementById("canvas1");
          var pro11 = por11.getContext("2d");
          pro11.beginPath();
          pro11.strokeStyle = "#11b6f7";
          pro11.lineWidth=10;
          pro11.font="15px Arial";
          pro11.fillText("",75,85);
          pro11.arc(100, 75, 50, 0.7*Math.PI, 1.5* Math.PI);

          pro11.stroke();


// ----------------------------------CANVAS 2----------------------------------

  var pro2 = document.getElementById("canvas2");
          var por2 = pro2.getContext("2d");
          por2.beginPath();
          por2.strokeStyle = "#0f1c41";
          por2.lineWidth=10;
          por2.font="15px Arial";
          por2.fillText("",75,85);
          por2.arc(100, 75, 50, 1.5* Math.PI, 1 * Math.PI)

          por2.stroke();

  var pro21 = document.getElementById("canvas2");
          var por21 = pro21.getContext("2d");
          por21.beginPath();
          por21.strokeStyle = "#11b6f7";
          por21.lineWidth=10;
          por21.font="15px Arial";
          por21.fillText("",75,85);
          por21.arc(100, 75, 50, 1* Math.PI, 1.5 * Math.PI);

          por21.stroke();


// ----------------------------------CANVAS 3----------------------------------

  var pro3 = document.getElementById("canvas3");
          var por3 = pro3.getContext("2d");
          por3.beginPath();
          por3.strokeStyle = "#0f1c41";
          por3.lineWidth=10;
          por3.font="15px Arial";
          por3.fillText("",75,85);
          por3.arc(100, 75, 50, 1.5* Math.PI, 0.5 * Math.PI);
          por3.stroke();


  var pro31 = document.getElementById("canvas3");
          var por31 = pro31.getContext("2d");
          por31.beginPath();
          por31.strokeStyle = "#11b6f7";
          por31.lineWidth=10;
          por31.font="15px Arial";
          por31.fillText("",75,85);
          por31.arc(100, 75, 50, 0.5* Math.PI, 1.5 * Math.PI);

          por31.stroke();



// function anim(){
//   var comp=$('#section_competences');
//   var pos = jQuery('#section_competences').offset();


//   if ($(window).scrollTop() > pos.top-150) {
// console.log('test');

//   $('progress').each(function() {
//     var max = $(this).val();
//     $(this).val(0).animate ({ value: max }, { duration: 1000, easing: 'easeOutCirc' });

//       });
//  };
// }


// $(window).scroll(anim);
//

     var max1 = $('#barre_pro1').val();
     var max2 = $('#barre_pro2').val();
     var max3 = $('#barre_pro3').val();

  $('#barres').on('scrollSpy:enter', function() {

     $('#barre_pro1').val(0).animate ({ value: max1 }, { duration: 1500, easing: 'easeOutCirc' });
     $('#barre_pro2').val(0).animate ({ value: max2 }, { duration: 1500, easing: 'easeOutCirc' });
     $('#barre_pro3').val(0).animate ({ value: max3 }, { duration: 1500, easing: 'easeOutCirc' });

     });

     $('#barres').on('scrollSpy:exit', function() {
     });

     $('#barres').scrollSpy();
});
(function($) {

  var jWindow = $(window);
  var elements = [];
  var elementsInView = [];
  var isSpying = false;
  var ticks = 0;
  var offset = {
    top : 0,
    right : 0,
    bottom : 0,
    left : 0,
  }

  /**
   * Find elements that are within the boundary
   * @param {number} top
   * @param {number} right
   * @param {number} bottom
   * @param {number} left
   * @return {jQuery}   A collection of elements
   */
  function findElements(top, right, bottom, left) {
    var hits = $();
    $.each(elements, function(i, element) {
      var elTop = element.offset().top,
        elLeft = element.offset().left,
        elRight = elLeft + element.width(),
        elBottom = elTop + element.height();

      var isIntersect = !(elLeft > right ||
        elRight < left ||
        elTop > bottom ||
        elBottom < top);

      if (isIntersect) {
        hits.push(element);
      }
    });

    return hits;
  }

  /**
   * Called when the user scrolls the window
   */
  function onScroll() {
    // unique tick id
    ++ticks;

    // viewport rectangle
    var top = jWindow.scrollTop(),
      left = jWindow.scrollLeft(),
      right = left + jWindow.width(),
      bottom = top + jWindow.height();

    // determine which elements are in view
    var intersections = findElements(top+offset.top, right+offset.right, bottom+offset.bottom, left+offset.left);
    $.each(intersections, function(i, element) {
      var lastTick = element.data('scrollSpy:ticks');
      if (typeof lastTick != 'number') {
        // entered into view
        element.triggerHandler('scrollSpy:enter');
      }

      // update tick id
      element.data('scrollSpy:ticks', ticks);
    });

    // determine which elements are no longer in view
    $.each(elementsInView, function(i, element) {
      var lastTick = element.data('scrollSpy:ticks');
      if (typeof lastTick == 'number' && lastTick !== ticks) {
        // exited from view
        element.triggerHandler('scrollSpy:exit');
        element.data('scrollSpy:ticks', null);
      }
    });

    // remember elements in view for next tick
    elementsInView = intersections;
  }

  /**
   * Called when window is resized
  */
  function onWinSize() {
    jWindow.trigger('scrollSpy:winSize');
  }

  /**
   * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
   * @type {function}
   * @return {number}
   */
  var getTime = (Date.now || function () {
    return new Date().getTime();
  });

  /**
   * Returns a function, that, when invoked, will only be triggered at most once
   * during a given window of time. Normally, the throttled function will run
   * as much as it can, without ever going more than once per `wait` duration;
   * but if you'd like to disable the execution on the leading edge, pass
   * `{leading: false}`. To disable execution on the trailing edge, ditto.
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
   * @param {function} func
   * @param {number} wait
   * @param {Object=} options
   * @returns {Function}
   */
  function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function () {
      previous = options.leading === false ? 0 : getTime();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function () {
      var now = getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  /**
   * Enables ScrollSpy using a selector
   * @param {jQuery|string} selector  The elements collection, or a selector
   * @param {Object=} options Optional.
                      throttle : number -> scrollspy throttling. Default: 100 ms
                      offsetTop : number -> offset from top. Default: 0
                      offsetRight : number -> offset from right. Default: 0
                      offsetBottom : number -> offset from bottom. Default: 0
                      offsetLeft : number -> offset from left. Default: 0
   * @returns {jQuery}
   */
  $.scrollSpy = function(selector, options) {
    selector = $(selector);
    selector.each(function(i, element) {
      elements.push($(element));
    });
    options = options || {
      throttle: 100
    };

    offset.top = options.offsetTop || 0;
    offset.right = options.offsetRight || 0;
    offset.bottom = options.offsetBottom || 0;
    offset.left = options.offsetLeft || 0;

    var throttledScroll = throttle(onScroll, options.throttle || 100);
    var readyScroll = function(){
      $(document).ready(throttledScroll);
    };

    if (!isSpying) {
      jWindow.on('scroll', readyScroll);
      jWindow.on('resize', readyScroll);
      isSpying = true;
    }

    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(readyScroll, 0);

    return selector;
  };

  /**
   * Listen for window resize events
   * @param {Object=} options           Optional. Set { throttle: number } to change throttling. Default: 100 ms
   * @returns {jQuery}    $(window)
   */
  $.winSizeSpy = function(options) {
    $.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
    options = options || {
      throttle: 100
    };
    return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
  };

  /**
   * Enables ScrollSpy on a collection of elements
   * e.g. $('.scrollSpy').scrollSpy()
   * @param {Object=} options Optional.
                      throttle : number -> scrollspy throttling. Default: 100 ms
                      offsetTop : number -> offset from top. Default: 0
                      offsetRight : number -> offset from right. Default: 0
                      offsetBottom : number -> offset from bottom. Default: 0
                      offsetLeft : number -> offset from left. Default: 0
   * @returns {jQuery}
   */
  $.fn.scrollSpy = function(options) {
    return $.scrollSpy($(this), options);
  };

})(jQuery);
var ProgressScroll = function () {
  var s = void 0;

  return {
    settings: function settings() {
      return {
        top: $('.scroll-top'),
        right: $('.scroll-right'),
        bottom: $('.scroll-bottom'),
        left: $('.scroll-left'),
        windowHeight: $(window).height(),
        windowWidth: $(window).width(),
        scrollHeight: $(document).height() - $(window).height(),
        progressTotal: $(window).height() * 2 + $(window).width() * 2,
        scrollPosition: $(document).scrollTop()
      };
    },
    init: function init() {
      s = this.settings();
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      $(window).on('scroll', this.onScroll);
      $(window).on('resize', this.onResize);

      this.progress();
    },
    onScroll: function onScroll() {
      s.scrollPosition = $(document).scrollTop();

      ProgressScroll.requestTick();
    },
    onResize: function onResize() {
      s.windowHeight = $(window).height();
      s.windowWidth = $(window).width();
      s.scrollHeight = $(document).height() - s.windowHeight;
      s.progressTotal = s.windowHeight * 2 + s.windowWidth * 2;

      ProgressScroll.requestTick();
    },
    requestTick: function requestTick() {
      requestAnimationFrame(this.progress);
    },
    progress: function progress() {
      var percentage = s.scrollPosition / s.scrollHeight;
      var width = s.windowWidth / s.progressTotal;
      var height = s.windowHeight / s.progressTotal;

      s.top.css('width', percentage / width * 100 + '%');
      s.right.css('height', (percentage - width) / height * 100 + '%');
      s.bottom.css('width', (percentage - width - height) / width * 100 + '%');
      s.left.css('height', (percentage - width - height - width) / height * 100 + '%');
    }
  };
}();

// Init
$(function () {
  ProgressScroll.init();
});
(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

if(typeof localStorage!='undefined'){
  var taillePolice = localStorage.getItem('taille');
  if(taillePolice!=null){
    taillePolice = parseInt(taillePolice);
  }
  else{
    taillePolice = 16;
  }
  localStorage.setItem('taille',taillePolice);
  var baliseHTML = document.getElementsByTagName('html');
  baliseHTML[0].style = 'font-size:'+ taillePolice + 'px;';
}
else{
  alert("localStorage n\'est pas supporté");
}

document.getElementById('plus').addEventListener("click",function(){
  taillePolice = localStorage.getItem('taille');
  if(taillePolice <= 32){
    taillePolice = parseInt(taillePolice) + 2;
    localStorage.setItem('taille',taillePolice);
    var baliseHTML = document.getElementsByTagName('html');
    baliseHTML[0].style = 'font-size:' + taillePolice + 'px;';
    console.log(taillePolice);
  }
  else{
    alert('Vous avez la taille maximale');
  }
});

document.getElementById('moins').addEventListener("click",function(){
  taillePolice = localStorage.getItem('taille');
  if(taillePolice >= 10){
    taillePolice = parseInt(taillePolice) - 2;
    localStorage.setItem('taille',taillePolice);
    var baliseHTML = document.getElementsByTagName('html');
    baliseHTML[0].style = 'font-size:' + taillePolice + 'px;';
    console.log(taillePolice);
  }
  else{
    alert('Vous avez la taille minimale');
  }
});
document.getElementById('plus_burger').addEventListener("click",function(){
  taillePolice = localStorage.getItem('taille');
  if(taillePolice <= 32){
    taillePolice = parseInt(taillePolice) + 2;
    localStorage.setItem('taille',taillePolice);
    var baliseHTML = document.getElementsByTagName('html');
    baliseHTML[0].style = 'font-size:' + taillePolice + 'px;';
    console.log(taillePolice);
  }
  else{
    alert('Vous avez la taille maximale');
  }
});

document.getElementById('moins_burger').addEventListener("click",function(){
  taillePolice = localStorage.getItem('taille');
  if(taillePolice >= 10){
    taillePolice = parseInt(taillePolice) - 2;
    localStorage.setItem('taille',taillePolice);
    var baliseHTML = document.getElementsByTagName('html');
    baliseHTML[0].style = 'font-size:' + taillePolice + 'px;';
    console.log(taillePolice);
  }
  else{
    alert('Vous avez la taille minimale');
  }
});

var click=0;

$("#modif_dyslex").click(function(){
  if(click == 0){
    $("body").toggleClass("dyslex");
    $("#modif_dyslex").css({'color':'green'});
    click++;
  }
  else{
    $("body").removeClass("dyslex");
    $("#modif_dyslex").css({'color':'white'});
    click--;
  }
})
$("#modif_burger_dyslex").click(function(){
  if(click == 0){
    $("body").toggleClass("dyslex");
    $("#modif_burger_dyslex").css({'color':'green'});
    click++;
  }
  else{
    $("body").removeClass("dyslex");
    $("#modif_burger_dyslex").css({'color':'white'});
    click--;
  }
})

var $menu=$('.menu_burger_trait');


var click_burger=0;


$menu.click(function(){
if (click_burger==0) {
    $('.menu_burger_trait div').toggleClass("croix");
    $('.menu_burger_contenu').css({'display':'block', 'background-color':'black','position':'fixed', 'opacity':'0.9'});
    click_burger++;
  }
  else{
    $('.menu_burger_contenu').css({'display':'none', 'position':'static'});
             $('.menu_burger_trait div').removeClass("croix");


    click_burger--;
  }

});
  $('#menu_burger_sections_1 a').click(function(){
    $('.menu_burger_contenu').css({'display':'none','position':'static'});
         $('.menu_burger_trait div').removeClass("croix");
             click_burger--;


});
