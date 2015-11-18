/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/bootstrap.d.ts" />
/// <reference path="interfaces.ts" />


// http://vitalets.github.io/bootstrap-datepicker/

import $ = require("jquery");


class MenuApp {
    private debug: boolean = false;
    
    constructor() {
        console.log('Plantilla cargada con exito!');
        this.inicializar();
    }
    
    inicializar() { // Aquí vienen REQUISITOS iniciales
    	var that = this;
    	var datapicker_opciones = {
            	language: 'es',
            	autoclose: true
            	//clearBtn: true
            } 
        $('#mi_fecha').datepicker(datapicker_opciones);
    }
    
}

export = MenuApp;