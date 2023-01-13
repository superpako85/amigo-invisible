//Inicio del programa
function inicio() {
  document.querySelector("#div").innerHTML = "";
  var emparejados = [];
  if (document.querySelector("#amigos").options.length > 2) {
      var amigos = capturaAmigosSelect()
      emparejados = empareja(amigos);
  } else {
      emparejados = ["Minimo 3 amigos"];
  }
  imprimeEmparejados(emparejados);
}

//Captura los amigos desde el select
function capturaAmigosSelect() {
  var amigosSelect = document.querySelector("#amigos").options;
  var amigos = [];
  for (var i = 0; i < amigosSelect.length; i++) {
      amigos.push(amigosSelect[i].value);

  };
  return amigos;
}

//Añade el amigo que tenemos en el input al combo, y por lo tanto a la lista
function aniadirAmigo() {
  var texto = document.querySelector("#text")
  if (texto.value != "") {
      var combo = document.querySelector("#amigos")
      var option = document.createElement("option");
      option.text = texto.value;
      combo.add(option);
      texto.value = "";
      texto.focus();
  }
}
//Borra el amigo seleccionado en el select o combobox.
function borrarAmigo() {
  var combo = document.querySelector("#amigos")
  combo.remove(combo.selectedIndex);
}

//Borra el select completo y la última lista publicada
function borrarLista() {
  document.querySelector("#div").innerHTML = "";
  var combo = document.querySelector("#amigos")
  for (var i = combo.options.length; i >= 0; i--) {
      combo.remove(i);

  }
}

//Controla si se ha pulsado la tecla enter en el cuadro de texto
function enter(e) {
  if (e.keyCode === 13) {
      aniadirAmigo();
  }
}

function empareja(amigos) {
  var emparejamiento;
  var emparejados = []
  var auxiliar = amigos.slice().sort(() => Math.random() - 0.5);
  for (var i = 0; i < auxiliar.length; i++) {
      if (i === auxiliar.length - 1) {
          emparejamiento = auxiliar[i]
              + " regala a "
              + auxiliar[0];
          emparejados.push(emparejamiento);
      } else {
          emparejamiento = auxiliar[i]
              + " regala a "
              + auxiliar[i + 1];
          emparejados.push(emparejamiento);
      }
  }
  return emparejados;
}

//Imprime los emparejamientos en un div
function imprimeEmparejados(amigosEmparejados) {
  var div = document.querySelector("#div");
  for (var i = 0; i < amigosEmparejados.length; i++) {
      div.innerHTML += "<p>" + amigosEmparejados[i] + "</p>";
  }
}

// Genera un número aleatoro entre minimo y maximo incluidos.
function aleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
}
