$( document ).ready(function() {
    $('.preload').first().delay(100).animate({'opacity':'1'},600);
    var url = new URL(window.location.href);
    var c = url.searchParams.get("unidad");
    var unidad = parseInt(c) - 1;
    loadFlat(unidad);
});

window.onload = function() {
    setTimeout(function(){ $(".preload").fadeOut(1000) }, 3000);
};

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