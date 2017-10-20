//$(document).ready(function(){
		/*$('#txtidUsrWS').val(getParameterByName('exml2344'));
		$("#txttokenWS").val(getParameterByName('exml2342'));
		$("#txtNomusuarioWS").val(getParameterByName ("exml2345"));
		$("#txtpwdWS").val(getParameterByName("exml2347"));
		$("#txtcompniareWS").val(getParameterByName("exml2346"));*/
		
		$("#identificacion-ine").change(function(){
			//al recibir una imagen
			var divResultado = document.getElementById('divResultado');
			divResultado.innerHTML = '';
			
			
			processCompress(this);
		});
	
	$("#identificacion-ineanver").change(function(){
		//al recibir una imagen
		var divResultado = document.getElementById('divResultado');
		divResultado.innerHTML = '';
		
		
		processCompressanver(this);
	});
	
	$("#inputextra").change(function(){
		processCompressextra(this);
	});
	
	$("#inputextra2").change(function(){
		processCompressextra2(this);
	});
	
	$("#inputextra3").change(function(){
		processCompressextra3(this);
	});
	
	$("#inputextra4").change(function(){
		processCompressextra4(this);
	});
	
	$("#inputextra5").change(function(){
		processCompressextra5(this);
	});
	
	
		
//});


function processCompress(input) {
	$('#cargandoafiliadiv').show();

	var output_format = "jpg";
	
	
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holder');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_image");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_image');
						var result_image = document.getElementById('result_image');
						var result_imagefin = document.getElementById('result_imagefin');
						var result_imagefinmod = document.getElementById('result_imagefinmod');
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						
						
						
						//$('#titulomodalfinINEFrente').text(result_imagefinmod.name);
						
						
						
						
								
						result_image.onload = function(){
							if($(result_image)[0].src != "https://sminet.com.mx/afiliamaas-web/images/shade.jpg")
							{
								var image_width=$(result_image).width(),
								image_height=$(result_image).height();
									//enviar esta imagen
							   result_image.style.display = "block";
							   result_image.style.width="99%";
							   result_image.style.marginTop ="5px";
							   //result_image.style.position="absolute";
							   result_image.style.left="30px";
							   //--------cal ws ocr-----------------
							   console.log(JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", ""),"llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$("#txttokenWS").val()}}),);
							   $.ajax({  
									type: "POST",  
									url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/loadimagesoap',
									data: JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", ""),"llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$("#txttokenWS").val()}}),
									contentType: "application/json; charset=utf-8",
									dataType: "json",						
									success: function (data) {  
										if(data.Token =="INVALID"){
                                            $('#cargandoafiliadiv').hide();
											swal({
												  title: '<i style="font-style: normal;">Sessión cerrada por inactividad</i>',
												  showCloseButton: true,
												  confirmButtonText:
													'<i class="glyphicon glyphicon-ok"></i>',
                                                allowOutsideClick: false,
												  
												}).then(function () {
													  location.href=("Index.html");
													});
											//location.href=("Index.html");
											$("#txttokenWS").val(data.solicitudes[0].Token);
										}
										else
										{
										   console.log('======================');
										   console.log('Resultado OCR');
										   console.log('======================');
										   console.log(data);
										   console.log('Nombre...'+data.Nombre);
										   console.log('Paterno...'+data.Paterno);
										   console.log('Materno...'+data.Materno);
										   console.log('calle...'+data.calle);
										   console.log('codigoPostal...'+data.codigoPostal);
										   console.log('colonia...'+data.colonia);
										   console.log('fechaDeNacimiento...'+data.fechaDeNacimiento);
										   console.log('fechaDeNacimientoANIO...'+data.fechaDeNacimientoANIO);
										   console.log('fechaDeNacimientoDIA...'+data.fechaDeNacimientoDIA);
										   console.log('fechaDeNacimientoMES...'+data.fechaDeNacimientoMES);
										   console.log('numeroExt...'+data.numeroExt);
										   console.log('sexo...'+data.sexo);
										   $("#txttokenWS").val(data.Token);
										   $('#cargandoafiliadiv').hide();

                                            var nomcompletoocr = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + data.Nombre + ' ' + data.Paterno + ' ' + data.Materno
                                            $('#lblreferenciassolicitante').text(nomcompletoocr.toUpperCase());







                                           /* $('#tabladatosOCR').append("<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%;border-collapse: separate;border-spacing:  7px;'><tr><td align='left' valign='top' style='padding-right:2em;'>Nombre</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+ data.Nombre+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Paterno</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.Paterno+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Materno</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.Materno+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Calle</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.calle+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>CP</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.codigoPostal+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Colonia</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.colonia+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Fecha nac</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.fechaDeNacimiento+"</td><td></td></tr></table>")

                                            $("#DatosOCR").show();*/


										   swal({
												  title: '<i style="font-style: normal;">Datos obtenidos</i>',
												  html:
													"<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%;border-collapse: separate;border-spacing:  7px;'><tr><td align='left' valign='top' style='padding-right:2em;'>Nombre</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+ data.Nombre+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Paterno</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.Paterno+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Materno</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.Materno+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Calle</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.calle+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>CP</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.codigoPostal+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Colonia</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.colonia+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Fecha nac</td><td align='left' style='font-weight:bold;max-width: 250px;'>"+data.fechaDeNacimiento+"</td><td></td></tr></table>",
												  showCloseButton: true,
												  confirmButtonText:
													'<i class="glyphicon glyphicon-ok"></i>',
												  width: "auto",
                                                  allowOutsideClick: false,
												}).then(function () {
													var d = new Date();
													result_imagefin.name= "TEC_" + d.getTime() +".jpg";
													result_imagefinmod.name = result_imagefin.name;

                                                    $('#holder_result').attr("class", "overlay-container");
                                                    $('#inefrenteoverlay').attr("visibility", "visible;");

													
													$('#lnknombremodalINEFrente').text(result_imagefinmod.name);
													$('#lnknombremodalINEFrente').attr("disabled", "disabled");
													
													if($('#result_image')[0].src != "https://sminet.com.mx/afiliamaas-web/images/shade.jpg" && $('#result_imageanver')[0].src != "https://sminet.com.mx/afiliamaas-web/images/shade.jpg"){
														$("#btnifeok").prop( "disabled", false );
														$("#btnifeok").fadeIn();
													}
													document.getElementById('txtNomSolicitantenew').value=data.Nombre;
													validaricontxt($('#txtNomSolicitantenew'));
												   document.getElementById('txtApePaternonew').value=data.Paterno;
												   validaricontxt($('#txtApePaternonew'));
												   document.getElementById('txtApeMaternonew').value=data.Materno;
												   document.getElementById('txtCalleSolicitantenew').value=data.calle;
												   validaricontxt($('#txtCalleSolicitantenew'));
												   document.getElementById('txtCpSolicitantenew').value=data.codigoPostal;
												   validariconCP($('#txtCpSolicitantenew'));
												   result_imagefin.src = result_image.src;
													result_imagefinmod.src = result_image.src;
												   
												   //para INE chear para los otros tipos de identificacion
												   $("#txtTipIdentificacionnew option[value=2565]").attr("selected","selected");
												   $("#txtTipIdentificacionnew").prop( "disabled", true );
												   $("#lstNacionalidadnew option[value=2519]").attr("selected","selected");
													validariconlistas($("#txtTipIdentificacionnew"));
												   
												   validariconlistas($("#lstNacionalidadnew"));
												   
												   $.ajax({ 			
															type: 'POST',
															url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCP',
															data: JSON.stringify({"CP":data.codigoPostal}),
															contentType: "application/json; charset=utf-8",
															dataType: "json",
															success: function(data){
																	var idest;
																	var idpob;
																	var cont= 0;
                                                                    //$("#txttokenWS").val(data.Token);
																	//$("#lisColoniaSolicitantenew").removeOption(/./);
																	$('#lisColoniaSolicitantenew').empty();
																	$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
																	$.each(data, function(i, item) {
																		$("#lisColoniaSolicitantenew").append('<option value="' + item.CTECP + '">' + item.COLONIA + '</option>');	
																		idest = item.IDESTADO
																		console.log( item.CTECP);
																		idpob = item.IDPOBLACION
																	   });
																	   $("#lisEstadoSolicitantenew option:selected").removeAttr("selected");
																		$("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");
																		validariconlistas($("#lisEstadoSolicitantenew"));
																	
																	$.ajax({ 			
																			type: 'POST',
																			url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
																			data: JSON.stringify({"idestado":idest}),
																			contentType: "application/json; charset=utf-8",
																			dataType: "json",
																			success: function(data){
                                                                                //$("#txttokenWS").val(data.Token);
																					$.each(data, function(i, item) {
																						$("#lisDelMuniSolicitantenew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');	
																						idest = item.IDESTADO
																						
																						
																					   });
																					$("#lisDelMuniSolicitantenew option[value="+ idpob +"]").attr("selected","selected");
																					validariconlistas($("#lisDelMuniSolicitantenew"));
																					
																					
																					
																			},
																			error: function (result) {  
																				console.log("errror....");  
																			}   
																		}); 
																	
																	
																	
															},
															error: function (result) {  
																console.log("errror....");  
															}   
														});
												   
												   //document.getElementById('lisDelMuniSolicitantenew').value=data.colonia;
												   $('#dateFechanacnewdia').val(data.fechaDeNacimientoDIA);
												   $('#dateFechanacnewmes').val(data.fechaDeNacimientoMES);
												   $('#dateFechanacnewanio').val("19" + data.fechaDeNacimientoANIO);
																		
																		
												   
												   $('#dateFechanacnew').val("19" + data.fechaDeNacimientoANIO +"-"+ data.fechaDeNacimientoMES +"-" + data.fechaDeNacimientoDIA);
												   validariconfecha($('#dateFechanacnew'));
												   document.getElementById('txtNumExteriornew').value=data.numeroExt ? data.numeroExt : '';
												   if($('#txtNumExteriornew').val() != ''){
														validaricontxt($('#txtNumExteriornew'));
												   }
												   
												   $('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
												   validaricontxt($('#txtRFCnew'));
												   //document.getElementById('cpresult').value=data.codigoPostal;
												   
												}, function (dismiss) {
												  // dismiss can be 'cancel', 'overlay',
												  // 'close', and 'timer'
												  if (dismiss === 'cancel' || dismiss === 'close') {

												  }
												});
										}
																
									},  
									error: function (result) {  
										alert("errror....");  
									}  
								});  
							   
							   }
					
							
							var duration = new Date().getTime() - time_start;
							console.log("proceso terminado..");
							console.log('Procesado en: ' + duration + 'ms');
						}
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }else{
		console.log('nobody to process...');
	}
}

