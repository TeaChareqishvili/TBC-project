
const sliderContainer = document.querySelector(".slider-container");
const partnerSlides = document.querySelectorAll(".slider");
let currentSlideIndex = 0;
let slideIntervalId = null;
let automaticSlideIntervalId = null
const windowWidth = window.innerWidth;



// slider content - arrows

const images = [
    {
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 41'%3E%3Cpath d='M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z' fill='%23E8E6E6'%3E%3C/path%3E%3C/svg%3E`,
    },
    {
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 41'%3E%3Cpath d='M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z'  fill='%23E8E6E6'%3E%3C/path%3E%3C/svg%3E`,
    },
  ];
  
  const arrowContainer = document.querySelector(".arrow-container");
  
  images.map((img) => {
    arrowContainer.innerHTML += `
        <img class="slide-arrow" src="${img.image}" alt="arrow"/>
       
    `;
  });
  const secondImage = arrowContainer.querySelector(".slide-arrow:nth-child(2)");
  secondImage.style.transform = "rotate(180deg)";
  
  
  
  //init slider  desktop view
 
    changeSlide();
   
  
  // function for adding and removing active styles
  
  function showSlide(index) {
    partnerSlides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
        slide.classList.remove("inactive");
      } else {
        slide.classList.remove("active");
        slide.classList.add("inactive");
      }
    });
  }
  // function for slide changing
  
  function changeSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % partnerSlides.length;
    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
    if(!slideIntervalId) {
      slideIntervalId = setInterval(changeSlide, 4000);
    }
  }
  
  // function to change the slides with arrows
  
  function handleArrowClick(index) {
    clearInterval(slideIntervalId);
  
    if (index === 0) {
      currentSlideIndex =
        (currentSlideIndex - 1 + partnerSlides.length) % partnerSlides.length;
    } else {
      currentSlideIndex = (currentSlideIndex + 1) % partnerSlides.length;
    }
  
    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
    slideIntervalId = setInterval(changeSlide, 4000);
  }
  
  // function to change the slide with dots
  
  function handleDotClick(dotIndex) {
    clearInterval(slideIntervalId);
    currentSlideIndex = dotIndex;
    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
    slideIntervalId = setInterval(changeSlide, 4000);
  }
  
  function updateDots(activeDotIndex) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeDotIndex);
    });
  }
  
  //  event listener for arrows
  const arrows = document.querySelectorAll(".slide-arrow");
  arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
      handleArrowClick(index);
    });
  });
  
  // event listener for dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      handleDotClick(index);
    });
  });
  
  