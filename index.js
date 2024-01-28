const btn=document.querySelector('.no');
const img=document.querySelector('img');
const yesbtn = document.querySelector(".yes");
const text = document.querySelector("h1");


btn.addEventListener("mouseover",()=>{
   
    changePosition(btn,img);

})
yesbtn.addEventListener("click",()=>{
   
    img.src = "https://i.postimg.cc/wTDG30TB/yes.gif";
    btn.style.display="none";
    yesbtn.style.display="none";
  text.innerText="Yeeyy ! Finally";

})

function changePosition(x) {
  x.style.position="absolute";
    let top= Math.floor(Math.random()*80);
    let left= Math.floor(Math.random()*80);
  
  x.style.top = `${top}%`;
  x.style.left = `${left}%`;
  
}
