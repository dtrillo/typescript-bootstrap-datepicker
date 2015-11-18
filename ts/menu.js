/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/bootstrap.d.ts" />
/// <reference path="interfaces.ts" />
define(["require", "exports", "jquery"], function (require, exports, $) {
    var MenuApp = (function () {
        function MenuApp() {
            this.debug = false;
            console.log('Plantilla cargada con exito!');
            this.inicializar();
        }
        MenuApp.prototype.inicializar = function () {
            var that = this;
            var datapicker_opciones = {
                language: 'es',
                autoclose: true
            };
            $('#mi_fecha').datepicker(datapicker_opciones);
        };
        return MenuApp;
    })();
    return MenuApp;
});
//# sourceMappingURL=menu.js.map