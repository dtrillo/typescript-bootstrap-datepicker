/// <reference path="./typings/require.d.ts" />
/**
 * Application configuration declaration.
 */
require.config({
    baseUrl: 'ts/',
    paths: {
        //main libraries
        "jquery": '../js/jquery',
        "bootstrap": '../js/bootstrap.min',
        "bootstrap-datetime": "../js/bootstrap-datepicker",
        "bootstrap-datetime-es": "../js/bootstrap-datepicker.es"
    },
    shim: {
        "jquery": {
            exports: '$'
        },
        "bootstrap": {
            deps: ['jquery']
        },
        "bootstrap-datetime": {
            deps: ["jquery", "bootstrap"],
            exports: "$.fn.datepicker"
        },
        "bootstrap-datetime-es": {
            deps: ["bootstrap-datetime"]
        }
    }
});
require(["app"]);
//# sourceMappingURL=config.js.map