'use strict';

/**
 * @fileoverview login.js  Define la estructura del login 
 * @author Ivan Tadeo Huerta <ivantec5sem@gmail.com>
 *
 *
 * Carga archivos de html , css y ejecuta ajax a un servidor para loageo. Representa el Login
 * @module login
 * @see js/app/routing.js
 * @see js/app/classie.js 
 * 
 */

define(['routing', 'classie'], function (routing, classie) {

    var atributos = {
        imagenUrl: routing.rutaImagenes,
        derechos: 'Tech Pro® 2017 Todos Los Derechos Reservados',
        empresa: {
            id: 'empresa',
            name: 'empresa'
        },
        usuario: {
            id: 'usuario',
            name: 'usuario'
        },
        password: {
            id: 'password',
            name: 'password'
        },
        botonLogin: {
            id: 'btnBotonInicioSesion'
        },
        formularioLogin: {
            id: 'formLogin'
        },
        etiquetaError: {
            id: 'mostrarError'
        },
        recordar: {
            id: 'recordar'
        }

    };

    var formulariosDOM = {
        _login: function _login() {
            return '<div class="container">\n                            <div class="row">\n                                <div class="col-md-4 col-md-offset-4">                               \n                                    <div class="login-panel panel-personalizado panel-default">\n                                        <div class="panel-heading text-center" style="background-color: transparent; border-color: transparent;">\n                                            <img src="' + atributos.imagenUrl + 'techproLogin.png" class="img-responsive" style="width: 340px; height: 100px;">\n                                        </div>\n                                        <div class="panel-body">\n                                            <form id="' + atributos.formularioLogin.id + '" role="form" autocomplete="off" onsubmit="return false;">\n                                                <fieldset>\n                                                    <div class="form-group text-center">\n                                                        <!--<input class="form-control" placeholder="E-mail" name="email" type="email" autofocus>-->\n                                                        <span class="input input--hoshi">\n                                                            <input class="input__field input__field--hoshi1" type="text" id="' + atributos.usuario.id + '" name="' + atributos.usuario.name + '"/>\n                                                            <label class="input__label input__label--hoshi1 input__label--hoshi1-color-4" for="txtUsuario">\n                                                                <p><span class="input__label-content input__label-content--hoshi">USUARIO</span></p>\n                                                            </label>\n                                                        </span>\n                                                        <div class="errorUsuario" style="margin-top:-15px"></div>\n                                                    </div>\n                                                    <div class="form-group text-center">\n                                                        <span class="input input--hoshi">\n                                                            <input class="input__field input__field--hoshi1" type="password" id="' + atributos.password.id + '" name="' + atributos.password.name + '" />\n                                                            <label class="input__label input__label--hoshi1 input__label--hoshi1-color-4" for="txtPassword">\n                                                                <p><span class="input__label-content input__label-content--hoshi">CONTRASE\xD1A</span></p>\n                                                            </label>\n                                                        </span>\n                                                        <div class="errorPassword" style="margin-top:-15px"></div>\n                                                    </div>\n                                                    <label style="color:red" id="' + atributos.etiquetaError.id + '"></label>\n                                                    <div class="col-md-4 col-sm-4 col-xs-12 col-md-offset-3 text-center">\n                                                        <!-- Change this to a button or input when using this as a form -->\n                                                        <button type="submit" id="' + atributos.botonLogin.id + '" class="btn btn-default text-center" style="color: #99C21B; font: bold; margin-left: 5px;">Iniciar sesi\xF3n</button>\n                                                    </div>\n                    \n                                                    \n                                                    <div class="form-group">\n                                                        <div class="col-md-12 col-sm-12 col-xs-12 text-center" style="padding-top: 10px;">\n                                                            <label style="color: white;">\xBFOlvidaste tu contrase\xF1a? Haz <a href="#" style="color: white; text-decoration: underline;">click aqui</a></label>\n                                                        </div>                                    \n                                                    </div>\n                                                </fieldset>\n                                            </form>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    \n                        <div class="col-md-12 col-sm-12 col-xs-12 text-center" style="padding-top: 10px;">\n                            <label style="color: white; font: bold;">' + atributos.derechos + '</label>\n                        </div>';
        }
    };

    var cleanDOM = {
        _login: function _login() {
            $('body').attr('class', '');
        }

    };

    var drawDOM = {
        _login: function _login() {
            $('body').append(formulariosDOM._login());
            $('.contenedor').fadeOut("slow");

            $('body').attr('class', 'body-personalizado');
        }

    };

    var funciones = {
        _setCookie: function _setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },

        _getCookie: function _getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        _checkCookie: function _checkCookie(nombreVariable) {
            if (this._getCookie(nombreVariable) != "") {
                return this._getCookie(nombreVariable);
            } else {
                return '';
            }
        }

    };

    var events = {
        _login: function _login(e) {
            $('#' + atributos.usuario.id).val(funciones._checkCookie('usuario'));
            $('#' + atributos.password.id).val(funciones._checkCookie('password'));
            if (funciones._checkCookie('usuario') != "" && funciones._checkCookie('password')) {
                $('#' + atributos.recordar.id).prop('checked', true);
            } else {
                $('#' + atributos.recordar.id).prop('checked', false);
            }

            if (!String.prototype.trim) {
                (function () {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function () {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
                // in case the input is already filled..
                if (inputEl.value.trim() !== '') {
                    classie.add(inputEl.parentNode, 'input--filled');
                }

                // events:
                inputEl.addEventListener('focus', onInputFocus);
                inputEl.addEventListener('blur', onInputBlur);
            });

            function onInputFocus(ev) {
                classie.add(ev.target.parentNode, 'input--filled');
            }

            function onInputBlur(ev) {
                if (ev.target.value.trim() === '') {
                    classie.remove(ev.target.parentNode, 'input--filled');
                }
            }
        }

    };

    var peticiones = {
        _login: function _login(url, datos) {

            var r = {
                success: function success(json, estatus) {
                    console.log(json);
                    if (json.response.sucessfull) {
                        var SessionData = {
                            NombreUsuario: 'Ivan',
                            datosUsuario: []
                        };
                        if ($('#' + atributos.recordar.id).is(':checked')) {
                            $('#' + atributos.recordar.id).prop('checked', true);
                            funciones._setCookie('usuario', 'parametro', 365);
                            funciones._setCookie('password', 'parametro', 365);
                            //SI almacena los datos en cache 
                        } else {
                            funciones._setCookie('usuario', '', 365);
                            funciones._setCookie('password', '', 365);
                            //NO almacena los datos en cache
                        }

                        SessionData.datosUsuario = json.data;
                        amplify.store(routing.variableDeSesion, SessionData);

                        $('body').estructuraGeneral({
                            tituloFormulario: 'Bienvenido',
                            datosUsuario: json.data
                        });
                    } else {
                        $('#' + atributos.etiquetaError.id).html(json.response.message);
                    }
                },
                error: function error(xmlhttp) {
                    if (xmlhttp.readyState == 0 && xmlhttp.status == 0) {
                        $('#' + atributos.etiquetaError.id).html('No se puede establecer conexión con el servidor');
                    } else {
                        $('#' + atributos.etiquetaError.id).html('Ocurrió un error al conectarse al servidor');
                    }
                },
                beforeSend: function beforeSend() {
                    $('#' + atributos.etiquetaError.id).html('');
                    $('#' + atributos.botonLogin.id).html('<img src="' + atributos.imagenUrl + 'btnImagenLogin.gif">');
                },
                complete: function complete() {
                    $('#' + atributos.botonLogin.id).html('Iniciar sesión');
                }
            };
            r = $.extend(r, url);
            r.data = datos;
            $.ajax(r);
        }

    };

    var validaciones = {
        _login: function _login() {
            $('#' + atributos.formularioLogin.id).validate({
                errorElement: 'span',
                wrapper: 'label',
                rules: {
                    empresa: {
                        valueNotEquals: -1
                    },

                    usuario: {
                        required: true,
                        maxlength: 30
                    },

                    password: {
                        required: true,
                        maxlength: 18
                    }
                },

                messages: {
                    empresa: {
                        valueNotEquals: 'Seleccione una opciòn'
                    },

                    usuario: {
                        required: 'Ingresa usuario',
                        maxlength: 'Max. 30 caracteres'
                    },

                    password: {
                        required: 'Ingresa password',
                        maxlength: 'Max. 18 caracteres'
                    }
                },

                submitHandler: function submitHandler(form) {
                    peticiones._login(routing.urlLogin, { action: 'login', user: $('#' + atributos.usuario.id).val(), password: $('#' + atributos.password.id).val() });
                },

                errorPlacement: function errorPlacement(error, element) {
                    if ($(element[0]).attr('id') == 'usuario') {
                        error.appendTo('.errorUsuario');
                    } else if ($(element[0]).attr('id') == 'password') {
                        error.appendTo('.errorPassword');
                    }
                }

            });

            jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
                return arg != value;
            });
        }

    };

    var initialize = function initialize() {
        cleanDOM._login();
        drawDOM._login();
        validaciones._login();
        events._login();
    };

    return {
        init: initialize
    };
});