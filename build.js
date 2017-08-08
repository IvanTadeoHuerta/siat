({
    baseUrl: '../siat/',
    mainConfigFile: 'tmp/js/main.js',
    name: 'tmp/js/main',
    out: 'dist/js/app.js',
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
        estructura: 'tmp/js/config/estructura',
        routing: 'tmp/js/config/routing',
        loadCSS: 'tmp/js/config/loadCSS',
        sesiones: 'tmp/js/config/sesiones',
        //App
        login: 'tmp/js/app/login',


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
    findNestedDependencies: true,
    optimize: 'none'
})