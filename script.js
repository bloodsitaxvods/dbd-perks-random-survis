const perks=[];

for(let i=1;i<=39;i++){
perks.push({
name:"Perk "+i,
img:`https://picsum.photos/200?random=${i}`
});
}

const slots=[
document.getElementById("perk1"),
document.getElementById("perk2"),
document.getElementById("perk3"),
document.getElementById("perk4")
];

const names=[
document.getElementById("name1"),
document.getElementById("name2"),
document.getElementById("name3"),
document.getElementById("name4")
];

let spinning=false;

document.getElementById("spinBtn").onclick=spin;

function spin(){

if(spinning) return;
spinning=true;

let used=[];
let stopped=[false,false,false,false];

const interval=setInterval(()=>{

for(let i=0;i<4;i++){
if(stopped[i]) continue;

let r=perks[Math.floor(Math.random()*perks.length)];
slots[i].style.backgroundImage=`url(${r.img})`;
}

},40);

setTimeout(()=>stop(0),3000);
setTimeout(()=>stop(1),4000);
setTimeout(()=>stop(2),5000);

setTimeout(()=>{
stop(3);
clearInterval(interval);
spinning=false;
},6000);

function stop(i){

let available=perks.filter(p=>!used.includes(p));
let final=available[Math.floor(Math.random()*available.length)];

used.push(final);

slots[i].style.backgroundImage=`url(${final.img})`;
names[i].textContent=final.name;

stopped[i]=true;
}

}