function processCompressanver(input) {
	$('#cargandoafiliadiv').show();
	var output_format = "jpg";
	
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holder');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_imageanver");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_imageanver');
						var result_image = document.getElementById('result_imageanver');
						var result_imagefinatras = document.getElementById('result_imagefinatras');
						var result_imagefinmodatras = document.getElementById('result_imagefinmodatras');
						
						
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						

						//$('#titulomodalfinINEAtras').text(result_imagefinmod.name);
						
								
						result_image.onload = function(){
							var image_width=$(result_image).width(),
							image_height=$(result_image).height();
								//enviar esta imagen
						   result_image.style.display = "block";
						   result_image.style.width="99%";
						   result_image.style.marginTop ="5px";
						   //result_image.style.position="absolute";
						   result_image.style.left="30px";
						   //--------cal ws ocr-----------------
						   console.log(JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", ""), "llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$("#txttokenWS").val()}}));
						   
						   $.ajax({  
								type: "POST",  
								url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/getINEDataString',
                                data: JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", ""), "llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$("#txttokenWS").val()}}),
								contentType: "application/json; charset=utf-8",
                                dataType: "json",						
								success: function (data) {  
									console.log(data);
									console.log(data.claveElector);
									console.log(data.fActualiza);
									console.log(data.fConsulta);
									console.log(data.fRegistro);
									console.log(data.fVigencia);
                                    if(data.Token =="INVALID"){
                                        $('#cargandoafiliadiv').hide();
											swal({
												  title: '<i style="font-style: normal;">Sessión cerrada por inactividad</i>',
												  showCloseButton: true,
												  confirmButtonText:
													'<i class="glyphicon glyphicon-ok"></i>',
                                                allowOutsideClick: false,

												}).then(function () {
													  location.href=("Index.html");
													});
											//location.href=("Index.html");
											//$("#txttokenWS").val(data.Token)
										}else{

                                            if(data.Token != null && data.Token != "INVALID"){
									           $("#txttokenWS").val(data.Token);
                                            }
									$('#cargandoafiliadiv').hide();
									var cicresult = validaexisteocr(data.cic, "sin datos")
									if(cicresult == "sin datos" || cicresult == "no data"){
										cicresult = "sin datos"
									}else{
										cicresult = "IDMEX" + cicresult;
									}
									
									var cveelecto = validaexisteocr(data.claveElector, "sin datos");
									
									if(cveelecto == "sin datos" || cveelecto == "no data"){
										cveelecto = "sin datos";
									}
									var fecactua = validaexisteocr(data.fActualiza, "sin datos");
									var fecvigen = validaexisteocr(data.fVigencia, "sin datos");
									var fecreg = validaexisteocr(data.fRegistro, "sin datos");
									var fecconsul = validaexisteocr(data.fConsulta, "sin datos");
									var numemision = validaexisteocr(data.numeroEmision, "sin datos");
									var resocr = validaexisteocr(data.ocr, "sin datos");
									
									
									
								   
								   swal({ 
										title: '<i style="font-style: normal;">Datos obtenidos</i>',
										  
										html:
											 "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%; border-collapse: separate;border-spacing:  7px;    height: 178px;'><tr><td align='left' valign='top' style='padding-right:2em;'>CIC:</td><td align='left' style='font-weight:bold'>"+ cicresult +"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Clave de elector:</td><td align='left' style='font-weight:bold'>"+cveelecto+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Fecha actualización:</td><td align='left' style='font-weight:bold'>"+fecactua+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Fecha de Vigencia:</td><td align='left' style='font-weight:bold; width: 100%;'>"+fecvigen+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Fecha de Registro:</td><td align='left' style='font-weight:bold'>"+fecreg+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Fecha de Consulta:</td><td align='left' style='font-weight:bold'>"+fecconsul+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em;'>Número de Emisión:</td><td align='left' style='font-weight:bold'>"+numemision+"</td><td></td></tr><tr><td align='left' valign='top' style='padding-right:2em; width: 40%;'>Número de Identificación:</td><td align='left' style='font-weight:bold'>"+resocr+"</td><td></td></tr></table>",
										showCloseButton: true,
										confirmButtonText:
											'<i class="glyphicon glyphicon-ok"></i>',
											width: "455px",
                                       allowOutsideClick: false,
										  
										}).then(function () {
											var d = new Date();
											result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";
											result_imagefinmodatras.name = result_imagefinatras.name;
											
											$('#lnknombremodalINEAtras').text(result_imagefinmodatras.name);
											$('#lnknombremodalINEAtras').attr("disabled", "disabled");
											document.getElementById('txtNumIdentificanew').value=data.ocr;
											validaricontxt($('#txtNumIdentificanew'));
											if($('#result_image')[0].src != "https://sminet.com.mx/afiliamaas-web/images/shade.jpg" && $('#result_imageanver')[0].src != "https://sminet.com.mx/afiliamaas-web/images/shade.jpg"){
													$("#btnifeok").prop( "disabled", false );
													$("#btnifeok").fadeIn();
												}
											result_imagefinatras.src = result_image.src;
											result_imagefinmodatras.src = result_image.src;
										}, function (dismiss) {
											  // dismiss can be 'cancel', 'overlay',
											  // 'close', and 'timer'
											  if (dismiss === 'cancel' || dismiss === 'close') {
												/*swal(
												  'Cancelled',
												  '¡Por favor captura nuevamente tu identificación!',
												  'error'
												);*/
											  }
											});
                                    }
								},  
								error: function (result) {  
									console.log("errror...." + result);  
								}  
							});  
						   
						   }
						
						var duration = new Date().getTime() - time_start;
						console.log("proceso terminado..");
						console.log('Procesado en: ' + duration + 'ms');
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }else{
		console.log('nobody to process...');
	}
}

