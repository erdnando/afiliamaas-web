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




$("#imgcompresa").change(function(){
			//al recibir una imagen
			var divResultado = document.getElementById('divResultado');
			divResultado.innerHTML = '';
			
			
			processCompress(this);
		});
	
	$("#identificacion-ineanver").change(function(){
		//al recibir una imagen
		var divResultado = document.getElementById('divResultado');
		divResultado.innerHTML = '';
		
		
		//processCompressanver(this);
        processCompress(this,"anver");
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
		var holder = document.getElementById('holderdomi');
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
            var i = document.getElementById("source_imagedomi");
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
						var source_image1 = document.getElementById("source_imagedomi");
						var result_image1 = document.getElementById('result_imagedomi');
						/*var result_imagefin = document.getElementById('result_imagefindomi');
						var result_imagefinmod = ladoIDENt == null ? document.getElementById('result_imagefinmod'):document.getElementById('result_imagefinmodatras');*/

						if (source_image1.src == "") {
							alert("You must load an image first!");
							return false;
						}

						var quality = 35;
						console.log("Quality >>" + quality);

						var time_start = new Date().getTime();
						console.log('comprimiendo imagen...');
						result_image1.src = jic.compress(this,quality,output_format).src;
						
						
						
						//$('#titulomodalfinINEFrente').text(result_imagefinmod.name);
						
						
						
						
								
						result_image1.onload = function(){
							if($(result_image1)[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg")
							{
								var image_width=$(result_image1).width(),
								image_height=$(result_image1).height();
									//enviar esta imagen
							   result_image1.style.display = "block";
							   result_image1.style.width="99%";
							   result_image1.style.marginTop ="5px";
							   //result_image.style.position="absolute";
							   result_image1.style.left="30px";
							   //--------cal ws ocr-----------------
							   console.log(JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", "")}));
							   $.ajax({
                                   timeout:60000,
									type: "POST",  
									//url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/loadimagesoap',
                                    url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/ocrProcess',
									//data: JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", ""),"llave":{"idUsuario":$("#txtidUsrWS").val(),"Token":$("#txttokenWS").val()}}),
                                    data: JSON.stringify({ "strImg64":this.src.replace("data:image/jpeg;base64,", "")}),
									contentType: "application/json; charset=utf-8",
									dataType: "json",						
									success: function (data) {  
										if(data.Token =="INVALID"){
                                            $('#cargandoafiliadiv').hide();
											swal({
												  title: '<i style="font-style: normal;">Sesión cerrada por inactividad</i>',
												  showCloseButton: true,
												  confirmButtonText:
													'Aceptar <i class="glyphicon glyphicon-log-out"></i>',
                                                allowOutsideClick: false,
												  
												}).then(function () {
                                                    $("#cargandoafiliadiv").show();
													  location.href=("Index.html");
													});
											//location.href=("Index.html");
											$("#txttokenWS").val(data.solicitudes[0].Token);
										}
										else
										{
                                            switch(data.__type) {
                                                case "INEIFE:#mx.com.stefanini.service.api.rest":
                                                    console.log('======================');
                                                   console.log('Resultado OCR');
                                                   console.log('======================');
                                                   console.log(data);

                                                      /*CURP:"R0VE730121HMCDRRO9"
                                                    Materno:"VARGAS"
                                                    Nacionalidad:"MEXICANA"
                                                    Nombre:"ERDNANDO"
                                                    Paterno:"RODRIGUEZ"
                                                    calle:"C PALOMA NEGRA 277"
                                                    claveElector:"RDVRER73O12115H500"
                                                    codigoPostal:"57000"
                                                    colonia:"BENITO JUAREZ "
                                                    estado:"MEX"
                                                    fechaDeNacimiento:"21/01/73"
                                                    fechaDeNacimientoANIO:"73"
                                                    fechaDeNacimientoDIA:"21"
                                                    fechaDeNacimientoMES:"01"
                                                    municipio:"NEZAHUALCOYOTL"
                                                    numeroExt:null
                                                    numeroInt:null
                                                    sexo:"H"
                                                    vigencia:"2025"*/

                                                   //$("#txttokenWS").val(data.Token);
                                                   $('#cargandoafiliadiv').hide();


                                                    var source_image = document.getElementById("source_image");
                                                    var result_image = document.getElementById('result_image');
                                                    var result_imagefin = document.getElementById('result_imagefin');
                                                    var result_imagefinmod=document.getElementById('result_imagefinmod');
                                                    result_image.src = result_image1.src;
                                                    result_image1.src="";
                                                    source_image1.src="";

                                                    var nomcompletoocr = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + data.Nombre + ' ' + data.Paterno + ' ' + data.Materno
                                                    $('#lblreferenciassolicitante').text(nomcompletoocr.toUpperCase());

                                                    $("#wrapper").css("width", "100%");
                                                            $("#identificacioninicial").attr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","");

                                                    var iniciotabla = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%;border-collapse: separate;border-spacing:  7px;'>"+
                                                        "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+
                                                                        "Identificación: "+
                                                                    "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+
                                                                        "INE/IFE (Frente)"+
                                                                    "</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                    var fintabla ="</table>";

                                                    $.each(data, function (ind, elem) {
                                                        if(ind != "__type"){
                                                            if(ind == "fechaDeNacimientoANIO" || ind == "fechaDeNacimientoDIA" || ind == "fechaDeNacimientoMES"){
                                                            }else{
                                                                var existe = validaexisteocr(elem, "sin datos");
                                                                if(existe != "sin datos"){
                                                                    iniciotabla += "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>" + ind.replace("_", " ") + "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+ elem+"</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                                }
                                                            }
                                                        }
                                                    });

                                                        var tablagral = iniciotabla + fintabla;



                                                   swal({
                                                          title: '<i style="font-style: normal;">Datos obtenidos</i>',
                                                          html: tablagral,
                                                          showCloseButton: true,
                                                          showCancelButton:true,
                                                          confirmButtonText:
                                                            'Correcto <i class="glyphicon glyphicon-ok"></i>',
                                                          cancelButtonText:
                                                            'Reintentar <i class="glyphicon glyphicon-repeat"></i>',
                                                            //cancelButtonColor:"#b9a107",
                                                          confirmButtonClass: 'btn btn-success',
                                                          cancelButtonClass: 'btn btn-danger',
                                                          width: "auto",
                                                          allowOutsideClick: false,
                                                        }).then(function () {
                                                            var d = new Date();
                                                            result_imagefin.name= "TEC_" + d.getTime() +".jpg";
                                                            result_imagefinmod.name = result_imagefin.name;

                                                            $("#wrapper").css("width", "100%");
                                                            $("#identificacioninicial").attr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","");




                                                            $('#holder_result').attr("class", "overlay-containerOCR");
                                                            $('#inefrenteoverlay').css("visibility", "visible");
                                                            $("#tituloboxINEfrente").text("INE(Frente)");
                                                            $("#tituloboxINEanv").text("INE(Atras)");

                                                            $("#boxineatras").css("display", "");


                                                            $('#lnknombremodalINEFrente').text(result_imagefinmod.name);
                                                            $('#lnknombremodalINEFrente').attr("disabled", "disabled");

                                                            if($('#result_image')[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg" && $('#result_imageanver')[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg"){
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
                                                               timeout:60000,
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

                                                                        $('#lisEstadoEmpresanew').empty();
                                                                           $("#lisEstadotem option").each(function () {
                                                                               $("#lisEstadoSolicitantenew").append("<option value='" + this.value + "'>" + this.text + '</option>');

                                                                               });
                                                                            $("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");


                                                                               //$("#lisEstadoSolicitantenew option:selected").removeAttr("selected");
                                                                                //$("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");
                                                                                validariconlistas($("#lisEstadoSolicitantenew"));

                                                                            $.ajax({
                                                                                timeout:60000,
                                                                                    type: 'POST',
                                                                                    url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
                                                                                    data: JSON.stringify({"idestado":idest}),
                                                                                    contentType: "application/json; charset=utf-8",
                                                                                    dataType: "json",
                                                                                    success: function(data){

                                                                                        $("#lisDelMuniSolicitantenew").empty();
                                                                                        //$("#txttokenWS").val(data.Token);
                                                                                            $.each(data, function(i, item) {
                                                                                                $("#lisDelMuniSolicitantenew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');
                                                                                                idest = item.IDESTADO


                                                                                               });
                                                                                            $("#lisDelMuniSolicitantenew option[value="+ idpob +"]").attr("selected","selected");
                                                                                            validariconlistas($("#lisDelMuniSolicitantenew"));



                                                                                    },
                                                                                    error: function (result) {
                                                                                        $('#cargandoafiliadiv').hide();
                                                                                        console.log("errror....");
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



                                                                    },
                                                                    error: function (result) {
                                                                        console.log("error....");
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

                                                           //document.getElementById('lisDelMuniSolicitantenew').value=data.colonia;
                                                            $('#dateFechanacnewdia').val(data.fechaDeNacimiento.substr(0, 2));
                                                           $('#dateFechanacnewmes').val(data.fechaDeNacimiento.substr(4, 2));
                                                           $('#dateFechanacnewanio').val(data.fechaDeNacimiento.substr(7, 2));



                                                           $('#dateFechanacnew').val(data.fechaDeNacimiento.substr(7, 2) +"-"+ data.fechaDeNacimiento.substr(4, 2) +"-" + data.fechaDeNacimiento.substr(0, 2));
                                                           validariconfecha($('#dateFechanacnew'));
                                                           document.getElementById('txtNumExteriornew').value=data.numeroExt ? data.numeroExt : '';
                                                           if($('#txtNumExteriornew').val() != ''){
                                                                validaricontxt($('#txtNumExteriornew'));
                                                           }

                                                           $('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
                                                           validaricontxt($('#txtRFCnew'));
                                                           //document.getElementById('cpresult').value=data.codigoPostal;

                                                            if(data.sexo =="M"){
                                                            // Hacer algo si el checkbox ha sido seleccionado
                                                                $('#chksexosolicitante').prop('checked', true)
                                                                console.log("FEMENINO");
                                                            }else{
                                                                // Hacer algo si el checkbox ha sido deseleccionado
                                                                $('#chksexosolicitante').prop('checked', false)
                                                                console.log("MASCULINO");
                                                            }

                                                        }, function (dismiss) {
                                                          // dismiss can be 'cancel', 'overlay',
                                                          // 'close', and 'timer'
                                                          if (dismiss === 'cancel' || dismiss === 'close') {
                                                              $('#result_image')[0].src = "https://sminet.com.mx/afiliamaasweb/images/shade.jpg";
                                                              $('#imgcompresa').click();

                                                          }
                                                        });



                                                    break;
                                                case "INEREVERSO:#mx.com.stefanini.service.api.rest":

                                                    var source_image = document.getElementById('source_imageanver');
                                                    var result_image = document.getElementById('result_imageanver');
                                                    var result_imagefinatras = document.getElementById('result_imagefinatras');
                                                    var result_imagefinmodatras = document.getElementById('result_imagefinmodatras');
                                                    result_image.src = result_image1.src;
                                                    result_image1.src="";
                                                    source_image1.src="";

                                                    $("#wrapper").css("width", "100%");
                                                            $("#identificacioninicial").attr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","");

                                                    console.log(data);
                                                    if(data.Token =="INVALID"){
                                                        $('#cargandoafiliadiv').hide();
                                                            swal({
                                                                  title: '<i style="font-style: normal;">Sesión cerrada por inactividad</i>',
                                                                  showCloseButton: true,
                                                                  confirmButtonText:
                                                                    'Aceptar <i class="glyphicon glyphicon-log-out"></i>',
                                                                allowOutsideClick: false,

                                                                }).then(function () {
                                                                    $("#cargandoafiliadiv").show();
                                                                      location.href=("Index.html");
                                                                    });
                                                            //location.href=("Index.html");
                                                            //$("#txttokenWS").val(data.Token)
                                                        }else{

                                                            /*if(data.Token != null && data.Token != "INVALID"){
                                                               $("#txttokenWS").val(data.Token);
                                                            }*/
                                                            $('#cargandoafiliadiv').hide();


                                                            var iniciotabla = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%; border-collapse: separate;border-spacing:  7px;    height: 178px;'>"+
                                                                "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+
                                                                        "Identificación: "+
                                                                    "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+
                                                                        "INE/IFE (Atrás)"+
                                                                    "</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                            var fintabla ="</table>";

                                                            $.each(data, function (ind, elem) {
                                                                if(ind != "__type"){
                                                                    if(ind == "Materno" || ind == "Nombre" || ind == "Paterno"){
                                                                    }else{
                                                                        var existe = validaexisteocr(elem, "sin datos");
                                                                        if(existe != "sin datos"){
                                                                            if(ind =="cic"){
                                                                                iniciotabla += "<tr>"+
                                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+ ind.replace("_", " ") + "</td>"+
                                                                                    "<td align='left' style='font-weight:bold'> IDMEX"+ elem +"</td>"+
                                                                                    "<td></td>"+
                                                                                "</tr>";
                                                                            }else{
                                                                                iniciotabla += "<tr>"+
                                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+ ind.replace("_", " ") + "</td>"+
                                                                                    "<td align='left' style='font-weight:bold'>"+ elem +"</td>"+
                                                                                    "<td></td>"+
                                                                                "</tr>";
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            });

                                                        var tablagral = iniciotabla + fintabla;

                                                           swal({
                                                                title: '<i style="font-style: normal;">Datos obtenidos</i>',
                                                               html: tablagral,
                                                                showCloseButton: true,
                                                               showCancelButton:true,
                                                                          confirmButtonText:
                                                                            'Correcto <i class="glyphicon glyphicon-ok"></i>',
                                                                          cancelButtonText:
                                                                            'Reintentar <i class="glyphicon glyphicon-repeat"></i>',
                                                               //cancelButtonColor:"#b9a107",
                                                                    width: "455px",
                                                               allowOutsideClick: false,

                                                                }).then(function () {
                                                                    var d = new Date();
                                                                    result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";
                                                                    result_imagefinmodatras.name = result_imagefinatras.name;


                                                                            $('#holder_resultanver').attr("class", "overlay-containerOCR");
                                                                            $('#ineATRASoverlay').css("visibility", "visible");

                                                                    $("#tituloboxINEfrente").text("INE(Frente)");
                                                                    $("#tituloboxINEanv").text("INE(Atras)");


                                                                    $("#boxineatras").css("display", "");



                                                                    $('#lnknombremodalINEAtras').text(result_imagefinmodatras.name);
                                                                    $('#lnknombremodalINEAtras').attr("disabled", "disabled");
                                                                    document.getElementById('txtNumIdentificanew').value=data.ocr;
                                                                    validaricontxt($('#txtNumIdentificanew'));
                                                                    if($('#result_image')[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg" && $('#result_imageanver')[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg"){
                                                                            $("#btnifeok").prop( "disabled", false );
                                                                            $("#btnifeok").fadeIn();
                                                                        }
                                                                    result_imagefinatras.src = result_image.src;
                                                                    result_imagefinmodatras.src = result_image.src;
                                                                }, function (dismiss) {
                                                                      // dismiss can be 'cancel', 'overlay',
                                                                      // 'close', and 'timer'
                                                                      if (dismiss === 'cancel' || dismiss === 'close') {
                                                                        $('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaasweb/images/shade.jpg";
                                                                              $('#imgcompresa').click();
                                                                      }
                                                                    });
                                                            }


                                                    break;
                                                case "Consulrar:#mx.com.stefanini.service.api.rest":
                                                    tipoagrupa = 'Rechazadas';
                                                    tiporow = 'rowRechazadas';
                                                    topoproy = data.solicitudes[r].ID_SOLICITUD;
                                                    icono = 'glyphicon glyphicon-ban-circle';
                                                    fstitulo ='fs-titleRechazadas';
                                                    break;
                                                case "ConsulrarReverso:#mx.com.stefanini.service.api.rest":
                                                    /*Cabello:"ONDULADO#MEDIANO#CASTANO OBSCURO"
                                                    Cara:"MEDIA"
                                                    Complexion:null
                                                    Materno:"ACOSTA"
                                                    Nombre:"FERNANDO ALFREDO"
                                                    Ojos:null
                                                    Paterno:"AVALOS"
                                                    Peso:"75.0"
                                                    Piel:"BLANCA"
                                                    Tez:"ALTERNADOS"
                                                    Vigencia:"MATRICULA DE ALTA SEGURIDAD 5 AÑOS"
                                                    fechaDeNacimiento:"14/07/1981"
                                                    fechaDeNacimientoANIO:"1981"
                                                    fechaDeNacimientoDIA:"14"
                                                    fechaDeNacimientoMES:"07"
                                                    noCedula:"10395"
                                                    */




                                                    var source_image = document.getElementById('source_imageanver');
                                                    var result_image = document.getElementById('result_imageanver');
                                                    var result_imagefinatras = document.getElementById('result_imagefinatras');
                                                    var result_imagefinmodatras = document.getElementById('result_imagefinmodatras');
                                                    result_image.src = result_image1.src;
                                                    result_image1.src="";
                                                    source_image1.src="";

                                                    $("#wrapper").css("width", "100%");
                                                            $("#identificacioninicial").attr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","");

                                                    console.log(data);
                                                    if(data.Token =="INVALID"){
                                                        $('#cargandoafiliadiv').hide();
                                                            swal({
                                                                  title: '<i style="font-style: normal;">Sesión cerrada por inactividad</i>',
                                                                  showCloseButton: true,
                                                                  confirmButtonText:
                                                                    'Aceptar <i class="glyphicon glyphicon-log-out"></i>',
                                                                allowOutsideClick: false,

                                                                }).then(function () {
                                                                    $("#cargandoafiliadiv").show();
                                                                      location.href=("Index.html");
                                                                    });
                                                            //location.href=("Index.html");
                                                            //$("#txttokenWS").val(data.Token)
                                                        }else{

                                                            /*if(data.Token != null && data.Token != "INVALID"){
                                                               $("#txttokenWS").val(data.Token);
                                                            }*/
                                                            $('#cargandoafiliadiv').hide();


                                                            var iniciotabla = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%; border-collapse: separate;border-spacing:  7px;    height: 178px;'>"+
                                                                "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+
                                                                        "Identificación: "+
                                                                    "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+
                                                                        "Matrícula Consular (Atrás)"+
                                                                    "</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                            var fintabla ="</table>";

                                                            $.each(data, function (ind, elem) {
                                                                if(ind != "__type"){
                                                                    if(ind == "Materno" || ind == "Nombre" || ind == "Paterno"){
                                                                    }else{
                                                                        var existe = validaexisteocr(elem, "sin datos");
                                                                        if(existe != "sin datos"){

                                                                            iniciotabla += "<tr>"+
                                                                                "<td align='left' valign='top' style='padding-right:2em;'>"+ ind.replace("_", " ") + "</td>"+
                                                                                "<td align='left' style='font-weight:bold'>"+ elem +"</td>"+
                                                                                "<td></td>"+
                                                                            "</tr>";

                                                                        }
                                                                    }
                                                                }
                                                            });

                                                        var tablagral = iniciotabla + fintabla;

                                                           swal({
                                                                title: '<i style="font-style: normal;">Datos obtenidos</i>',
                                                               html: tablagral,
                                                                showCloseButton: true,
                                                               showCancelButton:true,
                                                                          confirmButtonText:
                                                                            'Correcto <i class="glyphicon glyphicon-ok"></i>',
                                                                          cancelButtonText:
                                                                            'Reintentar <i class="glyphicon glyphicon-repeat"></i>',
                                                               //cancelButtonColor:"#b9a107",
                                                                    width: "455px",
                                                               allowOutsideClick: false,

                                                                }).then(function () {
                                                                    var d = new Date();
                                                                    result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";
                                                                    result_imagefinmodatras.name = result_imagefinatras.name;


                                                                            $('#holder_resultanver').attr("class", "overlay-containerOCR");
                                                                            $('#ineATRASoverlay').css("visibility", "visible");

                                                                    $("#tituloboxINEfrente").text("Matricula Consular");



                                                                    $("#boxineatras").css("display", "");



                                                                    $('#lnknombremodalINEAtras').text(result_imagefinmodatras.name);
                                                                    $('#lnknombremodalINEAtras').attr("disabled", "disabled");
                                                                    document.getElementById('txtNumIdentificanew').value=data.noCedula;
                                                                    validaricontxt($('#txtNumIdentificanew'));
                                                                    if($('#result_image')[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg" && $('#result_imageanver')[0].src != "https://sminet.com.mx/afiliamaasweb/images/shade.jpg"){
                                                                            $("#btnifeok").prop( "disabled", false );
                                                                            $("#btnifeok").fadeIn();
                                                                        }
                                                                    result_imagefinatras.src = result_image.src;
                                                                    result_imagefinmodatras.src = result_image.src;
                                                                }, function (dismiss) {
                                                                      // dismiss can be 'cancel', 'overlay',
                                                                      // 'close', and 'timer'
                                                                      if (dismiss === 'cancel' || dismiss === 'close') {
                                                                        $('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaasweb/images/shade.jpg";
                                                                              $('#imgcompresa').click();
                                                                      }
                                                                    });
                                                            }


                                                    break;
                                                case "PassportA:#mx.com.stefanini.service.api.rest":
                                                    /*Cabello:"RIZADO¡MEDIANO¡CASTANO OBSCURO"
                                                    Cara:"DELGADA"
                                                    Estatura:"1.79"
                                                    Materno:"MONTIEL"
                                                    Nacionalidad:"MEXICANA"
                                                    Nombre:"MARIO"
                                                    Observaciones:"ESTADOS"
                                                    Paterno:"ROBLEDO"
                                                    Peso:"75.0"
                                                    Piel:"MORENA CLARA"
                                                    Tez:"CAFE CLARO"
                                                    calle:null
                                                    fechaCaducidad:"I"
                                                    fechaDeNacimiento:"10/08/1997"
                                                    fechaDeNacimientoANIO:"1997"
                                                    fechaDeNacimientoDIA:"10"
                                                    fechaDeNacimientoMES:"08"
                                                    fechaExpedicion:"Q"
                                                    noPasaporte:"E00002526"
                                                    sexo:null
                                                    vigencia:"PASAPORTE 3 AÑOS"*/




                                                    console.log('======================');
                                                   console.log('Resultado OCR');
                                                   console.log('======================');
                                                   console.log(data);

                                                   //$("#txttokenWS").val(data.Token);
                                                   $('#cargandoafiliadiv').hide();


                                                    var source_image = document.getElementById("source_image");
                                                    var result_image = document.getElementById('result_image');
                                                    var result_imagefin = document.getElementById('result_imagefin');
                                                    var result_imagefinmod=document.getElementById('result_imagefinmod');
                                                    result_image.src = result_image1.src;
                                                    result_image1.src="";
                                                    source_image1.src="";

                                                    var nomcompletoocr = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + data.Nombre + ' ' + data.Paterno + ' ' + data.Materno
                                                    $('#lblreferenciassolicitante').text(nomcompletoocr.toUpperCase());

                                                    $("#wrapper").css("width", "50%");
                                                            $("#identificacioninicial").removeAttr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","none");

                                                    var iniciotabla = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%;border-collapse: separate;border-spacing:  7px;'>"+
                                                                "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+
                                                                        "Identificación: "+
                                                                    "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+
                                                                        "Pasaporte A"+
                                                                    "</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                    var fintabla ="</table>";

                                                    $.each(data, function (ind, elem) {
                                                        if(ind != "__type"){
                                                            if(ind == "fechaDeNacimientoANIO" || ind == "fechaDeNacimientoDIA" || ind == "fechaDeNacimientoMES"){
                                                            }else{
                                                                var existe = validaexisteocr(elem, "sin datos");
                                                                if(existe != "sin datos"){
                                                                    iniciotabla += "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>" + ind.replace("_", " ") + "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+ elem+"</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                                }
                                                            }
                                                        }
                                                    });

                                                        var tablagral = iniciotabla + fintabla;



                                                   swal({
                                                          title: '<i style="font-style: normal;">Datos obtenidos</i>',
                                                          html: tablagral,
                                                          showCloseButton: true,
                                                          showCancelButton:true,
                                                          confirmButtonText:
                                                            'Correcto <i class="glyphicon glyphicon-ok"></i>',
                                                          cancelButtonText:
                                                            'Reintentar <i class="glyphicon glyphicon-repeat"></i>',
                                                            //cancelButtonColor:"#b9a107",
                                                          confirmButtonClass: 'btn btn-success',
                                                          cancelButtonClass: 'btn btn-danger',
                                                          width: "auto",
                                                          allowOutsideClick: false,
                                                        }).then(function () {
                                                            var d = new Date();
                                                            result_imagefin.name= "TEC_" + d.getTime() +".jpg";
                                                            result_imagefinmod.name = result_imagefin.name;

                                                            /*$("#wrapper").css("width", "100%");
                                                            $("#identificacioninicial").attr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","");*/




                                                            $('#holder_result').attr("class", "overlay-containerOCR");
                                                            $('#inefrenteoverlay').css("visibility", "visible");


                                                            $('#lnknombremodalINEFrente').text(result_imagefinmod.name);
                                                            $('#lnknombremodalINEFrente').attr("disabled", "disabled");


                                                                $("#btnifeok").prop( "disabled", false );
                                                                $("#btnifeok").fadeIn();

                                                            document.getElementById('txtNomSolicitantenew').value=data.Nombre;
                                                            validaricontxt($('#txtNomSolicitantenew'));
                                                           document.getElementById('txtApePaternonew').value=data.Paterno;
                                                           validaricontxt($('#txtApePaternonew'));
                                                           document.getElementById('txtApeMaternonew').value=data.Materno;
                                                           document.getElementById('txtCalleSolicitantenew').value=data.calle;
                                                           validaricontxt($('#txtCalleSolicitantenew'));
                                                           document.getElementById('txtCpSolicitantenew').value="";
                                                           result_imagefin.src = result_image.src;
                                                            result_imagefinmod.src = result_image.src;


                                                           //para INE chear para los otros tipos de identificacion
                                                           $("#txtTipIdentificacionnew option[value=2498]").attr("selected","selected");
                                                           $("#txtTipIdentificacionnew").prop( "disabled", true );
                                                           //$("#lstNacionalidadnew option[value=2519]").attr("selected","selected");
                                                            validariconlistas($("#txtTipIdentificacionnew"));



                                                            $('#lisColoniaSolicitantenew').empty();
                                                            $("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');

                                                            $('#lisEstadoSolicitantenew').empty();
                                                                           $("#lisEstadotem option").each(function () {
                                                                               $("#lisEstadoSolicitantenew").append("<option value='" + this.value + "'>" + this.text + '</option>');

                                                                               });

                                                       $("#lisEstadoSolicitantenew option[value=0]").attr("selected","selected");

                                                       $("#lisDelMuniSolicitantenew").empty();
                                                       $("#lisDelMuniSolicitantenew").append('<option value="0">Seleccione...</option>');

                                                       document.getElementById('txtNumIdentificanew').value=data.noPasaporte;
                                                                    validaricontxt($('#txtNumIdentificanew'));

                                                       $("#tituloboxINEfrente").text("Pasaporte");

                                                       $("#boxineatras").css("display", "none");


                                                           //validariconlistas($("#lstNacionalidadnew"));

                                                          /* $.ajax({
                                                          timeout:60000,
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

                                                                        $('#lisEstadoEmpresanew').empty();
                                                                           $("#lisEstadotem option").each(function () {
                                                                               $("#lisEstadoSolicitantenew").append("<option value='" + this.value + "'>" + this.text + '</option>');

                                                                               });
                                                                            $("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");


                                                                               //$("#lisEstadoSolicitantenew option:selected").removeAttr("selected");
                                                                                //$("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");
                                                                                validariconlistas($("#lisEstadoSolicitantenew"));

                                                                            $.ajax({
                                                                            timeout:60000,
                                                                                    type: 'POST',
                                                                                    url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
                                                                                    data: JSON.stringify({"idestado":idest}),
                                                                                    contentType: "application/json; charset=utf-8",
                                                                                    dataType: "json",
                                                                                    success: function(data){

                                                                                        $("#lisDelMuniSolicitantenew").empty();
                                                                                        //$("#txttokenWS").val(data.Token);
                                                                                            $.each(data, function(i, item) {
                                                                                                $("#lisDelMuniSolicitantenew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');
                                                                                                idest = item.IDESTADO


                                                                                               });
                                                                                            $("#lisDelMuniSolicitantenew option[value="+ idpob +"]").attr("selected","selected");
                                                                                            validariconlistas($("#lisDelMuniSolicitantenew"));



                                                                                    },
                                                                                    error: function (result) {
                                                                                    $('#cargandoafiliadiv').hide();
                                                                                        console.log("errror....");
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



                                                                    },
                                                                    error: function (result) {
                                                                    $('#cargandoafiliadiv').hide();
                                                                        console.log("error....");

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
                                                            });*/

                                                           //document.getElementById('lisDelMuniSolicitantenew').value=data.colonia;
                                                           $('#dateFechanacnewdia').val(data.fechaDeNacimiento.substr(0, 2));
                                                           $('#dateFechanacnewmes').val(data.fechaDeNacimiento.substr(4, 2));
                                                           $('#dateFechanacnewanio').val(data.fechaDeNacimiento.substr(7, 2));



                                                           $('#dateFechanacnew').val(data.fechaDeNacimiento.substr(7, 2) +"-"+ data.fechaDeNacimiento.substr(4, 2) +"-" + data.fechaDeNacimiento.substr(0, 2));
                                                           validariconfecha($('#dateFechanacnew'));
                                                           document.getElementById('txtNumExteriornew').value=data.numeroExt ? data.numeroExt : '';
                                                           if($('#txtNumExteriornew').val() != ''){
                                                                validaricontxt($('#txtNumExteriornew'));
                                                           }

                                                           $('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
                                                           validaricontxt($('#txtRFCnew'));
                                                           //document.getElementById('cpresult').value=data.codigoPostal;

                                                            if(data.sexo =="M"){
                                                            // Hacer algo si el checkbox ha sido seleccionado
                                                                $('#chksexosolicitante').prop('checked', true)
                                                                console.log("FEMENINO");
                                                            }else{
                                                                // Hacer algo si el checkbox ha sido deseleccionado
                                                                $('#chksexosolicitante').prop('checked', false)
                                                                console.log("MASCULINO");
                                                            }

                                                        }, function (dismiss) {
                                                          // dismiss can be 'cancel', 'overlay',
                                                          // 'close', and 'timer'
                                                          if (dismiss === 'cancel' || dismiss === 'close') {
                                                              $('#result_image')[0].src = "https://sminet.com.mx/afiliamaasweb/images/shade.jpg";
                                                              $('#imgcompresa').click();

                                                          }
                                                        });


                                                    break;
                                                case "PassportB:#mx.com.stefanini.service.api.rest":
                                                   /* Materno:null
                                                    Nombre:null
                                                    Paterno:null
                                                    fechaCaducidad:null
                                                    fechaDeNacimiento:"17/01/1981"
                                                    fechaDeNacimientoANIO:"1981"
                                                    fechaDeNacimientoDIA:"17"
                                                    fechaDeNacimientoMES:"01"
                                                    fechaExpedicion:null
                                                    noPasaporte:null
                                                    sexo:null*/




                                                    console.log('======================');
                                                   console.log('Resultado OCR');
                                                   console.log('======================');
                                                   console.log(data);

                                                   //$("#txttokenWS").val(data.Token);
                                                   $('#cargandoafiliadiv').hide();


                                                    var source_image = document.getElementById("source_image");
                                                    var result_image = document.getElementById('result_image');
                                                    var result_imagefin = document.getElementById('result_imagefin');
                                                    var result_imagefinmod=document.getElementById('result_imagefinmod');
                                                    result_image.src = result_image1.src;
                                                    result_image1.src="";
                                                    source_image1.src="";

                                                    var nomcompletoocr = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + data.Nombre + ' ' + data.Paterno + ' ' + data.Materno
                                                    $('#lblreferenciassolicitante').text(nomcompletoocr.toUpperCase());

                                                    $("#wrapper").css("width", "50%");
                                                            $("#identificacioninicial").removeAttr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","none");

                                                    var iniciotabla = "<table cellpadding='0' cellspacing='0' border=0 style='margin-top:19px;border-color:transparent; font-size:11px; width: 100%;border-collapse: separate;border-spacing:  7px;'>"+
                                                                "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>"+
                                                                        "Identificación: "+
                                                                    "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+
                                                                        "Pasaporte B"+
                                                                    "</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                    var fintabla ="</table>";

                                                    $.each(data, function (ind, elem) {
                                                        if(ind != "__type"){
                                                            if(ind == "fechaDeNacimientoANIO" || ind == "fechaDeNacimientoDIA" || ind == "fechaDeNacimientoMES"){
                                                            }else{
                                                                var existe = validaexisteocr(elem, "sin datos");
                                                                if(existe != "sin datos"){
                                                                    iniciotabla += "<tr>"+
                                                                    "<td align='left' valign='top' style='padding-right:2em;'>" + ind.replace("_", " ") + "</td>"+
                                                                    "<td align='left' style='font-weight:bold;max-width: 250px;'>"+ elem+"</td>"+
                                                                    "<td></td>"+
                                                                "</tr>";
                                                                }
                                                            }
                                                        }
                                                    });

                                                        var tablagral = iniciotabla + fintabla;



                                                   swal({
                                                          title: '<i style="font-style: normal;">Datos obtenidos</i>',
                                                          html: tablagral,
                                                          showCloseButton: true,
                                                          showCancelButton:true,
                                                          confirmButtonText:
                                                            'Correcto <i class="glyphicon glyphicon-ok"></i>',
                                                          cancelButtonText:
                                                            'Reintentar <i class="glyphicon glyphicon-repeat"></i>',
                                                            //cancelButtonColor:"#b9a107",
                                                          confirmButtonClass: 'btn btn-success',
                                                          cancelButtonClass: 'btn btn-danger',
                                                          width: "auto",
                                                          allowOutsideClick: false,
                                                        }).then(function () {
                                                            var d = new Date();
                                                            result_imagefin.name= "TEC_" + d.getTime() +".jpg";
                                                            result_imagefinmod.name = result_imagefin.name;

                                                            /*$("#wrapper").css("width", "100%");
                                                            $("#identificacioninicial").attr("class","col-xs-12 col-sm-6 col-md-6 col-lg-6");
                                                            $("#identificacioninicial2").css("display","");*/




                                                            $('#holder_result').attr("class", "overlay-containerOCR");
                                                            $('#inefrenteoverlay').css("visibility", "visible");


                                                            $('#lnknombremodalINEFrente').text(result_imagefinmod.name);
                                                            $('#lnknombremodalINEFrente').attr("disabled", "disabled");


                                                            $("#btnifeok").prop( "disabled", false );
                                                            $("#btnifeok").fadeIn();

                                                            document.getElementById('txtNomSolicitantenew').value=data.Nombre;
                                                            validaricontxt($('#txtNomSolicitantenew'));
                                                           document.getElementById('txtApePaternonew').value=data.Paterno;
                                                           validaricontxt($('#txtApePaternonew'));
                                                           document.getElementById('txtApeMaternonew').value=data.Materno;
                                                           document.getElementById('txtCalleSolicitantenew').value=data.calle;
                                                           validaricontxt($('#txtCalleSolicitantenew'));
                                                           document.getElementById('txtCpSolicitantenew').value="";
                                                           result_imagefin.src = result_image.src;
                                                            result_imagefinmod.src = result_image.src;


                                                           //para INE chear para los otros tipos de identificacion
                                                           $("#txtTipIdentificacionnew option[value=2498]").attr("selected","selected");
                                                           $("#txtTipIdentificacionnew").prop( "disabled", true );
                                                           //$("#lstNacionalidadnew option[value=2519]").attr("selected","selected");
                                                            validariconlistas($("#txtTipIdentificacionnew"));


                                                       $('#lisColoniaSolicitantenew').empty();
                                                            $("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');

                                                            $('#lisEstadoSolicitantenew').empty();
                                                                           $("#lisEstadotem option").each(function () {
                                                                               $("#lisEstadoSolicitantenew").append("<option value='" + this.value + "'>" + this.text + '</option>');

                                                                               });

                                                       $("#lisEstadoSolicitantenew option[value=0]").attr("selected","selected");

                                                       $("#lisDelMuniSolicitantenew").empty();
                                                       $("#lisDelMuniSolicitantenew").append('<option value="0">Seleccione...</option>');

                                                       document.getElementById('txtNumIdentificanew').value=data.noPasaporte;
                                                                    validaricontxt($('#txtNumIdentificanew'));

                                                       $("#tituloboxINEfrente").text("Pasaporte");

                                                       $("#boxineatras").css("display", "none");

                                                           //validariconlistas($("#lstNacionalidadnew"));

                                                          /* $.ajax({
                                                          timeout:60000,
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

                                                                        $('#lisEstadoEmpresanew').empty();
                                                                           $("#lisEstadotem option").each(function () {
                                                                               $("#lisEstadoSolicitantenew").append("<option value='" + this.value + "'>" + this.text + '</option>');

                                                                               });
                                                                            $("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");


                                                                               //$("#lisEstadoSolicitantenew option:selected").removeAttr("selected");
                                                                                //$("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");
                                                                                validariconlistas($("#lisEstadoSolicitantenew"));

                                                                            $.ajax({
                                                                            timeout:60000,
                                                                                    type: 'POST',
                                                                                    url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
                                                                                    data: JSON.stringify({"idestado":idest}),
                                                                                    contentType: "application/json; charset=utf-8",
                                                                                    dataType: "json",
                                                                                    success: function(data){

                                                                                        $("#lisDelMuniSolicitantenew").empty();
                                                                                        //$("#txttokenWS").val(data.Token);
                                                                                            $.each(data, function(i, item) {
                                                                                                $("#lisDelMuniSolicitantenew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');
                                                                                                idest = item.IDESTADO


                                                                                               });
                                                                                            $("#lisDelMuniSolicitantenew option[value="+ idpob +"]").attr("selected","selected");
                                                                                            validariconlistas($("#lisDelMuniSolicitantenew"));



                                                                                    },
                                                                                    error: function (result) {
                                                                                    $('#cargandoafiliadiv').hide();
                                                                                        console.log("errror....");
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



                                                                    },
                                                                    error: function (result) {
                                                                    $('#cargandoafiliadiv').hide();
                                                                        console.log("error....");

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
                                                            });*/

                                                           //document.getElementById('lisDelMuniSolicitantenew').value=data.colonia;
                                                           $('#dateFechanacnewdia').val(data.fechaDeNacimiento.substr(0, 2));
                                                           $('#dateFechanacnewmes').val(data.fechaDeNacimiento.substr(4, 2));
                                                           $('#dateFechanacnewanio').val(data.fechaDeNacimiento.substr(7, 2));



                                                           $('#dateFechanacnew').val(data.fechaDeNacimiento.substr(7, 2) +"-"+ data.fechaDeNacimiento.substr(4, 2) +"-" + data.fechaDeNacimiento.substr(0, 2));
                                                           validariconfecha($('#dateFechanacnew'));
                                                           document.getElementById('txtNumExteriornew').value=data.numeroExt ? data.numeroExt : '';
                                                           if($('#txtNumExteriornew').val() != ''){
                                                                validaricontxt($('#txtNumExteriornew'));
                                                           }

                                                           $('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
                                                           validaricontxt($('#txtRFCnew'));
                                                           //document.getElementById('cpresult').value=data.codigoPostal;

                                                            if(data.sexo =="M"){
                                                            // Hacer algo si el checkbox ha sido seleccionado
                                                                $('#chksexosolicitante').prop('checked', true)
                                                                console.log("FEMENINO");
                                                            }else{
                                                                // Hacer algo si el checkbox ha sido deseleccionado
                                                                $('#chksexosolicitante').prop('checked', false)
                                                                console.log("MASCULINO");
                                                            }

                                                        }, function (dismiss) {
                                                          // dismiss can be 'cancel', 'overlay',
                                                          // 'close', and 'timer'
                                                          if (dismiss === 'cancel' || dismiss === 'close') {
                                                              $('#result_image')[0].src = "https://sminet.com.mx/afiliamaasweb/images/shade.jpg";
                                                              $('#imgcompresa').click();

                                                          }
                                                        });

                                                    break;
                                                default:
                                                    break;
                                            }
										}
																
									},  
									error: function (result) {  
										console.log("error: " + result);
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
        $('#cargandoafiliadiv').hide();

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
                               timeout:60000,
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
												  title: '<i style="font-style: normal;">Sesión cerrada por inactividad</i>',
												  showCloseButton: true,
												  confirmButtonText:
													'Aceptar <i class="glyphicon glyphicon-log-out"></i>',
                                                allowOutsideClick: false,

												}).then(function () {
                                                    $("#cargandoafiliadiv").show();
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
                                       showCancelButton:true,
												  confirmButtonText:
													'Correcto <i class="glyphicon glyphicon-ok"></i>',
                                                  cancelButtonText:
                                                    'Reintentar <i class="glyphicon glyphicon-repeat"></i>',
                                       //cancelButtonColor:"#b9a107",
											width: "455px",
                                       allowOutsideClick: false,
										  
										}).then(function () {
											var d = new Date();
											result_imagefinatras.name= "TEC_" + d.getTime() +".jpg";
											result_imagefinmodatras.name = result_imagefinatras.name;


                                                    $('#holder_resultanver').attr("class", "overlay-containerOCR");
                                                    $('#ineATRASoverlay').css("visibility", "visible");


											
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
												$('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg";
                                                      $('#identificacion-ineanver').click();
											  }
											});
                                    }
								},  
								error: function (result) {  
									console.log("errror...." + result);  
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
        $('#cargandoafiliadiv').hide();
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
							$('#linkmodalopenextra2').attr("class", "overlay");
							$('#lblextra2').text("Modificar");
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
							$('#linkmodalopenextra3').attr("class", "overlay");
							$('#lblextra3').text("Modificar");
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
							$('#linkmodalopenextra4').attr("class", "overlay");
							$('#lblextra4').text("Modificar");
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
							$('#linkmodalopenextra5').attr("class", "overlay");
							$('#lblextra5').text("Modificar");

							
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
