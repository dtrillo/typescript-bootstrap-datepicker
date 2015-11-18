/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/require.d.ts" />
/// <reference path="../typings/bootstrap.d.ts" />

/// <reference path="menu.ts" />
/// <amd-dependency path="menu.ts" />

require([
    'Menu',
    'jquery',
    'bootstrap',
    'bootstrap-datetime',
    "bootstrap-datetime-es"
], (MenuApp, $) => {
    'use strict';
    $(() => {
        var menu = new MenuApp();
    });
});