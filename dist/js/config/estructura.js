require(["routing"],function(a){$.widget("custom.estructuraGeneral",{options:{tituloFormulario:"Nombre del formulario",tituloHeader:"Sistema de información administrativo tech pro",datosUsuario:[]},_create:function(){document.body.classList.remove("body-personalizado"),document.body.classList.add("estructuraBody"),this.element.html(this._contruirEstructura()),this._eventos()},_refresh:function(){},random:function(a){},_destroy:function(){},_setOptions:function(){},_setOption:function(a,o){},_contruirEstructura:function(){return'<div id="wrapper">'+this._contenedorMenus()+this._panelContenidoFormularios()+"</div"},_contenedorMenus:function(){return'<!-- Navigation --><nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">'+this._cabecera()+this._menuSuperior()+this._menuLateral()+"</nav>"},_cabecera:function(){return'<div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#">'+this.options.tituloHeader+"</a></div>"},_menuSuperior:function(){return'<ul class="nav navbar-top-links navbar-right"><!-- /.dropdown --><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i></a><ul class="dropdown-menu dropdown-alerts"><li><a href="#"><div><i class="fa fa-envelope fa-fw"></i> Message Sent<span class="pull-right text-muted small">4 minutes ago</span></div></a></li><li class="divider"></li><li><a class="text-center" href="#"><strong>Ver todas</strong><i class="fa fa-angle-right"></i></a></li></ul><!-- /.dropdown-alerts --></li><!-- /.dropdown --><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i></a><ul class="dropdown-menu dropdown-user"><li><a href="#"><i class="fa fa-user fa-fw"></i> Mi perfil</a></li><li><a href="#"><i class="fa fa-gear fa-fw"></i> Configuraciones</a></li><li class="divider"></li><li class="logoutUser"><a href="#"><i class="fa fa-sign-out fa-fw"></i> Cerrar sesión</a></li></ul><!-- /.dropdown-user --></li><!-- /.dropdown --></ul><!-- /.navbar-top-links -->'},_arrayObjectIndexOf:function(a,o){var s=!1;for(var i in a)i==o&&(s=!0);return s},_menuLateral:function(){var a="";for(var o in this.options.datosUsuario){var s="",i="",n=!0,r="";this._arrayObjectIndexOf(this.options.datosUsuario[o],"subMenu")||(r="optionMenuItem",n=!1);for(var t in this.options.datosUsuario[o])if("nombreProceso"==t&&(s+='<li><a href="#" name="menuPrincipal"  modulo=modulo'+this.options.datosUsuario[o].idProceso+'class="'+r+'"><i class="fa fa-dashboard fa-fw"></i>'+this.options.datosUsuario[o].nombreProceso),"subMenu"==t){i='<span class="fa arrow"></span></a><ul class="nav nav-second-level">';for(var e in this.options.datosUsuario[o][t])for(var l in this.options.datosUsuario[o][t][e])"nombreProceso"==l&&(i+='<li><a href="#" modulo=modulo'+this.options.datosUsuario[o][t][e].idProceso+' name="subMenu1" class="optionMenuItem">'+this.options.datosUsuario[o][t][e].nombreProceso+"</a></li>");i+="</ul>"}s+=n?i+"</li>":"</a></li>",a+=s}return'<div class="navbar-default sidebar" role="navigation"><div class="sidebar-nav navbar-collapse"><ul class="nav" id="side-menu"><li class="sidebar-search"><div class="input-group custom-search-form"><input type="text" class="form-control" placeholder="Buscar..."><span class="input-group-btn"><button class="btn btn-default" type="button"><i class="fa fa-search"></i></button></span></div><!-- /input-group --></li>'+a+"</ul></div><!-- /.sidebar-collapse --></div>"},_panelContenidoFormularios:function(){return'<div id="page-wrapper"><div class="row"><div class="col-lg-12"><h5 class="page-header">'+this.options.tituloFormulario+"</h5></div><!-- /.col-lg-12 --></div></div>"},_eventos:function(){$("#side-menu").metisMenu(),$(".optionMenuItem").on("click",function(){alert("Carga modulo: "+$(this).attr("modulo"))}),$(".logoutUser").on("click",function(){amplify.store(a.variableDeSesion,null),location.reload()})}})});