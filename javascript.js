function computerPlay(){
    let result = Math.floor(Math.random()*3)+1;
    if(result==1){
        return "rock";
    }
    else if(result==2){
        return "paper";
    }
    else if(result==3){
        return "scissors";
    }
}

function playGame(){
    const computer = computerPlay();
    const player = document.getElementById("RPS").value;
    if(player=="rock"||player=="scissors"||player=="paper"){
        if(player=="rock"&&computer=="rock"){
            p1.innerHTML="Draw! You both picked rock!"
        }
        if(player=="paper"&&computer=="paper"){
            p1.innerHTML="Draw! You both picked paper!"
        }
        if(player=="scissors"&&computer=="scissors"){
            p1.innerHTML="Draw! You both picked scissors!"
        }
        if(player=="rock"&&computer=="scissors"){
            p1.innerHTML="You win! rock beats scissors!"
        }
        if(player=="paper"&&computer=="rock"){
            p1.innerHTML="You win! paper beats rock!"
        }
        if(player=="scissors"&&computer=="paper"){
            p1.innerHTML="You win! scissors beats paper!"
        }
        if(player=="paper"&&computer=="scissors"){
            p1.innerHTML="You lose! scissors beats paper!"
        }
        if(player=="rock"&&computer=="paper"){
            p1.innerHTML="You lose! paper beats rock!"
        }
        if(player=="scissors"&&computer=="rock"){
            p1.innerHTML="You lose! rock beats scissors!"
        }
    } else return 0;
}