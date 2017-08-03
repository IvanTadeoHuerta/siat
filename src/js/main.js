/**
 * @fileoverview main.js contiene la carga de librerias, scripts y hojas de estilos ccs para todo el sistema. 
 *
 * @version 0.1.0
 *
 * @author Ivan Tadeo Huerta <ivantec5sem@gmail.com>
 * @copyright  tech-pro
 *
 */

require.config({
    baseUrl: '../',
    paths: {
        //Librerias utilizadas para el desarrollo
        jquery: 'vendors/jquery/jquery.min',
        bootstrapJs: 'vendors/bootstrap/js/bootstrap.min',
        amplify: 'vendors/amplify/amplify',
        validate: 'vendors/validate/validate',
        widget: 'vendors/jquery/jquery-ui.min',
        metisMenu: 'vendors/metisMenu/metisMenu.min',
        admin: 'vendors/sb-admin-2/sb-admin-2.min',
        classie: 'vendors/classie/classie',
        

        //App 
        estructura: 'src/js/config/estructura',
        routing: 'src/js/config/routing',
        sesiones: 'src/js/config/sesiones',
        login: 'src/js/app/login',


    },
    shim: {
        //Define dependencias entre archivos
        amplify: {
            deps: ['jquery'],
        },
        bootstrapJs:{
            deps: ['jquery'],
        },
        sesiones:{
            deps:['jquery','bootstrapJs','amplify','estructura']
        },
        login: {
            deps: ['validate','estructura','classie']
        },
        estructura:{
            deps: ['jquery','bootstrapJs' ,'amplify','widget','metisMenu','admin']
        },
        metisMenu:{
            deps: ['jquery'],
        },
        admin:{
            deps: ['jquery'], 
        }

    }
});


/**
 * Modulo que inicia el sistema.
 * @module 
 * @see js/app/sessiones.js
 */
require(['sesiones'], function() {
    $.when(
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/normalize.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/demo.css' }).appendTo('head'), 
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/set1.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/bootstrap/css/bootstrap.min.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/metisMenu/metisMenu.min.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/sb-admin-2/sb-admin-2.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/font-awesome/css/font-awesome.min.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/mycss.css' }).appendTo('head'),
        $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/colorError.css' }).appendTo('head'),
    );
});

