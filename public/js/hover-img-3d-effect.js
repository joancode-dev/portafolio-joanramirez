setTimeout(() => {
  /* Store the element in el */
  let el = document.getElementById('trabajo')

  /* Get the height and width of the element */
  const height = el.clientHeight
  const width = el.clientWidth

  /*
     * Agregue un oyente para el evento mousemove
     * Que activará la función 'handleMove'
     * Al mover el mouse
    */
  el.addEventListener('mousemove', handleMove)

  /* Defina la función */
  function handleMove(e) {
    /*
      * Obtener la posición del cursor del ratón
      * Con respecto al elemento
      * El ratón por encima
      */
    /* Almacenar la posición x */
    const xVal = e.layerX
    /* Almacenar la posición y */
    const yVal = e.layerY

    /*
      * Calcular el valor de rotación a lo largo del eje Y
      * Aquí el multiplicador 20 es para
      * Controlar la rotación
      * Puedes cambiar el valor y ver los resultados
      */
    const yRotation = 15 * ((xVal - width / 2) / width)

    /* Calcular la rotación a lo largo del eje X */
    const xRotation = -15 * ((yVal - height / 2) / height)

    /* Generar cadena para la propiedad de transformación CSS */
    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    /* Aplicar la transformación calculada */
    el.style.transform = string
  }

  /* Agregue un oyente para el evento mouseout, elimine la rotación */
  el.addEventListener('mouseout', function () {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  })

  /* Agregue un oyente para el evento mousedown, para simular un clic */
  el.addEventListener('mousedown', function () {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
  })

  /* Agregue un oyente para mouseup, simule la liberación del clic del mouse */
  el.addEventListener('mouseup', function () {
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
  })
}, 0);