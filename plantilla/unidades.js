$( document ).ready(function() {
    

    var url = new URL(window.location.href);
    var c = url.searchParams.get("unidad");
    var unidad = parseInt(c) - 1;
    loadFlat(unidad);
});

$('.init-unidad').off('click').on('click', function(evt){
    var item = $(this).attr('data-id');
    location.href="unidades/unidad"+item+".html";
    evt.preventDefault();
});

function loadFlat(init = 0) {
    flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: init,
        buttonNext: 'Siguiente',
        onItemSwitch: function (currentItem,previousItem,index) {
            var slide = $(currentItem).attr("data-flip-title");
        }
    });
}