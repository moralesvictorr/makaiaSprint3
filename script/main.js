// Sprint 3 Makaia - Desarrollado por Víctor Manuel Morales Hoyos
const API_URL = "http://localhost:3000/properties";
let containerCards = document.querySelector(".featured-cards");// Container de las cards en la seccion Featured Properties
let favIcon = document.querySelector(".btn-fav");
let btnSumit = document.querySelector(".btn-form");
let formValue = document.querySelector(".form");
let favoritos = [];


const loadCard = async (API) => {
  const respuesta = await fetch(API);
  const datos = await respuesta.json();
  let cont = 0;
  console.log(datos);
  try {
    containerCards.innerHTML = ``;

    for (let index = 0; index < datos.length; index++) {
      if (cont <= 5) {
        const { id, image, name, location, area, rooms, type, status, price, parking, bath, owner, description } = datos[index];
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
        containerCards.appendChild(div);
        cont += 1;
        // EVENTO AGREGANDO A FAVORITOSSS
        const boton = document.getElementById('agregar' + id);

        boton.addEventListener("click", () => {
          agregarAFavoritos(id);
          boton.classList.add("enabled");
        })

        // EVENTO CLICK EN LA IMAGEN
        const imgCard = document.getElementById('imagen' + id);
        imgCard.addEventListener("click", () => {
          irADetalles(id);
        })

      }
    }
  } catch (error) {
    console.log(error);
  }
};
loadCard(API_URL);

//------------------ Agregar a Favoritos y Local Storage
const getDatos = async (id) => {
  const respuesta = await fetch(API_URL + "?id=" + id);
  const datos = await respuesta.json();
  let objeto = datos[0]
  let cont = 0;
  return objeto;
}
const agregarAFavoritos = async (_id) => {
  let datos = await getDatos(_id);
  let _res = localStorage.getItem("favoritos") // undefined // nullables
  if (_res == undefined || _res == null) {
    let favoritos = [];
  } else {
    favoritos = JSON.parse(_res)
  }
  let bandera = true;
  favoritos.forEach((element) => {
    if (element.id == _id) {
      bandera = false;
      console.log("Carta ya añadida a favoritos")
    }
  })

  if (bandera) {
    favoritos.push(datos);
    let favoritosJSON = JSON.stringify(favoritos)
    localStorage.setItem("favoritos", favoritosJSON)

  }

}

//--------------------- Busquedas
btnSumit.addEventListener("click", event => {
  event.preventDefault()
  let select1 = document.querySelector("#selectUbication").value;
  let select2 = document.querySelector("#selectType").value;
  let input = document.querySelector(".input-form").value;

  if (!input == "") {
    loadCard(API_URL + "?q=" + input);
  } else {
    if (!select1 == "" || !select2 == "") {
      if (!select1 == "" && !select2 == "") {
        loadCard(API_URL + "?location=" + select1 + "&type=" + select2);
      } else if (!select1 == "") {
        loadCard(API_URL + "?location=" + select1);
      } else {
        loadCard(API_URL + "?type=" + select2);
      }
    } else {
      loadCard(API_URL);
    }
  }
  console.log(select1, select2);
  formValue.reset();
})

//------------------ Detalles pagina
const irADetalles = async (_id) => {
  let datos = await getDatos(_id);
  localStorage.setItem("detalles", JSON.stringify(datos))
  console.log(datos)
  window.location.href = "/details.html";
}

//----------------------------------------

const logo = document.querySelector(".logo-link")
logo.addEventListener("click", event => {
  window.location.href = "/index.html";
})