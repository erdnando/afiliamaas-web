$(document).ready(function(){ 
	/*$('#chksexosolicitante').on({
	  click: function() {
		
		if($(this).is(':checked')){
        // Hacer algo si el checkbox ha sido seleccionado
			alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
		}else{
			// Hacer algo si el checkbox ha sido deseleccionado
			alert("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
		}
	  }
	  
	});*/

	$('#txtCpSolicitantenew').on({
	  keyup: function() {
		  //this.value = (this.value + '').replace(/[^0-9]/g, '');
		if(this.value.length == 5){
			 buscaCP(this.value);
		}
		else if(this.value.length == 0){
			console.log("sin CP");
			$('#lisColoniaSolicitantenew').empty();
			$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
            enablecontrolesicon($("#lisColoniaSolicitantenew"));
			$("#lisEstadoSolicitantenew option:selected").removeAttr("selected");
			$("#lisEstadoSolicitantenew option[value=0]").attr("selected","selected");
            enablecontrolesicon($("#lisEstadoSolicitantenew"));
			$('#lisDelMuniSolicitantenew').empty();
			$("#lisDelMuniSolicitantenew").append('<option value="0">Seleccione...</option>');
            enablecontrolesicon($("#lisDelMuniSolicitantenew"));
			
		}

	  },
	  keydown: function(e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) || 
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
 
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }

	  },
	  change: function() {
		  //this.value = (this.value + '').replace(/[^0-9]/g, '');
		if(this.value.length == 5){
			 buscaCP(this.value);
		}
	  }
	 
	});

	$('#lisEstadoSolicitantenew').on({
		change:	function () {
			 var selectVal = $("#lisEstadoSolicitantenew option:selected").val();
			 if(selectVal != 0){
				buscaMunicipio(selectVal);
			 }
			 else{
				 $('#lisColoniaSolicitantenew').empty();
				$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
                 enablecontrolesicon($("#lisColoniaSolicitantenew"));
				$('#txtCpSolicitantenew').val("");
                 enablecontrolesicon($('#txtCpSolicitantenew'));
				$('#lisDelMuniSolicitantenew').empty();
				$("#lisDelMuniSolicitantenew").append('<option value="0">Seleccione...</option>');
                 enablecontrolesicon($("#lisDelMuniSolicitantenew"));
			 }
			 
			 console.log(selectVal);
		}
	  
	});
	
	$('#lisDelMuniSolicitantenew').on({
		change:	function () {
			 var selectVal = $("#lisDelMuniSolicitantenew option:selected").val();
			 var selectValestado = $("#lisEstadoSolicitantenew option:selected").val();
			 if(selectVal != 0){
				buscacolonia(selectVal, selectValestado);
			 }
			 else{
				 $('#lisColoniaSolicitantenew').empty();
				$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
                 enablecontrolesicon($("#lisColoniaSolicitantenew"));
				$('#txtCpSolicitantenew').val("");
                 enablecontrolesicon($('#txtCpSolicitantenew'));
				
			 }
			 
			 console.log(selectVal);
		}
	  
	});
	
	
	
	$('#lisColoniaSolicitantenew').on({
		change:	function () {
			 var selectVal = $("#lisColoniaSolicitantenew option:selected").val();
			 if(selectVal != 0){
			 $('#txtCpSolicitantenew').val(selectVal);
			 }
			 else{
				 $('#txtCpSolicitantenew').val("");
			 }
			 
		}
	  
	});
	
	$('#txtCpEmpresanew').on({
	  keyup: function() {
		if(this.value.length == 5){
			 buscaCPemp(this.value);
		}
		else if(this.value.length == 0){
			console.log("sin CP");
			$('#lisColoniaEmpresanew').empty();
			$("#lisColoniaEmpresanew").append('<option value="0">Seleccione...</option>');
			$("#lisEstadoEmpresanew option[value=0]").attr("selected","selected");
            enablecontrolesicon($("#lisEstadoEmpresanew"));
			$('#lisDelMuniEmpresanew').empty();
			$("#lisDelMuniEmpresanew").append('<option value="0">Seleccione...</option>');
            enablecontrolesicon($("#lisDelMuniEmpresanew"));
			
		}

	  }/*"," se pueden agregar mas eventos separados por comas
	  keyup: function() {
		if(this.value.length == 5){
			 buscaCP(this.value);
		}

	  }*/
	  
	});
	
	$('#lisEstadoEmpresanew').on({
		change:	function () {
			 var selectVal = $("#lisEstadoEmpresanew option:selected").val();
			 if(selectVal != 0){
				buscaMunicipioemp(selectVal);
			 }
			 else{
				 $('#lisColoniaEmpresanew').empty();
				$("#lisColoniaEmpresanew").append('<option value="0">Seleccione...</option>');
                 enablecontrolesicon($("#lisColoniaEmpresanew"));
				$('#txtCpEmpresanew').val("");
                 enablecontrolesicon($('#txtCpEmpresanew'));
				$('#lisDelMuniEmpresanew').empty();
				$("#lisDelMuniEmpresanew").append('<option value="0">Seleccione...</option>');
                 enablecontrolesicon($("#lisDelMuniEmpresanew"));
			 }
			 
			 console.log(selectVal);
		}
	  
	});
	
	$('#lisDelMuniEmpresanew').on({
		change:	function () {
			 var selectVal = $("#lisDelMuniEmpresanew option:selected").val();
			 var selectValestado = $("#lisEstadoEmpresanew option:selected").val();
			 if(selectVal != 0){
				buscacoloniaemp(selectVal, selectValestado);
			 }
			 else{
				 $('#lisColoniaEmpresanew').empty();
				$("#lisColoniaEmpresanew").append('<option value="0">Seleccione...</option>');
                 enablecontrolesicon($("#lisColoniaEmpresanew"));
				$('#txtCpEmpresanew').val("");
                 enablecontrolesicon($('#txtCpEmpresanew'));
				
			 }
			 
			 console.log(selectVal);
		}
	  
	});
	
	$('#lisColoniaEmpresanew').on({
		change:	function () {
			 var selectVal = $("#lisColoniaEmpresanew option:selected").val();
			 if(selectVal != 0){
			 $('#txtCpEmpresanew').val(selectVal);
			 }
			 else{
				 $('#txtCpEmpresanew').val("");
			 }
			 
		}
	  
	});
	
});
	
