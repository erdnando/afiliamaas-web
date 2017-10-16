$(document).ready(function(){ 
var Nomusuario = $("#txtNomusuarioWS").val();
var tipouser="4";
var pwd = $("#txtpwdWS").val();
var compniare=$("#txtcompniareWS").val();
var token = $('#txttokenWS').val();
var idUsr =  $('#txtidUsrWS').val();

	$('#terminar').on({
	  click: function() {
			var lon;
			var lat;
		  if (navigator.geolocation)
			{
				navigator.geolocation.getCurrentPosition(function(objPosition)
				{
					 lon = objPosition.coords.longitude;
					 lat = objPosition.coords.latitude;

				}, function(objPositionError)
				{
					switch (objPositionError.code)
					{
						case objPositionError.PERMISSION_DENIED:
							content.innerHTML = "No se ha permitido el acceso a la posición del usuario.";
						break;
						case objPositionError.POSITION_UNAVAILABLE:
							content.innerHTML = "No se ha podido acceder a la información de su posición.";
						break;
						case objPositionError.TIMEOUT:
							content.innerHTML = "El servicio ha tardado demasiado tiempo en responder.";
						break;
						default:
							content.innerHTML = "Error desconocido.";
					}
				}, {
					maximumAge: 75000,
					timeout: 15000
				});
			}
			else
			{
				content.innerHTML = "Su navegador no soporta la API de geolocalización.";
			}
			/*var fecha = new Date();
			var options = { year: 'numeric', month: 'long', day: 'numeric' };

			console.log(
			  fecha.toLocaleDateString("es-ES", options)
			);
			*/
			var date = new Date();
			var dia = date.getDate();
			var mes = date.getMonth();
			var yyy = date.getFullYear();
			//var fecha_formateada = dia + ' de ' + mes + ' de ' + yyy;
			//console.log(fecha_formateada);
			var sexosoli;
			
			if($("#chksexosolicitante").is(':checked')){
			// Hacer algo si el checkbox ha sido seleccionado
				sexosoli = "FEMENINO";
				console.log(sexosoli);
			}else{
				// Hacer algo si el checkbox ha sido deseleccionado
				sexosoli = "MASCULINO";
				console.log(sexosoli);
			}
          var espolitico, tieneparen = "NO";


            if($("#optpersonapoliticonew").is(':checked')){
				espolitico="SI";

			}

			if($("#optparenpoliticonew").is(':checked')){
				tieneparen="SI";
			}

            if($("#imagenpresenta")[0].src == "https://stefaninimx.com/afiliamaas-web/images/fondo.jpg"){

                    var demoTimeout;
					clearTimeout(demoTimeout);
					$("#imagenpresenta").trigger('startRumble');
					$("#imagenpresenta").css('border', '1px solid red');
					//validariconlistas(elem);
					//$("#imagenpresenta").css('border', '1px solid red');
					demoTimeout = setTimeout(function(){$("#imagenpresenta").trigger('stopRumble');},1500);
                }
                else
                {

                    var validacionesheader = [];
                    validacionesheader = validacontrolespantallGral();

                   if(validacionesheader.length == 0) {

			
                        swal({

                            title: '<i style="font-style: normal;">¿Enviar la solicitud?</i>',
                            showCloseButton: true,
                            confirmButtonText:
                                '<i class="glyphicon glyphicon-ok"></i>',
                            allowOutsideClick: false,

                        }).then(function () {
                            $('#cargandoafiliadiv').show();
                            console.log("Informacion guardada " + Nomusuario);




                        $.ajax({
                                type: 'POST',
                                url: 'https://stefaninimx.com/mx.com.stefanini.service.api.rest/Service1.svc/AddSolicitud',
                                data: JSON.stringify({"objSolicitud":{"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion": dia,"MesCreacion": mes,"AnioCreacion": yyy,"Lattitude": lat,"Longuitud": lon,    "generales":{"Tpoidentif":$("#txtTipIdentificacionnew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Noidenficacion":$("#txtNumIdentificanew").val(),"Pmrnombre":$("#txtNomSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre":$("#txtSegundonombrenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Apaterno":$("#txtApePaternonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno":$("#txtApeMaternonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val(),"Fechanacdia":$("#dateFechanacnew").val().substr(8,2),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val(),"Nodependiente":$("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnew").val().substr(5,2),"FechanacAnio":$("#dateFechanacnew").val().substr(0,4)},"domicilio":{"Calle": $("#txtCalleSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoInt": $("#txtNumInteriornew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoExt": $("#txtNumExteriornew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Cpdom": $("#txtCpSolicitantenew").val(),"Estado": $("#lisEstadoSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Delegacion": $("#lisDelMuniSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Colonia": $("#lisColoniaSolicitantenew option:selected").text().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"TiempoResidencia": $("#txtTiempoResidencianew").val(),"EstatusResidencia": $("#lisEstatusResidencianew").val(),"MontoVivienda": $("#txtMontoViviendanew").val(),"Email": $("#txtCorreonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Telcasa": $("#txtTelefonoCasanew").val(),"Telmovil": $("#txtTelefonoCelularnew").val(),"CompaniaMovil": $("#lisCompaniaMovilnew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute')},"Deconominos":{"TipoContrato": $("#lisTipoContratonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"AntiguedadEmpleo": $("#txtantiguedadnew").val(),"AniosCasada": $("#txtAosCasadonew").val(),"Ingresos": $("#txtIngresonew").val(),"NombreEmpresa": $("#txtNombreEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"GiroEmpresa": $("#txtGironew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Puesto": $("#txtPuestonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Domicilio": {"Calle": $("#txtCalleEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoInt": $("#txtNumeroInteriornew").val(),"NoExt": $("#txtNumeroExteriorEmpresa").val(),"Cpdom": $("#txtCpEmpresanew").val(),"Estado": $("#lisEstadoEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Delegacion": $("#lisDelMuniEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Colonia": $("#lisColoniaEmpresanew option:selected").text().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"TiempoResidencia": "0","EstatusResidencia": "0","MontoVivienda": "0","Email": null,"Telcasa": $("#txtTelOficinanew").val(),"Telmovil": "","CompaniaMovil": null},"OtrosIngresos": $("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos": $("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria": null,"RegPromotor": null,"Compania": compniare,"Formato": null,"Usuario": Nomusuario,"Contrasenia": pwd,"Coordinador": null,"Gerente": null,"TipoUsuario": null},"Personapolitica":{"TipoParentesco":$('#txqueparenfuncionpoliticoSolicitantenew').val(),"Descfuncion":$('#txfuncionpoliticoSolicitantenew').val(),"Parentesco":null,"Descparentesco":$('#txparentescofuncionpoliticoSolicitantenew').val(),"TieneParentesco":tieneparen,"EsPersonaPolitica":espolitico},"Refer":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef1new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef1new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef1new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef1new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef1new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer2":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef2new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef2new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer3":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef3new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef3new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"doc":{"IdentificacionFrentePath": $('#result_imagefin')[0].name,"IdentificacionAtrasPath": $('#result_imagefinatras')[0].name,"Contrato1Path": "","Contrato2Path": "","FirmaPath": $('#imagenpresenta')[0].name,"Extra1": $('#imaextramodal')[0].name ? $('#imaextramodal')[0].name : "................................................................","Extra2": $('#imaextramodal2')[0].name ? $('#imaextramodal2')[0].name : "................................................................","Extra3": $('#imaextramodal3')[0].name ? $('#imaextramodal3')[0].name : "................................................................","Extra4": $('#imaextramodal4')[0].name ? $('#imaextramodal4')[0].name : "................................................................","Extra5": $('#imaextramodal5')[0].name ? $('#imaextramodal5')[0].name : "................................................................"}},"IF": $('#result_imagefin')[0].src.replace("data:image/jpeg;base64,", ""), "IA": $('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,", ""), "C1": "", "C2": "", "ESTATUS": "6", "ID_SOLICITUD": "", "E1": $('#imaextramodal')[0].name ? $('#imaextramodal')[0].src.replace("data:image/jpeg;base64,", ""):"", "E2": $('#imaextramodal2')[0].name ? $('#imaextramodal2')[0].src.replace("data:image/jpeg;base64,", ""):"", "E3": $('#imaextramodal3')[0].name ? $('#imaextramodal3')[0].src.replace("data:image/jpeg;base64,", ""):"", "E4": $('#imaextramodal4')[0].name ? $('#imaextramodal4')[0].src.replace("data:image/jpeg;base64,", ""):"", "E5": $('#imaextramodal5')[0].name ? $('#imaextramodal5')[0].src.replace("data:image/jpeg;base64,", ""):"", "F1": $('#imagenpresenta')[0].src.replace("data:image/png;base64,", ""),"TIPO_SOLICITUD": ""},"llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":token}}),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function(data){
                                    var resulsoliingre = [];
                                    resulsoliingre = data.split('@');
                                    $('#txttokenWS').val(resulsoliingre[1])
                                    $('#cargandoafiliadiv').hide();

                                    swal({
                                          title: '<i style="font-style: normal;">¡Información guardada con número de ID: ' + resulsoliingre[0] + '!</i>',
                                          showCloseButton: true,
                                          confirmButtonText:
                                            '<i class="glyphicon glyphicon-ok"></i>',
                                        allowOutsideClick: false,

                                        }).then(function () {
                                              reseteavalores();
                                        $('#result_image')[0].src = "https://stefaninimx.com/afiliamaas-web/images/shade.jpg";
							            $('#result_imageanver')[0].src = "https://stefaninimx.com/afiliamaas-web/images/shade.jpg";
                                        $('#2b').modal('hide');
                                        $('#3b').modal('hide');
                                        $('#DatGrales').modal('hide');

                                        var _tsfWizard = $('.tsf-wizard-1').tsfWizard({
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

                                               validacontrolespantall(pantalla,false,e);
                                            }else{
                                                navegasliderheaderlibre(null, pantalla);
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


                                        $("#rowvalida").click();

                                    });

                                    /*$('#contenidogral').empty();
                                    $('#contenidogral').removeAttr('class',"isotope-container row grid-space-20");

                                    consultasolicitudes(idUsr,token,Nomusuario,tipouser,pwd,compniare);

                                    $("#contenidogral").load("./isotope.pkgd.min.js");
                                    $("#contenidogral").load("./isotope.pkgd.js");*/





                                },
                                error: function (result) {
                                    console.log("errror....");
                                }
                            });


                        }, function (dismiss) {

                        });

                }else
                    {
                        var trtextos = "";

                        $.each(validacionesheader, function (ind, elem) {

                            trtextos +="<tr><td align='left' valign='top' style='padding-right:2em;'>Sección:</td><td align='left' style='font-weight:bold'>"+ elem +"</td><td></td></tr>"
                        });

                        var texterroresgrales = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%; border-collapse: separate;border-spacing:  7px;    height: 178px;'>" + trtextos + "</table>";


                        $(".swal2-modal").attr("class","bottom: 10px;")


                        swal({

                            title: '<i style="font-style: normal;">Por favor verifica las siguientes secciones:</i>',
                            html: texterroresgrales,
                            showCloseButton: true,
                            confirmButtonText:
                                '<i class="glyphicon glyphicon-ok"></i>',
                            allowOutsideClick: false,

                        }).then(function () {

                            });

                        $(".swal2-modal").attr("class","bottom: 147px;")




                    }

        }


	  }
	  
	});	
});  
