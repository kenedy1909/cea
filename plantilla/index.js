
$( document ).ready(function() {
    $.getJSON("data.json", function(json) {
        console.log(json);
        $("#titulo_ova").html(json.nombre_ova);
        $("#nombre_ova").html(json.ova);
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    initScorm();

    var location_ova = ObtenerLocation();
    if (location_ova === null || location_ova === '' || location_ova === 'null') {
        console.log(location_ova+" NO existe location");
    }else{
        console.log(location_ova+" SI existe location");
        location.href = "unidades/unidad1.html?location="+location_ova;
    }
})

window.onunload = function (){
    endScorm();
}



