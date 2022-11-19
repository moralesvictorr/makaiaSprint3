const mostrarDetalles = () =>{
    let datos = JSON.parse(localStorage.getItem("detalles"))
    console.log(datos)
    console.log("-------------------------------")
    const contenedor = document.querySelector(".property-details");
    const img = document.querySelector(".img")
    const { id, image, name, location, area, rooms, type, status, price, parking, bath, owner, description } = datos;
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `

                  <img class="card-img" src="${image}">

                  <div class="text-container">
                  <h1 class="card-text">${name}</h3>
                  <h3 class="type">${type.toUpperCase()}&nbsp;FOR&nbsp;${status.toUpperCase()}</h3>
                  <h3 class="price">${"Price: $" + price+" USD"}</h3>
                  <h4 class="card-text">${"Location: "+location}</h4>  
                  <p>${description}</p>
                  <h3 class="card-text">${"Area: "+area}m2</h3>
                  <h3>${"Parking: "+parking}</h3>
                  <h3>${"Bathrooms: "+bath}</h3>
                  <h3>${"Bedrooms: "+rooms}</h3>
                  <h3 class="card-text">${"Owner: "+owner.ownerName}&nbsp; - ${"Contact: "+owner.ownerConatact}</h3> 
                  <h3 class="card-text"></h3> 
                </div>
          `
    contenedor.appendChild(div);
}
mostrarDetalles();

//---------------------------------------------
const logo = document.querySelector(".logo-link")
logo.addEventListener("click", event =>{
  window.location.href = "/index.html";
})