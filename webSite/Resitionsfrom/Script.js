function submit(){
     const batch = document.querySelectorAll("input[name='batch']:checked");
     console.log(batch);

     let selectedBatch=[];
     document.querySelectorAll("input[name='batch']:checked").forEach((element)=>{
        selectedBatch.push(element.value);
     });
     console.log(selectedBatch);

    let personName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let qualification = document.querySelector("qualification")
    let score = document.getElementById("score").value;
   
    if(!/^[A-Za-z ]+$/.test(personName)){
        alert("Wrong Input name");
        return;
    }
    if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)){
        alert("mobile number is wrong");
        return;
    }
    if(!/^[6-9]\d{9}$/.test(mobile)){
        alert("Wrong Input name");
        return;
    }
    
    let checkedCourses = [];
    document.querySelectorAll("input[name='choose']:checked").forEach((item) => {
      checkedCourses.push(item.nextSibling.textContent.trim());
    });

}