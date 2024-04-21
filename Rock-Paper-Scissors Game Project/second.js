let UserScore=0;
let ComputerScore=0;
 const choices=document.querySelectorAll(".choice");
 const  msg =document.querySelector("#msg");
 const UserScorePara=document.querySelector("#User-Score");
 const ComputerScorePara=document.querySelector("#Computer-Score");
 const genComputerChoice=()=>{
   const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
 };
 const drawGame=()=>{
console.log("game was draw");
msg.innerText="draw";
msg.style.backgroundColor="neutral";
 }
 const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        UserScore++;
        UserScorePara.innerText=UserScore;
        console.log("you win");
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        

    }else{
        ComputerScore++;
        ComputerScorePara.innerText=ComputerScore;
        console.log("you lose");
        msg.innerText=`YOU LOSE! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
 };
 const playgame=(userChoice)=>{
console.log("user choice =",userChoice);
const  compChoice=genComputerChoice();
console.log("comp choice=",compChoice);
 if(userChoice===compChoice){
drawGame();
 }else {
    let userwin=true;
    if(userChoice==="rock"){
         userwin =compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        compChoice==="scissors"?false:true;
    }else{
        userwin= compChoice==="rock"?false:true;
    
    }
    showWinner(userwin,userChoice,compChoice);
 }

 };
  choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{ 
const userChoice=choice.getAttribute("id");
//console.log("choice was clicked",userChoice);
playgame(userChoice);
  });
});