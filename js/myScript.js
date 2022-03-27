$(document).ready(function(){
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//      jQuery(function($) {
//  var $navbar = $('.navbar'),
//      navheight = $navbar.outerHeight(),
//      $window = $(window);
//    var $mobilemenu = $('.mobile-menu');
//  
//  function toggleNavBar() {
//    var scroll = $window.scrollTop();
//    
//    if (scroll >=70) {
//      if (!$navbar.hasClass('navbar-fixed-top')) {
//        $navbar.addClass('navbar-fixed-top');
//        $navbar.css('margin-top', -navheight);
//        $mobilemenu.css('top', 95);
//        $mobilemenu.css('height', 'calc(100vh - 96px)');
//        $navbar.animate({ marginTop: 0 }, 500, function() {
//          $window.one('scroll', toggleNavBar);
//        });
//      } else {
//        $window.one('scroll', toggleNavBar);
//      }
//    } else {
//      if ($navbar.hasClass('navbar-fixed-top')) {
//        $navbar.removeClass('navbar-fixed-top');
//          $mobilemenu.css('top', '128px');
//        $mobilemenu.css('height', 'calc(100vh - 128px)');
//      }
//      
//      $window.one('scroll', toggleNavBar);
//    }
//  }
//  
//  $window.one('scroll', toggleNavBar);
//}); 
//    
 
    $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
    
    
        $('.mobile-dropdown-btn').click(function(e){
        $('.mobile-menu-dropdown').slideToggle('slow');
    });  
    
    $('.mobile-dropdown-btn2').click(function(e){
        $('.mobile-menu-dropdown2').slideToggle('300');
    }); 
    $('.mobile-dropdown-btn3').click(function(e){
        $('.mobile-menu-dropdown3').slideToggle('300');
    });
    $('.mobile-dropdown-btn4').click(function(e){
        $('.mobile-menu-dropdown4').slideToggle('300');
    });
    
        $('.mobile-icon').click(function(e){
        $('.mobile-menu').toggleClass('show-menu');
    });  
    
    $('#close-menux').click(function(r){
        $('.mobile-menu').removeClass('show-menu');
    });  
    
    $('#cardnumber').on('keypress change', function () {
  $(this).val(function (index, value) {
	  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  });
});
    
    $('.project-info').hide();  
  $('.project-div').hover( function () {
    $(this).find('.project-info').slideToggle(200);  
      $(this).mouseleave( function () {
    $(this).find('.project-info').fadeOut(200); 
  });  	
  }); 
    
      $('.donation-option').click(function(e){
		$(this).toggleClass('border-choice');   
    });
          $('.donation-option').click(function(){
                      if ($('.donation-option').hasClass('border-choice')){
                           $('.donation-option').removeClass('border-choice');  
                           $(this).toggleClass('border-choice');
                        }
                        else if ($(this).hasClass('border-choice')){
                          $(this).toggleClass('border-choice');
                        }
            });
    
});
