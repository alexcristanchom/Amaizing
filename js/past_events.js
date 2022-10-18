let cards = document.getElementById("cards")
let fecha  = Date.parse(amazingEvents.currentDate)
let data = amazingEvents.events

function filtrarEventosFuturo (data,fecha) {
   let filtrado = data.filter(function(item) {return Date.parse(item.date) < fecha } )
    return filtrado 
}

let arrayFiltrado = filtrarEventosFuturo (data,fecha)



function imprimirEventos(array,contenedor){
   for (let i = 0; i < array.length; i++)
    cards.innerHTML += 
   
               `<div class=" card p-1" style="width: 18rem; ">
                   <img src="${array[i].image}" class="card-img-top" alt="imagen1">
                   <div class="card-body">
                       <h5 class="card-title">${array[i].name}</h5>
                       <p class="card-text">${array[i].description}</p>    
                       <div class="d-flex justify-content-between">
                           <h6>Price: ${array[i].price}</h6>
                           <a href="#" class="btn btn-primary">Details</a>
   
                       </div>
                   </div>
               </div>`
   
}
imprimirEventos(arrayFiltrado,cards)