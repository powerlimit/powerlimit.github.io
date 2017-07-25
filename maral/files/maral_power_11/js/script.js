$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
function getDayEnd() {
  var dayEnd = new Date();
  dayEnd.setHours(23,59,59);
  return dayEnd;
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan    = clock.querySelector('.hours1');
  var minutesSpan  = clock.querySelector('.minutes1');
  var secondsSpan  = clock.querySelector('.seconds1');
  var hoursSpan2   = clock.querySelector('.hours2');
  var minutesSpan2 = clock.querySelector('.minutes2');
  var secondsSpan2 = clock.querySelector('.seconds2');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML =   ((t.hours + '').length   < 2 ? '0' :  ('' + t.hours).slice(0,-1));
    minutesSpan.innerHTML = ((t.minutes + '').length < 2 ? '0' :  ('' + t.minutes).slice(0,-1));
    secondsSpan.innerHTML = ((t.seconds + '').length < 2 ? '0' :  ('' + t.seconds).slice(0,-1));
    hoursSpan2.innerHTML =   ('' + t.hours).slice(-1);
    minutesSpan2.innerHTML = ('' + t.minutes).slice(-1);
    secondsSpan2.innerHTML = ('' + t.seconds).slice(-1);

    if (t.total <= 0) {
      hoursSpan.innerHTML =    ('0');
      minutesSpan.innerHTML =  ('0');
      secondsSpan.innerHTML =  ('0');
      hoursSpan2.innerHTML =   ('0');
      minutesSpan2.innerHTML = ('0');
      secondsSpan2.innerHTML = ('0');
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var myClock = (document.cookie && document.cookie.match('myClock')) ?  (Date.parse(getCookie('myClock')) - Date.now() > -60000) : null;
// if there's a cookie with the name myClock, and timer stoped less then 1 minute (-60000) ago, use that value as the deadline
if(myClock){
  // get deadline value from cookie
  var deadline = getCookie('myClock');
}

// otherwise, set a deadline 45 minutes from now and 
// save it in a cookie with that name
else{
  // create deadline 45 minutes from now
  var timeInMinutes = 45;
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + timeInMinutes*60*1000);

  // store deadline in cookie for future reference
  document.cookie = 'myClock=' + deadline;
};

window.onload = function(){
    initializeClock('timer1', deadline);
    initializeClock('timer2', deadline);
};

$(document).ready(function() {
    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        
        $('.new-cost').text(price + ' ' + currency);
        $('.old-cost').text(oldPrice + ' ' + currency);
    });
});