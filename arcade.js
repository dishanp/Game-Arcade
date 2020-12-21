//Coin Tosser
var but=document.getElementById('but');
let show=document.getElementById('show');
but.addEventListener("click",function(){
var a=Math.random();
if(a>0.5)
{
 show.innerHTML="HEADS!";
}
else
{
 show.innerHTML="TAILS!";
}
})
var cl=document.getElementById('but_cl');
cl.addEventListener("click",function()
{
show.innerHTML="";
})
//Dice Roller Follows!
var but1=document.getElementById('but1');
let show1=document.getElementById('show1');
but1.addEventListener("click",function(){
var a= Math.floor((Math.random() * 6) + 1);
show1.innerHTML=a;
})
var cl1=document.getElementById('but_cl1');
cl1.addEventListener("click",function()
{
show1.innerHTML="";
})
//Stone Paper Scissor Follows!

var stone=document.getElementById('Stone');
var paper=document.getElementById('Paper');
var scissor=document.getElementById('Scissor');
var comm=document.getElementById("comm");
var res=document.getElementById("result");
var play=0;
var comp= 0;
var play_show=document.getElementById('player');
var cp_show=document.getElementById('comp');
var splay=0;
var scomp=0;
var move="Lets Start The Game!";
var move1="";
play_show.innerHTML=splay;
cp_show.innerHTML=scomp;
comm.innerHTML=move;

comp=Math.floor((Math.random() * 3) + 1);

stone.addEventListener("click",function()
{
   play=1
   if(comp==1)
{
   move="Computer Played Stone";
   comm.innerHTML=move;
}
if(comp==2)
{
   move="Computer Played Paper";
   comm.innerHTML=move;
}
if(comp==3)
{
   move="Computer Played Scissor";
   comm.innerHTML=move;
}
   if(comp==1&&play==2||comp==3&&play==1||comp==2&&play==3)
{
  splay++;
  play_show.innerHTML=splay;
  cp_show.innerHTML=scomp;
  comp=Math.floor((Math.random() * 3) + 1);
}
else if(play==1&&comp==2||play==3&&comp==1||play==2&&comp==3)
{
  scomp++;
  play_show.innerHTML=splay;
  cp_show.innerHTML=scomp;
  comp=Math.floor((Math.random() * 3) + 1);
}
if(splay==3)
{
    move1="Player Won The Game! Refresh Page To Play Again";
    res.innerHTML=move1;
    stone.innerHTML="WELL";
    paper.innerHTML="PLAYED";
    scissor.innerHTML="DUDE!";
}
else if(scomp==3)
{
    move1="Computer Won The Game! Refresh Page To Play Again";
    res.innerHTML=move1;
    stone.innerHTML="MAYBE";
    paper.innerHTML="NEXT";
    scissor.innerHTML="TIME!";
}
})
paper.addEventListener("click",function()
{
  play=2;
  if(comp==1)
{
   move="Computer Played Stone";
   comm.innerHTML=move;
}
if(comp==2)
{
   move="Computer Played Paper";
   comm.innerHTML=move;
}
if(comp==3)
{
   move="Computer Played Scissor";
   comm.innerHTML=move;
}
  if(comp==1&&play==2||comp==3&&play==1||comp==2&&play==3)
{
  splay++;
  play_show.innerHTML=splay;
  cp_show.innerHTML=scomp;
  comp=Math.floor((Math.random() * 3) + 1);
}
else if(play==1&&comp==2||play==3&&comp==1||play==2&&comp==3)
{
  scomp++;
  play_show.innerHTML=splay;
  cp_show.innerHTML=scomp;
  comp=Math.floor((Math.random() * 3) + 1);
}
if(splay==3)
{
    move1="Player Won The Game! Refresh Page To Play Again";
    res.innerHTML=move1;
    stone.innerHTML="WELL";
    paper.innerHTML="PLAYED";
    scissor.innerHTML="DUDE!";
}
else if(scomp==3)
{
    move1="Computer Won The Game! Refresh Page To Play Again";
    res.innerHTML=move1;
    stone.innerHTML="MAYBE";
    paper.innerHTML="NEXT";
    scissor.innerHTML="TIME!";
}
})
scissor.addEventListener("click",function()
{
   play=3;
   if(comp==1)
{
   move="Computer Played Stone";
   comm.innerHTML=move;
}
if(comp==2)
{
   move="Computer Played Paper";
   comm.innerHTML=move;
}
if(comp==3)
{
   move="Computer Played Scissor";
   comm.innerHTML=move;
}
   if(comp==1&&play==2||comp==3&&play==1||comp==2&&play==3)
{
  splay++;
  play_show.innerHTML=splay;
  cp_show.innerHTML=scomp;
  comp=Math.floor((Math.random() * 3) + 1);
}
else if(play==1&&comp==2||play==3&&comp==1||play==2&&comp==3)
{
  scomp++;
  play_show.innerHTML=splay;
  cp_show.innerHTML=scomp;
  comp=Math.floor((Math.random() * 3) + 1);
}
if(splay==3)
{
    move1="Player Won The Game! Refresh Page To Play Again";
    res.innerHTML=move1;
    stone.innerHTML="WELL";
    paper.innerHTML="PLAYED";
    scissor.innerHTML="DUDE!";
}
else if(scomp==3)
{
    move1="Computer Won The Game! Refresh Page To Play Again";
    res.innerHTML=move1;
    stone.innerHTML="MAYBE";
    paper.innerHTML="NEXT";
    scissor.innerHTML="TIME!";
}
})

