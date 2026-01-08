function start() {
    console.log("Game Started")
     document.getElementById("rollDice1").disabled = false;
     document.getElementById("rollDice2").disabled = false;
     document.getElementById("btnRestart").disabled = false;
     document.getElementById("btnStart").disabled = true;
    
}
function restart() {
  window.Location.reload();
}
function p1play() {
    console.log("Player1Playing");
    let score= Number(document.getElementById("p1sc").innerText);
    const DF=Math.floor(Math.random()*6)+1;

    switch(DF){
        case 1: {
            document.getElementById("p1dice").src="./image/logo1.png";
            break;
        }
        case 2:{
             document.getElementById("p1dice").src="./image/logo2.png";
             break;
        }
        case 3:{ 
            document.getElementById("p1dice").src="./image/logo3.png";
            break
        }
        case 4:{
             document.getElementById("p1dice").src="./image/logo4.png";
             break;
        }
        case 5:{ 
            document.getElementById("p1dice").src="./image/logo5.jpg";
            break;
        }
        case 6:{ 
            document.getElementById("p1dice").src="./image/logo.png";
            break;
        }
        default:{
            document.getElementById("p1dice").src="./image/logo.png";
        }
    }
    
    if(DF==6){
       document.getElementById("rollDice2").disabled = false;
       document.getElementById("rollDice1").disabled = true;
    }
    else{
        score= score+DF;
        document.getElementById("p1sc").innerText=score;
    }
   
    
}
function p2play() {
    console.log("Player2Playing") ;
    
    let score= Number(document.getElementById("p2sc").innerText);
    const DF=Math.floor(Math.random()*6)+1;

     switch(DF){
        case 1: {
            document.getElementById("p2dice").src="./image/logo1.png";
            break;
        }
        case 2:{
             document.getElementById("p2dice").src="./image/logo2.png";
             break;
        }
        case 3:{ 
            document.getElementById("p2dice").src="./image/logo3.png";
            break
        }
        case 4:{
             document.getElementById("p2dice").src="./image/logo4.png";
             break;
        }
        case 5:{ 
            document.getElementById("p2dice").src="./image/logo5.jpg";
            break;
        }
        case 6:{ 
            document.getElementById("p2dice").src="./image/logo.png";
            break;
        }
        default:{
            document.getElementById("p2dice").src="./image/logo.png";
        }
    }
     if(DF==6){
       document.getElementById("rollDice2").disabled = true;
       document.getElementById("rollDice1").disabled = false;
    }
    else{
        score= score+DF;
        document.getElementById("p2sc").innerText=score;
    }
}