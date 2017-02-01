function hasClass(element, className) {
    return new RegExp(' ' + className + ' ')
        .test(' ' + element.className + ' ');
}
function removeClass(element, className) {
    return element.className
        .replace(new RegExp('\\b' + className + '\\b'), '')
}
function mapClass(elements, className, func) {
    for (var i = 0; i < elements.length; i++) {
        if (new RegExp(' ' + className + ' ')
                .test(' ' + elements[i].className + ' '))
            func(elements[i]);
    }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
