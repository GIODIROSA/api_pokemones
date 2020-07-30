//===la variable que carga un array del objeto extraido de success===
let pokemones = [];

//=====carga de la data=======
function ejecutarAJAX(q){
$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${q}`,
    success: function (result) {
        let pokemon={
        pokedex: result.id,
        nombre: result.name,
        ataque: result.stats[1].base_stat,
        hp: result.stats[0].base_stat,
        defensa: result.stats[2].base_stat,
        velocidad: result.stats[5].base_stat,
        img: result.sprites.front_default,
        img2:result.sprites.back_default,
        mana:result.types[0].type.name
        };  
        pokemones.push(pokemon);
        console.log(pokemones);
        // probando

        //==== limpia la carga====
        $("#cuerpo").html("");
    
        //======template de las cards=====
        pokemones.forEach((el, i) => {
            $("#cuerpo").append(`
        <div class="col-2 card m-2">
            <img src="${el.img}" class="card-img-top" alt="imagen">
            <img src="${el.img2}" class="card-img-top" alt="imagen">
            <div class="card-body">
                <p class="card-title">Numero# ${el.pokedex}</p>
                <p class="card-title">Nombre ${el.nombre.toUpperCase()}</p>
                <p class="card-title">Mana ${el.mana.toUpperCase()}</p>
                <button onclick= "statistics()" 
                type="button" class="btn btn-primary" data-toggle="modal" data-target="graphiPoke">
        Ver Gráfica
        </button>
            </div>
        </div>
        `);
        });
        
    
    }
 
});
}
//=============carga del boton===========
function buscarPoke(){
   let q= $("#usuarioInput").val();
   ejecutarAJAX(q);
};

//========= FUNCTION DE PRUEBA PARA EL BOTON=============
function probando(){
    alert("probando sonido");
}
    
       

    function statistics(ataque, hp, defensa, velocidad) {

        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Desktop Browser Market Share in 2016"
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: ataque, label: "Ataque" },
                    { y: hp, label: "Punta de Vida" },
                    { y: defensa, label: "Defensa" },
                    { y: velocidad, label: "Velocidad" }
    
                ]
            }]
        });
        chart.render();
        
        }








    //=============NO PRESTAR ATENCION===================
// template de las card

{/* <h5 class="card-title"> probando ${el.ataque}</h5>
<h5 class="card-title">${el.hp}</h5>
<p class="card-text">${el.defensa}</p>
 <p class="card-text">${el.velocidad}</p> */}

// funcion de canvas 


 // function statistics(ataque, hp, defensa, velocidad) {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         theme: "light2", // "light1", "light2", "dark1", "dark2"
//         exportEnabled: true,
//         animationEnabled: true,
//         title: {
//             text: "Desktop Browser Market Share in 2016"
//         },
//         data: [{
//             type: "pie",
//             startAngle: 25,
//             toolTipContent: "<b>{label}</b>: {y}%",
//             showInLegend: "true",
//             legendText: "{label}",
//             indexLabelFontSize: 16,
//             indexLabel: "{label} - {y}%",
//             dataPoints: [
//                 { y: ataque, label: "Ataque" },
//                 { y: hp, label: "Punta de Vida" },
//                 { y: defensa, label: "Defensa" },
//                 { y: velocidad, label: "Velocidad" }

//             ]
//         }]
//     });
//     chart.render();
    
//     }