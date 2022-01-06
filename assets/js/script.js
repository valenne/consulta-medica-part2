document.write("<p>Estadisticas centro medico ñuñoa</p>");

var radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var traumatologia = [
  {
    hora: "08:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

var dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//Agregar código para el desafio 2 aquí

// Preguna 1

// agrega informacion al array
traumatologia.push(
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  }
);

// aplica orden al array
function ordenamiento(arr) {
  arr.sort(function (a, b) {
    if (a.hora > b.hora) {
      return 1;
    }
    if (a.hora < b.hora) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return arr;
}
ordenamiento(traumatologia);
// lista ordenada
// console.log(traumatologia);
//Agregar código para el desafio 2 aquí

// Pregunta 2

// se elimina el primer y ultimo elemento del array[radiologia], guardando los datos en variables
const primerElementoRadiologia = radiologia.shift();
const ultimoElementoRadiologia = radiologia.pop();
// verifica la informacion
// console.log(radiologia);

document.write(
  `<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
);
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

document.write(
  `<p>Primera atencion: ${radiologia[0].paciente} - ${
    radiologia[0].prevision
  } | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
    radiologia[radiologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${traumatologia[0].paciente} - ${
    traumatologia[0].prevision
  } | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
    traumatologia[traumatologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${dental[0].paciente} - ${
    dental[0].prevision
  } | Última atención: ${dental[dental.length - 1].paciente} - ${
    dental[dental.length - 1].prevision
  }.</p>`
);

// Pregunta 3

// Funcion que permite imprimir en DOM los datos [sector] [consultas medicas]
function enviarDom(arr, sector) {
  document.write(`<h3>Sector: ${sector}</h3>`);
  arr.forEach((element) => {
    document.write(
      `<p> ${element.hora} - ${element.especialista} - ${element.paciente} - ${element.rut} - ${element.prevision}`
    );
    saltoDeLinea();
  });
}
enviarDom(dental, "Dental");

// pregunta 4

function listadoPacientes(lista1, lista2, lista3) {
  document.write(`<h3>Pacientes del dia: </h3>`);
  let listado;
  let conteo = 0;

  lista1.forEach((element) => {
    listado = element.paciente;
    conteo++;
    document.write(`<p>${conteo} - ${listado}</p>`);
  });
  lista2.forEach((element) => {
    listado = element.paciente;
    conteo++;
    document.write(`<p>${conteo} - ${listado}</p>`);
  });

  lista3.forEach((element) => {
    listado = element.paciente;
    conteo++;
    document.write(`<p>${conteo} - ${listado}</p>`);
  });
}

listadoPacientes(radiologia, traumatologia, dental);

// pregunta 5 y 6

// funcion que retorna el dato a consulta respecto a prevision
function consultaPrevision() {
  let key = true;
  while (key) {
    let x = Number(
      prompt(`Filtrado de informacion, elige un numero: \n1. ISAPRE\n2. FONASA`)
    );
    if (x < 1 || x > 2) {
      alert("Datos ingresados fuera de rango, intentalo nuevamente...");
    } else if (isNaN(x)) {
      alert("Ingresa solo numero, intentalo nuevamenete...");
    } else {
      key = false;
      return x;
    }
  }
}

// crea un salto de linea
function saltoDeLinea() {
  document.write("<br>");
}

// Resuelve si el paciente es fonasa o isapre
function previsionPacientes(arr, x, sector) {
  document.write(`<h3>Sector: ${sector} - Filtrado prevision </h3>`);
  if (x == 1) {
    arr.forEach((element) => {
      if (element.prevision == "ISAPRE") {
        document.write(`${element.paciente} - ${element.prevision}`);
        saltoDeLinea();
      }
    });
  } else if (x == 2) {
    arr.forEach((element) => {
      if (element.prevision == "FONASA") {
        document.write(`${element.paciente} - ${element.prevision}`);
        saltoDeLinea();
      }
    });
  }
}

// programa
previsionPacientes(dental, consultaPrevision(), "Dental");
previsionPacientes(traumatologia, consultaPrevision(), "Traumatologia");
