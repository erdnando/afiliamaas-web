$(document).ready(function(){ 



	$( "#Ingresar" ).click(function() {
		/*$("#Ingresar").css('border', 'none');
		$("#Ingresar").css('border-bottom', '2px solid #cecfd3');*/
		if($("#Usuario").val() != "" && $("#Password").val() !="" && $("#Empresa").val() !="" )
		{
			$('#cargando').show();
			var Idusrlog = '', companiausrlog = '',estatusLogin = '',nombreusrlog ='',tipousuario ='';
			$.ajax({ 			
				type: 'POST',
				url: 'https://stefaninimx.com/mx.com.stefanini.service.api.rest/Service1.svc/Login', 
				data: JSON.stringify({"Promotoria":"","RegPromotor":"","Compania":$("#Empresa").val(),"Formato":"","Usuario":$("#Usuario").val(),"Contrasenia":$("#Password").val(),"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						console.log('LOGIN - 5');
						console.log(data);
						console.log(data.IdUsuario);
						console.log(data.User);
						console.log(data.Nombre);
						console.log(data.Paterno);
						console.log(data.Tipo_Usuario);
						console.log(data.Compania);
						
						if(data.IdUsuario == 0){
							swal("","¡Acceso incorrecto, verifique por favor!","error");
							//location.href='';
                            $('#cargando').hide();
							return false;
						}else{
							var nomCompleto = data.Tipo_Usuario+": " + data.Nombre + " " + data.Paterno
							
							var cadena = Base64.encode(data.Token + "|" + data.IdUsuario + "|" + data.User + "|" + data.Compania + "|" +data.Password + "|" + nomCompleto);
							
							location.href=('AfiliaMaaS.html?exml2340=' + cadena);
						}
						
				},
				error: function (result) {  
					console.log("errror....ingresar");  
				}   
			}); 
			
		}
		else
		{
			var demoTimeout;
			if($('#Usuario').val() == ''){
				clearTimeout(demoTimeout);
				$('#Usuario').trigger('startRumble');
				$("#Usuario").css('border', '1px solid red');
				demoTimeout = setTimeout(function(){$('#Usuario').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
			}
			var demoTimeout2;
			if($('#Password').val()== ''){
				clearTimeout(demoTimeout2);
				$('#Password').trigger('startRumble');
				$("#Password").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#Password').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
			}
			var demoTimeout3;
			if($('#Empresa').val()== ''){
				clearTimeout(demoTimeout3);
				$('#Empresa').trigger('startRumble');
				$("#Empresa").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#Empresa').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);
			}
			//swal("","Usuario, empresa y/o contraseña incorrectas. Verifique por favor.","error");
		}
		
	});
	
	
	$('#Usuario').on({
		click:	function () {
			$("#Usuario").css('border', 'none');
			$("#Usuario").css('border-bottom', '2px solid #cecfd3'); 
		},
		focus:	function () {
			$("#Usuario").css('border', 'none');
			$("#Usuario").css('border-bottom', '2px solid #cecfd3'); 
		}
	  
	});
	$('#Password').on({
		click:	function () {
			$("#Password").css('border', 'none');
			$("#Password").css('border-bottom', '2px solid #cecfd3'); 
		},
		focus:	function () {
			$("#Password").css('border', 'none');
			$("#Password").css('border-bottom', '2px solid #cecfd3'); 
		}
	  
	});
	$('#Empresa').on({
		click:	function () {
			$("#Empresa").css('border', 'none');
			$("#Empresa").css('border-bottom', '2px solid #cecfd3'); 
		},
		focus:	function () {
			$("#Empresa").css('border', 'none');
			$("#Empresa").css('border-bottom', '2px solid #cecfd3'); 
		}
	  
	});
	
	
	
	/*$( "#Ingresar" ).click(function(event) {
		
		
	
	});*/
	
	
	$("#Usuario, #Password, #Empresa").jrumble({
		x: 1,
		y: 0,
		rotation: 0,
		opacity: true
		});
		
		
		
});  

	
$(window).load(function () {
  // Una vez se cargue al completo la página desaparecerá el div "cargando"
  $('#cargando').hide();
});


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
