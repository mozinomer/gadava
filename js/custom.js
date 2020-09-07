    
    // brands slider
    (function() {
      var carousels = document.querySelectorAll('.js-product-carousel');
      
      [].forEach.call(carousels, function(carousel) {
        carouselize(carousel);
      });
      
    })();

    function carouselize(carousel) {
      var productList = carousel.querySelector('.js-product-list');
      var productListWidth = 0;
      var productListSteps = 0;
      var products = carousel.querySelectorAll('.product');
      var productAmount = 0;
      var productAmountVisible = 7;
      var carouselPrev = document.querySelector('.js-carousel-prev');
      var carouselNext = document.querySelector('.js-carousel-next');

      //Count all the products
      [].forEach.call(products, function(product) {
        productAmount++;
        productListWidth += 250;
        productList.style.width = productListWidth+"px";
      });

      carouselNext.onclick = function() {
        if(productListSteps < productAmount-productAmountVisible) {
          productListSteps++;
          moveProductList();
        }
      }
      carouselPrev.onclick = function() {
        if(productListSteps > 0) {
          productListSteps--;
          moveProductList();
        }
      }
      
      // This is a bit hacky, let me know if you find a better way to do this!
      // Move the carousels product-list
      function moveProductList() {
        productList.style.transform = "translateX(-"+205*productListSteps+"px)";
      }
    }
    // In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
    // .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
    // .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.

    const wrapper = document.querySelector('.cards-wrapper');
    // console.log(wrapper.clientWidth);

    // grab the dots
    const dots = document.querySelectorAll('.dot');
    // the default active dot num which is array[0]
    let activeDotNum = 0;

    dots.forEach((dot, idx) => {  
    //   number each dot according to array index
      dot.setAttribute('data-num', idx);
      
    //   add a click event listener to each dot
      dot.addEventListener('click', (e) => {
        
        let clickedDotNum = e.target.dataset.num;
        // console.log(clickedDotNum);
    //     if the dot clicked is already active, then do nothing
        if(clickedDotNum == activeDotNum) {
          // console.log('active');
          return;
        }
        else {
          // console.log('not active');
          // shift the wrapper
          let displayArea = wrapper.parentElement.clientWidth;
          // let pixels = -wrapper.clientWidth * clickedDotNum;
          let pixels = -displayArea * clickedDotNum
          wrapper.style.transform = 'translateX('+ pixels + 'px)';
    //       remove the active class from the active dot
          dots[activeDotNum].classList.remove('active');
    //       add the active class to the clicked dot
          dots[clickedDotNum].classList.add('active');
    //       now set the active dot number to the clicked dot;
          activeDotNum = clickedDotNum;
        }
        
      });
    });

jQuery(document).ready(function ($) {
  // autoplay slider
    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
  // autoplay slider
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 600, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
    $('a.control_prev').click(function () {
        moveLeft();
    });
    $('a.control_next').click(function () {
        moveRight();
    });
});    

