$(document).ready(function(){ 
	$('#txtFuenteOtrosIngrenew, #txtAosCasadonew, #txtPuestonew, #lstNacionalidadnew, #txtNomSolicitantenew,#txtMontoViviendanew, #dateFechanacnew, #lisCompaniaMovilnew, #txtApePaternonew, #txtRFCnew, #txtApeMaternonew, #lstEdoCivilnew, #txtTipIdentificacionnew, #txtNumIdentificanew, #txtCalleSolicitantenew, #txtTiempoResidencianew, #txtNumExteriornew, #lisEstatusResidencianew, #txtCpSolicitantenew, #txtCorreonew, #lisEstadoSolicitantenew, #txtTelefonoCasanew, #lisDelMuniSolicitantenew, #txtTelefonoCelularnew, #lisColoniaSolicitantenew, #txtNombreEmpresanew, #txtCalleEmpresanew, #txtantiguedadnew, #txtGironew, #txtNumeroExteriorEmpresa, #lisTipoContratonew, #txtCpEmpresanew, #lisEstadoEmpresanew, #txtIngresonew, #lisDelMuniEmpresanew, #lisColoniaEmpresanew, #txtTelOficinanew, #txtNombreRef1new, #txtNombreRef2new, #txtNombreRef3new, #txtApellidoPaternoRef1new, #txtApellidoPaternoRef2new, #txtApellidoPaternoRef3new, #txtApellidoMaternoRef1new, #txtApellidoMaternoRef2new, #txtApellidoMaternoRef3new, #lisNacionalidadRef1new, #lisNacionalidadRef2new, #txtTelCasaRef1new, #txtTelCasaRef2new, #firma-canvas, #txparentescofuncionpoliticoSolicitantenew, #txqueparenfuncionpoliticoSolicitantenew, #txfuncionpoliticoSolicitantenew, #divfirmaagrega, #lblreferenciassolicitante, #lbltelefonosdiferentes').jrumble({
			x: 1,
			y: 0,
			rotation: 0,
			opacity: true
			});
			
			
			
			
			var controles=['#txtCpSolicitantenew','#txtNombreEmpresanew','#txtGironew', '#txtPuestonew','#txtCalleEmpresanew','#txtNumeroExteriorEmpresa','#txtCpEmpresanew', '#txtCalleSolicitantenew','#txtNumExteriornew', '#txtNomSolicitantenew','#txtApePaternonew', '#txtNumIdentificanew','#txtRFCnew','#txfuncionpoliticoSolicitantenew','#txparentescofuncionpoliticoSolicitantenew', '#txqueparenfuncionpoliticoSolicitantenew','#txtNombreRef1new','#txtNombreRef2new', '#txtApellidoPaternoRef1new','#txtApellidoPaternoRef2new'];
			$.each(controles, function (ind, elem) { 
				agregaeventostextos(elem);
			});
			
			var controleslist=['#txtTipIdentificacionnew','#lstNacionalidadnew', '#lstEdoCivilnew', '#lisEstadoSolicitantenew','#lisDelMuniSolicitantenew', '#lisColoniaSolicitantenew','#lisCompaniaMovilnew', '#lisEstatusResidencianew', '#lisTipoContratonew','#lisEstadoEmpresanew', '#lisDelMuniEmpresanew','#lisColoniaEmpresanew', '#lisNacionalidadRef1new','#lisNacionalidadRef2new'];
			$.each(controleslist, function (ind, elem) { 
				agregaeventoslistas(elem);
			});
			
			var controleslisttelefonos=['#txtTelefonoCasanew', '#txtTelefonoCelularnew', '#txtTelOficinanew', '#txtTelCasaRef1new', '#txtTelCasaRef2new', '#txtTelCasaRef3new'];
			$.each(controleslisttelefonos, function (ind, elem) { 
				agregaeventostelefonos(elem);
			});
			
			var controleslistmontos=['#txtMontoViviendanew', '#txtIngresonew', '#txtOtrosIngresosnew'];
			$.each(controleslistmontos, function (ind, elem) { 
				agregaeventosmontos(elem);
			});
			
			

			/*$("#lstNacionalidadnew").hover(function(){
			$(this).trigger('startRumble');
			}, function(){
			$(this).trigger('stopRumble');
			});*/
			


		/*$('.glyphicon-circle-arrow-up').on({
			click:	function () {
				console.log("SUBIR");
				var valincre = $('#txtDependientesnew').val();
				if(parseInt(valincre) < 10){
					$('#txtDependientesnew').val(parseInt(valincre) + 1);
				 
				}
			}
		  
		});
		
		
		
		$('.glyphicon-circle-arrow-down').on({
			click:	function () {
				 console.log("bajar");
				 var valincre = $('#txtDependientesnew').val();
				 if(parseInt(valincre) > 0){
					$('#txtDependientesnew').val(parseInt(valincre) - 1);
				 }
				 
				 
			}
		  
		});*/
		
		$('#txtCorreonew').on({
		  keypress: function(tecla) {

            var valororigi = $('#txtCorreonew').val();

            if (valororigi == ''){
                    $('#txtCorreonew').val(null);

            }else{



                var texto=$('#txtCorreonew').val();
                var reg=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               if(reg.test(texto)) {
                    console.log("coreovalido");
                    var nombrecladiv = "#txtCorreonewdiv";
                    $(nombrecladiv).attr('class', 'form-group has-success has-feedback');
                    var nombreclaspan = "#txtCorreonewspan";
                    $(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
                   $('#txtCorreonew').val($('#txtCorreonew').val().trim());

                } else {
                    console.log("coreoinvalido");
                    var nombrecladiv = "#txtCorreonewdiv";
                    var nombreclaspan = "#txtCorreonewspan";
                    $(nombreclaspan).attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
                    $(nombrecladiv).attr('class', 'form-group has-warning has-feedback');
                    $('#txtCorreonew').val($('#txtCorreonew').val().trim());
                    /*var demoTimeout;
                    clearTimeout(demoTimeout);
                    $('#txtCorreonew').trigger('startRumble');
                    demoTimeout = setTimeout(function(){$('#txtCorreonew').trigger('stopRumble');},1500);*/
                    //$('#txtCorreonew').focus();
                }
              }
		  },
		  blur: function(tecla) {
              var valororigi = $('#txtCorreonew').val().trim();
              $('#txtCorreonew').val(null);
              $('#txtCorreonew').val(valororigi);

			if($('#txtCorreonew').val().length == 0){
				var nombrecladiv = "#txtCorreonewdiv";
				var nombreclaspan = "#txtCorreonewspan";
				$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
				$(nombrecladiv).attr('class', 'form-group has-error has-feedback');

			}
		  }
		  
		});
		
		
		
		$('#txtCalleSolicitantenew, #txtNumExteriornew, #txtNumInteriornew, #txtCalleEmpresanew, #txtNumeroInteriorempnew, #txtNumeroExteriorEmpresa, #txtFuenteOtrosIngrenew, #txfuncionpoliticoSolicitantenew, #txparentescofuncionpoliticoSolicitantenew, #txqueparenfuncionpoliticoSolicitantenew').on({
		  keypress: function(tecla) {
			var texto=tecla.key; 
			var reg=  /^([-a-z0-9_-ÁÉÍÑÓÚáéíñóú \s])+$/i; 
		   if(reg.test(texto)) { 
				return true;
		 
			} else { 
				return false;
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
		  }
		});
		
		$('#txtNombreRef1new, #txtNombreRef2new, #txtNombreRef3new, #txtApellidoPaternoRef1new, #txtApellidoPaternoRef2new, #txtApellidoPaternoRef3new, #txtApellidoMaternoRef1new, #txtApellidoMaternoRef1new, #txtApellidoMaternoRef2new, #txtApellidoMaternoRef3new, #txtGironew, #txtPuestonew ').on({
		  /*keyup: function() {
			if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
				$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			}
		  },*/
		  keypress: function(tecla) {
			var texto=tecla.key; 
			var reg=  /^([-a-z_-ÁÉÍÑÓÚáéíñóú \s])+$/i; 
		   if(reg.test(texto)) { 
				return true;
		 
			} else { 
				return false;
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
		  }
		});

		
		
		
		$('#txtDependientesnew, #txtNumIdentificanew, #txtTiempoResidencianew, #txtantiguedadnew, #txtCpEmpresanew, #txtAosCasadonew ').on({
		  keydown: function(e) {
			  //enablecontroles($(this));
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode==186) {
				e.preventDefault();
			}
			//validaricontxt($(this));
              validariconspinereditjsblur(this);

		  },
		  blur: function() {
			validariconspinereditjsblur(this);
		  },
		 
		});
		
		/*$('#txtNumIdentificanew').on({
		  keyup: function() {
			
			validaricontxt($('#txtNumIdentificanew'));		
		  },
		  blur: function() {
			validaricontxt($('#txtNumIdentificanew'));		
		  },
		  click: function() {
			enablecontrolesicon("#txtNumIdentificanew");	
		  }
		});
		
		$('#txtNombreEmpresanew').on({
		  keyup: function() {
			
			validaricontxt($('#txtNombreEmpresanew'));		
		  },
		  blur: function() {
			validaricontxt($('#txtNombreEmpresanew'));		
		  },
		  click: function() {
			enablecontrolesicon("#txtNombreEmpresanew");	
		  }
		});
		
		
		
		
		$('#txtRFCnew').on({
		  keyup: function() {
			
			validaricontxt($('#txtRFCnew'));		
		  },
		  blur: function() {
			validaricontxt($('#txtRFCnew'));		
		  },
		  click: function() {
			enablecontrolesicon("#txtRFCnew");	
		  }
		});
		
		$('#txtCalleSolicitantenew').on({
		  keyup: function() {
			
			validaricontxt($('#txtCalleSolicitantenew'));		
		  },
		  blur: function() {
			validaricontxt($('#txtCalleSolicitantenew'));		
		  },
		  click: function() {
			enablecontrolesicon("#txtCalleSolicitantenew");	
		  }
		});
		
		$('#txtNumExteriornew').on({
		  keyup: function() {
			
			validaricontxt($('#txtNumExteriornew'));		
		  },
		  blur: function() {
			validaricontxt($('#txtNumExteriornew'));		
		  },
		  click: function() {
			enablecontrolesicon("#txtNumExteriornew");	
		  }
		});*/
		
		$('#txtCpSolicitantenew').on({
		  keyup: function() {
			
			validariconCP($('#txtCpSolicitantenew'));		
		  },
		  blur: function() {
			validariconCP($('#txtCpSolicitantenew'));		
		  },
		  click: function() {
			enablecontrolesicon("#txtCpSolicitantenew");	
		  },
		  keydown: function(e) {
			  //enablecontroles($(this));
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					validariconCP($('#txtCpSolicitantenew'));
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode==186) {
				e.preventDefault();
			}
			validariconCP($('#txtCpSolicitantenew'));

		  }
		});
		
		
		/*$('#txtNumIdentificanew').on({
		  keydown: function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}

		  }
		 
		});
		
		$('#txtTiempoResidencianew').on({
		  keydown: function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}

		  }
		 
		});
		
		$('#txtCpSolicitantenew').on({
		  keydown: function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}

		  }
		 
		});*/
	
	$('#txtNomSolicitantenew').on({
	  keyup: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			validaricontxt($('#txtRFCnew'));
		}
		validaricontxt($('#txtNomSolicitantenew'));	
		//enablecontroles("#txtNomSolicitantenew");		
	  },
	  keypress: function(tecla) {
		  //enablecontroles("#txtNomSolicitantenew");
		var texto=tecla.key; 
		var reg=  /^([-a-z_-ÁÉÍÑÓÚáéíñóú \s])+$/i; 
	   if(reg.test(texto)) { 
			return true;
	 
		} else { 
			return false;
		} 
		//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
	  },
	  blur: function() {
          var nomcompleto = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + $('#txtNomSolicitantenew').val() + ' ' + $('#txtSegundonombrenew').val() + ' ' + $('#txtApePaternonew').val() + ' ' + $('#txtApeMaternonew').val();
          $('#lblreferenciassolicitante').text(nomcompleto.toUpperCase());
		validaricontxt($('#txtNomSolicitantenew'));		
	  },
	  click: function() {
		enablecontrolesicon("#txtNomSolicitantenew");	
	  }
	});
	
	$('#txtSegundonombrenew').on({
	  keyup: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			validaricontxt($('#txtRFCnew'));
		}
	  },
	  keypress: function(tecla) {
		var texto=tecla.key; 
		var reg=  /^([-a-z_-ÁÉÍÑÓÚáéíñóú \s])+$/i; 
	   if(reg.test(texto)) { 
			return true;
	 
		} else { 
			return false;
		} 
		//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
	  },
	  blur: function() {
          var nomcompleto = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + $('#txtNomSolicitantenew').val() + ' ' + $('#txtSegundonombrenew').val() + ' ' + $('#txtApePaternonew').val() + ' ' + $('#txtApeMaternonew').val();
          $('#lblreferenciassolicitante').text(nomcompleto.toUpperCase());
		//validaricontxt($('#txtNomSolicitantenew'));
	  }
	});
	
	$('#txtApePaternonew').on({
	  keyup: function() {
		  //enablecontroles("#txtApePaternonew");
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			validaricontxt($('#txtRFCnew'));
		}
		validaricontxt($('#txtApePaternonew'));	
	  },
	  keypress: function(tecla) {
		  //enablecontroles("#txtApePaternonew")
		var texto=tecla.key; 
		var reg=  /^([-a-z_-ÁÉÍÑÓÚáéíñóú \s])+$/i; 
	   if(reg.test(texto)) { 
			return true;
	 
		} else { 
			return false;
		} 
		//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
	  },
	  blur: function() {
          var nomcompleto = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + $('#txtNomSolicitantenew').val() + ' ' + $('#txtSegundonombrenew').val() + ' ' + $('#txtApePaternonew').val() + ' ' + $('#txtApeMaternonew').val();
          $('#lblreferenciassolicitante').text(nomcompleto.toUpperCase());
		validaricontxt($('#txtApePaternonew'));		
	  },
	  click: function() {
		enablecontrolesicon("#txtApePaternonew");	
	  }
	});
	
	$('#txtApeMaternonew').on({
	  keyup: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			validaricontxt($('#txtRFCnew'));
		}
	  },
	  keypress: function(tecla) {
		var texto=tecla.key; 
		var reg=  /^([-a-z_-ÁÉÍÑÓÚáéíñóú \s])+$/i; 
	   if(reg.test(texto)) { 
			return true;
	 
		} else { 
			return false;
		} 
		//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
	  },
	  blur: function() {
          var nomcompleto = 'Las referencias familiares deben ser diferentes entre sí y diferentes al solicitante: ' + $('#txtNomSolicitantenew').val() + ' ' + $('#txtSegundonombrenew').val() + ' ' + $('#txtApePaternonew').val() + ' ' + $('#txtApeMaternonew').val();
          $('#lblreferenciassolicitante').text(nomcompleto.toUpperCase());

	  }  
	});
	/*$('#txtMontoViviendanew').on({
	  blur: function() {
		  
			if($('#txtMontoViviendanew').val().length > 0){
				validariconmonto($('#txtMontoViviendanew'));
			}else{
				$('#txtMontoViviendanew').val('$ 0.00');
				validariconmonto($('#txtMontoViviendanew'));
			}		
	  },
	  click: function() {
		enablecontrolesicon("#txtMontoViviendanew");	
	  }  
	});*/
	
	
	
	$('#dateFechanacnew').on({
	  change: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			$('#dateFechanacnewdia').val($('#dateFechanacnew').val().substr(8, 2));
			$('#dateFechanacnewmes').val($('#dateFechanacnew').val().substr(5, 2));
			$('#dateFechanacnewanio').val($('#dateFechanacnew').val().substr(0, 4));
			validaricontxt($('#txtRFCnew'));
		}
	  },
	  blur: function() {
		validariconfecha($('#dateFechanacnew'));		
	  },
	  click: function() {
		enablecontrolesicon("#dateFechanacnew");	
	  }
	});
	
	$('#imgprimINE').on({
		click:	function () {
			 console.log("INE");
			 
			 //$('#2b').hide();
			 //$('#3b').show();
			 //$('#lblregresar').show();
			 
		}
	  
	});
	$('#lblregresar').on({
		click:	function () {
			 console.log("INE");
			 
			$('#result_image').removeAttr('src');
			$('#result_imageanver').removeAttr('src');

			 
			/*var result_image = document.getElementById('result_image');
			var result_imagefin = document.getElementById('result_imagefin');
			var result_imagefinmod = document.getElementById('result_imagefinmod');
			
			result_image.src = "";
			result_imagefin.src = "";
			result_imagefinmod.src = "";*/
			 
			 $('#contenidoimgine').show();
			 $('#divimagenescargadasINE').hide();
			 $('#lblregresar').hide();
			 
		}
	  
	});
	
	$('#imgprimCedprof').on({
		click:	function () {
			 console.log("CEDPROF");
			 
		}
	  
	});
	$('#imgprimPASS').on({
		click:	function () {
			 console.log("PAASS");
			 
		}
	  
	});	
	
	$('#optpersonapoliticonew').on({
	  click: function() {
		
		if($(this).is(':checked')){
        // Hacer algo si el checkbox ha sido seleccionado
			console.log("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
			$('#rowfunciondesempeñasolnew').show();
		}else{
			// Hacer algo si el checkbox ha sido deseleccionado
			console.log("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
			$('#rowfunciondesempeñasolnew').hide();
			$('#txfuncionpoliticoSolicitantenew').val('');
			enablecontrolesicon($('#txfuncionpoliticoSolicitantenew'));

			
		}
	  }
	  
	});
	
	$('#optparenpoliticonew').on({
	  click: function() {
		
		if($(this).is(':checked')){
        // Hacer algo si el checkbox ha sido seleccionado
			console.log("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
			$('#rowfunciondesempeñaparentescosolnew').show();
			$('#rowqueparentescosolnew').show();
		}else{
			// Hacer algo si el checkbox ha sido deseleccionado
			console.log("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
			$('#rowfunciondesempeñaparentescosolnew').hide();
			$('#rowqueparentescosolnew').hide();
			$('#txparentescofuncionpoliticoSolicitantenew').val('');
			$('#txqueparenfuncionpoliticoSolicitantenew').val('');
			enablecontrolesicon($('#txparentescofuncionpoliticoSolicitantenew'));
			enablecontrolesicon($('#txqueparenfuncionpoliticoSolicitantenew'));

			
			
		}
	  }
	  
	});
	
	/*$('#txtTelefonoCasanew').on({
		  keypress: function(tecla) {
			var texto=tecla.key; 
			var reg=  /^([()0-9\s])+$/i; 
		   if(reg.test(texto)) { 
				validaricontelefonos('#txtTelefonoCasanew');
				return true;
		 
			} else { 
				return false;
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
		  },
	  blur: function() {
		validaricontelefonos($('#txtTelefonoCasanew'));		
	  }
		});
		
		
			$('#txtTelefonoCelularnew').on({
		  keypress: function(tecla) {
			var texto=tecla.key; 
			var reg=  /^([()0-9\s])+$/i; 
		   if(reg.test(texto)) { 
				validaricontelefonos('#txtTelefonoCelularnew');
				return true;
		 
			} else { 
				return false;
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
		  },
	  blur: function() {
		validaricontelefonos($('#txtTelefonoCelularnew'));		
	  }
		});
		
		$('#txtTelefonoCasanew, #txtTelefonoCelularnew, #txtTelOficinanew, #txtTelCasaRef1new, #txtTelCasaRef2new, #txtTelCasaRef3new').on({
		  keydown: function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
			
			
			

		  }
		 
		});*/
		
		
		
		
		
		
		$('#firma-canvas').on({
		click:	function () {
			$("#firma-canvas").css('border', 'none');
			$("#firma-canvas").css('border-bottom', '2px solid #cecfd3');
		}
		});
		
		$('#txtNombreRef1new, #txtApellidoPaternoRef1new, #txtApellidoMaternoRef1new').on({
		click:	function () {
            validaricontxt(this);
            $("#lblreferenciassolicitante").css('display', 'none');
			$("#lblreferenciassolicitante").css('border', 'none');
			$("#lblreferenciassolicitante").css('border-bottom', '3px solid rgba(206, 206, 4, 0.86)');
            $("#lblreferenciassolicitante").css('color', 'black');
		},
		keypress:	function () {
			validaricontxt(this);
            $("#lblreferenciassolicitante").css('display', 'none');
			$("#lblreferenciassolicitante").css('border', 'none');
			$("#lblreferenciassolicitante").css('border-bottom', '3px solid rgba(206, 206, 4, 0.86)');
            $("#lblreferenciassolicitante").css('color', 'black');
		},
            blur: function() {
			var textoref=$('#txtNombreRef1new').val() + " " + $('#txtApellidoPaternoRef1new').val() + " " + $('#txtApellidoMaternoRef1new').val(); 
			var textosol;
			if($('#txtSegundonombrenew').val().length >0){
				textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val(); 
			}else{
				textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val(); 
			}
			
			 
		   if(textoref === textosol ) { 
				console.log("referencia igual a solicitante");
				var demoTimeout;
				clearTimeout(demoTimeout);
                validaricontxt('#txtNombreRef1new');
				$('#txtNombreRef1new').trigger('startRumble');
				/*$("#txtNombreRef1new").css('border', '1px solid red'); */
				demoTimeout = setTimeout(function(){$('#txtNombreRef1new').trigger('stopRumble');},1000);
				//$('#txtNombreRef1new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef1new').trigger('startRumble');
                validaricontxt("#txtApellidoPaternoRef1new");
				//$("#txtApellidoPaternoRef1new").css('border', '1px solid red');
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef1new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef1new').trigger('startRumble');
				//$("#txtApellidoMaternoRef1new").css('border', '1px solid red');
                validaricontxt("#txtApellidoMaternoRef1new");
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef1new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

               var demoTimeout4;

				clearTimeout(demoTimeout4);
               $("#lblreferenciassolicitante").css('display', 'inline');
				$('#lblreferenciassolicitante').trigger('startRumble');
               $("#lblreferenciassolicitante").css('color', 'rgba(206, 206, 4, 0.86)');
				demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);

               $('#txtNombreRef1new').focus();

		 
			} else { 
				
			} 
		  }

		});
		
		



		$('#txtNombreRef2new, #txtApellidoPaternoRef2new, #txtApellidoMaternoRef2new').on({
            click:	function () {
            validaricontxt(this);
                $("#lblreferenciassolicitante").css('display', 'none');
			$("#lblreferenciassolicitante").css('border', 'none');
			$("#lblreferenciassolicitante").css('border-bottom', '3px solid rgba(206, 206, 4, 0.86)');
                $("#lblreferenciassolicitante").css('color', 'black');
		},
		keypress:	function () {
			validaricontxt(this);
            $("#lblreferenciassolicitante").css('display', 'none');
			$("#lblreferenciassolicitante").css('border', 'none');
			$("#lblreferenciassolicitante").css('border-bottom', '3px solid rgba(206, 206, 4, 0.86)');
            $("#lblreferenciassolicitante").css('color', 'black');
		},
		  blur: function() {
			var textoref=$('#txtNombreRef1new').val() + " " + $('#txtApellidoPaternoRef1new').val() + " " + $('#txtApellidoMaternoRef1new').val(); 
			var textoref2=$('#txtNombreRef2new').val() + " " + $('#txtApellidoPaternoRef2new').val() + " " + $('#txtApellidoMaternoRef2new').val(); 
			var textosol;
			if($('#txtSegundonombrenew').val().length > 0){
				textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val(); 
			}else{
				textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val(); 
			}
		   if(textoref2 === textoref ) { 
				console.log("referencia1 igual a referencia2");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtNombreRef2new').trigger('startRumble');
                validaricontxt("#txtNombreRef2new");
				//$("#txtNombreRef2new").css('border', '1px solid red');
				demoTimeout = setTimeout(function(){$('#txtNombreRef2new').trigger('stopRumble');},1000);
				$('#txtNombreRef2new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef2new').trigger('startRumble');
                validaricontxt("#txtApellidoPaternoRef2new");
				//$("#txtApellidoPaternoRef2new").css('border', '1px solid red');
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef2new').trigger('startRumble');
                validaricontxt("#txtApellidoMaternoRef2new");
				//$("#txtApellidoMaternoRef2new").css('border', '1px solid red');
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

                var demoTimeout4;

				clearTimeout(demoTimeout4);
               $("#lblreferenciassolicitante").css('display', 'inline');
				$('#lblreferenciassolicitante').trigger('startRumble');
               $("#lblreferenciassolicitante").css('color', 'rgba(206, 206, 4, 0.86)');
				demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);

		 
			} else if(textoref2 === textosol ) { 
				console.log("referencia2 igual a solicitante");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtNombreRef2new').trigger('startRumble');
                validaricontxt("#txtNombreRef2new");
				//$("#txtNombreRef2new").css('border', '1px solid red');
				demoTimeout = setTimeout(function(){$('#txtNombreRef2new').trigger('stopRumble');},1000);
				//$('#txtNombreRef2new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef2new').trigger('startRumble');
                validaricontxt("#txtApellidoPaternoRef2new");
				//$("#txtApellidoPaternoRef2new").css('border', '1px solid red');
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef2new').trigger('startRumble');
                validaricontxt("#txtApellidoMaternoRef2new");
				//$("#txtApellidoMaternoRef2new").css('border', '1px solid red');
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

                 var demoTimeout4;

				clearTimeout(demoTimeout4);
                $("#lblreferenciassolicitante").css('display', 'inline');
				$('#lblreferenciassolicitante').trigger('startRumble');
                $("#lblreferenciassolicitante").css('color', 'rgba(206, 206, 4, 0.86)');
				demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);
                $('#txtNombreRef2new').focus();

		  
				
			} 
		  }
		 
		});
		
		/*$('#txtNombreRef2new').on({
		click:	function () {
			$("#txtNombreRef2new").css('border', 'none');
			$("#txtNombreRef2new").css('border-bottom', '2px solid #cecfd3'); 
		},
		focus:	function () {
			$("#txtNombreRef2new").css('border', 'none');
			$("#txtNombreRef2new").css('border-bottom', '2px solid #cecfd3'); 
		}
	  
		});
		$('#txtApellidoPaternoRef2new').on({
			click:	function () {
				$("#txtApellidoPaternoRef2new").css('border', 'none');
				$("#txtApellidoPaternoRef2new").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#txtApellidoPaternoRef2new").css('border', 'none');
				$("#txtApellidoPaternoRef2new").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});
		$('#txtApellidoMaternoRef2new').on({
			click:	function () {
				$("#txtApellidoMaternoRef2new").css('border', 'none');
				$("#txtApellidoMaternoRef2new").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#txtApellidoMaternoRef2new").css('border', 'none');
				$("#txtApellidoMaternoRef2new").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});*/
		
		
		
		$('#txtNombreRef3new, #txtApellidoPaternoRef3new, #txtApellidoMaternoRef3new').on({
            click:	function () {
                $("#lblreferenciassolicitante").css('display', 'none');
            validaricontxt(this);
			$("#lblreferenciassolicitante").css('border', 'none');
			$("#lblreferenciassolicitante").css('border-bottom', '3px solid rgba(206, 206, 4, 0.86)');
                $("#lblreferenciassolicitante").css('color', 'black');
		},
		keypress:	function () {
            $("#lblreferenciassolicitante").css('display', 'none');
			validaricontxt(this);
			$("#lblreferenciassolicitante").css('border', 'none');
			$("#lblreferenciassolicitante").css('border-bottom', '3px solid rgba(206, 206, 4, 0.86)');
            $("#lblreferenciassolicitante").css('color', 'black');
		},
		  blur: function() {
			var textoref=$('#txtNombreRef1new').val() + " " + $('#txtApellidoPaternoRef1new').val() + " " + $('#txtApellidoMaternoRef1new').val(); 
			var textoref2=$('#txtNombreRef2new').val() + " " + $('#txtApellidoPaternoRef2new').val() + " " + $('#txtApellidoMaternoRef2new').val(); 
			var textoref3=$('#txtNombreRef3new').val() + " " + $('#txtApellidoPaternoRef3new').val() + " " + $('#txtApellidoMaternoRef3new').val(); 
			var textosol;
			if($('#txtSegundonombrenew').val().length > 0){
				textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val(); 
			}else{
				textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val(); 
			}
			 
		   if(textoref3 === textoref2 ) { 
				console.log("referencia3 igual a referencia2");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtNombreRef3new').trigger('startRumble');
				$("#txtNombreRef3new").css('border', '1px solid red'); 
				demoTimeout = setTimeout(function(){$('#txtNombreRef3new').trigger('stopRumble');},1000);
				$('#txtNombreRef3new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef3new').trigger('startRumble');
				$("#txtApellidoPaternoRef3new").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef3new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef3new').trigger('startRumble');
				$("#txtApellidoMaternoRef3new").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef3new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

                var demoTimeout4;

				clearTimeout(demoTimeout4);
               $("#lblreferenciassolicitante").css('display', 'inline');
				$('#lblreferenciassolicitante').trigger('startRumble');
               $("#lblreferenciassolicitante").css('color', 'rgba(206, 206, 4, 0.86)');
				demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);

		 
			}else if(textoref3 === textoref ) { 
				console.log("referencia3 igual a referencia1");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtNombreRef3new').trigger('startRumble');
				$("#txtNombreRef3new").css('border', '1px solid red'); 
				demoTimeout = setTimeout(function(){$('#txtNombreRef3new').trigger('stopRumble');},1000);
				//$('#txtNombreRef2new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef3new').trigger('startRumble');
				$("#txtApellidoPaternoRef3new").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef3new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef3new').trigger('startRumble');
				$("#txtApellidoMaternoRef3new").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef3new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

                 var demoTimeout4;

				clearTimeout(demoTimeout4);
                $("#lblreferenciassolicitante").css('display', 'inline');
				$('#lblreferenciassolicitante').trigger('startRumble');
                $("#lblreferenciassolicitante").css('color', 'rgba(206, 206, 4, 0.86)');
				demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);
                $('#txtNombreRef3new').focus();

		  
				
			}else if(textoref3 === textosol ) { 
				console.log("referencia3 igual a solicitante");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtNombreRef3new').trigger('startRumble');
				$("#txtNombreRef3new").css('border', '1px solid red'); 
				demoTimeout = setTimeout(function(){$('#txtNombreRef3new').trigger('stopRumble');},1000);
				//$('#txtNombreRef2new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef3new').trigger('startRumble');
				$("#txtApellidoPaternoRef3new").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef3new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef3new').trigger('startRumble');
				$("#txtApellidoMaternoRef3new").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef3new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

                 var demoTimeout4;

				clearTimeout(demoTimeout4);
                $("#lblreferenciassolicitante").css('display', 'inline');
				$('#lblreferenciassolicitante').trigger('startRumble');
                $("#lblreferenciassolicitante").css('color', 'rgba(206, 206, 4, 0.86)');
				demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);
                $('#txtNombreRef3new').focus();

		  
				
			} 
		  }
		 
		});
		
		/*$('#txtNombreRef3new').on({
		click:	function () {
			$("#txtNombreRef3new").css('border', 'none');
			$("#txtNombreRef3new").css('border-bottom', '2px solid #cecfd3'); 
		},
		focus:	function () {
			$("#txtNombreRef3new").css('border', 'none');
			$("#txtNombreRef3new").css('border-bottom', '2px solid #cecfd3'); 
		}
	  
		});
		$('#txtApellidoPaternoRef3new').on({
			click:	function () {
				$("#txtApellidoPaternoRef3new").css('border', 'none');
				$("#txtApellidoPaternoRef3new").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#txtApellidoPaternoRef3new").css('border', 'none');
				$("#txtApellidoPaternoRef3new").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});
		$('#txtApellidoMaternoRef3new').on({
			click:	function () {
				$("#txtApellidoMaternoRef3new").css('border', 'none');
				$("#txtApellidoMaternoRef3new").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#txtApellidoMaternoRef3new").css('border', 'none');
				$("#txtApellidoMaternoRef3new").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});*/
		

    $('#btnClosemdlOcr').click(function(){
        alert("cerrar");
    });
		$('#btnClosemdlOcr').on({			
			click:	function () {
				if($('#result_image')[0].src != "https://sminet.com.mx/afiliamaas/images/shade.jpg" || $('#result_imageanver')[0].src != "https://sminet.com.mx/afiliamaas/images/shade.jpg"){
					swal({
						  title: '¿Salir sin crear la solicitud?',
						  /*type: 'warning',*/
						  showCloseButton: true,
						  //confirmButtonColor: '#3085d6',
						  confirmButtonText: 'Aceptar <i class="glyphicon glyphicon-ok"></i>',
						  
						  allowOutsideClick: false,
						}).then(function () {
							/*$('#result_image')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg";
							$('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg";
                            $('#holder_result').removeAttr("class", "overlay-containerOCR");
                            $('#inefrenteoverlay').css("visibility", "hidden");
                            $('#holder_resultanver').removeAttr("class", "overlay-containerOCR");
                            $('#ineATRASoverlay').css("visibility", "hidden");
							$('#3b').modal('hide');
							$('#2b').modal('show');*/
                        //location.reload();
                        $("#cargandoafiliadiv").show();

                        var nomCompleto =$("#pnompromo").text();



							var cadena = Base64.encode($("#txttokenWS").val() + "|" + $("#txtidUsrWS").val() + "|" + $("#txtNomusuarioWS").val() + "|" +  $("#txtcompniareWS").val() + "|" + $("#txtpwdWS").val() + "|" + nomCompleto);

							location.href=('AfiliaMaaS.html?exml2340=' + cadena);
							
						  
						  
						}, function (dismiss) {
						  // dismiss can be 'cancel', 'overlay',
						  // 'close', and 'timer'
						  if (dismiss === 'close') {
							/*swal(
							  'Cancelled',
							  'Your imaginary file is safe :)',
							  'error'
							)*/
						  }
						})
				}else{
					$('#3b').modal('hide');
					$('#2b').modal('show');
				}
			}
		  
		});
		
		
		$('#btmcloseDatGrales').on({			
			click:	function () {
                if($("#mdlgralnombre")[0].innerText != "Nueva solicitud")
                {
                    $('#DatGrales').modal('hide');




                    $("#rowvalida").click();
                    reseteavalores();
					
				}else{

                    if($("#tipostatusrecreasol").val()!="Rechazadas"){
					swal({
						  title: '¡Atención!',
						  text: "¿Salir sin concluir la solicitud?",
						  /*type: 'warning',*/
						  showCloseButton: true,
						  showCancelButton: true,
						  confirmButtonText: 'Guardar solicitud <i class="glyphicon glyphicon-floppy-saved"></i>',
						  cancelButtonText: 'Salir <i class="glyphicon glyphicon-floppy-remove"></i>',
                        //cancelButtonColor:"#b9a107",
												  width: "auto",
                                                  allowOutsideClick: false,
						}).then(function () {
							
							
						  
						  
						}, function (dismiss) {
						  // dismiss can be 'cancel', 'overlay',
						  // 'close', and 'timer'
						  if (dismiss === 'cancel') {
							  /*$('#result_image')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg"
							$('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg"
                              $('#holder_result').removeAttr("class", "overlay-containerOCR");
                            $('#inefrenteoverlay').css("visibility", "hidden");
                            $('#holder_resultanver').removeAttr("class", "overlay-containerOCR");
                            $('#ineATRASoverlay').css("visibility", "hidden");
							$('#DatGrales').modal('hide');
                              for(var x=1;x<7;x++)
                                {
                                    navegasliderheaderatras(x);
                                }

							$('#3b').modal('hide');
							$('#2b').modal('show');
                              $("#rowvalida").click();
							  reseteavalores();*/



                              //location.reload();
                              $("#cargandoafiliadiv").show();

                              var nomCompleto =$("#pnompromo").text();



							var cadena = Base64.encode($("#txttokenWS").val() + "|" + $("#txtidUsrWS").val() + "|" + $("#txtNomusuarioWS").val() + "|" +  $("#txtcompniareWS").val() + "|" + $("#txtpwdWS").val() + "|" + nomCompleto);

							location.href=('AfiliaMaaS.html?exml2340=' + cadena);

						  }
						  
						  if (dismiss === 'close') {
							  
							 

						  }
						});

                    }else{

                        swal({
						  title: '¡Atención!',
						  text: "¿Salir sin reenviar la solicitud actual?",
						  /*type: 'warning',*/
						  showCloseButton: true,
						  showCancelButton: true,
						  confirmButtonText: 'Reenviar solicitud <i class="glyphicon glyphicon-floppy-send"></i>',
						  cancelButtonText: 'Salir <i class="glyphicon glyphicon-floppy-remove"></i>',
                        //cancelButtonColor:"#b9a107",
												  width: "auto",
                                                  allowOutsideClick: false,
						}).then(function () {
							$('#terminar').click();



						}, function (dismiss) {
						  // dismiss can be 'cancel', 'overlay',
						  // 'close', and 'timer'
						  if (dismiss === 'cancel') {
							  /*$('#result_image')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg"
							$('#result_imageanver')[0].src = "https://sminet.com.mx/afiliamaas-web/images/shade.jpg"
                              $('#holder_result').removeAttr("class", "overlay-containerOCR");
                            $('#inefrenteoverlay').css("visibility", "hidden");
                            $('#holder_resultanver').removeAttr("class", "overlay-containerOCR");
                            $('#ineATRASoverlay').css("visibility", "hidden");
							$('#DatGrales').modal('hide');
                              for(var x=1;x<7;x++)
                                {
                                    navegasliderheaderatras(x);
                                }

							$('#3b').modal('hide');
							$('#2b').modal('show');
                              $("#rowvalida").click();
							  reseteavalores();*/



                              //location.reload();
                              $("#cargandoafiliadiv").show();

                              var nomCompleto =$("#pnompromo").text();



							var cadena = Base64.encode($("#txttokenWS").val() + "|" + $("#txtidUsrWS").val() + "|" + $("#txtNomusuarioWS").val() + "|" +  $("#txtcompniareWS").val() + "|" + $("#txtpwdWS").val() + "|" + nomCompleto);

							location.href=('AfiliaMaaS.html?exml2340=' + cadena);

						  }

						  if (dismiss === 'close') {



						  }
						});

                    }
				}
			}
		  
		});
		
		
		$('#btnifeok').on({			
			click:	function () {
				
					$('#3b').modal('hide');
                    $('#DatGrales').modal();
					$('#DatGrales').modal('show');
				
			}
		  
		});
		
		
		
		
		$('#imgprimINE').on({
			click:	function () {
				
				$('#2b').modal('hide');
				$('#3b').modal('show');
						
			}
		  
		});
		
		/*$('#lstNacionalidadnew').on({
			change:	function () {
				enablecontrolesicon("#lstNacionalidadnew");
			},
			focus:	function () {
				enablecontrolesicon("#lstNacionalidadnew");
			},
			click:	function () {
				enablecontrolesicon("#lstNacionalidadnew");
			},
			blur:	function () {
				validariconlistas("#lstNacionalidadnew");
			}
		  
		});
		
		$('#lisEstadoSolicitantenew').on({
			change: function() {
			
				enablecontrolesicon($('#lisEstadoSolicitantenew'));		
			},
			focus:	function () {
				enablecontrolesicon("#lstNacionalidadnew");
			},
			blur: function() {
				validariconlistas($('#lisEstadoSolicitantenew'));		
			},
			click: function() {
				enablecontrolesicon("#lisEstadoSolicitantenew");	
			}
		});
		
		$('#lisDelMuniSolicitantenew').on({
			change: function() {
			
				enablecontrolesicon($('#lisDelMuniSolicitantenew'));		
			},
			focus:	function () {
				enablecontrolesicon("#lisDelMuniSolicitantenew");
			},
			blur: function() {
				validariconlistas($('#lisDelMuniSolicitantenew'));		
			},
			click: function() {
				enablecontrolesicon("#lisDelMuniSolicitantenew");	
			}
		});
		
		$('#lisColoniaSolicitantenew').on({
			change: function() {
			
				enablecontrolesicon($('#lisColoniaSolicitantenew'));		
			},
			focus:	function () {
				enablecontrolesicon("#lisColoniaSolicitantenew");
			},
			blur: function() {
				validariconlistas($('#lisColoniaSolicitantenew'));		
			},
			click: function() {
				enablecontrolesicon("#lisColoniaSolicitantenew");	
			}
		});
		
		$('#lisEstatusResidencianew').on({
			change: function() {
			
				enablecontrolesicon($('#lisEstatusResidencianew'));		
			},
			focus:	function () {
				enablecontrolesicon("#lisEstatusResidencianew");
			},
			blur: function() {
				validariconlistas($('#lisEstatusResidencianew'));		
			},
			click: function() {
				enablecontrolesicon("#lisEstatusResidencianew");	
			}
		});
		
		$('#lisCompaniaMovilnew').on({
			change: function() {
			
				enablecontrolesicon($('#lisCompaniaMovilnew'));		
			},
			focus:	function () {
				enablecontrolesicon("#lisCompaniaMovilnew");
			},
			blur: function() {
				validariconlistas($('#lisCompaniaMovilnew'));		
			},
			click: function() {
				enablecontrolesicon("#lisCompaniaMovilnew");	
			}
		});
		
		
		
		
		
		
		
		
		
		$('#lstEdoCivilnew').on({
			change:	function () {
				enablecontrolesicon("#lstEdoCivilnew");
			},
			focus:	function () {
				enablecontrolesicon("#lstEdoCivilnew"); 
			},
			click:	function () {
				enablecontrolesicon("#lstEdoCivilnew");
			},
			blur:	function () {
				validariconlistas("#lstEdoCivilnew");
			}
		  
		});*/
		
		/*$('#txtTipIdentificacionnew').on({
			change:	function () {
				enablecontrolesicon("#txtTipIdentificacionnew");
			},
			focus:	function () {
				enablecontrolesicon("#txtTipIdentificacionnew");
			},
			click:	function () {
				enablecontrolesicon("#txtTipIdentificacionnew");
			},
			blur:	function () {
				validariconlistas("#txtTipIdentificacionnew");
			}
		  
		});*/
		
		
		$('#anumpaso1').on({
			click:	function () {
				//navegasliderheader($('#anumpaso1'),1);
				navegasliderheaderlibre($('#anumpaso1'), 1)	;						
			}
		  
		});
		
		$('#anumpaso2').on({
			click:	function () {
				//navegasliderheader($('#anumpaso2'),2);
				//validacontrolespantall('1',true);
				navegasliderheaderlibre($('#anumpaso2'), 2)	;			
			}
		  
		});
		$('#anumpaso3').on({
			click:	function () {
				//navegasliderheader($('#anumpaso3'),3);
				//validacontrolespantall('2',true);	
				navegasliderheaderlibre($('#anumpaso3'), 3)	;				
			}
		  
		});
		$('#anumpaso4').on({
			click:	function () {
				//navegasliderheader($('#anumpaso4'),4);	
				//validacontrolespantall('3',true);	
				navegasliderheaderlibre($('#anumpaso4'), 4)	;
			}
		  
		});
		$('#anumpaso5').on({
			click:	function () {
				//navegasliderheader($('#anumpaso5'),5);
				//validacontrolespantall('4',true);
				navegasliderheaderlibre($('#anumpaso5'), 5)	;
			}
		  
		});
		$('#anumpaso6').on({
			click:	function () {
				//navegasliderheader($('#anumpaso6'),6);	
				//validacontrolespantall('5',true);	
				navegasliderheaderlibre($('#anumpaso6'), 6)	;
                if($('#recreasolicitudinput').val() == "NO")
                        {
                            $('#terminar').css("display", "");

                        }else{

                            if($("#tipostatusrecreasol").val()!="Rechazadas"){
                                setTimeout(function(){
                                  $('#terminar').css("display", "none");
                                }, 50);
                            }



                        }
			}
		  
		});
		
	
	
		
		$('#nomfirma').on({
			click:	function () {
                $("#Firma").modal("show");

					$("#imagenpresenta").css('border', '');

			}

		});

    $('#BtnSalir').on({
			click:	function () {
                location.href=("Index.html");

			}

		});




		
		
		
		
		
		
	
	
	});
	
$(window).load(function () {
  // Una vez se cargue al completo la página desaparecerá el div "cargando"
  $('#cargando').hide();
});