function processCompressextra(input) {
	var output_format = "jpg";
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holderextra');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_imageextra");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_imageextra');
						var result_image = document.getElementById('result_imageextra');
						var result_imagefinatras = document.getElementById('imaextramodal');						
						
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						
						
						var d = new Date();
						result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";						
								
						result_image.onload = function(){
							var image_width=$(result_image).width(),
							image_height=$(result_image).height();
								//enviar esta imagen
						    result_image.style.display = "block";
						    result_image.style.width="99%";
						    result_image.style.marginTop ="5px";
						    //result_image.style.position="absolute";
						    result_image.style.left="30px";
						    //--------cal ws ocr-----------------
						    //console.log(this.src);
						    result_imagefinatras.src = result_image.src;
							result_imagefinmodatras.src = result_image.src;
							$('#lnknombremodal').text(result_imagefinatras.name);
							$('#titulomodalfin').text(result_imagefinatras.name);
							$('#linkmodalopenextra').attr("class", "overlay");
							$('#lblextra').text("Modificar");
							

							$('#Imagesextras2').show()
						   }
						
						var duration = new Date().getTime() - time_start;
						console.log("proceso terminado..");
						console.log('Procesado en: ' + duration + 'ms');
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }
	else
	{
		console.log('nobody to process...');
	}
}

