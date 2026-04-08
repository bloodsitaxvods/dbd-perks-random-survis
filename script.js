const initialImage = "interrogacion.jpg";

const files = [
"a-place-for-us.png",
"ace-in-the-hole.png",
"adrenaline.png",
"aftercare.png",
"alert.png",
"any-means-necessary.png",
"apocalyptic-ingenuity.png",
"appraisal.png",
"autodidact.png",
"babysitter.png",
"background-player.png",
"bada-bada-boom.png",
"balanced-landing.png",
"bardic-inspiration.png",
"better-than-new.png",
"better-together.png",
"bite-the-bullet.png",
"blast-mine.png",
"blood-pact.png",
"blood-rush.png",
"boil-over.png",
"bond.png",
"boon-circle-of-healing.png",
"boon-dark-theory.png",
"boon-exponential.png",
"boon-illumination.png",
"boon-shadow-step.png",
"borrowed-time.png",
"botany-knowledge.png",
"breakdown.png",
"breakout.png",
"buckle-up.png",
"built-to-last.png",
"calm-spirit.png",
"camaraderie.png",
"champion-of-light.png",
"change-of-plan.png",
"chemical-trap.png",
"clairvoyance.png",
"clean-break.png",
"come-and-get-me.png",
"conviction.png",
"corrective-action.png",
"counterforce.png",
"cut-loose.png",
"dance-with-me.png",
"dark-sense.png",
"dead-hard.png",
"deadline.png",
"deception.png",
"decisive-strike.png",
"deja-vu.png",
"deliverance.png",
"desperate-measures.png",
"detectives-hunch.png",
"distortion.png",
"diversion.png",
"do-no-harm.png",
"dramaturgy.png",
"duty-of-care.png",
"empathic-connection.png",
"empathy.png",
"extrasensory-perception.png",
"exultation.png",
"eyes-of-belmont.png",
"fast-track.png",
"finesse.png",
"five-moves-ahead.png",
"fixated.png",
"flashbang.png",
"flip-flop.png",
"flow-state.png",
"fogwise.png",
"for-the-people.png",
"friendly-competition.png",
"ghost-notes.png",
"hardened.png",
"head-on.png",
"hope.png",
"hyperfocus.png",
"inner-strength.png",
"invocation-treacherous-crows.png",
"invocation-weaving-spiders.png",
"iron-will.png",
"kindred.png",
"last-stand.png",
"leader.png",
"left-behind.png",
"light-footed.png",
"lightweight.png",
"lithe.png",
"low-profile.png",
"lucky-break.png",
"lucky-star.png",
"made-for-this.png",
"mettle-of-man.png",
"mirrored-illusion.png",
"moment-of-glory.png",
"no-mither.png",
"no-one-left-behind.png",
"object-of-obsession.png",
"off-the-record.png",
"one-two-three-four.png",
"open-handed.png",
"overcome.png",
"overzealous.png",
"parental-guidance.png",
"pharmacy.png",
"plot-twist.png",
"plunderers-instinct.png",
"poised.png",
"potential-energy.png",
"power-struggle.png",
"premonition.png",
"prove-thyself.png",
"quick-gambit.png",
"quick-quiet.png",
"rapid-response.png",
"reactive-healing.png",
"reassurance.png",
"red-herring.png",
"repressed-alliance.png",
"residual-manifest.png",
"resilience.png",
"resurgence.png",
"road-life.png",
"rookie-spirit.png",
"saboteur.png",
"scavenger.png",
"scene-partner.png",
"second-wind.png",
"self-care.png",
"self-preservation.png",
"shoulder-the-burden.png",
"slippery-meat.png",
"small-game.png",
"smash-hit.png",
"sole-survivor.png",
"solidarity.png",
"soul-guard.png",
"specialist.png",
"spine-chill.png",
"sprint-burst.png",
"stake-out.png",
"still-sight.png",
"streetwise.png",
"strength-in-shadows.png",
"superior-anatomy.png",
"teamwork-collective-stealth.png",
"teamwork-full-circuit.png",
"teamwork-power-of-two.png",
"teamwork-soft-spoken.png",
"teamwork-throw-down.png",
"teamwork-toughen-up.png",
"technician.png",
"tenacity.png",
"this-is-not-happening.png",
"troubleshooter.png",
"unbreakable.png",
"up-the-ante.png",
"urban-evasion.png",
"vigil.png",
"visionary.png",
"wake-up.png",
"we-see-you.png",
"well-make-it.png",
"were-gonna-live-forever.png",
"wicked.png",
"windows-of-opportunity.png",
"wiretap.png"
];

const perks = files.map(f => ({
name: f.replace(".png","").replace(/-/g," "),
img: "perks%20survi/" + f
}));

const slots = [
document.getElementById("perk1"),
document.getElementById("perk2"),
document.getElementById("perk3"),
document.getElementById("perk4")
];

const names = [
document.getElementById("name1"),
document.getElementById("name2"),
document.getElementById("name3"),
document.getElementById("name4")
];

slots.forEach(s=>{
s.style.backgroundImage=`url(${initialImage})`;
});

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

},45);

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
