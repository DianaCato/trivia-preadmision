var getData = function (){ /* Función para obtener los datos */
    var name = document.getElementById("loginName").value; /* variable name, busca en el archivo un id que se llame loginName y toma el valor que este allí */
    localStorage.setItem("loginName", name); /* Guardo el valor de loginName en el localStorage */
    if (name == ""){  /* Si la casilla esta vacia arroja el alert*/
        alert("Por favor ingrese su nombre."); /* Indicando que por favor ingrese su nombre. */
    } else{   /* si no se cumple la parte de arriba sigue con la parte de abajo. */
        window.location="templates/categoria.html";/* Se redirige a categoria.html */
    }
}

    var greeting = document.getElementById("greeting");
        greeting.innerHTML = "Hola " + localStorage.getItem("loginName");/* Toma el valor que estaba guardado en el localStorage para imprimirlo, al establecerse se reemplaza la sintaxis HTML del elemento por la del localStorage. */
        /* localStorage.removeItem("loginName"); */ /* Borra el localStorage que teniamos en loginName */
