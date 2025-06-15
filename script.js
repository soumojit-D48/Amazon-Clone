const imgs = document.querySelectorAll('.header-slider ul img') // array of images

const prev_btn = document.querySelector('.control_prev')
const next_btn = document.querySelector('.control_next')

let n = 0

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none'
    }
    imgs[n].style.display = 'block'
}

changeSlide()


prev_btn.addEventListener('click', (e) =>{
    if(n > 0){
        n--;
    } else{
        n = imgs.length - 1; // when we on the 1st img and we click the prev btn then show the last img
    }
    // prev_btn.style.backgroundColor = grey 
    changeSlide()
})

next_btn.addEventListener('click', (e) =>{
    if(n < imgs.length - 1){
        n++;
    } else{
        n = 0; 
    }
    changeSlide()
})

document.querySelector(".foot-panel1").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smooth scrolling
    });
  });




// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.slider img');
// const prevBtn = document.querySelector('.control_prev');
// const nextBtn = document.querySelector('.control_next');

// let index = 0; 
// const totalImages = images.length;

// // Update slider position
// function updateSlider() {
//     const offset = -index * 600; // Assuming image width = 600px
//     slider.style.transform = `translateX(${offset}px)`;
// }

// // Next Button
// nextBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent <a> default behavior
//     index = (index + 1) % totalImages; // Loop back to first image
//     updateSlider();
// });

// // Prev Button
// prevBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     index = (index - 1 + totalImages) % totalImages; // Loop to last image
//     updateSlider();
// });

// // Auto-Slide every 3 seconds
// setInterval(() => {
//     index = (index + 1) % totalImages;
//     updateSlider();
// }, 3000);



// const scrollContainer = document.querySelectorAll('.products')

// for(const item of scrollContainer){
//     item.addEventListener('wheel',(evt) =>{
//         evt.preventDefault()
//         item.scrollLeft += evt.deltaY * 2;
//     })
// }




