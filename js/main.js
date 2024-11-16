$(document).ready(function() {
  $('#nav-toggle').click(function(){
      $("#nav-menu").addClass("show-menu");
  })

  $('#nav-toggle-menu').click(function(){
      $("#Nav-menu").addClass("show-menu-top");
  })

  $('#nav-close-menu').click(function(){
      $("#Nav-menu").removeClass("show-menu-top");
  })

  $('#nav-close').click(function(){
      $("#nav-menu").removeClass("show-menu");
  })
  $('.nav__link').click(function(){
      $("#nav-menu").removeClass("show-menu");
  })

  $(window).scroll(function(){
      // $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
      $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
  })

  $(document).ready(function() {
    const $menu = $('#header');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $menu.addClass('scrolled');
        } else {
            $menu.removeClass('scrolled');
        }
    });
});
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
  
const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
      }else{
      sectionsClass.classList.remove('active-link')
      }                                                    
  })
}
window.addEventListener('scroll', scrollActive)



const tabButtons = document.querySelectorAll('.tab-btn')

tabButtons.forEach((tab) => {
tab.addEventListener('click', () => tabClicked(tab))
})

function tabClicked(tab) {

tabButtons.forEach(tab => {
  tab.classList.remove('active')
})
tab.classList.add('active')

const contents = document.querySelectorAll('.content')

contents.forEach((content) => {
  content.classList.remove('show')
})

const contentId = tab.getAttribute('content-id')
const contentSelected = document.getElementById(contentId)

contentSelected.classList.add('show')
}


let swiperNewsletter = new Swiper('.newsletter__swiper', {
loop: true,
spaceBetween: 30,
pagination: {
  el: '.swiper-pagination-newsletter',
},


slidesPerView: 1,

});



let swiperCategory = new Swiper('.category__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  centeredSlides: "auto",
  navigation: {
            nextEl: '.swiper-button-next__category',
            prevEl: '.swiper-button-prev__category',
        },
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

   breakpoints: {
      300: {
          slidesPerView: 1.2,
          spaceBetween: 14,
          grid: {
            rows: 1,
          }
      },
      450: {
        slidesPerView: 1.5,
        grid: {
          rows: 1,
        }
      },
      500: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        }
      },

      575: {
        spaceBetween: 17,
      },
      768: {
        spaceBetween: 20,
      },
      950: {
        slidesPerView: 3,
       
      },
      1024: {
        spaceBetween: 24,
      },
     
      1150: {
        grid: {
          rows: 2,
        },
        centeredSlides: false,
      }

     
  }
});

let swiperFeatured = new Swiper('.featured-author__swiper', {
loop: true,
spaceBetween: 24,
slidesPerView: 'auto',
centeredSlides: false,

navigation: {
  nextEl: '.swiper-button-next__featured',
  prevEl: '.swiper-button-prev__featured',
},

breakpoints: {
  300: {
    slidesPerView: 1.5,
    spaceBetween: 14,

  },
  360: {
    slidesPerView: 1.7,

  },
  450: {
    slidesPerView: 2,
  },
  575: {
    slidesPerView: 2.5,
    spaceBetween: 17,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },

  800: {
    slidesPerView: 3.5,
  },
  900: {
    slidesPerView: 4,

  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 24,
  },
  1220: {
      slidesPerView: 6,
  }
}
});



let swiperMeaningful__message = new Swiper('.meaningful__message-swiper', {
loop: true,
spaceBetween: 30,

  navigation: {
      nextEl: '.swiper-button-next__meaningful',
      prevEl: '.swiper-button-prev__meaningful',
  },

  slidesPerView: 1,

  breakpoints: {
    300: {
      spaceBetween: 14,
    },
    575: {
      spaceBetween: 17,
    },
    768: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 24,
    },
    
  },
});


let swiperMeaningful__swiper = new Swiper('.meaningful-swiper ', {
loop: true,
spaceBetween: 24,
slidesPerView: 'auto',
centeredSlides: 'auto',

  navigation: {
      nextEl: '.swiper-button-next__meaningful__message',
      prevEl: '.swiper-button-prev__meaningful__message',
  },

  breakpoints: {
    300: {
      spaceBetween: 14,
    },
    575: {
      spaceBetween: 17,
    },
    768: {
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 24,
    },
      1150: {
          slidesPerView: 3,
          centeredSlides: false,
      }
  }

});


