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
});