
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-12", "p-2" );

      d.innerHTML = `
        <div class="card border rounded shadow p-3  d-flex gap-5">
            <div class="d-flex gap-5">
            <div><img src=${element.image} alt=${element.title} class="w-100 h-50 object-fit-contain"></div>
            <div class="">
            <div>${
        element.title.length > 50
          ? element.title.slice(0, 45) + "..."
          : element.title
      } </div>
            <div class="mt-2">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
            <div class="mt-3">${element.description.slice(0, 80)}...</div>
            <div class="mt-4">₹ ${element.price * 100}</div>
            <div class="mt-4">
                <button class="btn btn-info">AddToCard</button>
            </div>
            <div class="mt-4">
                <button class="btn btn-danger">Buy Now</button>
            </div>
            </div>
            
           </div>
        </div>`;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
