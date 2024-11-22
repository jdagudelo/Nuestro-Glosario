 /*
 Este ejercicio puede ser utilizado como ejemplo para implementar controles de verificación de DATOS ingresados en un formulario de HTML5. Aquí puede observar algunos procedimiento simples utilizando "Expresiones Regulares" que suelen aplicarse para validar la consistencia de los datos capturados y para asegurar que los datos estén correctos antes de su almacenamiento o procesamiento.
 ----------------------
 Tomado de varios sitios de Internet y
 Adaptado por Uriel Castañeda Sierra
 Septiembre de 2020
 con fines didácticos y educativos
 ______________________
 */


    //------------------------------------------------------------
    //-------------- definimos funciones para valiación de datos
    // -- Variables para control de cada dato correcto.
    var mostrarResultadoValidacion=true;
    var nombreOk=false;
    var apellidoOk=false;

    // -- Definición de EXPRESIONES REGULARES para validar datos
    var expRegTxtNombre=/^[A-Z~-ÿ]{1}[~-ÿ\s\w\.\'-]{1,}$/i;
    var expRegTxtApellido=/^[A-Z~-�]{1}[~-�\s\w\.\'-]{1,}$/i;



        //------------------------------------------------------------
        // Definimos las funciones encargadas de activar el ESTILO
        // dinámico al recibir o al perder el enfoque.
        // también despues de validar el resultado correcto o incorrecto
        // ---------

            // -- Aplica estilo al validar dato CORRECTO
        function estiloCORRECTO(inputElement, imagen){
            inputElement.style.background='transparent';
            if (imagen == undefined)
            {   inputElement.nextSibling.src="imagenes/tick_ok_sign_4190.jpg";
                inputElement.nextSibling.style.visibility = 'visible';
            }
            else {
                imagen.src="imagenes/tick_ok_sign_4190.jpg";
                imagen.style.visibility = 'visible';
            }
         }

            // -- Aplica estilo al validar dato INCORRECTO
        function estiloINCORRECTO(inputElement, imagen){
            inputElement.style.backgroundColor="LightCoral";
            if (imagen == undefined)
            {
                inputElement.nextSibling.src="imagenes/wrong.png";
                inputElement.nextSibling.style.visibility = 'visible';
            }
            else {
                imagen.src="imagenes/wrong.png";
                imagen.style.visibility = 'visible';
            }
        }


        // -- Activa Imagen de dato Correcto o Incorrecto
        function ActivaImagenValidacion(inputElement, validacion){
            if (validacion != undefined)
            {
                inputElement.style.visibility = 'visible';
                if (validacion == true)
                    inputElement.src="imagenes/tick_ok_sign_4190.jpg";
                else
                    inputElement.src="imagenes/wrong.png";
            }
            else {
                inputElement.style.visibility = 'hidden';
                inputElement.src="";
            }
        }

        //------------------------------------------------------------
        // Validamos que el campo NOMBRE esté correctamente ingresado
        // el campo no podrá estar vacío y debe tener mínimo dos
        // caracter, el primero de ellos debe ser una letra
        function validarNombre(){
            var objetoNombre = document.getElementById("nombre");

            if ((expRegTxtNombre.test(objetoNombre.value)) == true){
                nombreOk = true;
                estiloCORRECTO(objetoNombre);
            }
            else {
                nombreOk = false;
                estiloINCORRECTO(objetoNombre);
            }
        }         //---- final function validarNombre


        //------------------------------------------------------------
        // Validamos que el campo APELLIDO esté correctamente ingresado
        // Se aplican las mismas validaciones del campo NOMBRE
        function validarApellido(){
            var objetoApellido=document.getElementById("apellido");
            if ((expRegTxtApellido.test(objetoApellido.value))==true){
                apellidoOk=true;
                estiloCORRECTO(objetoApellido);
            }
            else {
                apellidoOk=false;
                estiloINCORRECTO(objetoApellido);
            }
        }         //---- final function validarApellido



    //------------------------------------------------------------
    //  Función utilizada para iniciar el proceso de validación.
    //------------------------------------------------------------
    function validarDatos(){
        var msgAlerta;

        //----------------------
        //------ Ejecutamos el bloque de validaciones de los campos que
        //       componen el formulario

        validarNombre();
        validarApellido();

        //-----  analizamos el resultado de las validaciones y
        //-----  mostramos los mensajes correspondientes

        if (nombreOk && apellidoOk  )
        {
            msgAlerta = "Los datos ingresados han sido validados y están todos correctos. \nSu formulario ya podrá ser procesado....\n";
            if(mostrarResultadoValidacion) alert (msgAlerta);
            return true;
        }
        else {
            msgAlerta = "Presenta ERRORES en el registro de información.\n" +
            "Los datos que debe rectificar son: \n" +
            "---------------------------------------\n" +
            "  - Nombre        :  " + (nombreOk ? "OK" : "error") + "\n" +
            "  - Apellido      :  " + (apellidoOk ? "OK" : "error") + "\n" ;

            if(mostrarResultadoValidacion) alert (msgAlerta);
            return false;
        }
    }



            // -- Aplica estilo al validar dato INCORRECTO
        function estiloORIGINAL(IdElemento, IdImagen){
            var objetoInput=document.getElementById(IdElemento);
            objetoInput.style.backgroundColor="transparent";
            if (IdImagen == undefined)
            {
                objetoInput.nextSibling.src="";
                objetoInput.nextSibling.style.visibility = 'hidden';
            }
            else {
                document.getElementById(IdImagen).src="";
                document.getElementById(IdImagen).style.visibility = 'hidden';
            }
        }



    //------------------------------------------------------------
    //  Función Resetear el contenido de un formulario
    //  teniendo en cuenta en dejar los estilos definidos por defecto
    //------------------------------------------------------------
    function resetearDatos(){
       // var msgAlerta;
        if (confirm("Desea Limpiar el Formulario?"))
        {
           //--  restablecemos los formatos de inicio
           estiloORIGINAL("nombre");
           estiloORIGINAL("apellido");

          document.miniformulario.reset();

        }
    }
