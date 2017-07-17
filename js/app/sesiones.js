/**
 * @fileoverview sesiones.js  Define la UI que se mostrara al usuario
 * @author Ivan Tadeo Huerta <ivantec5sem@gmail.com>
 *
 * Identifica tipo de usuario.
 * @module sesiones
 * @see js/app/login.js y  js/app/estructura.js 
 * 
 */

require(['login','estructura','connections'], function(login,estructura,connections) {
    var tipoUsuario = amplify.store(connections.variableDeSesion);

    switch (tipoUsuario) {
        case null:
        case undefined:
            login.init();
            break;
        default:
            $('body').estructuraGeneral({
                tituloFormulario: 'Bienvenido',
                datosUsuario: tipoUsuario.datosUsuario
            });


    }
});
