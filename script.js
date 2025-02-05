document.getElementById('btn1').addEventListener('click', () => {
    alert('Botón Inicio clickeado');
  });
  
  document.getElementById('btn2').addEventListener('click', () => {
    alert('Botón Perfil clickeado');
  });
  
  document.getElementById('btn3').addEventListener('click', () => {
    alert('Botón Configuración clickeado');
  });
  
  document.getElementById('btn4').addEventListener('click', () => {
    alert('Botón Salir clickeado');
  });

  /*MEDICION DE DISTANCIAS*/

  const boton = document.getElementById('btn2');
  const icono = boton.querySelector('.icon');
  const texto = boton.querySelector('.texto2');

  // Usando offsetLeft
  console.log("Distancia del ícono al lateral izquierdo del botón (offsetLeft):", icono.offsetLeft);
  console.log("Distancia del texto al lateral izquierdo del botón (offsetLeft):", texto.offsetLeft);

  // Usando getBoundingClientRect()
  const rectBoton = boton.getBoundingClientRect();
  const rectIcono = icono.getBoundingClientRect();
  const rectTexto = texto.getBoundingClientRect();

  let lateralDerecho_icono=rectIcono.left - rectBoton.left + 20;
  let lateralIzquierdo_texto=rectTexto.left - rectBoton.left;

  console.log("Distancia del ícono al lateral izquierdo del botón (getBoundingClientRect):", lateralDerecho_icono);
  console.log("Distancia del texto al lateral izquierdo del botón (getBoundingClientRect):", lateralIzquierdo_texto);
  console.log("Gap", lateralIzquierdo_texto - lateralDerecho_icono, "px");