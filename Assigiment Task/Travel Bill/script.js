function Bill(){
    const count= document.getElementById("Bill").value.trim();

     if(!count){
    alert("Plese Enter Number")
     }else if(/^-\d+(\.\d+)?$/.test(count)){
        alert("Negative number not allowed");
        return;
    }
    let km=Number(count);

    let BillCount=0;
    let slab1km=0,slab2km=0,slab3km=0;
 
    if(km<=10){
        slab1km =km;
    }
    else if(km<=50){
        slab1km=10;
        slab2km=km-10;

    }
    else{
        slab1km=10;
        slab2km=40;
        slab3km=km-50;
    }
    const cost1 = slab1km * 11;
    const cost2 = slab2km* 10;
    const cost3 = slab3km * 9;
    
    BillCount =cost1+cost2+cost3;

    if(slab1km>0){
        document.getElementById("breakdown").innerHTML=`<p>${slab1km}km x Rs.11=Rs.${cost1}</p>`;
    }
    if(slab2km>0){
        document.getElementById("breakdown").innerHTML=`<p>${slab2km}km x Rs.10=Rs.${cost2}</p>`;
    }
     if(slab3km>0){
        document.getElementById("breakdown").innerHTML=`<p>${slab3km}km x Rs.9=Rs.${cost3}</p>`;
    }
    document.getElementById("result").innerText = "Total Bill :" + BillCount;
}