function number(){
    const userNumber= document.getElementById("numberEnter").value.trim();

    if(!userNumber){
        alert("Please Enter Number");
    }
    if(userNumber>10 ||userNumber<1){
        alert("Please Enter number of 1-9");
    }
 
    let number = Math.floor(Math.random()*10)+1;
    
    if(number==userNumber){
        alert("congratulations your number is match");
    }
    else if(number<userNumber){
        alert("OOPS! SORRY!!! TRY A")
    }
    

    console.log(userNumber);
    console.log(number);
}