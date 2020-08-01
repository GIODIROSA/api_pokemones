//===== configuracion name game====
$(".name__game").css({
    "font-size": "25px",
    "display": "inline-block",
    "color": "white",
    "font-family": "yanone kaffeesatz",
    "padding": "0 10px"
});


//===== estructura de css de title
$(".title").css({
    "text-align": "center",
    "font-weigth": "800",
    "padding": "150px 0",
    "font-family": "yanone kaffeesatz",
    "font-weigth": "700",
    "text-shadow": "2px 5px 10px black",
    "opacity": "0.8"

});


//=======modificaciones del title
$(".title--modi").css({
    "color": "white", 
    "font-size": "150px",
    
});

//=====configuracion de hynt

$(".section__contenido").css({
    "background": "red",
    "margin": "auto",
    "margin-top": "20px",
    "padding-top": "20px",
    "padding": "0px 20px",
    "border-radius": "5px",
    "width": "550px",
    "height": "200px"
});

$("#parrafo").css({
    "text-align": "left",
    "padding-top": "20px",
    "color": "white",
    "font-family": "yanone Kaffeesatz",
    "font-size": "15px"
});


//=======configuracion del input busca pokemones
$(".searchPoke").css({
    "margin-top": "50px"
});

$(".btn").css({
    "margin-top": "50px"
});


//==================FIN DE CSS===================




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
        <div class="col-2 card m-3">
            <img src="${el.img}" class="card-img-top" alt="imagen">
            <img src="${el.img2}" class="card-img-top" alt="imagen">
            <div class="card-body">
                <p class="card-title01">Numero# ${el.pokedex}</p>
                <p class="card-title">Nombre: ${el.nombre.toUpperCase()}</p>
                <p class="card-title">Habitat: ${el.mana.toUpperCase()}</p>
                <h5 class="titulo"><span class: "datoPokemones">Datos de Pokemones</span></h5>
                <p class="card-title">Ataque: ${el.ataque}</p>
                <p class="card-title">Punto vida: ${el.hp}</p>
                <p class="card-title">Defensa: ${el.defensa}</p>
                <p class="card-title">Velocidad: ${el.velocidad}</p>

        <button onclick= "statistics(${el.ataque}, ${el.hp}, ${el.defensa}, ${el.velocidad})" 
                type="button" class="btn btn-success btn_cartas" data-toggle="modal" data-target="#graphiPoke">
                Ver Gráfica
        </button>

        `);
        });
        
    }
});
}


//======accion de teclado======
$(document).on('keypress', e => {
    if(e.which == 13) {
        buscarPoke();
    }
});


// === array de pokemones para el select=======
let arrPoke= [];
let number= 2; //esto tiene que tener el valor del select

//====tercer ajax para elaborar el select======


$.ajax({url: `https://pokeapi.co/api/v2/pokemon/${number}`, success: function(data){
let datapoke= data;
console.log(data);


}});

//ajax donde carga solo los name de los pokemones

let arrName= [];

$.ajax({url:"https://pokeapi.co/api/v2/pokemon/", success: function(dname) {
let dataName = dname.results;
dataName.forEach(n => {
    arrName.push(n.name);
})

//verificando el array vacio que se le va ser el push
console.log(arrName);
//recorriendo el array
for(let i= 0; i < arrName.length; i++){
    let optionName= arrName[i];
    //verificar que se imprime por consola los name string del array
    console.log(optionName);
    //cargar el select

 // $("#select_poke").append(`<option value=${parseInt(parseInt(i) + 1)}>${optionName[i]}</option>`);


//     var long = ArrayPeriodos.lenght();

// for(var i = 0; i <= long; i++){
//   $("#cbmperiodo").append("<option value=""" + ArrayPeriodos[i] + """>" + ArrayPeriodos[i] + "</option>")
}
 
}

} );


//=============CARGA DEL BOTON DEL INPUT INICIAL===========
function buscarPoke(){
   let q= $("#usuarioInput").val();
   ejecutarAJAX(q);
};

//========= FUNCTION DE PRUEBA PARA EL BOTON=============
function probando(){
    alert("probando sonido");
}
    
// function y carga de canvas.js

    function statistics(ataque, hp, defensa, velocidad) {

        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light1", // "light1", "light2", "dark1", "dark2"
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















   