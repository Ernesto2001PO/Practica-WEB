
const estudiantes = [
    {
        "nombre": "Kellie Shaw",
        "practicos": 60,
        "parcial1": 20,
        "parcial2": 45,
        "proyectofinal": 40,
        "examenfinal": 60
    },
    {
        "nombre": "Gary Brock",
        "practicos": 76,
        "parcial1": 34,
        "parcial2": 44,
        "proyectofinal": 67,
        "examenfinal": 27
    },
    {
        "nombre": "Brittany Krueger",
        "practicos": 88,
        "parcial1": 24,
        "parcial2": 77,
        "proyectofinal": 71,
        "examenfinal": 26
    },
    {
        "nombre": "Denise Hicks",
        "practicos": 38,
        "parcial1": 93,
        "parcial2": 15,
        "proyectofinal": 34,
        "examenfinal": 26
    },
    {
        "nombre": "Shannon Schmitt",
        "practicos": 93,
        "parcial1": 54,
        "parcial2": 44,
        "proyectofinal": 51,
        "examenfinal": 28
    },
    {
        "nombre": "Cassandra Evans",
        "practicos": 69,
        "parcial1": 45,
        "parcial2": 69,
        "proyectofinal": 54,
        "examenfinal": 28
    },
    {
        "nombre": "Holly Padilla",
        "practicos": 52,
        "parcial1": 13,
        "parcial2": 100,
        "proyectofinal": 69,
        "examenfinal": 76
    },
    {
        "nombre": "Michele Davis",
        "practicos": 100,
        "parcial1": 11,
        "parcial2": 34,
        "proyectofinal": 11,
        "examenfinal": 5
    },
    {
        "nombre": "Raymond Farrell",
        "practicos": 1,
        "parcial1": 27,
        "parcial2": 71,
        "proyectofinal": 36,
        "examenfinal": 20
    },
    {
        "nombre": "Corey Wolf",
        "practicos": 55,
        "parcial1": 42,
        "parcial2": 42,
        "proyectofinal": 21,
        "examenfinal": 2
    }
]

function aprobados(estudiantes) {
    let aprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];
        let notaFinal = estudiante.practicos * 0.1
            + estudiante.parcial1 * 0.1
            + estudiante.parcial2 * 0.15
            + estudiante.proyectofinal * 0.40
            + estudiante.examenfinal * 0.25;

        if (notaFinal >= 51) {
            aprobados.push({
                "nombre": estudiante.nombre,
                "notaFinal": notaFinal.toFixed(2)
            });
        }
    }
    return aprobados;
}

console.log(aprobados(estudiantes));


