
// toggle nav bar 
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    // menu.classList.toggle('');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    // menu.classList.toggle('');
    navlist.classList.remove('open');
};

// back to top btn 
myBtn = document.getElementById('my-btn');

window.onscroll = function (){
    navlist.classList.remove('open');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myBtn.style.display = 'block';
    }else {
        myBtn.style.display = 'none'
    }
}

function topScroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// sticky nav bar 
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});