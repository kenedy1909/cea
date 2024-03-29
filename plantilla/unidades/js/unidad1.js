$( document ).ready(function() {
    var url = new URL(window.location.href);
    var location_ova = url.searchParams.get("location");
    
    initScorm();
    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    // Toma la variable location que llego por URL valida si existe, y realiza en enlace hasta la ultima pantalla guardada Scorm
    if (location_ova === null || location_ova === '' || location_ova === 'null') {
        console.log(location_ova+" NO existe location");
    }else{
        $('#smartwizard').smartWizard("goToStep", parseInt(location_ova));
    }
    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
    });
    
    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
    });
    $("#demo01").animatedModal({
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutRight',
        color:'#39BEB9',
        beforeOpen: function() {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity:1, stagger: 450,  defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();

        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    $("#demo02").animatedModal({
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutRight',
        color:'#39BEB9',
        beforeOpen: function() {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity:1, stagger: 450,  defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();

        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    $("#demo03").animatedModal({
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutRight',
        color:'#39BEB9',
        beforeOpen: function() {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity:1, stagger: 450,  defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();

        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });
    $("#demo04").animatedModal({
        animatedIn:'bounceIn',
        animatedOut:'bounceOutLeft',
        color:'#39BEB9',
        beforeOpen: function() {
            var children = $(".thumb");
            var index = 0;
            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideInLeft", { opacity:1, stagger: 450,  defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 100);
            }

            addClassNextChild();
        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });

    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
        
        EditarLocation(stepIndex);
        moveBarPorcentaje(stepIndex);
        console.log("Here is the content for step " + stepIndex);
        switch(stepIndex) {
            default:
            // code block
        }
    });
});
function moveBarPorcentaje(stepIndex) {
    var pagestotal = ($("#smartwizard li").length)-1;
    console.log(pagestotal);
    var regla = (stepIndex/pagestotal)*100;
    console.log(regla);
    var elem = document.getElementById("myBar");
    $("#percentext").text(parseInt(regla) + "%");
    $(elem).animate({
        width: regla + "%"
    }, 800 );
}

window.onunload = function (){
    endScorm();
}