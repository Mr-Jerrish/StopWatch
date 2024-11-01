const btnstart=document.querySelector(".start");
const btnstop=document.querySelector(".stop");
const btnreset=document.querySelector(".reset");

let hrs=min=sec=ms=0,startTimer;

btnstart.addEventListener('click',()=>{
  btnstart.classList.add('start-active');
  btnstop.classList.remove('stop-active');
  startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
      sec++;
      ms=0;
    }
    if(sec==60){
      min++;
      sec=0;
    }
    if(min==60){
      hrs++;
      min=0;
    }
    updateDisplay();
  },10);
});

btnstop.addEventListener('click',()=>{
 
  clearInterval(startTimer);
  btnstart.classList.remove('start-active');
  btnstop.classList.add('stop-active');
});

btnreset.addEventListener('click',()=>{
  hrs=min=sec=ms=0;
  updateDisplay();
  btnstart.classList.remove('start-active');
  btnstop.classList.remove('stop-active');

});

function updateDisplay(){

  phrs=hrs<10?"0"+hrs:hrs;
  pmin=min<10?"0"+min:min;
  psec=sec<10?"0"+sec:sec;
  pms=ms<10?"0"+ms:ms;

  document.querySelector(".hrs").innerHTML=phrs;
  document.querySelector(".min").innerHTML=pmin;
  document.querySelector(".sec").innerHTML=psec;
  document.querySelector(".ms").innerHTML=pms;
}