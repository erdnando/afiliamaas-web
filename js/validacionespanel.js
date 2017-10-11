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
		
		
		
		$('.tsf-wizard-1').tsfWizard({
			stepEffect:'slideLeftRight',
			stepStyle:'style12',
			navPosition:'top',
			validation:false,
			stepTransition:false,
			showButtons:true,
			showStepNum:true,
			//height:'auto',
			prevBtn:'<i class="glyphicon glyphicon-chevron-left"></i><i class="glyphicon glyphicon-chevron-left"></i> ',
			nextBtn:' <i class="glyphicon glyphicon-chevron-right"></i><i class="glyphicon glyphicon-chevron-right"></i>',
			finishBtn:'<i class="glyphicon glyphicon-send"></i>',
			disableSteps:'none',
			onBeforeNextButtonClick:function (e, from, to, validation) {
			   console.log('onBeforeNextButtonClick');
			   console.log(validation);
			   var pantalla;
			   if($('#modalpaso1').attr('class') == 'tsf-step step-1 active slide-left-right-effect'){
				   pantalla = '1';
			   }else if($('#modalpaso2').attr('class') == 'tsf-step step-2 active slide-left-right-effect'){
				   pantalla = '2';
			   }
			   else if($('#modalpaso3').attr('class') == 'tsf-step step-3 active slide-left-right-effect'){
				   pantalla = '3';
			   }
			   else if($('#modalpaso4').attr('class') == 'tsf-step step-4 active slide-left-right-effect'){
				   pantalla = '4';
			   }
			   else if($('#modalpaso5').attr('class') == 'tsf-step step-5 active slide-left-right-effect'){
				   pantalla = '5';
			   }
			   else if($('#modalpaso6').attr('class') == 'tsf-step step-6 active slide-left-right-effect'){
				   pantalla = '6';
			   }
			   
			   validacontrolespantall(pantalla,false,e);
				 
			},
			onAfterNextButtonClick:function (e, from, to, validation) {
				console.log('Afternext from '+from+' to '+to);
				
				switch(to) {
					case 1:
						navegasliderheaderlibre($('#anumpasol'), 1)	;
						break;
					case 2:
						navegasliderheaderlibre($('#anumpasol2'), 2);
                        document.getElementById("btnsiguiente").tabIndex = "26";
                        document.getElementById("btnanterior").tabIndex = "27";
                        $('#txtCalleSolicitantenew').focus();

						break;
					case 3:
						navegasliderheaderlibre($('#anumpasol3'), 3);
                        document.getElementById("btnsiguiente").tabIndex = "42";
                        document.getElementById("btnanterior").tabIndex = "43";
                        $('#txtNombreEmpresanew').focus();
						break;
					case 4:
						navegasliderheaderlibre($('#anumpasol4'), 4);
                        document.getElementById("btnsiguiente").tabIndex = "45";
                        document.getElementById("btnanterior").tabIndex = "46";
                        $('#sldpersopoli').focus();
						break;
					case 5:
						navegasliderheaderlibre($('#anumpasol5'), 5);
                        document.getElementById("btnsiguiente").tabIndex = "57";
                        document.getElementById("btnanterior").tabIndex = "58";
                        $('#txtNombreRef1new').focus();
						break;
                    case 6:
						navegasliderheaderlibre($('#anumpasol6'), 6);
                        //document.getElementById("btnfinalizar").tabIndex = "72";
                        document.getElementById("btnanterior").tabIndex = "73";
                        $('#nomfirma').focus();
						break;


					default:
						break;
				}
				
				
			   /*console.log('onAfterNextButtonClick');
			    console.log('onBeforeNextButtonClick');
			   console.log(validation);
			   var demoTimeout;
				if($('#lstNacionalidadnew').val()== '0'){
					clearTimeout(demoTimeout);
					$('#lstNacionalidadnew').trigger('startRumble');
					demoTimeout = setTimeout(function(){$('#lstNacionalidadnew').trigger('stopRumble');},1500);
					e.preventDefault();
				}*/
			},
			onBeforePrevButtonClick:function (e, from, to) {
			   console.log('onBeforePrevButtonClick');
			   console.log('from '+from+' to '+to);
			   switch(from) {
					case 1:
						navegasliderheaderatras(1);
						break;
					case 2:
						navegasliderheaderatras(2);
						break;
					case 3:
						navegasliderheaderatras(3);
						break;
					case 4:
						navegasliderheaderatras(4);
						break;
					case 5:
						navegasliderheaderatras(5);
						break;
					default:
						break;
				}
			   
			//  e.preventDefault();
			},
			onAfterPrevButtonClick:function (e, from, to) {
			   console.log('onAfterPrevButtonClick');
			   console.log('validation '+from+' to '+to);

                switch(to) {
                    case 0:
						$('#txtNomSolicitantenew').focus();
						break;
					case 1:
						$('#txtCalleSolicitantenew').focus();
						break;
					case 2:
						$('#txtNombreEmpresanew').focus();
						break;
					case 3:
						$('#sldpersopoli').focus();
						break;
					case 4:
						$('#txtNombreRef1new').focus();
						break;
					case 5:
						('#nomfirma').focus();
						break;
					default:
						break;
				}
			},
			onBeforeFinishButtonClick:function (e, validation) {
			   console.log('onBeforeFinishButtonClick1111111');
			   console.log('validation '+validation);

			   //e.preventDefault();
			},
			onAfterFinishButtonClick:function (e, validation) {
			   console.log('onAfterFinishButtonClick222222');
			   console.log('validation '+validation);
			}
			});
			
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
					console.log(JSON.stringify({"objPromotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"llave":{"idUsuario":idUsr,"Token":token}}));
					$.ajax({
                        timeout:10000,
						type: 'POST',
						url: 'https://stefaninimx.com/mx.com.stefanini.service.api.rest/Service1.svc/getBuzonWeb', 
						data: JSON.stringify({"objPromotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"llave":{"idUsuario":idUsr,"Token":token}}),
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						success: function(data){
								//console.log('seguimiento - solicitudes');
								//console.log(data);
								var regTD=0;
								var regTR=1;
								if(data.solicitudes[0].Token =="INVALID"){
											swal({
												  title: '<i>Sessión cerrada por inactividad</i>',
												  showCloseButton: true,
												  confirmButtonText:
													'<i class="glyphicon glyphicon-ok"></i>',
												  
												}).then(function () {
													  location.href=("Index.html");
													});
									//location.href=("Index.html");
									$("#txttokenWS").val(data.solicitudes[0].Token)
								}
								else
								{
									$("#numerosolspan").text(data.solicitudes.length);
									
									for(var r=0; r < data.solicitudes.length; r++){
										//console.log(data.solicitudes[r].ID_SOLICITUD);
										//console.log(data.solicitudes[r].ID_SOLICITUD);
										
										
										var tipoagrupa;
										var tiporow;
										var topoproy;
										var icono;
										var fstitulo;
										switch(data.solicitudes[r].ESTATUS) {
											case '1':
												tipoagrupa = 'Nuevas';
												tiporow = 'rowNuevas';
												topoproy = data.solicitudes[r].ID_SOLICITUD;
												icono = 'glyphicon glyphicon-file';
												fstitulo ='fs-titleNuevas';
												break;
											case '2':
												tipoagrupa = 'Aceptadas';
												tiporow = 'rowAceptadas';
												topoproy = data.solicitudes[r].ID_SOLICITUD;
												icono = 'glyphicon glyphicon-ok';
												fstitulo ='fs-titleAceptadas';
												break;
											case '3':
												tipoagrupa = 'Rechazadas';
												tiporow = 'rowRechazadas';
												topoproy = data.solicitudes[r].ID_SOLICITUD;
												icono = 'glyphicon glyphicon-ban-circle';
												fstitulo ='fs-titleRechazadas';
												break;
											case '4':
												tipoagrupa = 'Canceladas';
												tiporow = 'rowCanceladas';
												topoproy = data.solicitudes[r].ID_SOLICITUD;
												icono = 'glyphicon glyphicon-remove';
												fstitulo ='fs-titleCanceladas';
												break;
											case '5':
												tipoagrupa = 'Enviadas';
												tiporow = 'rowEnviadas';
												topoproy = data.solicitudes[r].ID_SOLICITUD;
												icono = 'glyphicon glyphicon-send';
												fstitulo ='fs-titleEnviadas';
												break;
											default:
												break;
										}
										
										tipoagrupa +'|' + tiporow +'|' +  topoproy  +'|' + icono +'|' + fstitulo
										
										
										
										/*var DOC_IF64 = data.solicitudes[r].DOC_IF64;
										var DOC_IA64 = data.solicitudes[r].DOC_IA64;
										var F164 = data.solicitudes[r].F164;
										var DOC_C164 = data.solicitudes[r].DOC_C164;
										var DOC_C264 = data.solicitudes[r].DOC_C264;
										var E164 = data.solicitudes[r].E164;
										var E264 = data.solicitudes[r].E264;
										var E364 = data.solicitudes[r].E364;
										var E464 = data.solicitudes[r].E464;
										var E564 = data.solicitudes[r].E564;
										
										
										
										
										
										DOC_IF64 = "data:image/jpeg;base64," + DOC_IF64;
										DOC_IA64 = "data:image/jpeg;base64," + DOC_IA64;
										F164 = "data:image/png;base64,"+F164;
										DOC_C164 = "data:image/jpeg;base64," + DOC_C164 
										DOC_C264 = "data:image/jpeg;base64," + DOC_C264 
										E164 = "data:image/jpeg;base64," + E164  
										E264 = "data:image/jpeg;base64," + E264 
										E364 = "data:image/jpeg;base64," + E364 
										E464 = "data:image/jpeg;base64," + E464 
										E564 = "data:image/jpeg;base64," + E564 */
										
										
										
										
										
										//var resulgral = tipoagrupa +'|' + tiporow +'|' +  topoproy  +'|' + icono +'|' + fstitulo +'|' + DOC_IF64 +'|' + DOC_IA64 +'|' + F164 +'|' + DOC_C164 +'|' + DOC_C264 +'|' + E164 +'|' + E264 +'|' + E364 +'|' + E464 +'|' + E564 +'|' + data.solicitudes[r].SOLICITUD_XML.toString();
										var resulgral = tipoagrupa +'|' + tiporow +'|' +  topoproy  + '|' + icono +'|' + fstitulo  + '|' + idUsr + '|' + token + '|' + data.solicitudes[r].SOLICITUD_XML.toString();
										var xml = data.solicitudes[r].SOLICITUD_XML.toString(),
										xmlDoc = $.parseXML( xml ),
										//generales
										$Pnombre = xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Pmrnombre")[0].textContent;
										$snombre = xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Sdonombre")[0].textContent;
										$Apellidopaterno = xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Apaterno")[0].textContent;
										$Apellidomaterno = xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Amaterno")[0].textContent; 
										$nomcompleto = $Pnombre + ' ' + $snombre + ' ' + $Apellidopaterno + ' ' + $Apellidomaterno;
										
											
										  $('#contenidogral').append('<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 isotope-item '+ tipoagrupa + '" style="position: absolute; left: 0px; top: 0px;">'+
																'<div class="image-box" style="background-color: #ffffff;text-align: center;border: 1px solid rgb(117, 119, 119);">'+
																	'<div class="overlay-container">'+
																		'<h4 class="modal-title '+ tiporow +'" id="project-1-label">ID: ' + topoproy +' <i class="' + icono + '"></i></h4>'+
																		'<h4>' + $nomcompleto + '<h4>'+
																		'<h4>'+
																			'<p>' + data.solicitudes[r].FECHA_ALTA +'<p>'+
																			'<p></p>'+
																			'<p>Comentario:'+ data.solicitudes[r].COMENTARIO +'<p>'+
																			'<p></p>'+
																			'<div>'+
																				'<div></div>'+
																			'</div>'+
																		'</h4>'+
																		"<input type='hidden' id='ResulConsulSolicitud" + r + "' name='ResulConsulSolicitud" + r + "' value='" + resulgral + "'/>"+
																		'<a class="overlay" onclick="Generadatos(ResulConsulSolicitud' + r + ')">'+
																			'<i class="glyphicon glyphicon-eye-open"></i>'+
																			'<span>' + topoproy +'</span>'+
																		'</a>'+
																	'</div>'+
																'</div>'+
															'</div>'
																);
									}
									$('#contenidogral').attr('class',"isotope-container row grid-space-20");

									/*document.write('<script type="text/javascript" src="./js/isotope.pkgd.js"></script>');
									document.write('<script type="text/javascript" src="./js/isotope.pkgd.min.js"></script>');*/
									
									
									
			
									
								}
								
						},
						error: function (result) {  
							alert("errror....solicitudessss");  
						},
						async: false  
					}); 
					
					
					
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
