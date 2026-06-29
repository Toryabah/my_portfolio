const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter=()=>{
        const target = +counter.getAttribute("data-target");

        const count = +counter .innerText;

        const increment = target/100;

        if(count<target){
            counter.innerText=Math.ceil(count+increment);

            setTimeout(updateCounter ,20);
        }else {
            counter.innerText=target+"+";
        }
    };

    updateCounter();
});

// TOGGLE BUTTON

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const icon = menuBtn.querySelector("i");

 menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
}else{
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
}
   
});


// Scroll-to-top button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// HERO INTRO TYPING

const words=[
"Front-End Web Developer",
"Web Designer",
"Freelancer",
"Problem Solver",
"Web Tutor"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

let current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?60:120);

}

type();