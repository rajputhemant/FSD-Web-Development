async function getNewJoke() {

   const respone = await fetch("https://official-joke-api.appspot.com/jokes/random"); 
   

    const data= await respone.json();
    
    document.getElementById("steup").innerHTML=data.setup;
     document.getElementById("puchLine").innerText=data.punchline;
}