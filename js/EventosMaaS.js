$(document).ready(function(){ 
	$('#lstNacionalidadnew, #txtNomSolicitantenew, #dateFechanacnew, #txtApePaternonew, #txtRFCnew, #txtApeMaternonew, #lstEdoCivilnew, #txtTipIdentificacionnew, #txtNumIdentificanew, #txtCalleSolicitantenew, #txtTiempoResidencianew, #txtNumExteriornew, #lisEstatusResidencianew, #txtCpSolicitantenew, #txtCorreonew, #lisEstadoSolicitantenew, #txtTelefonoCasanew, #lisDelMuniSolicitantenew, #txtTelefonoCelularnew, #lisColoniaSolicitantenew, #txtNombreEmpresanew, #txtCalleEmpresanew, #txtantiguedadnew, #txtGironew, #txtNumeroExteriorEmpresa, #lisTipoContratonew, #txtCpEmpresanew, #lisEstadoEmpresanew, #txtIngresonew, #lisDelMuniEmpresanew, #lisColoniaEmpresanew, #txtTelOficinanew, #txtNombreRef1new, #txtNombreRef2new, #txtNombreRef3new, #txtApellidoPaternoRef1new, #txtApellidoPaternoRef2new, #txtApellidoPaternoRef3new, #txtApellidoMaternoRef1new, #txtApellidoMaternoRef2new, #txtApellidoMaternoRef3new, #lisNacionalidadRef1new, #lisNacionalidadRef2new, #txtTelCasaRef1new, #txtTelCasaRef2new, #firma-canvas').jrumble({
			x: 1,
			y: 0,
			rotation: 0,
			opacity: true
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
		  blur: function() {
			var texto=$('#txtCorreonew').val(); 
			var reg=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
		   if(reg.test(texto)) { 
				console.log("coreovalido")
		 
			} else { 
				console.log("coreoinvalido");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtCorreonew').trigger('startRumble');
				demoTimeout = setTimeout(function(){$('#txtCorreonew').trigger('stopRumble');},1500);
				//$('#txtCorreonew').focus();
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
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

		
		
		
		$('#txtDependientesnew, #txtNumIdentificanew, #txtTiempoResidencianew, #txtCpSolicitantenew, #txtantiguedadnew, #txtCpEmpresanew, #txtAosCasadonew ').on({
		  keydown: function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode==186) {
				e.preventDefault();
			}

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
	  }
	});
	
	$('#txtSegundonombrenew').on({
	  keyup: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
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
	  }
	});
	
	$('#txtApePaternonew').on({
	  keyup: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
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
	  }  
	});
	
	$('#txtApeMaternonew').on({
	  keyup: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
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
	  }  
	});
	
	$('#dateFechanacnew').on({
	  change: function() {
		if($('#txtNomSolicitantenew').val()!= '' && $('#txtApePaternonew').val() != '' && $('#txtApeMaternonew').val()!= '' && $('#dateFechanacnew').val() != ''){
			$('#txtRFCnew').val(CalcularRFC($('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() ,$('#txtApePaternonew').val(),$('#txtApeMaternonew').val(),$('#dateFechanacnew').val()));
			$('#dateFechanacnewdia').val($('#dateFechanacnew').val().substr(8, 2));
			$('#dateFechanacnewmes').val($('#dateFechanacnew').val().substr(5, 2));
			$('#dateFechanacnewanio').val($('#dateFechanacnew').val().substr(0, 4));
		}
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
		}
	  }
	  
	});
	
	$('#txtTelefonoCasanew').on({
		  keypress: function(tecla) {
			var texto=tecla.key; 
			var reg=  /^([()0-9\s])+$/i; 
		   if(reg.test(texto)) { 
				return true;
		 
			} else { 
				return false;
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
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
		 
		});
		
		$('#txtApellidoMaternoRef1new').on({
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
				$('#txtNombreRef1new').trigger('startRumble');
				$("#txtNombreRef1new").css('border', '1px solid red'); 
				demoTimeout = setTimeout(function(){$('#txtNombreRef1new').trigger('stopRumble');},1000);
				//$('#txtNombreRef1new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef1new').trigger('startRumble');
				$("#txtApellidoPaternoRef1new").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef1new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef1new').trigger('startRumble');
				$("#txtApellidoMaternoRef1new").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef1new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

		 
			} else { 
				
			} 
		  }
		 
		});
		
		$('#firma-canvas').on({
		click:	function () {
			$("#firma-canvas").css('border', 'none');
			$("#firma-canvas").css('border-bottom', '2px solid #cecfd3'); 
		}	  
		});
		
		$('#txtNombreRef1new').on({
		click:	function () {
			$("#txtNombreRef1new").css('border', 'none');
			$("#txtNombreRef1new").css('border-bottom', '2px solid #cecfd3'); 
		},
		focus:	function () {
			$("#txtNombreRef1new").css('border', 'none');
			$("#txtNombreRef1new").css('border-bottom', '2px solid #cecfd3'); 
		}
	  
		});
		$('#txtApellidoPaternoRef1new').on({
			click:	function () {
				$("#txtApellidoPaternoRef1new").css('border', 'none');
				$("#txtApellidoPaternoRef1new").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#txtApellidoPaternoRef1new").css('border', 'none');
				$("#txtApellidoPaternoRef1new").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});
		$('#txtApellidoMaternoRef1new').on({
			click:	function () {
				$("#txtApellidoMaternoRef1new").css('border', 'none');
				$("#txtApellidoMaternoRef1new").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#txtApellidoMaternoRef1new").css('border', 'none');
				$("#txtApellidoMaternoRef1new").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});
		
		
		$('#txtApellidoMaternoRef2new').on({
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
				$("#txtNombreRef2new").css('border', '1px solid red'); 
				demoTimeout = setTimeout(function(){$('#txtNombreRef2new').trigger('stopRumble');},1000);
				//$('#txtNombreRef2new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef2new').trigger('startRumble');
				$("#txtApellidoPaternoRef2new").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef2new').trigger('startRumble');
				$("#txtApellidoMaternoRef2new").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

		 
			} else if(textoref2 === textosol ) { 
				console.log("referencia2 igual a solicitante");
				var demoTimeout;
				clearTimeout(demoTimeout);
				$('#txtNombreRef2new').trigger('startRumble');
				$("#txtNombreRef2new").css('border', '1px solid red'); 
				demoTimeout = setTimeout(function(){$('#txtNombreRef2new').trigger('stopRumble');},1000);
				//$('#txtNombreRef2new').focus();
				
				var demoTimeout2;

				clearTimeout(demoTimeout2);
				$('#txtApellidoPaternoRef2new').trigger('startRumble');
				$("#txtApellidoPaternoRef2new").css('border', '1px solid red'); 
				demoTimeout2 = setTimeout(function(){$('#txtApellidoPaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout);
				
				var demoTimeout3;
				
				clearTimeout(demoTimeout3);
				$('#txtApellidoMaternoRef2new').trigger('startRumble');
				$("#txtApellidoMaternoRef2new").css('border', '1px solid red'); 
				demoTimeout3 = setTimeout(function(){$('#txtApellidoMaternoRef2new').trigger('stopRumble')},1000);
				//clearTimeout(demoTimeout3);

		  
				
			} 
		  }
		 
		});
		
		$('#txtNombreRef2new').on({
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
		  
		});
		
		
		
		$('#txtApellidoMaternoRef3new').on({
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

		  
				
			} 
		  }
		 
		});
		
		$('#txtNombreRef3new').on({
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
		  
		});
		
		$('#btnClosemdlOcr').on({			
			click:	function () {
				if($('#result_image')[0].src != "https://stefaninimx.com/afiliamaas/images/shade.jpg" || $('#result_imageanver')[0].src != "https://stefaninimx.com/afiliamaas/images/shade.jpg"){
					swal({
						  title: '¿Salir sin crear la solicitud?',
						  /*type: 'warning',*/
						  showCloseButton: true,
						  confirmButtonColor: '#3085d6',
						  confirmButtonText: 'Yes, delete it!',
						  
						  confirmButtonClass: 'btn btn-success',
						  buttonsStyling: false
						}).then(function () {
							$('#result_image')[0].src = "https://stefaninimx.com/afiliamaas/images/shade.jpg"
							$('#result_imageanver')[0].src = "https://stefaninimx.com/afiliamaas/images/shade.jpg"
							$('#3b').modal('hide');
							$('#2b').modal('show');
							
						  
						  
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
				
				if($("#mdlgralnombre")[0].innerText != "Nueva solicitud"){
					
					swal({
						  title: '¡Atención!',
						  text: "¿Salir de la ventana de solicitud?",
						  /*type: 'warning',*/
						  showCloseButton: true,
						  confirmButtonColor: '#3085d6',
						  confirmButtonText: 'Salir',
						  confirmButtonClass: 'btn btn-success',
						  buttonsStyling: false
						}).then(function () {
							$('#DatGrales').modal('hide');
							//$('#2b').modal('show');
							
						  
						  
						}, function (dismiss) {
						  // dismiss can be 'cancel', 'overlay',
						  // 'close', and 'timer'
						  if (dismiss === 'cancel') {
							  
							/*swal(
							  'Cancelled',
							  'Your imaginary file is safe :)',
							  'error'
							)*/
						  }
						  
						  if (dismiss === 'close') {
							  
							 
							/*swal(
							  'Cancelled',
							  'Your imaginary file is safe :)',
							  'error'
							)*/
						  }
						})
					
				}else{
					swal({
						  title: '¡Atención!',
						  text: "¿Salir sin concluir la solicitud?",
						  /*type: 'warning',*/
						  showCloseButton: true,
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Guardar solicitud!',
						  cancelButtonText: 'Salir',
						  confirmButtonClass: 'btn btn-success',
						  cancelButtonClass: 'btn btn-danger',
						  buttonsStyling: false
						}).then(function () {
							
							
						  
						  
						}, function (dismiss) {
						  // dismiss can be 'cancel', 'overlay',
						  // 'close', and 'timer'
						  if (dismiss === 'cancel') {
							  $('#result_image')[0].src = "https://stefaninimx.com/afiliamaas/images/shade.jpg"
							$('#result_imageanver')[0].src = "https://stefaninimx.com/afiliamaas/images/shade.jpg"
							$('#DatGrales').modal('hide');
							$('#3b').modal('hide');
							$('#2b').modal('show');
							  reseteavalores();
							/*swal(
							  'Cancelled',
							  'Your imaginary file is safe :)',
							  'error'
							)*/
						  }
						  
						  if (dismiss === 'close') {
							  
							 
							/*swal(
							  'Cancelled',
							  'Your imaginary file is safe :)',
							  'error'
							)*/
						  }
						})
				}
			}
		  
		});
		
		
		$('#btnifeok').on({			
			click:	function () {
				
					$('#3b').modal('hide');
					$('#DatGrales').modal('show');
				
			}
		  
		});
		
		
		
		
		$('#imgprimINE').on({
			click:	function () {
				
				$('#2b').modal('hide');
				$('#3b').modal('show');
						
			}
		  
		});
		
		$('#lstNacionalidadnew').on({
			change:	function () {
				$("#lstNacionalidadnew").css('border', 'none');
				$("#lstNacionalidadnew").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#lstNacionalidadnew").css('border', 'none');
				$("#lstNacionalidadnew").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});
		
		$('#lstEdoCivilnew').on({
			change:	function () {
				$("#lstEdoCivilnew").css('border', 'none');
				$("#lstEdoCivilnew").css('border-bottom', '2px solid #cecfd3'); 
			},
			focus:	function () {
				$("#lstEdoCivilnew").css('border', 'none');
				$("#lstEdoCivilnew").css('border-bottom', '2px solid #cecfd3'); 
			}
		  
		});
	

		
		
		
		
		
		
		
		
	
	
	});
	
$(window).load(function () {
  // Una vez se cargue al completo la página desaparecerá el div "cargando"
  $('#cargando').hide();
});