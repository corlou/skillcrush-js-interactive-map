function precarica() {
    $(img).each(function () {
        $('<img/')[0].src.this;
    });
}

precarica([
    'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
    'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png',
    'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
    'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
    'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'
]);

// jQUERY for external title

jQuery(document).ready(function () {
    $('.title-blue').mouseout(function () {
        $('#map').attr('src')
    })

})