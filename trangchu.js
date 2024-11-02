// Lấy phần tử menu, nút mở và nút đóng
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Hiển thị menu khi nhấn vào nút mở
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Ẩn menu khi nhấn vào nút đóng
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*======== REMOVE MENU MOBILE ========*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
  };
  window.addEventListener('scroll',scrollHeader);



let swiperPopular = new Swiper(".popular__container", {
    loop:true,
    spaceBetween :24,
    slidesPerView:'auto',
    grabCursor:true,

    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
    
        768: {
          slidesPerView: 3,
        
        },
        1024: {
         
          spaceBetween: 48,
        },
      },
  });


  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*===== SHOW SCROLL UP =====*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up id
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  
  window.addEventListener('scroll', scrollUp);