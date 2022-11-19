// Sprint 3 Makaia - Desarrollado por Víctor Manuel Morales Hoyos
const API_URL = "http://localhost:3000/properties";
//------------- Mostrar cartas Fav en Favorites

const mostrarEnFav = () => {

  let respuestasJson = localStorage.getItem("favoritos")
  let favoritos = JSON.parse(respuestasJson)
  console.table(favoritos);

  let favContainer = document.querySelector(".featured-cards")

  for (let index = 0; index < favoritos.length; index++) {
    const { id, image, name, location, area, rooms, type, status, price, parking, bath, owner, description } = favoritos[index];
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `
                    <img class="card-img" id="imagen${id}" src="${image}">
                      <div class="card-buttons">
                          <h3 class="type">${type.toUpperCase()}</h3>
                          <h3 class="status">${"FOR " + status.toUpperCase()}</h3>

                            <div class="price-container">
                              <h3 class="price">${"$" + price}</h3>
                            </div>   
                          <button class="btn-fav" id="agregar${id}"> <i class="fa-regular fa-heart"></i> </button>
                      </div>
                        

                      <div class="container-card-info">
                      <h4 class="card-text" id="location">${location}</h4>  
                      <h3 class="card-text" id="name">${name}${" "+location}</h3>
                      <h3 class="card-text" id="owner">${owner.ownerName}</h3> 
                      
                        <div class="container-card-icons">
                          <div class="block">
                            <img class="icon" src="/images/icons/Area Icon.png">
                            <h3 class="card-text element">${area}m2</h3>
                          </div>
                          <div class="block">
                           <img class="icon" src="/images/icons/Garage Icon.png">
                           <h3 class="element">${parking}</h3>
                          </div>
                          <div class="block">
                            <img class="icon" src="/images/icons/Bathroom Icon.png">
                            <h3 class="element">${bath}</h3>
                           </div>
                           <div class="block">
                            <img class="icon" src="/images/icons/Bedroom Icon.png">
                            <h3 class="element"> ${rooms}</h3>
                          </div>
                          </div>

                       </div> 
            `
    favContainer.appendChild(div);

            // EVENTO CLICK EN LA IMAGEN
            const imgCard = document.getElementById('imagen' + id);
            imgCard.addEventListener("click", () => {
              irADetalles(id);
            })

  }
}

mostrarEnFav();

//------------------ Detalles pagina
const getDatos = async (id) => {
  const respuesta = await fetch(API_URL + "?id=" + id);
  const datos = await respuesta.json();
  let objeto = datos[0]
  let cont = 0;
  return objeto;
}
const irADetalles = async (_id) => {
  let datos = await getDatos(_id);
  localStorage.setItem("detalles", JSON.stringify(datos))
  console.log(datos)
  window.location.href = "/details.html";
}

//----------------------------------------
//-----------------------------------------
const logo = document.querySelector(".logo-link")
logo.addEventListener("click", event =>{
  window.location.href = "/index.html";
})