/*=============== FEATURED SWIPER ===============*/
let swiperHealth = new Swiper('.health__swiper ', {
loop: true,
spaceBetween: 24,
slidesPerView: 'auto',
centeredSlides: 'auto',

navigation: {
    nextEl: '.swiper-button-next__health',
    prevEl: '.swiper-button-prev__health',
},

breakpoints: {
  300: {
    spaceBetween: 14,
  },
  575: {
    spaceBetween: 17,
  },
  768: {
    spaceBetween: 20,
  },
  1024: {
    spaceBetween: 24,
  },


    1150: {
        spaceBetween: 24,
        slidesPerView: 4,
        centeredSlides: false,
    }
}
});

let swiperGood__book = new Swiper('.good__book-swiper ', {
loop: true,
spaceBetween: 24,
slidesPerView: 'auto',
centeredSlides: 'auto',

navigation: {
    nextEl: '.swiper-button-next__book',
    prevEl: '.swiper-button-prev__book',
},

breakpoints: {
  300: {
    spaceBetween: 14,
  },
  575: {
    spaceBetween: 17,
  },
  768: {
    spaceBetween: 20,
  },
  1024: {
    spaceBetween: 24,
  },


  1150: {
      spaceBetween: 24,
      slidesPerView: 4,
      centeredSlides: false,
  }
}
});

$(function(){
  'use strict';
  /*Activate default tab contents*/
  var leftPos, newWidth, $magicLine, defaultActive;  
  
  defaultActive = $('.specific-tabs li.active__tabs a').attr('href');
  $(defaultActive).show();
              
  $('.specific-tabs').append("<li id='magic-line'></li>");
  $magicLine = $('#magic-line');		    
  $magicLine.width($('.active__tabs').width())
      .css('left', $('.active__tabs a').position().left)
      .data('origLeft', $magicLine.position().left)
      .data('origWidth', $magicLine.width());				
      
  $('.specific-tabs li a').click(function(){
      var $this, tabId, leftVal, $tabContent;
      $this = $(this);
      $tabContent = $('.tabContent');
      $this.parent().addClass('active__tabs').siblings().removeClass('active__tabs');
      tabId = $this.attr('href');		
      
      leftVal = $($tabContent).index($(tabId)) * $tabContent.width() * -1;
      $('.tabWrapper').stop().animate({left:leftVal});
      
      $magicLine
          .data('origLeft',$this.position().left)
          .data('origWidth',$this.width() + 40);				
      return false;
  });		
  
  /*Magicline hover animation*/
  $('.specific-tabs li').find('a').hover(function() {
      var $thisBar = $(this);
      leftPos = $thisBar.position().left;	
      newWidth = $thisBar.parent().width();
      $magicLine.stop().animate({left:leftPos, width:newWidth});
  }, function() {
      $magicLine.stop().animate({left:$magicLine.data('origLeft'), width: $magicLine.data('origWidth')});    
  });		
});


function toggleDropdown(dropdownId, header) {
  const dropdown = document.querySelector( "." + dropdownId);
  const icon = header.querySelector('i');

  if (dropdown.style.display === "block") {
      console.log("dropdown: ", dropdown);
      
      dropdown.style.display = "none"; 
      icon.classList.remove('fa-chevron-up'); 
      icon.classList.add('fa-chevron-down');
  } else {
      dropdown.style.display = "block";
      icon.classList.remove('fa-chevron-down'); 
      icon.classList.add('fa-chevron-up');
  }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1200,
  delay: 300,
  // reset: true
})
sr.reveal(`.home__data,.readings__list`) 
sr.reveal(`.newsletter__list,.featured-article-content,.featured__article-content,.footer,.readings-list`,{origin: 'bottom'})
sr.reveal(`.readings-card`, {interval: 100}) 
sr.reveal(`.blog__img,.blog__imag`,{origin: 'right'})
sr.reveal(`.blog__data`,{origin: 'left'})

// Custom tabs
// jQuery( document ).ready( function(){
//   jQuery('#pills-tab li.nav-item').on('click',function(){
//     jQuery('#pills-tab li.nav-item').removeClass('active');
//     jQuery(this).addClass('active');
//     return false;
//   })
// })
