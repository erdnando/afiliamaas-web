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
                    $("#cargandoafiliadiv").hide();
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

		
		$("#cargandoafiliadiv").hide();

		
});


(function($) { 

 /*window.onbeforeunload = function() {
      return "¿Estás seguro que deseas salir de la actual página?"
  }*/
  
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

                if($('#recreasolicitudinput').val() == "NO")
                {
                    if(pantalla == '6'){
                        $('#terminar').css("display", "");
                    }
                   validacontrolespantall(pantalla,false,e);
                    if(pantalla == '6'){
                        $('#terminar').css("display", "");
                    }
                }else{
                    if(pantalla == '6'){
                        $('#terminar').css("display", "none");
                    }
                    navegasliderheaderlibre(null, pantalla);
                    if(pantalla == '6'){
                        $('#terminar').css("display", "none");
                    }
                }

			},
			onAfterNextButtonClick:function (e, from, to, validation) {
				console.log('Afternext from '+from+' to '+to);



				switch(to) {
					case 1:
						navegasliderheaderlibre($('#anumpasol'), 1)	;
						break;
					case 2:
						navegasliderheaderlibre($('#anumpasol2'), 2);
                        document.getElementById("btnsiguiente").tabIndex = "28";
                        document.getElementById("btnanterior").tabIndex = "29";
                        $('#txtCalleSolicitantenew').focus();

						break;
					case 3:
						navegasliderheaderlibre($('#anumpasol3'), 3);
                        document.getElementById("btnsiguiente").tabIndex = "47";
                        document.getElementById("btnanterior").tabIndex = "48";
                        $('#txtNombreEmpresanew').focus();
						break;
					case 4:
						navegasliderheaderlibre($('#anumpasol4'), 4);
                        document.getElementById("btnsiguiente").tabIndex = "54";
                        document.getElementById("btnanterior").tabIndex = "55";
                        $('#sldpersopoli').focus();
						break;
					case 5:
						navegasliderheaderlibre($('#anumpasol5'), 5);
                        document.getElementById("btnsiguiente").tabIndex = "71";
                        document.getElementById("btnanterior").tabIndex = "72";
                        $('#txtNombreRef1new').focus();
						break;
                    case 6:
						navegasliderheaderlibre($('#anumpasol6'), 6);
                        //document.getElementById("btnfinalizar").tabIndex = "72";
                        document.getElementById("btnanterior").tabIndex = "78";
                        if($('#recreasolicitudinput').val() == "NO")
                        {
                            $('#terminar').css("display", "");

                        }else{
                            $('#terminar').css("display", "none");

                        }
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
			
	/*var cadenacif1 = Base64.decode(getParameterByName('exml2340'));
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
                    $("#cargandoafiliadiv").hide();
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
		}*/

		
		
		
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
