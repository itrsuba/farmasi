
'use strict';

// JS global variables
let config = {
    colors: {
        primary: '#7367f0',
        secondary: '#a8aaae',
        success: '#28c76f',
        info: '#00cfe8',
        warning: '#ff9f43',
        danger: '#ea5455',
        dark: '#4b4b4b',
        black: '#000',
        white: '#fff',
        cardColor: '#fff',
        bodyBg: '#f8f7fa',
        bodyColor: '#6f6b7d',
        headingColor: '#5d596c',
        textMuted: '#a5a3ae',
        borderColor: '#dbdade'
    },
    colors_label: {
        primary: '#7367f029',
        secondary: '#a8aaae29',
        success: '#28c76f29',
        info: '#00cfe829',
        warning: '#ff9f4329',
        danger: '#ea545529',
        dark: '#4b4b4b29'
    },
    colors_dark: {
        cardColor: '#2f3349',
        bodyBg: '#25293c',
        bodyColor: '#b6bee3',
        headingColor: '#cfd3ec',
        textMuted: '#7983bb',
        borderColor: '#434968'
    },
    enableMenuLocalStorage: false // Enable menu state with local storage support
};

let assetsPath = document.documentElement.getAttribute('data-assets-path'),
    templateName = document.documentElement.getAttribute('data-template'),
    rtlSupport = true; 


if (typeof TemplateCustomizer !== 'undefined') {
    window.templateCustomizer = new TemplateCustomizer({
        cssPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',
        themesPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',
        displayCustomizer: false,
        lang: 'en',
        defaultTheme: 1,
        defaultStyle: 'semidark',
        defaultTextDir: 'ltr',
        defaultLayoutType: 'fixed',
        defaultMenuCollapsed: true,
        defaultNavbarFixed: true,
        defaultFooterFixed: true,
        defaultShowDropdownOnHover: true
    });
}

 
$(document).ready(function() { 
$.ajax({
    url: 'antrian.php?p=pengaturan',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        var credit= $('#myname');
        credit.html(' <a style="font-size:10px;" href="https://github.com/arrayazman" id="credit" class="credit footer-link">Made with <i class="fa fa-heart text-danger"></i> by Nuryahyaa</a> ');
        if ($("#credit,.credit").attr("href") != "https://github.com/arrayazman") { 
            window.location.href = "https://github.com/arrayazman"; }
    }
    
});
});