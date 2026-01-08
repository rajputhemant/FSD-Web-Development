 function Shop() {
  const productList = document.getElementById("productList");
  

  fetch(`https://fakestoreapi.com/products`)
  .then(Response=>Response.json())
  .then(data=>{
    displayProducts(data);
  })
  .catch(error =>{
    console.error("Error fatching data:" , error);
  });
  
   function displayProducts(products){
    productList.innerHTML="";

    products.forEach(product => {
        productList.innerHTML +=
        `
      <div class="col-md-6 col-xl-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top p-3" alt="${product.title}">
          <div class="card-body">
            <h6 class="card-title">${product.title.slice(0, 40)}...</h6>
            <p class="card-text text-muted small line-clamp flex-row-1">
            ${product.description.slice(0,50)} </p>
            <p class="text-success fw-bold">₹ ${product.price*100}</p>
            <p class="text-muted">${product.rating.rate} (${product.rating.count})</p>
            <button class="btn btn-primary w-100">Add to Cart</button>
          </div>
        </div>
      </div>
       `; 
    });
   }  

   window.location.href="product.html";
}
function Contect(){
  const name= document.getElementById("name").value.trim();
  const adress= document.getElementById("Address").value.trim();
  const email= document.getElementById("Email").value.trim();
  const phone= document.getElementById("Phone").value.trim();
  const payment= document.getElementById("payment").value.trim();
  const quantiy= document.getElementById("Quantity").value.trim();
  alert("Thank you for Shoping "+name);
  
}