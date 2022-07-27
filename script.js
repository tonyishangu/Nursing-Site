window.onscroll = function() {makeNavSticky()};

const navbar = document.getElementById('nav')
const sticky = nav.offsetTop

const makeNavSticky = () => {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   } 