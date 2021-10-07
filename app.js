

let hamberger=document.getElementById("hamburger");
let times=document.getElementById("times");
let mobileNav=document.getElementById("mobile-nav");


  hamberger.addEventListener('click',function () {
      mobileNav.classList.add('open')
  })
         



times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});









