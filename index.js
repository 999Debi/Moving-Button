const btn=document.querySelector('.no');
const img=document.querySelector('img');
const yesbtn = document.querySelector(".yes");
const text = document.querySelector("h1");
// console.log(btn)

btn.addEventListener("mouseover",()=>{
    // console.log(7);
    changePosition(btn,img);

})
yesbtn.addEventListener("click",()=>{
    // console.log(7)
    img.src = "https://i.postimg.cc/wTDG30TB/yes.gif";
    btn.style.display="none";
    yesbtn.style.display="none";
  text.innerText="Yeeyy ! Finally";

})

function changePosition(x) {
  x.style.position="absolute";
    let top= Math.floor(Math.random()*80);
    let left= Math.floor(Math.random()*80);
    // transition: width 0.9s
  x.style.top = `${top}%`;
  x.style.left = `${left}%`;
  
}