function processCompressextra2(input) {
	var output_format = "jpg";
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holderextra2');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_imageextra2");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_imageextra2');
						var result_image = document.getElementById('result_imageextra2');
						var result_imagefinatras = document.getElementById('imaextramodal2');						
						
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						
						
						var d = new Date();
						result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";						
								
						result_image.onload = function(){
							var image_width=$(result_image).width(),
							image_height=$(result_image).height();
								//enviar esta imagen
						    result_image.style.display = "block";
						    result_image.style.width="99%";
						    result_image.style.marginTop ="5px";
						    //result_image.style.position="absolute";
						    result_image.style.left="30px";
						    //--------cal ws ocr-----------------
						    //console.log(this.src);
						    result_imagefinatras.src = result_image.src;
							result_imagefinmodatras.src = result_image.src;
							$('#lnknombremodal2').text(result_imagefinatras.name);
							$('#titulomodalfin2').text(result_imagefinatras.name);
							$('#Imagesextras3').show()
						   }
						
						var duration = new Date().getTime() - time_start;
						console.log("proceso terminado..");
						console.log('Procesado en: ' + duration + 'ms');
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }else{
		console.log('nobody to process...');
	}
}

function processCompressextra3(input) {
	var output_format = "jpg";
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holderextra3');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_imageextra3");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_imageextra3');
						var result_image = document.getElementById('result_imageextra3');
						var result_imagefinatras = document.getElementById('imaextramodal3');						
						
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						
						
						var d = new Date();
						result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";						
								
						result_image.onload = function(){
							var image_width=$(result_image).width(),
							image_height=$(result_image).height();
								//enviar esta imagen
						    result_image.style.display = "block";
						    result_image.style.width="99%";
						    result_image.style.marginTop ="5px";
						    //result_image.style.position="absolute";
						    result_image.style.left="30px";
						    //--------cal ws ocr-----------------
						    //console.log(this.src);
						    result_imagefinatras.src = result_image.src;
							result_imagefinmodatras.src = result_image.src;
							$('#lnknombremodal3').text(result_imagefinatras.name);
							$('#titulomodalfin3').text(result_imagefinatras.name);
							$('#Imagesextras4').show()
						   }
						
						var duration = new Date().getTime() - time_start;
						console.log("proceso terminado..");
						console.log('Procesado en: ' + duration + 'ms');
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }else{
		console.log('nobody to process...');
	}
}


