/**
 * @fileoverview loadCSS.js Carga todos los estilos que seran utilizados por el sistema
 *
 * @author Ivan Tadeo Huerta <ivantec5sem@gmail.com>
 * @module loadCSS.js
 *
 */
define([], function() {

    $.when(
    /*pro $('<link>', { rel: 'stylesheet', type: 'text/css', href: '../dist/css/app.css' }).appendTo('head') pro*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/normalize.css' }).appendTo('head'), /*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/set1.css' }).appendTo('head'), /*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/bootstrap/css/bootstrap.min.css' }).appendTo('head'),/*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/metisMenu/metisMenu.min.css' }).appendTo('head'), /*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/font-awesome/css/font-awesome.min.css' }).appendTo('head'), /*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/mycss.css' }).appendTo('head'), /*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../src/css/colorError.css' }).appendTo('head'), /*</des>*/
    /*<des>*/$('<link>', { rel: 'stylesheet', type: 'text/css', href: '../vendors/sb-admin-2/sb-admin-2.css' }).appendTo('head') /*</des>*/
    );
    
});