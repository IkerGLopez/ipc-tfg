// Definición de las memorias en formato JSON
const memorias = [
    {
        "titulo": "Memoria 1 - Computación",
        "especialidad": "Computación",
        "año": 2023,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/48807"
    },
    {
        "titulo": "Memoria 2 - Computación",
        "especialidad": "Computación",
        "año": 2023,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/48826"
    },
    {
        "titulo": "Memoria 3 - Computación",
        "especialidad": "Computación",
        "año": 2023,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/53291"
    },
    {
        "titulo": "Memoria 4 - Computación Euskera",
        "especialidad": "Computación",
        "año": 2023,
        "idioma": "Euskera",
        "enlace": "https://addi.ehu.es/handle/10810/48806"
    },
    {
        "titulo": "Memoria 5 - Software",
        "especialidad": "Ingeniería del Software",
        "año": 2022,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/29090"
    },
    {
        "titulo": "Memoria 6 - Software Euskera",
        "especialidad": "Ingeniería del Software",
        "año": 2022,
        "idioma": "Euskera",
        "enlace": "https://addi.ehu.es/handle/10810/53311"
    },
    {
        "titulo": "Memoria 7 - Hardware Euskera",
        "especialidad": "Ingeniería de Computadores",
        "año": 2021,
        "idioma": "Euskera",
        "enlace": "https://addi.ehu.es/handle/10810/29094"
    },
    {
        "titulo": "Memoria 8 - Hardware",
        "especialidad": "Ingeniería de Computadores",
        "año": 2021,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/48831"
    },
    {
        "titulo": "Memoria 9 - Computación",
        "especialidad": "Computación",
        "año": 2023,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/48823"
    },
    {
        "titulo": "Memoria 10 - Computación Euskera",
        "especialidad": "Computación",
        "año": 2023,
        "idioma": "Euskera",
        "enlace": "https://addi.ehu.es/handle/10810/48780"
    },
    {
        "titulo": "Memoria 11 - Software",
        "especialidad": "Ingeniería del Software",
        "año": 2022,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/29097"
    },
    {
        "titulo": "Memoria 12 - Hardware",
        "especialidad": "Ingeniería de Computadores",
        "año": 2021,
        "idioma": "Castellano",
        "enlace": "https://addi.ehu.es/handle/10810/58090"
    },
    {
        "titulo": "Memoria 13 - Hardware Euskera",
        "especialidad": "Ingeniería de Computadores",
        "año": 2021,
        "idioma": "Euskera",
        "enlace": "https://addi.ehu.es/handle/10810/12680"
    }
];

// Filtrar las memorias cuando se cambian los valores de los filtros
document.getElementById('filterForm').addEventListener('change', function () {
    const especialidad = document.getElementById('especialidad').value.toLowerCase();
    const idioma = document.getElementById('idioma').value.toLowerCase();
    const ano = document.getElementById('ano').value;

    // Obtener todas las filas de la tabla
    const tableBody = document.getElementById('memorias-table');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de añadir nuevas filas

    memorias.forEach(memoria => {
        if ((especialidad === '' || memoria.especialidad.toLowerCase().includes(especialidad)) &&
            (idioma === '' || memoria.idioma.toLowerCase().includes(idioma)) &&
            (ano === '' || memoria.año === parseInt(ano))) {
            
            const row = document.createElement('tr');

            const tituloCell = document.createElement('td');
            tituloCell.innerHTML = `<a href="${memoria.enlace}" target="_blank">${memoria.titulo}</a>`;
            row.appendChild(tituloCell);

            const especialidadCell = document.createElement('td');
            especialidadCell.textContent = memoria.especialidad;
            row.appendChild(especialidadCell);

            const añoCell = document.createElement('td');
            añoCell.textContent = memoria.año;
            row.appendChild(añoCell);

            const idiomaCell = document.createElement('td');
            idiomaCell.textContent = memoria.idioma;
            row.appendChild(idiomaCell);

            tableBody.appendChild(row);
        }
    });
});

// Cargar las memorias inicialmente
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filterForm').dispatchEvent(new Event('change'));
});
