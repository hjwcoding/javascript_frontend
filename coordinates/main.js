const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const img = document.querySelector("img");
const tag = document.querySelector(".tag");

document.addEventListener('mousemove',(e)=>{
    x = e.clientX;
    y = e.clientY;

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px,${y}px`;

})



