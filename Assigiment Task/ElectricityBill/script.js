function calculate(){
    const unit= document.getElementById("Bill").value.trim();
    
    if(!unit){
        alert("Please Enter Unit")
    }
  
    let subTotal=0;

    if(unit<=50){
        subTotal =unit*0.5;
    }
    else if(unit<=200){
    subTotal =unit*0.5+(unit*0.75);
    }
    else if(unit<=450){
        subTotal= unit*0.5 +(unit*0.75)+(unit*1.20)
    }
    else{
         subTotal= (unit*0.5) +(unit*0.75)+(unit*1.20)+(unit*1.50);
    }

    let surcharge =subTotal*0.20;
    const totalBill=subTotal +surcharge;
    document.getElementById("result").innerHTML =
    
    `SubTotal: ₹${subTotal.toFixed(2)} <br>
         Surcharge (20%): ₹${surcharge.toFixed(2)} <br>
         <b>Total Bill: ₹${totalBill.toFixed(2)}</b>`;
    

}
function Reset(){
    document.getElementById("unit").value="";
   document.getElementById("Bill").classList.add("d-none");
}