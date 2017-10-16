$(document).ready(function(){
	
		var cadenacif = Base64.decode(getParameterByName('exml2340'));
		var cadsincif = [];
		cadsincif = cadenacif.split('|');
		
		$('#txtidUsrWS').val(cadsincif[1].toString());//.val(getParameterByName('exml2344'));
		$("#txttokenWS").val(cadsincif[0].toString());//.val(getParameterByName('exml2342'));
		$("#txtNomusuarioWS").val(cadsincif[2].toString());//.val(getParameterByName ("exml2345"));
		$("#txtpwdWS").val(cadsincif[4].toString());//.val(getParameterByName("exml2347"));
		$("#txtcompniareWS").val(cadsincif[3].toString());//.val(getParameterByName("exml2346"));
		$("#pnompromo").text(cadsincif[5].toString());//getParameterByName("exml2348"));
		
		
		
		
		if($("#txttokenWS").val() !="INVALID"){
			fncargatipoidentificacion();
			fncargaNacionalidad();
			fncargaEdocivil();
			fncargaEdo();
			fnestatusrecidencia();
			fncompaniamovil();
			fntipocontrato();
		}
		
		$("#cargandoafiliadiv").hide();
		
});


(function($) { 

 window.onbeforeunload = function() {
      return "¿Estás seguro que deseas salir de la actual página?"
  }
  
		$('#txtDependientesnew').spinedit({
			minimum: 0,
			maximum: 20,
			step: 1
	    });
		
		$('#txtantiguedadnew, #txtTiempoResidencianew, #txtantiguedadnew, #txtAosCasadonew').spinedit({
			minimum: 0,
			maximum: 90,
			step: 1
	    });
		
		$('#txtTelefonoCasanew, #txtTelefonoCelularnew, #txtTelOficinanew, #txtTelCasaRef1new, #txtTelCasaRef2new, #txtTelCasaRef3new').mask("(99)9999 9999");
		
		//$('#txtCorreonew').mask("[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}")
		
		
		

			
	var cadenacif1 = Base64.decode(getParameterByName('exml2340'));
		var cadsincif1 = [];
		cadsincif1 = cadenacif1.split('|');
		
		if(cadsincif1.length > 1){

			var idUsr = cadsincif1[1].toString();//getParameterByName('exml2344'); 
			var token = cadsincif1[0].toString();//getParameterByName('exml2342'); 
			var Nomusuario = cadsincif1[2].toString();//getParameterByName ("exml2345");
			var tipouser= "4";
			var pwd = cadsincif1[4].toString();//getParameterByName("exml2347");
			var compniare=cadsincif1[3].toString();//getParameterByName("exml2346");

				if(Nomusuario != "ERRO" && token !== "ERRO" && compniare != "ERRO")
				{
					consultasolicitudes(idUsr,token,Nomusuario,tipouser,pwd,compniare);
				}else{
					location.href=("Index.html");
				}
		}else{
            $("#cargandoafiliadiv").hide();
			swal({
				  title: '<i>Error de ingreso</i>',
				  showCloseButton: true,
				  confirmButtonText:
					'<i class="glyphicon glyphicon-ok"></i>',
				  
				}).then(function () {
					  location.href=("Index.html");
					});
		}

		
		
		
})(jQuery);  












/*(function($) {
        $(function() {
            $('#my-button').bind('click', function(e) {
                e.preventDefault();
                $('#loginForm').bPopup({
                    contentContainer:'.content',
					loadUrl:""
                });
				swal("¡Bien!", "Condición cumplida", "success");
				swal({   
		title: "¿Deseas unirte al lado oscuro?",   
		text: "Este paso marcará el resto de tu vida...",   
		type: "warning",   
		showCancelButton: true,   
		confirmButtonColor: "#DD6B55",   
		confirmButtonText: "¡Claro!",   
		cancelButtonText: "No, jamás",   
		closeOnConfirm: false,   
		closeOnCancel: false }, 
		function(isConfirm){   
			if (isConfirm) {     
				swal("¡Hecho!", 
					"Ahora eres uno de los nuestros", 
					"success");   
			} else {     
				swal("¡Gallina!", 
					"Tu te lo pierdes...", 
				"error");   
			} 
		});
            });
         });
		  $('element_to_pop_up').bPopup({
            contentContainer:'.content',
            loadUrl: 'test.html' //Uses jQuery.load()
        });
     })(jQuery);*/
