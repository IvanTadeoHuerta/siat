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
        

        //Config 
        estructura: 'src/js/config/estructura',
        routing: 'src/js/config/routing',
        sesiones: 'src/js/config/sesiones',
        loadCSS: 'src/js/config/loadCSS',
        
        //App
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
        loadCSS: {
            deps: ['jquery'],
        },
        metisMenu:{
            deps: ['jquery'],
        },
        admin:{
            deps: ['jquery'], 
        },
        widget:{
            deps: ['bootstrapJs'],
        },
        estructura:{
            deps: ['jquery','bootstrapJs' ,'amplify','widget','metisMenu','admin']
        },
        sesiones:{
            deps:['jquery','bootstrapJs','amplify','estructura','loadCSS']
        },
        login: {
            deps: ['validate','estructura','classie']
        }

    },
    deps:['sesiones'],
    findNestedDependencies: true
});

