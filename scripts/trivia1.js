/*Funcion para la trivia DESCUBRIR*/


    var btnTrivia1 = document.getElementById("btnTrivia1");

    
    function obtenerEstilo () {
      var inputRadio = document.formulario;
      for (x = 0; x < inputRadio.length; x++);
  
      var auditivo = 0;
      var visual = 0;
      var kinestesico = 0;
  
      /*acumulacion puntaje*/
      if (document.getElementsByTagName("input")[0].checked) {
        auditivo++;
      }
  
      if (document.getElementsByTagName("input")[1].checked) {
        visual++;
      }
      if (document.getElementsByTagName("input")[2].checked) {
        kinestesico++;
      }
  
      if (document.getElementsByTagName("input")[3].checked) {
        auditivo++;
      }
  
      if (document.getElementsByTagName("input")[4].checked) {
        visual++;
      }
  
      if (document.getElementsByTagName("input")[5].checked) {
        kinestesico++;
      }
  
      if (document.getElementsByTagName("input")[6].checked) {
        visual++;
      }
  
      if (document.getElementsByTagName("input")[7].checked) {
        auditivo++;
      }
  
      if (document.getElementsByTagName("input")[8].checked) {
        kinestesico++;
      }
  
      if (document.getElementsByTagName("input")[9].checked) {
        visual++;
      }
  
      if (document.getElementsByTagName("input")[10].checked) {
        auditivo++;
      }
  
      if (document.getElementsByTagName("input")[11].checked) {
        kinestesico++;
      }
  
  
      if (document.getElementsByTagName("input")[12].checked) {
        auditivo++;
      }
  
      if (document.getElementsByTagName("input")[13].checked) {
        visual++;
      }
      if (document.getElementsByTagName("input")[14].checked) {
        kinestesico++;
      }
  
      if (visual > auditivo || visual == auditivo && visual > kinestesico) {
        alert ("Tu estilo es Visual") ;
  
      } else if (auditivo > visual && auditivo > kinestesico || auditivo == kinestesico) {
        alert ("Tu estilo es Auditivo");
      } else {
        alert ("Tu estilo es Kinestesico");
      }
  
    }

    btnTrivia1.addEventListener('click', obtenerEstilo);
  