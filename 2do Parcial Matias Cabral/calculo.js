function calcular() {
    var altura = document.getElementById('altura').value;
    var longitud = document.getElementById('longitud').value;
    var profundidad = document.getElementById('profundidad').value;

    var perimetroCaraMayor = (parseInt(longitud) * 2) + (parseInt(altura) * 2);
    var perimetroCaraMenor = (parseInt(profundidad) * 2) + (parseInt(altura) * 2);
    var areaTotal = (2 * parseInt(longitud) * parseInt(profundidad)) + (2 * parseInt(longitud) * parseInt(altura)) + (2 * parseInt(altura) * parseInt(profundidad));
    var volumen = parseInt(altura) * parseInt(longitud) * parseInt(profundidad);
    var diagonal = Math.sqrt(Math.pow(parseInt(altura), 2) + Math.pow(parseInt(longitud), 2) + Math.pow(parseInt(profundidad), 2));

    sessionStorage.setItem('perimetroCaraMayor', perimetroCaraMayor);
    sessionStorage.setItem('perimetroCaraMenor', perimetroCaraMenor);
    sessionStorage.setItem('areaTotal', areaTotal);
    sessionStorage.setItem('volumen', volumen);
    sessionStorage.setItem('diagonal', diagonal);

    window.location.href = 'resultados.html';
}
