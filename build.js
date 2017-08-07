({
    baseUrl: 'tmp/js',
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
        sesiones: 'tmp/js/config/sesiones',
        loadCSS: 'tmp/js/config/loadCSS',

        //App
        login: 'tmp/js/app/login',


    },
    shim: {
        //Define dependencias entre archivos
        amplify: {
            deps: ['jquery'],
        },
        bootstrapJs: {
            deps: ['jquery'],
        },
        loadCSS: {
            deps: ['jquery'],
        },
        sesiones: {
            deps: ['jquery', 'bootstrapJs', 'amplify', 'estructura', 'loadCSS']
        },
        login: {
            deps: ['validate', 'estructura', 'classie']
        },
        estructura: {
            deps: ['jquery', 'bootstrapJs', 'amplify', 'widget', 'metisMenu', 'admin']
        },
        metisMenu: {
            deps: ['jquery'],
        },
        admin: {
            deps: ['jquery'],
        }

    },

    /*modules: [{
        //name: 'sesiones'
    }],*/
    dir: 'dist/js'
})