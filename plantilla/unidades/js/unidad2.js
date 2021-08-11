$( document ).ready(function() {

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
});