window.onload = function() {
    document.getElementById('perimetroCaraMayor').innerText = sessionStorage.getItem('perimetroCaraMayor');
    document.getElementById('perimetroCaraMenor').innerText = sessionStorage.getItem('perimetroCaraMenor');
    document.getElementById('areaTotal').innerText = sessionStorage.getItem('areaTotal');
    document.getElementById('volumen').innerText = sessionStorage.getItem('volumen');
    document.getElementById('diagonal').innerText = sessionStorage.getItem('diagonal');
};
