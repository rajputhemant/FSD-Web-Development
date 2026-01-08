function age(){
    const Dob= document.getElementById("DOB").value.trim();
    const Cob =document.getElementById("COB").value.trim();

    if(!Dob||!Cob){
        alert("please enter Date");
        return;
    }

    const birth= new Date(Dob);
    const current = new Date(Cob);

    let years = current.getFullYear() - birth.getFullYear();

    document.getElementById("result").innerHTML="Your Age :"+years + "years";
}