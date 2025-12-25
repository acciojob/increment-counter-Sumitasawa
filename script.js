//your JS code here. If required.
let counter=document.getElementById("counter");
let btn=document.getElementById("incrementBtn");

let count=0;

counter.textContent=`${count}`

btn.addEventListener('click',()=>{
	count++;
	counter.textContent=`${count}`
})

