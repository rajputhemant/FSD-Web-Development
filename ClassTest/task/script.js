function search() {
  const state = document.getElementById("state").value.trim().toLowerCase();

  if (!state) {
    alert("State Empty");
    return;
  }

  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3");
  flag.style.position = "absolute";

  if (state === "delhi") {
    flag.style.top = "280px";
    flag.style.left = "880px";
    flag.title = "State: Delhi\nCapital: New Delhi";
  }

  if (state === "madhya pradesh") {
    flag.style.top = "430px";
    flag.style.left = "880px";
    flag.title = "State: Madhya Pradesh\nCapital: Bhopal";
  }

  if (state === "ladakh") {
    flag.style.top = "100px";
    flag.style.left = "870px";
    flag.title = "State: Ladakh\nCapital: Leh";
  }

  if (state === "jammu & kashmir" || state === "jammu and kashmir") {
    flag.style.top = "150px";
    flag.style.left = "850px";
    flag.title = "State: Jammu & Kashmir\nCapital: Srinagar";
  }

  if (state === "himachal pradesh") {
    flag.style.top = "200px";
    flag.style.left = "880px";
    flag.title = "State: Himachal Pradesh\nCapital: Shimla";
  }

  if (state === "punjab") {
    flag.style.top = "220px";
    flag.style.left = "850px";
    flag.title = "State: Punjab\nCapital: Chandigarh";
  }

  if (state === "uttarakhand") {
    flag.style.top = "240px";
    flag.style.left = "930px";
    flag.title = "State: Uttarakhand\nCapital: Dehradun";
  }

  if (state === "haryana") {
    flag.style.top = "250px";
    flag.style.left = "870px";
    flag.title = "State: Haryana\nCapital: Chandigarh";
  }

  if (state === "up" || state === "uttar pradesh") {
    flag.style.top = "300px";
    flag.style.left = "930px";
    flag.title = "State: Uttar Pradesh\nCapital: Lucknow";
  }

  if (state === "rajasthan") {
    flag.style.top = "300px";
    flag.style.left = "800px";
    flag.title = "State: Rajasthan\nCapital: Jaipur";
  }

  if (state === "bihar") {
    flag.style.top = "370px";
    flag.style.left = "1080px";
    flag.title = "State: Bihar\nCapital: Patna";
  }

  if (state === "jharkhand") {
    flag.style.top = "420px";
    flag.style.left = "1080px";
    flag.title = "State: Jharkhand\nCapital: Ranchi";
  }

  if (state === "west bengal") {
    flag.style.top = "420px";
    flag.style.left = "1150px";
    flag.title = "State: West Bengal\nCapital: Kolkata";
  }

  if (state === "chhattisgarh") {
    flag.style.top = "470px";
    flag.style.left = "990px";
    flag.title = "State: Chhattisgarh\nCapital: Raipur";
  }

  if (state === "maharashtra") {
    flag.style.top = "530px";
    flag.style.left = "810px";
    flag.title = "State: Maharashtra\nCapital: Mumbai";
  }
  if (state === "sikkim") {
    flag.style.top = "320px";
    flag.style.left = "1160px";
    flag.title = "State: Sikkim\nCapital: Gangtok";
  }
 if (state === "arunachal pradesh") {
    flag.style.top = "280px";
    flag.style.left = "1300px";
    flag.title = "State: arunachal pradesh\nCapital: itanagar";
  }
  if (state === "tripura") {
    flag.style.top = "410px";
    flag.style.left = "1240px";
    flag.title = "State: Tirpura\nCapital: Agartala";
  }
  if (state === "mizoram") {
    flag.style.top = "430px";
    flag.style.left = "1270px";
    flag.title = "State: Mizoram\nCapital: Aizawl";
  }
  if (state === "manipur") {
    flag.style.top = "380px";
    flag.style.left = "1300px";
    flag.title = "State: Manipur\nCapital: Imphal";

  }
  if (state === "meghalay") {
    flag.style.top = "360px";
    flag.style.left = "1230px";
    flag.title = "State: Meghalaya\nCapital: Shillong";
  }
  if (state === "assam") {
    flag.style.top = "330px";
    flag.style.left = "1250px";
    flag.title = "State: Assam\nCapital: Dispur";
  }
  if (state === "nagaland") {
    flag.style.top = "340px";
    flag.style.left = "1300px";
    flag.title = "State: Nagaland\nCapital: Kohima";
  }
 
  if (state === "telangana") {
    flag.style.top = "570px";
    flag.style.left = "900px";
    flag.title = "State: Telangana\nCapital: Hyderabad";
  }
  if (state === "andhra pradesh") {
    flag.style.top = "650px";
    flag.style.left = "900px";
    flag.title = "State: Andra Pradesh\nCapital: Amaravati";
  }
  if (state === "karnataka") {
    flag.style.top = "650px";
    flag.style.left = "820px";
    flag.title = "State: karnataka\nCapital: Bengaluru";
  }
  if (state === "tamil nadu") {
    flag.style.top = "760px";
    flag.style.left = "900px";
    flag.title = "State: Tamil Nadu\nCapital: Chennai";
  }
  if (state === "kerala") {
    flag.style.top = "790px";
    flag.style.left = "840px";
    flag.title = "State: kerala\nCapital: Thiruvananthapuram";
  }
  if (state === "odisha") {
    flag.style.top = "490px";
    flag.style.left = "1050px";
    flag.title = "State: Odisha\nCapital:Bhubaneswar";
  }
  if (state === "goa") {
    flag.style.top = "630px";
    flag.style.left = "790px";
    flag.title = "State: Goa\nCapital:Panaji";
  }
  
  

  document.getElementById("Map").appendChild(flag);
  
  document.getElementById("state").value = "";
 
  playSound();
   
}

  const allStates = [
  { name: "Delhi", top: "280px", left: "880px", capital: "New Delhi" },
  { name: "Madhya Pradesh", top: "430px", left: "880px", capital: "Bhopal" },
  { name: "Ladakh", top: "100px", left: "870px", capital: "Leh" },
  { name: "Jammu & Kashmir", top: "150px", left: "850px", capital: "Srinagar" },
  { name: "Himachal Pradesh", top: "200px", left: "880px", capital: "Shimla" },
  { name: "Punjab", top: "220px", left: "850px", capital: "Chandigarh" },
  { name: "Uttarakhand", top: "240px", left: "930px", capital: "Dehradun" },
  { name: "Haryana", top: "250px", left: "870px", capital: "Chandigarh" },
  { name: "Uttar Pradesh", top: "300px", left: "930px", capital: "Lucknow" },
  { name: "Rajasthan", top: "300px", left: "800px", capital: "Jaipur" },
  { name: "Bihar", top: "370px", left: "1080px", capital: "Patna" },
  { name: "Jharkhand", top: "420px", left: "1080px", capital: "Ranchi" },
  { name: "West Bengal", top: "420px", left: "1150px", capital: "Kolkata" },
  { name: "Chhattisgarh", top: "470px", left: "990px", capital: "Raipur" },
  { name: "Maharashtra", top: "530px", left: "810px", capital: "Mumbai" },
  { name: "Sikkim", top: "320px", left: "1160px", capital: "Gangtok" },
  { name: "Arunachal Pradesh", top: "280px", left: "1300px", capital: "Itanagar" },
  { name: "Tripura", top: "410px", left: "1240px", capital: "Agartala" },
  { name: "Mizoram", top: "430px", left: "1270px", capital: "Aizawl" },
  { name: "Manipur", top: "380px", left: "1300px", capital: "Imphal" },
  { name: "Meghalaya", top: "360px", left: "1230px", capital: "Shillong" },
  { name: "Assam", top: "330px", left: "1250px", capital: "Dispur" },
  { name: "Nagaland", top: "340px", left: "1300px", capital: "Kohima" },
  { name: "Telangana", top: "570px", left: "900px", capital: "Hyderabad" },
  { name: "Andhra Pradesh", top: "650px", left: "900px", capital: "Amaravati" },
  { name: "Karnataka", top: "650px", left: "820px", capital: "Bengaluru" },
  { name: "Tamil Nadu", top: "760px", left: "900px", capital: "Chennai" },
  { name: "Kerala", top: "790px", left: "840px", capital: "Thiruvananthapuram" },
  { name: "Odisha", top: "490px", left: "1050px", capital: "Bhubaneswar" },
  { name: "Goa", top: "630px", left: "790px", capital: "Panaji" }
];
function AddAll(){

 
  document.querySelectorAll("#Map i").forEach(i => i.remove());

  allStates.forEach(state => {
    const flag = document.createElement("i");
    flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3");
    flag.style.position = "absolute";

    flag.style.top = state.top;
    flag.style.left = state.left;
    flag.title = `State: ${state.name}\nCapital: ${state.capital}`;

    document.getElementById("Map").appendChild(flag);
    playSound();
  });
}

function clearAll(){
  document.querySelectorAll("#Map i").forEach(flag => flag.remove());
   playSound();
}

function playSound() {
    const audio = document.getElementById("flagSound");
    audio.currentTime = 0;   // always restart from beginning
    audio.play().catch(err => {
        console.log("Audio Play Error:", err);
    });
}

  
 



