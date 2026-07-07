function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*25)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);