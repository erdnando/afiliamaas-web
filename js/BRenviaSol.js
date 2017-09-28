$(document).ready(function(){ 
var Nomusuario = $("#txtNomusuarioWS").val();
var tipouser="4";
var pwd = $("#txtpwdWS").val();
var compniare=$("#txtcompniareWS").val();
var token = $('#txttokenWS').val();

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
			
			swal({
				
				title: '<i>¿Enviar la solicitud?</i>',
				showCloseButton: true,
				confirmButtonText:
					'<i class="glyphicon glyphicon-ok"></i>',
				
			}).then(function () {
				console.log("Informacion guardada " + Nomusuario);
				console.log(JSON.stringify({"objSolicitud":{"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion": dia,"MesCreacion": mes,"AnioCreacion": yyy,"Lattitude": lat,"Longuitud": lon,    "generales":{"Tpoidentif":$("#txtTipIdentificacionnew").val(),"Noidenficacion":$("#txtNumIdentificanew").val(),"Pmrnombre":$("#txtNomSolicitantenew").val(),"Sdonombre":$("#txtSegundonombrenew").val(),"Apaterno":$("#txtApePaternonew").val(),"Amaterno":$("#txtApeMaternonew").val(),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val(),"Fechanacdia":$("#dateFechanacnew").val().substr(8,2),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val(),"Nodependiente":$("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnew").val().substr(5,2),"FechanacAnio":$("#dateFechanacnew").val().substr(0,4)},"domicilio":{"Calle": $("#txtCalleSolicitantenew").val(),"NoInt": $("#txtNumInteriornew").val(),"NoExt": $("#txtNumExteriornew").val(),"Cpdom": $("#txtCpSolicitantenew").val(),"Estado": $("#lisEstadoSolicitantenew").val(),"Delegacion": $("#lisDelMuniSolicitantenew").val(),"Colonia": $("#lisColoniaSolicitantenew").val(),"TiempoResidencia": $("#txtTiempoResidencianew").val(),"EstatusResidencia": $("#lisEstatusResidencianew").val(),"MontoVivienda": $("#txtMontoViviendanew").val(),"Email": $("#txtCorreonew").val(),"Telcasa": $("#txtTelefonoCasanew").val(),"Telmovil": $("#txtTelefonoCelularnew").val(),"CompaniaMovil": $("#lisCompaniaMovilnew").val()},"Deconominos":{"TipoContrato": $("#lisTipoContratonew").val(),"AntiguedadEmpleo": $("#txtantiguedadnew").val(),"AniosCasada": $("#txtAosCasadonew").val(),"Ingresos": $("#txtIngreso").val(),"NombreEmpresa": $("#txtNombreEmpresanew").val(),"GiroEmpresa": $("#txtGironew").val(),"Puesto": $("#txtPuestonew").val(),"Domicilio": {"Calle": $("#txtCalleEmpresanew").val(),"NoInt": $("#txtNumeroInteriornew").val(),"NoExt": $("#txtNumeroExteriorEmpresa").val(),"Cpdom": $("#txtCpEmpresanew").val(),"Estado": $("#lisEstadoEmpresanew").val(),"Delegacion": $("#lisDelMuniEmpresanew").val(),"Colonia": $("#lisColoniaEmpresanew").val(),"TiempoResidencia": "0","EstatusResidencia": "0","MontoVivienda": "0","Email": null,"Telcasa": $("#txtTelOficinanew").val(),"Telmovil": "","CompaniaMovil": null},"OtrosIngresos": $("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos": $("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria": null,"RegPromotor": null,"Compania": compniare,"Formato": null,"Usuario": Nomusuario,"Contrasenia": pwd,"Coordinador": null,"Gerente": null,"TipoUsuario": null},"Personapolitica":{"TipoParentesco":"","Descfuncion":"","Parentesco":null,"Descparentesco":"","TieneParentesco":"NO","EsPersonaPolitica":"NO"},"Refer":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef1new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef1new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef1new").val(),"Amaterno": $("#txtApellidoMaternoRef1new").val(),"Sexo": null,"Nacionalidad": "2519","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer2":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef2new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef2new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef2new").val(),"Amaterno": $("#txtApellidoMaternoRef2new").val(),"Sexo": null,"Nacionalidad": "2519","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer3":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef3new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef3new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef3new").val(),"Amaterno": $("#txtApellidoMaternoRef3new").val(),"Sexo": null,"Nacionalidad": "","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"doc":{"IdentificacionFrentePath": $('#result_imagefin')[0].name,"IdentificacionAtrasPath": $('#result_imagefinatras')[0].name,"Contrato1Path": "","Contrato2Path": "","FirmaPath": $('#imagenpresenta')[0].name,"Extra1": "................................................................","Extra2": "................................................................","Extra3": "................................................................","Extra4": "................................................................","Extra5": "................................................................"}},"IF": $('#result_imagefin')[0].src.replace("data:image/jpeg;base64,", ""), "IA": $('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,", ""), "C1": "", "C2": "", "ESTATUS": "6", "ID_SOLICITUD": "", "E1": "", "E2": "", "E3": "", "E4": "", "E5": "", "F1": $('#imagenpresenta')[0].src.replace("data:image/png;base64,", ""),"TIPO_SOLICITUD": ""},"llave":{"Usuario":Nomusuario,"Compania":compniare,"Token":token}}))
				$.ajax({ 			
						type: 'POST',
						url: 'https://stefaninimx.com/mx.com.stefanini.service.api.rest/Service1.svc/AddSolicitud', 
						data: JSON.stringify({"objSolicitud":{"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion": dia,"MesCreacion": mes,"AnioCreacion": yyy,"Lattitude": lat,"Longuitud": lon,    "generales":{"Tpoidentif":$("#txtTipIdentificacionnew").val(),"Noidenficacion":$("#txtNumIdentificanew").val(),"Pmrnombre":$("#txtNomSolicitantenew").val(),"Sdonombre":$("#txtSegundonombrenew").val(),"Apaterno":$("#txtApePaternonew").val(),"Amaterno":$("#txtApeMaternonew").val(),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val(),"Fechanacdia":$("#dateFechanacnew").val().substr(8,2),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val(),"Nodependiente":$("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnew").val().substr(5,2),"FechanacAnio":$("#dateFechanacnew").val().substr(0,4)},"domicilio":{"Calle": $("#txtCalleSolicitantenew").val(),"NoInt": $("#txtNumInteriornew").val(),"NoExt": $("#txtNumExteriornew").val(),"Cpdom": $("#txtCpSolicitantenew").val(),"Estado": $("#lisEstadoSolicitantenew").val(),"Delegacion": $("#lisDelMuniSolicitantenew").val(),"Colonia": $("#lisColoniaSolicitantenew option:selected").text(),"TiempoResidencia": $("#txtTiempoResidencianew").val(),"EstatusResidencia": $("#lisEstatusResidencianew").val(),"MontoVivienda": $("#txtMontoViviendanew").val(),"Email": $("#txtCorreonew").val(),"Telcasa": $("#txtTelefonoCasanew").val(),"Telmovil": $("#txtTelefonoCelularnew").val(),"CompaniaMovil": $("#lisCompaniaMovilnew").val()},"Deconominos":{"TipoContrato": $("#lisTipoContratonew").val(),"AntiguedadEmpleo": $("#txtantiguedadnew").val(),"AniosCasada": $("#txtAosCasadonew").val(),"Ingresos": $("#txtIngreso").val(),"NombreEmpresa": $("#txtNombreEmpresanew").val(),"GiroEmpresa": $("#txtGironew").val(),"Puesto": $("#txtPuestonew").val(),"Domicilio": {"Calle": $("#txtCalleEmpresanew").val(),"NoInt": $("#txtNumeroInteriornew").val(),"NoExt": $("#txtNumeroExteriorEmpresa").val(),"Cpdom": $("#txtCpEmpresanew").val(),"Estado": $("#lisEstadoEmpresanew").val(),"Delegacion": $("#lisDelMuniEmpresanew").val(),"Colonia": $("#lisColoniaEmpresanew option:selected").text(),"TiempoResidencia": "0","EstatusResidencia": "0","MontoVivienda": "0","Email": null,"Telcasa": $("#txtTelOficinanew").val(),"Telmovil": "","CompaniaMovil": null},"OtrosIngresos": $("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos": $("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria": null,"RegPromotor": null,"Compania": compniare,"Formato": null,"Usuario": Nomusuario,"Contrasenia": pwd,"Coordinador": null,"Gerente": null,"TipoUsuario": null},"Personapolitica":{"TipoParentesco":"","Descfuncion":"","Parentesco":null,"Descparentesco":"","TieneParentesco":"NO","EsPersonaPolitica":"NO"},"Refer":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef1new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef1new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef1new").val(),"Amaterno": $("#txtApellidoMaternoRef1new").val(),"Sexo": null,"Nacionalidad": "2519","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer2":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef2new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef2new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef2new").val(),"Amaterno": $("#txtApellidoMaternoRef2new").val(),"Sexo": null,"Nacionalidad": "2519","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer3":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef3new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef3new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef3new").val(),"Amaterno": $("#txtApellidoMaternoRef3new").val(),"Sexo": null,"Nacionalidad": "","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"doc":{"IdentificacionFrentePath": $('#result_imagefin')[0].name,"IdentificacionAtrasPath": $('#result_imagefinatras')[0].name,"Contrato1Path": "","Contrato2Path": "","FirmaPath": $('#imagenpresenta')[0].name,"Extra1": "................................................................","Extra2": "................................................................","Extra3": "................................................................","Extra4": "................................................................","Extra5": "................................................................"}},"IF": $('#result_imagefin')[0].src.replace("data:image/jpeg;base64,", ""), "IA": $('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,", ""), "C1": "", "C2": "", "ESTATUS": "6", "ID_SOLICITUD": "", "E1": "", "E2": "", "E3": "", "E4": "", "E5": "", "F1": $('#imagenpresenta')[0].src.replace("data:image/png;base64,", ""),"TIPO_SOLICITUD": ""},"llave":{"Usuario":Nomusuario,"Compania":compniare,"Token":token}}),
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						success: function(data){
							var resulsoliingre = [];
							resulsoliingre = data.split('@');
							$('#txttokenWS').val(resulsoliingre[1])
								swal("¡Información guardada con número de ID: " + resulsoliingre[0] + "!", 
								"", 
								"success");
								
								
								
						},
						error: function (result) {  
							console.log("errror....");  
						}   
					});
				
			}, function (dismiss) {
				
			});
			
			
			
			
		  
		  
		/*swal({ 
			title: "¿Guardar y enviar la solicitud?",   
			text: "",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Aceptar",   
			cancelButtonText: "Cancelar",   
			closeOnConfirm: false,   
			closeOnCancel: false,
			html: true}, 

			function(isConfirm){   
				if (isConfirm) {  
					console.log("Informacion guard" + Nomusuario);
					//console.log(JSON.stringify({"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion":dia,"MesCreacion":mes,"AnioCreacion":yyy,"Lattitude":lat,"Longuitud":lon,"generales":{"Tpoidentif":"2565","Noidenficacion":$("#txtNumIdentificanew").val() ,"Pmrnombre":$("#txtNomSolicitantenew").val(),"Sdonombre":$("#txtSegundonombrenew").val(),"Apaterno":$("#txtApePaternonew").val(),"Amaterno":$("#txtApeMaternonew").val(),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val(),"Fechanacdia":$("#dateFechanacnewdia").val(),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val(),"Nodependiente": $("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnewmes").val(),"FechanacAnio":$("#dateFechanacnewanio").val()},"domicilio":{"Calle":$("#txtCalleSolicitantenew").val(),"NoInt":$("#txtNumInteriornew").val(),"NoExt":$("#txtNumExteriornew").val(),"Cpdom":$("#txtCpSolicitantenew").val(),"Estado":$("#lisEstadoSolicitantenew").val(),"Delegacion":$("#lisDelMuniSolicitantenew").val(),"Colonia":$("#lisColoniaSolicitantenew").val(),"TiempoResidencia":$("#txtTiempoResidencianew").val(),"EstatusResidencia":$("#lisEstatusResidencianew").val(),"MontoVivienda":$("#txtMontoViviendanew").val(),"Email":$("#txtCorreonew").val(),"Telcasa":$("#txtTelefonoCasanew").val(),"Telmovil":$("#txtTelefonoCelularnew").val(),"CompaniaMovil":$("#lisCompaniaMovilnew").val()},"Deconominos":{"TipoContrato":$("#lisTipoContratonew").val(),"AntiguedadEmpleo":$("#txtantiguedadnew").val(),"AniosCasada":$("#txtAosCasadonew").val(),"Ingresos":$("#txtIngreso").val(),"NombreEmpresa":$("#txtNombreEmpresanew").val(),"GiroEmpresa":$("#txtGironew").val(),"Puesto":$("#txtPuestonew").val(),"Domicilio":{"Calle":$("#txtCalleEmpresanew").val(),"NoInt":$("#txtNumeroInteriornew").val(),"NoExt":$("#txtNumeroExteriorEmpresa").val(),"Cpdom":$("#txtCpEmpresanew").val(),"Estado":$("#lisEstadoEmpresanew").val(),"Delegacion":$("#lisDelMuniEmpresanew").val(),"Colonia":$("#lisColoniaEmpresanew").val(),"TiempoResidencia":"0","EstatusResidencia":"0","MontoVivienda":"0","Email":null,"Telcasa":$("#txtTelOficinanew").val(),"Telmovil":"","CompaniaMovil":null},"OtrosIngresos":$("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos":$("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria":null,"RegPromotor":null,"Compania":compniare,"Formato":null,"Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":null,"Gerente":null,"TipoUsuario":null},"Personapolitica":{"TipoParentesco":"","Descfuncion":"","Parentesco":null,"Descparentesco":"","TieneParentesco":"NO","EsPersonaPolitica":"NO"},"Refer":{"Noreferencia":null,"TelefonoCasa":$("#txtTelCasaRef1new").val(),"Tpoidentif":null,"Noidenficacion":null,"Pmrnombre":$("#txtNombreRef1new").val(),"Sdonombre":"","Apaterno":$("#txtApellidoPaternoRef1new").val(),"Amaterno":$("#txtApellidoMaternoRef1new").val(),"Sexo":null,"Nacionalidad":"2519","Fechanacdia":null,"Rfc":null,"Edocivil":null,"Nodependiente":null,"Cveperspol":null,"FechasnacMes":null,"FechanacAnio":null},"Refer2":{"Noreferencia":null,"TelefonoCasa":$("#txtTelCasaRef2new").val(),"Tpoidentif":null,"Noidenficacion":null,"Pmrnombre":$("#txtNombreRef2new").val(),"Sdonombre":"","Apaterno":$("#txtApellidoPaternoRef2new").val(),"Amaterno":$("#txtApellidoMaternoRef2new").val(),"Sexo":null,"Nacionalidad":"2519","Fechanacdia":null,"Rfc":null,"Edocivil":null,"Nodependiente":null,"Cveperspol":null,"FechasnacMes":null,"FechanacAnio":null},"Refer3":{"Noreferencia":null,"TelefonoCasa":$("#txtTelCasaRef3new").val(),"Tpoidentif":null,"Noidenficacion":null,"Pmrnombre":$("#txtNombreRef3new").val(),"Sdonombre":"","Apaterno":$("#txtApellidoPaternoRef3new").val(),"Amaterno":$("#txtApellidoMaternoRef3new").val(),"Sexo":null,"Nacionalidad":"","Fechanacdia":null,"Rfc":null,"Edocivil":null,"Nodependiente":null,"Cveperspol":null,"FechasnacMes":null,"FechanacAnio":null},"doc":{"IdentificacionFrentePath":$('#result_imagefin')[0].name,"IdentificacionAtrasPath":$('#result_imagefinatras')[0].name,"Contrato1Path":"","Contrato2Path":"","FirmaPath":$('#imagenpresenta')[0].name, "Extra1":"","Extra2":"","Extra3":"","Extra4":"","Extra5":""}},"IF":$('#result_imagefin')[0].src.replace("data:image/jpeg;base64,",""),  "IA":$('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,",""),  "C1":"",  "C2":"",  "ESTATUS":"6",  "ID_SOLICITUD":"",  "E1":"........................................",  "E2":"....................................",  "E3":"..................................................",  "E4":"................................................",  "E5":"......................................",  "F1":$('#imagenpresenta')[0].src.replace("data:image/png;base64,",""),"TIPO_SOLICITUD":""}))
					$.ajax({ 			
							type: 'POST',
							url: 'https://stefaninimx.com/mx.com.stefanini.service.api.rest/Service1.svc/AddSolicitud', 
							data: JSON.stringify({"objSolicitud":{"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion": dia,"MesCreacion": mes,"AnioCreacion": yyy,"Lattitude": lat,"Longuitud": lon,    "generales":{"Tpoidentif":$("#txtTipIdentificacionnew").val(),"Noidenficacion":$("#txtNumIdentificanew").val(),"Pmrnombre":$("#txtNomSolicitantenew").val(),"Sdonombre":$("#txtSegundonombrenew").val(),"Apaterno":$("#txtApePaternonew").val(),"Amaterno":$("#txtApeMaternonew").val(),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val(),"Fechanacdia":$("#dateFechanacnewdia").val().substr(8,2),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val(),"Nodependiente":$("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnewdia").val().substr(5,2),"FechanacAnio":$("#dateFechanacnewdia").val().substr(0,4)},"domicilio":{"Calle": $("#txtCalleSolicitantenew").val(),"NoInt": $("#txtNumInteriornew").val(),"NoExt": $("#txtNumExteriornew").val(),"Cpdom": $("#txtCpSolicitantenew").val(),"Estado": $("#lisEstadoSolicitantenew").val(),"Delegacion": $("#lisDelMuniSolicitantenew").val(),"Colonia": $("#lisColoniaSolicitantenew").val(),"TiempoResidencia": $("#txtTiempoResidencianew").val(),"EstatusResidencia": $("#lisEstatusResidencianew").val(),"MontoVivienda": $("#txtMontoViviendanew").val(),"Email": $("#txtCorreonew").val(),"Telcasa": $("#txtTelefonoCasanew").val(),"Telmovil": $("#txtTelefonoCelularnew").val(),"CompaniaMovil": $("#lisCompaniaMovilnew").val()},"Deconominos":{"TipoContrato": $("#lisTipoContratonew").val(),"AntiguedadEmpleo": $("#txtantiguedadnew").val(),"AniosCasada": $("#txtAosCasadonew").val(),"Ingresos": $("#txtIngreso").val(),"NombreEmpresa": $("#txtNombreEmpresanew").val(),"GiroEmpresa": $("#txtGironew").val(),"Puesto": $("#txtPuestonew").val(),"Domicilio": {"Calle": $("#txtCalleEmpresanew").val(),"NoInt": $("#txtNumeroInteriornew").val(),"NoExt": $("#txtNumeroExteriorEmpresa").val(),"Cpdom": $("#txtCpEmpresanew").val(),"Estado": $("#lisEstadoEmpresanew").val(),"Delegacion": $("#lisDelMuniEmpresanew").val(),"Colonia": $("#lisColoniaEmpresanew").val(),"TiempoResidencia": "0","EstatusResidencia": "0","MontoVivienda": "0","Email": null,"Telcasa": $("#txtTelOficinanew").val(),"Telmovil": "","CompaniaMovil": null},"OtrosIngresos": $("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos": $("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria": null,"RegPromotor": null,"Compania": compniare,"Formato": null,"Usuario": Nomusuario,"Contrasenia": pwd,"Coordinador": null,"Gerente": null,"TipoUsuario": null},"Personapolitica":{"TipoParentesco":"","Descfuncion":"","Parentesco":null,"Descparentesco":"","TieneParentesco":"NO","EsPersonaPolitica":"NO"},"Refer":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef1new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef1new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef1new").val(),"Amaterno": $("#txtApellidoMaternoRef1new").val(),"Sexo": null,"Nacionalidad": "2519","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer2":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef2new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef2new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef2new").val(),"Amaterno": $("#txtApellidoMaternoRef2new").val(),"Sexo": null,"Nacionalidad": "2519","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer3":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef3new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef3new").val(),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef3new").val(),"Amaterno": $("#txtApellidoMaternoRef3new").val(),"Sexo": null,"Nacionalidad": "","Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"doc":{"IdentificacionFrentePath": $('#result_imagefin')[0].name,"IdentificacionAtrasPath": $('#result_imagefinatras')[0].name,"Contrato1Path": "","Contrato2Path": "","FirmaPath": $('#imagenpresenta')[0].name,"Extra1": "................................................................","Extra2": "................................................................","Extra3": "................................................................","Extra4": "................................................................","Extra5": "................................................................"}},"IF": $('#result_imagefin')[0].src.replace("data:image/jpeg;base64,", ""), "IA": $('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,", ""), "C1": "", "C2": "", "ESTATUS": "6", "ID_SOLICITUD": "", "E1": "", "E2": "", "E3": "", "E4": "", "E5": "", "F1": $('#imagenpresenta')[0].src.replace("data:image/png;base64,", ""),"TIPO_SOLICITUD": ""},"llave":{"Usuario":Nomusuario,"Compania":compniare,"Token":token}}),
							contentType: "application/json; charset=utf-8",
							dataType: "json",
							success: function(data){
								var resulsoliingre = [];
								resulsoliingre = data.split('@');
								$('#txttokenWS').val(resulsoliingre[1])
									swal("¡Información guardada con número de ID: " + resulsoliingre[0] + "!", 
									"", 
									"success");
									
									
									
							},
							error: function (result) {  
								console.log("errror....");  
							}   
						});	
					
					
					/*swal("¡Información guardad!", 
						"", 
						"success");*/
					/*$("#identificacion-ine").fadeOut();
					$("#lblidentificacion-ine").fadeOut();
					$("#identificacion-ineanver").fadeIn();
					$("#lblidentificacion-ineanver").fadeIn();
					document.getElementById('txtNumIdentificanew').value=data.ocr;
					$("#btnifeok").prop( "disabled", false );
					$("#btnifeok").fadeIn();*/
					
					
				/*} else {     
					swal("", 
						"¡Por favor verifica la información!", 
					"warning");   
				} 
			});	*/

	  }
	  
	});	
});  