function processCompressextra4(input) {
	var output_format = "jpg";
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holderextra4');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_imageextra4");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_imageextra4');
						var result_image = document.getElementById('result_imageextra4');
						var result_imagefinatras = document.getElementById('imaextramodal4');						
						
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						
						
						var d = new Date();
						result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";						
								
						result_image.onload = function(){
							var image_width=$(result_image).width(),
							image_height=$(result_image).height();
								//enviar esta imagen
						    result_image.style.display = "block";
						    result_image.style.width="99%";
						    result_image.style.marginTop ="5px";
						    //result_image.style.position="absolute";
						    result_image.style.left="30px";
						    //--------cal ws ocr-----------------
						    //console.log(this.src);
						    result_imagefinatras.src = result_image.src;
							result_imagefinmodatras.src = result_image.src;
							$('#lnknombremodal4').text(result_imagefinatras.name);
							$('#titulomodalfin4').text(result_imagefinatras.name);
							$('#Imagesextras5').show()
						   }
						
						var duration = new Date().getTime() - time_start;
						console.log("proceso terminado..");
						console.log('Procesado en: ' + duration + 'ms');
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }else{
		console.log('nobody to process...');
	}
}


function processCompressextra5(input) {
	var output_format = "jpg";
    if (input.files && input.files[0]) {
		console.log('procesando imagen...');
		var holder = document.getElementById('holderextra5');
		holder.className = '';
        //e.preventDefault();
        
        var file = input.files[0];
		console.log('antes del proceso...');
		console.log("Filename: " + file.name);
        console.log("Filesize: " + (parseInt(file.size) / 1024) + " Kb");
        console.log("Type: " + file.type);
		console.log('----------------------------');
		
		
		console.log('recuperando binario...');
        reader = new FileReader();
        reader.onload = function(event) {
            var i = document.getElementById("source_imageextra5");
           	 	i.src = event.target.result;
				//console.log('imagen sorce...'+i.src);
           	 	i.onload = function(){
           	 		image_width=$(i).width(),
	                image_height=$(i).height();
	
	                if(image_width > image_height){
	                	i.style.width="210px";
	                }else{
	                	i.style.height="105px";
	                }
	                i.style.display = "none";

					console.log('imagen cargada...');
					//fire click event to process image STF
					//btn click------------------------------------------------------
						var source_image = document.getElementById('source_imageextra5');
						var result_image = document.getElementById('result_imageextra5');
						var result_imagefinatras = document.getElementById('imaextramodal5');						
						
						if (source_image.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image.src = jic.compress(this,quality,output_format).src;
						
						
						var d = new Date();
						result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";						
								
						result_image.onload = function(){
							var image_width=$(result_image).width(),
							image_height=$(result_image).height();
								//enviar esta imagen
						    result_image.style.display = "block";
						    result_image.style.width="99%";
						    result_image.style.marginTop ="5px";
						    //result_image.style.position="absolute";
						    result_image.style.left="30px";
						    //--------cal ws ocr-----------------
						    //console.log(this.src);
						    result_imagefinatras.src = result_image.src;
							result_imagefinmodatras.src = result_image.src;
							$('#lnknombremodal5').text(result_imagefinatras.name);
							$('#titulomodalfin5').text(result_imagefinatras.name);
							
						   }
						
						var duration = new Date().getTime() - time_start;
						console.log("proceso terminado..");
						console.log('Procesado en: ' + duration + 'ms');
					//end btn--------------------------------------------------
           	 	}
        };
        
        reader.readAsDataURL(file);
		//-----------------------------
		
        return false;
    }else{
		console.log('nobody to process...');
	}
}
