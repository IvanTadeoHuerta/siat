/**
 * @fileoverview estructura.js Carga la estructura html que utilizará el sistema. 
 *
 * @author Ivan Tadeo Huerta <ivantec5sem@gmail.com>
 * @module estructura.js
 *
 */

require(['routing'], function(routing) {

    $.widget("custom.estructuraGeneral", {
        // default options
        options: {
            tituloFormulario: 'Nombre del formulario',
            tituloHeader: 'sistema de información administrativo tech pro',
            datosUsuario:[]
        },

        // The constructor
        _create: function() {
            //this.element.html('Bienvenido usuario de recursos Humanos');
            document.body.classList.remove('body-personalizado');
            document.body.classList.add('estructuraBody');
            this.element.html(this._contruirEstructura());
            this._eventos();

        },

        // Called when created, and later when changing options
        _refresh: function() {
           
            // Trigger a callback/event
            
        },

        // A public method to change the color to a random value
        // can be called directly via .colorize( "random" )
        random: function(event) {
           
        },

        // Events bound via _on are removed automatically
        // revert other modifications here
        _destroy: function() {
            // remove generated elements
           
        },

        // _setOptions is called with a hash of all options that are changing
        // always refresh when changing options
        _setOptions: function() {
         
        },

        // _setOption is called for each individual option that is changing
        _setOption: function(key, value) {
          
        },

        _contruirEstructura: function(){
            return '<div id="wrapper">'+
                        this._contenedorMenus()+
                        this._panelContenidoFormularios()+
                    '</div';

        },

        _contenedorMenus: function(){
            return '<!-- Navigation -->'+
                            '<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">'+
                            //Espacio para incluir los diferentes menus de la pantalla generica
                            this._cabecera()+
                            this._menuSuperior()+
                            this._menuLateral()+
                            //Fin de espacio de los menus
                            '</nav>';
        },

        _cabecera: function(){
            return '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
                            '<span class="sr-only">toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                        '<a class="navbar-brand" href="#">'+this.options.tituloHeader+'</a>'+
                    '</div>';
        },

        _menuSuperior: function(){
            return '<ul class="nav navbar-top-links navbar-right">'+
                        '<!-- /.dropdown -->'+
                        '<li class="dropdown">'+
                            '<a class="dropdown-toggle" data-toggle="dropdown" href="#">'+
                                '<i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>'+
                            '</a>'+
                            '<ul class="dropdown-menu dropdown-alerts">'+
                                '<li>'+
                                    '<a href="#">'+
                                        '<div>'+
                                            '<i class="fa fa-envelope fa-fw"></i> Message Sent'+
                                            '<span class="pull-right text-muted small">4 minutes ago</span>'+
                                        '</div>'+
                                    '</a>'+
                                '</li>'+
                                '<li class="divider"></li>'+
                                '<li>'+
                                    '<a class="text-center" href="#">'+
                                        '<strong>Ver todas</strong>'+
                                        '<i class="fa fa-angle-right"></i>'+
                                    '</a>'+
                                '</li>'+
                            '</ul>'+
                            '<!-- /.dropdown-alerts -->'+
                        '</li>'+
                        '<!-- /.dropdown -->'+
                        '<li class="dropdown">'+
                            '<a class="dropdown-toggle" data-toggle="dropdown" href="#">'+
                                '<i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>'+
                            '</a>'+
                            '<ul class="dropdown-menu dropdown-user">'+
                                '<li><a href="#"><i class="fa fa-user fa-fw"></i> Mi perfil</a>'+
                                '</li>'+
                                '<li><a href="#"><i class="fa fa-gear fa-fw"></i> Configuraciones</a>'+
                                '</li>'+
                                '<li class="divider"></li>'+
                                '<li class="logoutUser"><a href="#"><i class="fa fa-sign-out fa-fw"></i> Cerrar sesión</a>'+
                                '</li>'+
                            '</ul>'+
                            '<!-- /.dropdown-user -->'+
                        '</li>'+
                        '<!-- /.dropdown -->'+
                    '</ul>'+
                    '<!-- /.navbar-top-links -->';
        },
        _arrayObjectIndexOf: function(myArray, searchTerm) {
            var bandera=false;
                for (var i in myArray) {
                    if (i == searchTerm) {
                        bandera=true;
                    }
                }
                return bandera;
        },

        _menuLateral: function(){
            var menu='';
            for ( var indice in this.options.datosUsuario){
                    var tmpMenu='';
                    var tmpSubMenuString='';
                    var tmpSubMenu=true;
                    var subMenu='';
                    var clase='';
                    if(!this._arrayObjectIndexOf(this.options.datosUsuario[indice],'subMenu')){
                        clase = 'optionMenuItem';
                        tmpSubMenu=false;
                    }
                    

                    for (var elemento in this.options.datosUsuario[indice]){
                            if(elemento == 'nombreProceso'){
                                tmpMenu+= '<li>'+
                                    '<a href="#" name="menuPrincipal"  modulo=modulo'+this.options.datosUsuario[indice].idProceso+ 
                                        'class="'+clase+'"><i class="fa fa-dashboard fa-fw"></i>'+
                                        this.options.datosUsuario[indice].nombreProceso;
                            }

                            if(elemento == 'subMenu'){
                                
                                tmpSubMenuString='<span class="fa arrow"></span></a><ul class="nav nav-second-level">';
                                for ( var x in this.options.datosUsuario[indice][elemento]){
                                        for(var y in this.options.datosUsuario[indice][elemento][x]){
                                            if(y == 'nombreProceso'){
                                                tmpSubMenuString+=  '<li><a href="#" modulo=modulo'+this.options.datosUsuario[indice][elemento][x].idProceso+
                                                ' name="subMenu1" class="optionMenuItem">'+
                                                    this.options.datosUsuario[indice][elemento][x].nombreProceso+'</a></li>';
                                            }
                                        }
                                       
                                }
                                tmpSubMenuString+='</ul>';
                            }
                    }

                    if(!tmpSubMenu){
                        tmpMenu+='</a></li>';
                    }else{
                        tmpMenu+=tmpSubMenuString+'</li>';
                    }

                    menu+=tmpMenu;

            }
            return '<div class="navbar-default sidebar" role="navigation">'+
                        '<div class="sidebar-nav navbar-collapse">'+
                            '<ul class="nav" id="side-menu">'+
                                '<li class="sidebar-search">'+
                                    '<div class="input-group custom-search-form">'+
                                        '<input type="text" class="form-control" placeholder="Buscar...">'+
                                        '<span class="input-group-btn">'+
                                        '<button class="btn btn-default" type="button">'+
                                            '<i class="fa fa-search"></i>'+
                                        '</button>'+
                                    '</span>'+
                                    '</div>'+
                                    '<!-- /input-group -->'+
                                '</li>'+ menu + 
                                /*'<li>'+
                                    '<a href="#" name="menuPrincipal" class="optionMenuItem"><i class="fa fa-dashboard fa-fw"></i>Menu Principal</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="#"><i class="fa fa-bar-chart-o fa-fw"></i>Menu Principal<span class="fa arrow"></span></a>'+
                                    '<ul class="nav nav-second-level">'+
                                        '<li>'+
                                            '<a href="#" name="subMenu1" class="optionMenuItem">Sub menu1</a>'+
                                        '</li>'+
                                        '<li>'+
                                            '<a href="#" name="subMenu2" class="optionMenuItem">Sub menu2</a>'+
                                        '</li>'+
                                    '</ul>'+
                                    '<!-- /.nav-second-level -->'+
                                '</li>'+*/
                            '</ul>'+
                        '</div>'+
                        '<!-- /.sidebar-collapse -->'+
                    '</div>';
        },
        _panelContenidoFormularios: function(){

            return '<div id="page-wrapper">'+
                        '<div class="row">'+
                            '<div class="col-lg-12">'+
                                '<h5 class="page-header">'+this.options.tituloFormulario+'</h5>'+
                            '</div>'+
                            '<!-- /.col-lg-12 -->'+
                        '</div>'+
                    '</div>';
        }, 

        _eventos: function(){
            $('#side-menu').metisMenu();

            $('.optionMenuItem').on('click', function(){
                alert('Carga modulo: ' + $(this).attr('modulo'));
            });

            $('.logoutUser').on('click',function(){
                /*Elimina variable de session*/
                amplify.store(routing.variableDeSesion, null );
                /*Recarga la pagina para mostrar login*/
                location.reload();
                
            });
        }

    });

    
    
});
