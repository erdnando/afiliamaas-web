$(document).ready(function(){ 
var Nomusuario = $("#txtNomusuarioWS").val();
var tipouser="4";
var pwd = $("#txtpwdWS").val();
var compniare=$("#txtcompniareWS").val();
var token = $('#txttokenWS').val();
var idUsr =  $('#txtidUsrWS').val();

	$('#terminar').on({
	  click: function() {

          /*if($('#recreasolicitudinput').val() == "SI")
          {
              console.log("paso el milagro");
              return;
          }*/






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
          var espolitico="NO";
          var tieneparen = "NO";


            if($("#optpersonapoliticonew").is(':checked')){
				espolitico="SI";

			}

			if($("#optparenpoliticonew").is(':checked')){
				tieneparen="SI";
			}

            if($("#imagenpresenta")[0].src == "https://sminet.com.mx/afiliamaasweb/images/fondo.jpg"){

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

                                var statussol, idsolievia = "";

                            if($("#tipostatusrecreasol").val()!="Rechazadas"){
                                statussol = "6";


                            }else{
                                statussol = "7";
                                idsolievia = $("#idsolrecreasol").val();
                            }



                            console.log(JSON.stringify({"objSolicitud":{"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion": dia,"MesCreacion": mes,"AnioCreacion": yyy,"Lattitude": $("#txtlat").val(),"Longuitud": $("#txtlong").val(),    "generales":{"Tpoidentif":$("#txtTipIdentificacionnew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Noidenficacion":$("#txtNumIdentificanew").val(),"Pmrnombre":$("#txtNomSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre":$("#txtSegundonombrenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Apaterno":$("#txtApePaternonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno":$("#txtApeMaternonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val(),"Fechanacdia":$("#dateFechanacnew").val().substr(8,2),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val(),"Nodependiente":$("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnew").val().substr(5,2),"FechanacAnio":$("#dateFechanacnew").val().substr(0,4)},"domicilio":{"Calle": $("#txtCalleSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoInt": $("#txtNumInteriornew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoExt": $("#txtNumExteriornew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Cpdom": $("#txtCpSolicitantenew").val(),"Estado": $("#lisEstadoSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Delegacion": $("#lisDelMuniSolicitantenew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Colonia": $("#lisColoniaSolicitantenew option:selected").text().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"TiempoResidencia": $("#txtTiempoResidencianew").val(),"EstatusResidencia": $("#lisEstatusResidencianew").val(),"MontoVivienda": $("#txtMontoViviendanew").val(),"Email": $("#txtCorreonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Telcasa": $("#txtTelefonoCasanew").val(),"Telmovil": $("#txtTelefonoCelularnew").val(),"CompaniaMovil": $("#lisCompaniaMovilnew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute')},"Deconominos":{"TipoContrato": $("#lisTipoContratonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"AntiguedadEmpleo": $("#txtantiguedadnew").val(),"AniosCasada": $("#txtAosCasadonew").val(),"Ingresos": $("#txtIngresonew").val(),"NombreEmpresa": $("#txtNombreEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"GiroEmpresa": $("#txtGironew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Puesto": $("#txtPuestonew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Domicilio": {"Calle": $("#txtCalleEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoInt": $("#txtNumInteriornew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoExt": $("#txtNumExteriornew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Cpdom": $("#txtCpEmpresanew").val(),"Estado": $("#lisEstadoEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Delegacion": $("#lisDelMuniEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Colonia": $("#lisColoniaEmpresanew option:selected").text().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"TiempoResidencia": "0","EstatusResidencia": "0","MontoVivienda": "0","Email": null,"Telcasa": $("#txtTelOficinanew").val(),"Telmovil": "","CompaniaMovil": null},"OtrosIngresos": $("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos": $("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria": null,"RegPromotor": null,"Compania": compniare,"Formato": null,"Usuario": Nomusuario,"Contrasenia": pwd,"Coordinador": null,"Gerente": null,"TipoUsuario": null},"Personapolitica":{"TipoParentesco":$('#txqueparenfuncionpoliticoSolicitantenew').val(),"Descfuncion":$('#txfuncionpoliticoSolicitantenew').val(),"Parentesco":null,"Descparentesco":$('#txparentescofuncionpoliticoSolicitantenew').val(),"TieneParentesco":tieneparen,"EsPersonaPolitica":espolitico},"Refer":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef1new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef1new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef1new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef1new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef1new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer2":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef2new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef2new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer3":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef3new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef3new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"doc":{"IdentificacionFrentePath": $('#result_imagefin')[0].name,"IdentificacionAtrasPath": $('#result_imagefinatras')[0].name,"Contrato1Path": "","Contrato2Path": "","FirmaPath": $('#imagenpresenta')[0].name,"Extra1": $('#imaextramodal')[0].name !="Extra" ? $('#imaextramodal')[0].name : "................................................................","Extra2": $('#imaextramodal2')[0].name !="Extra" ? $('#imaextramodal2')[0].name : "................................................................","Extra3": $('#imaextramodal3')[0].name !="Extra" ? $('#imaextramodal3')[0].name : "................................................................","Extra4": $('#imaextramodal4')[0].name !="Extra" ? $('#imaextramodal4')[0].name : "................................................................","Extra5": $('#imaextramodal5')[0].name !="Extra" ? $('#imaextramodal5')[0].name : "................................................................"}},"IF": $('#result_imagefin')[0].src.replace("data:image/jpeg;base64,", ""), "IA": $('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,", ""), "C1": "", "C2": "", "ESTATUS": statussol, "ID_SOLICITUD": idsolievia, "E1": $('#imaextramodal')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal')[0].src:"", "E2": $('#imaextramodal2')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal2')[0].src:"", "E3": $('#imaextramodal3')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal3')[0].src:"", "E4": $('#imaextramodal4')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal4')[0].src:"", "E5": $('#imaextramodal5')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal5')[0].src:"", "F1": $('#imagenpresenta')[0].src.replace("data:image/png;base64,", ""),"TIPO_SOLICITUD": ""},"llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$('#txttokenWS').val()}}));


                            /*$('#imaextramodal')[0].src=$('#imaextramodal')[0].src.replace("data:image/jpeg;base64,", "");
                            $('#imaextramodal2')[0].src=$('#imaextramodal2')[0].src.replace("data:image/jpeg;base64,", "");
                            $('#imaextramodal3')[0].src=$('#imaextramodal3')[0].src.replace("data:image/jpeg;base64,", "");
                            $('#imaextramodal4')[0].src=$('#imaextramodal4')[0].src.replace("data:image/jpeg;base64,", "");
                            $('#imaextramodal5')[0].src=$('#imaextramodal5')[0].src.replace("data:image/jpeg;base64,", "");*/




                        $.ajax({
                            timeout:60000,
                                type: 'POST',
                                url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/AddSolicitud',
                                data: JSON.stringify({"objSolicitud":{"promotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"objSolicitud":{"FolioLocal":"0","DiaCreacion": dia,"MesCreacion": mes,"AnioCreacion": yyy,"Lattitude": $("#txtlat").val(),"Longuitud": $("#txtlong").val(),    "generales":{"Tpoidentif":$("#txtTipIdentificacionnew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Noidenficacion":$("#txtNumIdentificanew").val(),"Pmrnombre":$("#txtNomSolicitantenew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre":$("#txtSegundonombrenew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Apaterno":$("#txtApePaternonew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno":$("#txtApeMaternonew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo":sexosoli,"Nacionalidad":$("#lstNacionalidadnew").val().toUpperCase(),"Fechanacdia":$("#dateFechanacnew").val().substr(8,2),"Rfc":$("#txtRFCnew").val(),"Edocivil":$("#lstEdoCivilnew").val().toUpperCase(),"Nodependiente":$("#txtDependientesnew").val(),"Cveperspol":"2","FechasnacMes":$("#dateFechanacnew").val().substr(5,2),"FechanacAnio":$("#dateFechanacnew").val().substr(0,4)},"domicilio":{"Calle": $("#txtCalleSolicitantenew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoInt": $("#txtNumInteriornew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoExt": $("#txtNumExteriornew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Cpdom": $("#txtCpSolicitantenew").val(),"Estado": $("#lisEstadoSolicitantenew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Delegacion": $("#lisDelMuniSolicitantenew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Colonia": $("#lisColoniaSolicitantenew option:selected").text().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"TiempoResidencia": $("#txtTiempoResidencianew").val(),"EstatusResidencia": $("#lisEstatusResidencianew").val(),"MontoVivienda": $("#txtMontoViviendanew").val(),"Email": $("#txtCorreonew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Telcasa": $("#txtTelefonoCasanew").val(),"Telmovil": $("#txtTelefonoCelularnew").val(),"CompaniaMovil": $("#lisCompaniaMovilnew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute')},"Deconominos":{"TipoContrato": $("#lisTipoContratonew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"AntiguedadEmpleo": $("#txtantiguedadnew").val(),"AniosCasada": $("#txtAosCasadonew").val(),"Ingresos": $("#txtIngresonew").val(),"NombreEmpresa": $("#txtNombreEmpresanew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"GiroEmpresa": $("#txtGironew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Puesto": $("#txtPuestonew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Domicilio": {"Calle": $("#txtCalleEmpresanew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoInt": $("#txtNumInteriornew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"NoExt": $("#txtNumExteriornew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Cpdom": $("#txtCpEmpresanew").val(),"Estado": $("#lisEstadoEmpresanew").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Delegacion": $("#lisDelMuniEmpresanew").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Colonia": $("#lisColoniaEmpresanew option:selected").text().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"TiempoResidencia": "0","EstatusResidencia": "0","MontoVivienda": "0","Email": null,"Telcasa": $("#txtTelOficinanew").val(),"Telmovil": "","CompaniaMovil": null},"OtrosIngresos": $("#txtOtrosIngresosnew").val(),"FuenteOtrosIngresos": $("#txtFuenteOtrosIngrenew").val()},"Resp":null,"Promotor":{"Promotoria": null,"RegPromotor": null,"Compania": compniare,"Formato": null,"Usuario": Nomusuario,"Contrasenia": pwd,"Coordinador": null,"Gerente": null,"TipoUsuario": null},"Personapolitica":{"TipoParentesco":$('#txqueparenfuncionpoliticoSolicitantenew').val().toUpperCase(),"Descfuncion":$('#txfuncionpoliticoSolicitantenew').val().toUpperCase(),"Parentesco":null,"Descparentesco":$('#txparentescofuncionpoliticoSolicitantenew').val().toUpperCase(),"TieneParentesco":tieneparen,"EsPersonaPolitica":espolitico},"Refer":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef1new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef1new").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef1new").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef1new").val().toUpperCase().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef1new').val().toUpperCase(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer2":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef2new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef2new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef2new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"Refer3":{"Noreferencia": null,"TelefonoCasa": $("#txtTelCasaRef3new").val(),"Tpoidentif": null,"Noidenficacion": null,"Pmrnombre": $("#txtNombreRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sdonombre": "","Apaterno": $("#txtApellidoPaternoRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Amaterno": $("#txtApellidoMaternoRef3new").val().replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute'),"Sexo": null,"Nacionalidad": $('#lisNacionalidadRef3new').val(),"Fechanacdia": null,"Rfc": null,"Edocivil": null,"Nodependiente": null,"Cveperspol": null,"FechasnacMes": null,"FechanacAnio": null},"doc":{"IdentificacionFrentePath": $('#result_imagefin')[0].name,"IdentificacionAtrasPath": $('#result_imagefinatras')[0].name,"Contrato1Path": "","Contrato2Path": "","FirmaPath": $('#imagenpresenta')[0].name,"Extra1": $('#imaextramodal')[0].name !="Extra" ? $('#imaextramodal')[0].name : "................................................................","Extra2": $('#imaextramodal2')[0].name !="Extra" ? $('#imaextramodal2')[0].name : "................................................................","Extra3": $('#imaextramodal3')[0].name !="Extra" ? $('#imaextramodal3')[0].name : "................................................................","Extra4": $('#imaextramodal4')[0].name !="Extra" ? $('#imaextramodal4')[0].name : "................................................................","Extra5": $('#imaextramodal5')[0].name !="Extra" ? $('#imaextramodal5')[0].name : "................................................................"}},"IF": $('#result_imagefin')[0].src.replace("data:image/jpeg;base64,", ""), "IA": $('#result_imagefinatras')[0].src.replace("data:image/jpeg;base64,", ""), "C1": "", "C2": "", "ESTATUS": statussol, "ID_SOLICITUD": idsolievia, "E1": $('#imaextramodal')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal')[0].src:"", "E2": $('#imaextramodal2')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal2')[0].src:"", "E3": $('#imaextramodal3')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal3')[0].src:"", "E4": $('#imaextramodal4')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal4')[0].src:"", "E5": $('#imaextramodal5')[0].src !="https://sminet.com.mx/afiliamaasweb/images/fondo.jpg" ? $('#imaextramodal5')[0].src:"", "F1": $('#imagenpresenta')[0].src.replace("data:image/png;base64,", ""),"TIPO_SOLICITUD": ""},"llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$('#txttokenWS').val()}}),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function(data){
                                    var resulsoliingre = [];
                                    resulsoliingre = data.split('@');
                                    $('#txttokenWS').val(resulsoliingre[1])
                                    $('#cargandoafiliadiv').hide();

                                    var titulomsg="";

                                    if($("#tipostatusrecreasol").val()!="Rechazadas"){
                                        titulomsg = '<i style="font-style: normal;">Información guardada con número de ID: ' + resulsoliingre[0] + '</i>';


                                    }else{
                                        titulomsg = '<i style="font-style: normal;">¡Solicitud ' + resulsoliingre[0] + ' actualizada correctamente!</i>';

                                    }

                                    swal({
                                          title: titulomsg,
                                          showCloseButton: true,
                                          confirmButtonText:
                                            '<i class="glyphicon glyphicon-ok"></i>',
                                        allowOutsideClick: false,

                                        }).then(function () {

                                        //location.reload();

                                        $("#cargandoafiliadiv").show();


                                        var nomCompleto =$("#pnompromo").text();



                                        var cadena = Base64.encode($("#txttokenWS").val() + "|" + $("#txtidUsrWS").val() + "|" + $("#txtNomusuarioWS").val() + "|" +  $("#txtcompniareWS").val() + "|" + $("#txtpwdWS").val() + "|" + nomCompleto);

                                        location.href=('AfiliaMaaS.html?exml2340=' + cadena);

                                             /* reseteavalores();
                                        $('#result_image')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg";
							            $('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg";
                                        $('#2b').modal('hide');
                                        $('#3b').modal('hide');
                                        $('#DatGrales').modal('hide');




                                        $("#rowvalida").click();*/

                                    });



                                    /*$('#contenidogral').empty();
                                    $('#contenidogral').removeAttr('class',"isotope-container row grid-space-20");

                                    consultasolicitudes(idUsr,token,Nomusuario,tipouser,pwd,compniare);

                                    $("#contenidogral").load("./isotope.pkgd.min.js");
                                    $("#contenidogral").load("./isotope.pkgd.js");*/





                                },
                                error: function (result) {
                                    console.log("error: " + result["statusText"]);
                                    $('#cargandoafiliadiv').hide();

                                    swal({
                                        title: '<i style="font-style: normal;">Atención</i>',
                                        text: 'Error de comunicación, por favor contacte a su administrador de red',
                                        showCloseButton: true,
                                        confirmButtonText:
                                                            'Aceptar <i class="glyphicon glyphicon-ok"></i>',
                                        allowOutsideClick: false,

                                    }).then(function () {

                                            });
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

                        var texterroresgrales = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%; border-collapse: separate;border-spacing:  7px;    height: auto;'>" + trtextos + "</table>";





                        swal({

                            title: '<i style="font-style: normal;">Por favor verifica las siguientes secciones:</i>',
                            html: texterroresgrales,
                            showCloseButton: true,
                            confirmButtonText:
                                '<i class="glyphicon glyphicon-ok"></i>',
                            width: "380px",
                            allowOutsideClick: false,

                        }).then(function () {
                                                        $(".swal2-modal").css("bottom","147px");

                            });

                        $(".swal2-modal").css("bottom","10px")






                    }

        }





	  }
	  
	});	
});  
