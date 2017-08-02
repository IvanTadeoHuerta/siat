/**
 * @fileoverview connections.js  Contiene las dirreciones a los services de los que se extraerá la información 
 * @author Ivan Tadeo Huerta <ivantec5sem@gmail.com>
 *
 * Almacena un objecto con las direcciones a los services, variable de session name y datos de scope global.
 * @exports coonections
 * 
 */

define([], function() {
    StringUrl= 'http://localhost:8084/SIAT/';

    datosGlobales= {
    	variableDeSesion: 'dataSession',
        urlLogin: {
            url: StringUrl + 'Login',
            type: 'POST',
            dataType: 'json'
        }

    };


    return datosGlobales;
});
