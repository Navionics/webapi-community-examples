
jQuery(document).ready(function($) {

    "use strict";

    function Magnifier(options, mapObject) {


        // `this` wrapper
        var vm = this;


        // The public method
        var services = {
            magnify:magnify,
            minimize:minimize,
            isMagnified:isMagnified,
            onChange:onChange
        };


         // The default Settings
        var settings = $.extend({
            toggle: ".fullscreen-toggle",
            view:".panel"
        }, options );



         // Intercept toggle click
        $(settings.toggle).on("click", function() {
            toggleFullscreen();
        });


         // Store view dom instance
        vm.view=$(settings.view);

         // Store toggle dom istance
        vm.toggle=$(settings.toggle);



         // Check if Magnified the view
        function isMagnified(){
            return vm.view.hasClass("fullscreenslideshow");
        }


         // Toggle Fullscreen action
        function toggleFullscreen(){
            if (isMagnified()){
                minimize();
            }else{
                magnify();
            }
        }


         // Minimize action
        function minimize(){
            vm.view.removeClass("fullscreenslideshow");
            vm.toggle.addClass("glyphicon-fullscreen");
            vm.toggle.removeClass("glyphicon-resize-small");
            mapObject.resize();
            callCalback();
        }


         // Magnify action
        function magnify(){
            vm.view.addClass("fullscreenslideshow");
            vm.toggle.removeClass("glyphicon-fullscreen");
            vm.toggle.addClass("glyphicon-resize-small");
            mapObject.resize();
            callCalback();
        }


         // Define onChange callback
        function onChange(callback){
            vm.callback=callback;
        }


         // The real callCalback
        function callCalback(){
            if (vm.callback && typeof(vm.callback) === "function") {
                vm.callback.call(vm);
            }
        }

        return services;
    }


     // Define the Global Class
    window.Magnifier=Magnifier;

});
