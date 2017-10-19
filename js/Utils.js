

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return "ERRO";
	if (!results[2]) return 'ERRO';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var hasSigned = false;

function clearCanvasSign() {
    hasSigned = false;
    setTimeout(function () {
        loading("hide");
    },2000);
}

function signToImage() {
	var canvas = document.getElementById("firma-canvas");
	
	if(canvas.toDataURL() === "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAAE7CAYAAADpbkqeAAAO0klEQVR4Xu3WQQ0AMAwDsZU/2iLYpKG4h4ugcvLI7O49jgABAgQIECAQEBjDJJCCFwgQIECAAIEvYJgoAgECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGQHDJBOFRwgQIECAAAHDRAcIECBAgACBjIBhkonCIwQIECBAgIBhogMECBAgQIBARsAwyUThEQIECBAgQMAw0QECBAgQIEAgI2CYZKLwCAECBAgQIGCY6AABAgQIECCQETBMMlF4hAABAgQIEDBMdIAAAQIECBDICBgmmSg8QoAAAQIECBgmOkCAAAECBAhkBAyTTBQeIUCAAAECBAwTHSBAgAABAgQyAoZJJgqPECBAgAABAoaJDhAgQIAAAQIZAcMkE4VHCBAgQIAAAcNEBwgQIECAAIGMgGGSicIjBAgQIECAgGGiAwQIECBAgEBGwDDJROERAgQIECBAwDDRAQIECBAgQCAjYJhkovAIAQIECBAgYJjoAAECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGQHDJBOFRwgQIECAAAHDRAcIECBAgACBjIBhkonCIwQIECBAgIBhogMECBAgQIBARsAwyUThEQIECBAgQMAw0QECBAgQIEAgI2CYZKLwCAECBAgQIGCY6AABAgQIECCQETBMMlF4hAABAgQIEDBMdIAAAQIECBDICBgmmSg8QoAAAQIECBgmOkCAAAECBAhkBAyTTBQeIUCAAAECBAwTHSBAgAABAgQyAoZJJgqPECBAgAABAoaJDhAgQIAAAQIZAcMkE4VHCBAgQIAAAcNEBwgQIECAAIGMgGGSicIjBAgQIECAgGGiAwQIECBAgEBGwDDJROERAgQIECBAwDDRAQIECBAgQCAjYJhkovAIAQIECBAgYJjoAAECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGQHDJBOFRwgQIECAAAHDRAcIECBAgACBjIBhkonCIwQIECBAgIBhogMECBAgQIBARsAwyUThEQIECBAgQMAw0QECBAgQIEAgI2CYZKLwCAECBAgQIGCY6AABAgQIECCQETBMMlF4hAABAgQIEDBMdIAAAQIECBDICBgmmSg8QoAAAQIECBgmOkCAAAECBAhkBAyTTBQeIUCAAAECBAwTHSBAgAABAgQyAoZJJgqPECBAgAABAoaJDhAgQIAAAQIZAcMkE4VHCBAgQIAAAcNEBwgQIECAAIGMgGGSicIjBAgQIECAgGGiAwQIECBAgEBGwDDJROERAgQIECBAwDDRAQIECBAgQCAjYJhkovAIAQIECBAgYJjoAAECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGQHDJBOFRwgQIECAAAHDRAcIECBAgACBjIBhkonCIwQIECBAgIBhogMECBAgQIBARsAwyUThEQIECBAgQMAw0QECBAgQIEAgI2CYZKLwCAECBAgQIGCY6AABAgQIECCQETBMMlF4hAABAgQIEDBMdIAAAQIECBDICBgmmSg8QoAAAQIECBgmOkCAAAECBAhkBAyTTBQeIUCAAAECBAwTHSBAgAABAgQyAoZJJgqPECBAgAABAoaJDhAgQIAAAQIZAcMkE4VHCBAgQIAAAcNEBwgQIECAAIGMgGGSicIjBAgQIECAgGGiAwQIECBAgEBGwDDJROERAgQIECBAwDDRAQIECBAgQCAjYJhkovAIAQIECBAgYJjoAAECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGQHDJBOFRwgQIECAAAHDRAcIECBAgACBjIBhkonCIwQIECBAgIBhogMECBAgQIBARsAwyUThEQIECBAgQMAw0QECBAgQIEAgI2CYZKLwCAECBAgQIGCY6AABAgQIECCQETBMMlF4hAABAgQIEDBMdIAAAQIECBDICBgmmSg8QoAAAQIECBgmOkCAAAECBAhkBAyTTBQeIUCAAAECBAwTHSBAgAABAgQyAoZJJgqPECBAgAABAoaJDhAgQIAAAQIZAcMkE4VHCBAgQIAAAcNEBwgQIECAAIGMgGGSicIjBAgQIECAgGGiAwQIECBAgEBGwDDJROERAgQIECBAwDDRAQIECBAgQCAjYJhkovAIAQIECBAgYJjoAAECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGQHDJBOFRwgQIECAAAHDRAcIECBAgACBjIBhkonCIwQIECBAgIBhogMECBAgQIBARsAwyUThEQIECBAgQMAw0QECBAgQIEAgI2CYZKLwCAECBAgQIGCY6AABAgQIECCQETBMMlF4hAABAgQIEDBMdIAAAQIECBDICBgmmSg8QoAAAQIECBgmOkCAAAECBAhkBAyTTBQeIUCAAAECBAwTHSBAgAABAgQyAoZJJgqPECBAgAABAoaJDhAgQIAAAQIZAcMkE4VHCBAgQIAAAcNEBwgQIECAAIGMgGGSicIjBAgQIECAgGGiAwQIECBAgEBGwDDJROERAgQIECBAwDDRAQIECBAgQCAjYJhkovAIAQIECBAgYJjoAAECBAgQIJARMEwyUXiEAAECBAgQMEx0gAABAgQIEMgIGCaZKDxCgAABAgQIGCY6QIAAAQIECGQEDJNMFB4hQIAAAQIEDBMdIECAAAECBDIChkkmCo8QIECAAAEChokOECBAgAABAhkBwyQThUcIECBAgAABw0QHCBAgQIAAgYyAYZKJwiMECBAgQICAYaIDBAgQIECAQEbAMMlE4RECBAgQIEDAMNEBAgQIECBAICNgmGSi8AgBAgQIECBgmOgAAQIECBAgkBEwTDJReIQAAQIECBAwTHSAAAECBAgQyAgYJpkoPEKAAAECBAgYJjpAgAABAgQIZAQMk0wUHiFAgAABAgQMEx0gQIAAAQIEMgKGSSYKjxAgQIAAAQKGiQ4QIECAAAECGYEHBgK03pAPpjYAAAAASUVORK5CYII="){
		var demoTimeout;
		clearTimeout(demoTimeout);
		$('#firma-canvas').trigger('startRumble');
		$("#firma-canvas").css('border', '1px solid red'); 
		demoTimeout = setTimeout(function(){$('#firma-canvas').trigger('stopRumble');},1000);
		
	}
	else{
	
		var image = $("#firma-img");
		var image2 = $("#imagenpresenta")
		image.attr("src", canvas.toDataURL());
		var d = new Date();
		image.attr("name", "TEC_" + d.getTime() +".jpg");
		//image[0].name="TEC_" + d.getTime() +".jpg";
		//canvas2.removeAttr("src");
		image2.attr("src", canvas.toDataURL());
		image2.attr("name", image[0].name);
		$("#linkmodalopen").attr("class", "overlay");
		$("#nomfirma").text(image[0].name);
		$("#nomfirma").attr("disabled", "disabled");
		$("#Firma").modal('hide');
		
	}
}

function fncompaniamovil(){
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCatalogoTipo',
				data: JSON.stringify({ 'tipocatalogo':'1'}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						 $.each(data, function(i, item) {
							$("#lisCompaniaMovilnew").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
				},
				error: function (result) {  
					console.log("errror....companiamovil");  
				}   
			});
}

function fncargaNacionalidad(){
	
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCatalogoTipo',
				data: JSON.stringify({ 'tipocatalogo':'9'}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						//if(combo ==="" || combo===null){
						 $.each(data, function(i, item) {
							$("#lstNacionalidadnew").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
							$("#lisNacionalidadRef1new").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
							$("#lisNacionalidadRef2new").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
							$("#lisNacionalidadRef3new").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
						/*}else{
							.each(data, function(i, item) {
								$(combo).append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
						   $(combo + ' option[value="'+ tiponac +'"]').attr("selected","selected");
						}*/
				},
				error: function (result) {  
					console.log("errror....nacionalidad");  
				}   
			});
	
}

function fncargatipoidentificacion(){
	
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCatalogoTipo',
				data: JSON.stringify({ 'tipocatalogo':'2'}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						 $.each(data, function(i, item) {
							$("#txtTipIdentificacionnew").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
				},
				error: function (result) {  
					console.log("errror....tipoiden");  
				}   
			});
	
}

function fncargaEdocivil(){
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCatalogoTipo',
				data: JSON.stringify({ 'tipocatalogo':'3'}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						 $.each(data, function(i, item) {
							$("#lstEdoCivilnew").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
				},
				error: function (result) {  
					console.log("errror....edocivil");  
				}   
			});
	
}
function fnestatusrecidencia(){
	
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCatalogoTipo',
				data: JSON.stringify({ 'tipocatalogo':'4'}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						 $.each(data, function(i, item) {
							$("#lisEstatusResidencianew").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
				},
				error: function (result) {  
					console.log("errror....statusrecidencia");  
				}   
			});
	
}
function fntipocontrato(){
	
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCatalogoTipo',
				data: JSON.stringify({ 'tipocatalogo':'7'}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						 $.each(data, function(i, item) {
							$("#lisTipoContratonew").append('<option value="' + item.ID_CATALOGO + '">' + item.DESCRIPCION + '</option>');
						   });	
				},
				error: function (result) {  
					console.log("errror....tipocontrato");  
				}   
			});
	
}


function fncargaEdo(){//(combo, tipoedo, Delesol, colsoli){
	
	$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetallEstado',
				data: '{}',
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						//console.log('seguimiento - estado');
						data.sort();
						
						//if(combo ==="" || combo===null){
							$.each(data, function(i, item) {
							 
							$("#lisEstadoSolicitantenew").append('<option value="' + item.IDESTADO +'">' + item.ESTADO + '</option>');
							$("#lisEstadoEmpresanew").append('<option value="' + item.IDESTADO + '">' + item.ESTADO + '</option>');
							$("#lisEstadotem").append('<option value="' + item.IDESTADO +'">' + item.ESTADO + '</option>');
							

							//console.log( item.ESTADO);
						   });
						/*}
						else{
							.each(data, function(i, item) {
								$(combo).append('<option value="' + item.IDESTADO + '">' + item.ESTADO + '</option>');
						   });
						   $(combo + ' option[value="'+ tipoedo +'"]').attr("selected","selected");
							
						}*/
						 
						
						
						
				},
				error: function (result) {  
					console.log("errror....cargaestado");  
				}   
			});
}


function CalcularRFC(nombre,apellidoPaterno,apellidoMaterno,fecha) 
{ 
	console.log("hola RFC");
	
	nombre = nombre.toUpperCase().trim(); 
	apellidoPaterno =apellidoPaterno.toUpperCase().trim(); 
	apellidoMaterno =apellidoMaterno.toUpperCase().trim(); 

	//RFC que se regresarÃ¡ 
	var rfc=""; 

	//Quitamos los artÃ­culos de los apellidos 
	apellidoPaterno = QuitarArticulos(apellidoPaterno); 
	apellidoMaterno = QuitarArticulos(apellidoMaterno); 

	//Agregamos el primer caracter del apellido paterno 
	rfc = apellidoPaterno.substr(0,1);

	//Buscamos y agregamos al rfc la primera vocal del primer apellido 
	var len_apellidoPaterno=apellidoPaterno.length; 
	for(var x=1;x<len_apellidoPaterno;x++) 
	{ 
		c= apellidoPaterno.substr(x,1); 
		if (EsVocal(c)) 
		{ 
			rfc = rfc + c; 
			break; 
		} 
	} 

	//Agregamos el primer caracter del apellido materno 
	rfc = rfc + apellidoMaterno.substr(0, 1); 

	//Agregamos el primer caracter del primer nombre 
	rfc = rfc + nombre.substr(0, 1); 

	//agregamos la fecha ddmmyyyy
	rfc = rfc + fecha.substr(2, 2) + fecha.substr(5, 2) + fecha.substr(8, 2); 

	//Le agregamos la homoclave al rfc 
	rfc = CalcularHomoclave(apellidoPaterno + " " + apellidoMaterno +" "+ nombre, fecha,rfc); 
	return rfc; 
}

function QuitarArticulos(palabra) 
{	
	palabra= palabra.replace("DEL ",""); 
	palabra=palabra.replace("LAS ",""); 
	palabra=palabra.replace("DE ",""); 
	palabra=palabra.replace("LA ",""); 
	palabra=palabra.replace("Y ",""); 
	palabra=palabra.replace("A ",""); 
	return palabra; 
} 
function EsVocal(letra) 
{ 
	if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U' || 
	letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') 
	return 1; 
	else 
	return 0; 
} 


function CalcularHomoclave(nombreCompleto,fecha,rfc) 
{ 
	//Guardara el nombre en su correspondiente numÃ©rico 
	//agregamos un cero al inicio de la representaciÃ³n nÃºmerica del nombre 
	var nombreEnNumero="0"; 
	//La suma de la secuencia de nÃºmeros de nombreEnNumero 
	var valorSuma = 0; 

	
	var tablaRFC1 = [];
	var tablaRFC2 = [];
	var tablaRFC3 = [];

	tablaRFC1['&']='10'; 
	tablaRFC1['Ã‘']='10'; 
	tablaRFC1['A']='11'; 
	tablaRFC1['B']='12'; 
	tablaRFC1['C']='13'; 
	tablaRFC1['D']='14'; 
	tablaRFC1['E']='15'; 
	tablaRFC1['F']='16'; 
	tablaRFC1['G']='17'; 
	tablaRFC1['H']='18'; 
	tablaRFC1['I']='19'; 
	tablaRFC1['J']='21'; 
	tablaRFC1['K']='22'; 
	tablaRFC1['L']='23'; 
	tablaRFC1['M']='24'; 
	tablaRFC1['N']='25'; 
	tablaRFC1['O']='26'; 
	tablaRFC1['P']='27'; 
	tablaRFC1['Q']='28'; 
	tablaRFC1['R']='29'; 
	tablaRFC1['S']='32'; 
	tablaRFC1['T']='33'; 
	tablaRFC1['U']='34'; 
	tablaRFC1['V']='35'; 
	tablaRFC1['W']='36'; 
	tablaRFC1['X']='37'; 
	tablaRFC1['Y']='38'; 
	tablaRFC1['Z']='39'; 
	tablaRFC1['0']='00'; 
	tablaRFC1['1']='01'; 
	tablaRFC1['2']='02'; 
	tablaRFC1['3']='03'; 
	tablaRFC1['4']='04'; 
	tablaRFC1['5']='05'; 
	tablaRFC1['6']='06'; 
	tablaRFC1['7']='07'; 
	tablaRFC1['8']='08'; 
	tablaRFC1['9']='09'; 

	tablaRFC2[0]="1"; 
	tablaRFC2[1]="2"; 
	tablaRFC2[2]="3"; 
	tablaRFC2[3]="4"; 
	tablaRFC2[4]="5"; 
	tablaRFC2[5]="6"; 
	tablaRFC2[6]="7"; 
	tablaRFC2[7]="8"; 
	tablaRFC2[8]="9"; 
	tablaRFC2[9]="A"; 
	tablaRFC2[10]="B"; 
	tablaRFC2[11]="C"; 
	tablaRFC2[12]="D"; 
	tablaRFC2[13]="E"; 
	tablaRFC2[14]="F"; 
	tablaRFC2[15]="G"; 
	tablaRFC2[16]="H"; 
	tablaRFC2[17]="I"; 
	tablaRFC2[18]="J"; 
	tablaRFC2[19]="K"; 
	tablaRFC2[20]="L"; 
	tablaRFC2[21]="M"; 
	tablaRFC2[22]="N"; 
	tablaRFC2[23]="P"; 
	tablaRFC2[24]="Q"; 
	tablaRFC2[25]="R"; 
	tablaRFC2[26]="S"; 
	tablaRFC2[27]="T"; 
	tablaRFC2[28]="U"; 
	tablaRFC2[29]="V"; 
	tablaRFC2[30]="W"; 
	tablaRFC2[31]="X"; 
	tablaRFC2[32]="Y"; 
	tablaRFC2[33]="Z"; 

	tablaRFC3['A']=10; 
	tablaRFC3['B']=11; 
	tablaRFC3['C']=12; 
	tablaRFC3['D']=13; 
	tablaRFC3['E']=14; 
	tablaRFC3['F']=15; 
	tablaRFC3['G']=16; 
	tablaRFC3['H']=17; 
	tablaRFC3['I']=18; 
	tablaRFC3['J']=19; 
	tablaRFC3['K']=20; 
	tablaRFC3['L']=21; 
	tablaRFC3['M']=22; 
	tablaRFC3['N']=23; 
	tablaRFC3['O']=25; 
	tablaRFC3['P']=26; 
	tablaRFC3['Q']=27; 
	tablaRFC3['R']=28; 
	tablaRFC3['S']=29; 
	tablaRFC3['T']=30; 
	tablaRFC3['U']=31; 
	tablaRFC3['V']=32; 
	tablaRFC3['W']=33; 
	tablaRFC3['X']=34; 
	tablaRFC3['Y']=35; 
	tablaRFC3['Z']=36; 
	tablaRFC3['0']=0; 
	tablaRFC3['1']=1; 
	tablaRFC3['2']=2; 
	tablaRFC3['3']=3; 
	tablaRFC3['4']=4; 
	tablaRFC3['5']=5; 
	tablaRFC3['6']=6; 
	tablaRFC3['7']=7; 
	tablaRFC3['8']=8; 
	tablaRFC3['9']=9; 
	tablaRFC3['']=24; 
	tablaRFC3[' ']=37; 

	//Recorremos el nombre y vamos convirtiendo las letras en 
	//su valor numÃ©rico 
	len_nombreCompleto=nombreCompleto.length; 
	for(var x=0;x<len_nombreCompleto;x++) 
	{ 
		var c=nombreCompleto.substr(x,1); 
		if (tablaRFC1[c]) 
			nombreEnNumero= nombreEnNumero +tablaRFC1[c]; 
		else 
			nombreEnNumero= nombreEnNumero+"00"; 
	} 
	

	var n=nombreEnNumero.length-1; 
	for (var i = 0; i < n; i++) 
	{ 
		prod1 = nombreEnNumero.substr(i, 2); 
		prod2 = nombreEnNumero.substr(i + 1, 1); 
		valorSuma += prod1 * prod2; 
	} 
	
	var div = 0; 
	var mod = 0; 
	div = valorSuma % 1000; 
	mod = Math.floor(div / 34);//cociente 
	div = div - mod * 34;//residuo 

	var hc = tablaRFC2[mod]; 
	hc = hc + tablaRFC2[div]; 

	rfc = rfc + hc; 

	
	var sumaParcial = 0; 
	var n=rfc.length; 
	for (var i = 0; i < n; i++) 
	{ 
		c=rfc.substr(i,1); 
		if (tablaRFC3[c]) 
		{ 
			sumaParcial = sumaParcial +(tablaRFC3[c] * (14 - (i + 1))); 
		} 
	} 

	var moduloVerificador = sumaParcial % 11; 
	if (moduloVerificador == 0) 
		rfc = rfc + "0"; 
	else 
	{ 
		sumaParcial = 11 - moduloVerificador; 
		if (sumaParcial == 10) 
			rfc = rfc + "A"; 
		else 
			rfc = rfc + sumaParcial; 
	} 
	return rfc;
}

	function buscaCPemp( inpCP){
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCP',
				data: JSON.stringify({"CP":inpCP}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						var idest;
						var idpob;
						var cont= 0
						$('#lisColoniaEmpresanew').empty();
						$("#lisColoniaEmpresanew").append('<option value="0">Seleccione...</option>');
						$.each(data, function(i, item) {
                            if(item.CTECP.length== 4){
                                item.CTECP = "0" + item.CTECP;
                            }

							$("#lisColoniaEmpresanew").append('<option value="' + item.CTECP + '">' + item.COLONIA + '</option>');	
							idest = item.IDESTADO
							idpob = item.IDPOBLACION
						   });
						   
						   
						   $('#lisEstadoEmpresanew').empty();
						   $("#lisEstadotem option").each(function () {
							   $("#lisEstadoEmpresanew").append("<option value='" + this.value + "'>" + this.text + '</option>');
							   
							   });
							$("#lisEstadoEmpresanew option[value="+ idest +"]").attr("selected","selected");
						
						$.ajax({ 			
								type: 'POST',
								url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
								data: JSON.stringify({"idestado":idest}),
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								success: function(data){
										$.each(data, function(i, item) {
											$("#lisDelMuniEmpresanew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');	
										   });
										$("#lisDelMuniEmpresanew option[value="+ idpob +"]").attr("selected","selected");
										
										
										
								},
								error: function (result) {  
									console.log("errror....");  
								}   
							}); 
						
						
						
				},
				error: function (result) {  
					console.log("errror....");  
				} ,
				async: false  
			}); 
	}
	
	function buscaMunicipioemp(inpMuni){
		$('#lisColoniaEmpresanew').empty();
		$("#lisColoniaEmpresanew").append('<option value="0">Seleccione...</option>');
		$('#txtCpEmpresanew').val("");
		$('#lisDelMuniEmpresanew').empty();
		$("#lisDelMuniEmpresanew").append('<option value="0">Seleccione...</option>');
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
				data: JSON.stringify({"idestado":inpMuni}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
					var idest;
					var idpob;
					var cont= 0
					$.each(data, function(i, item) {
						$("#lisDelMuniEmpresanew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');	
					   });	
				},
				error: function (result) {  
					console.log("errror....");  
				}   
			}); 
	}
	
	
	function buscacoloniaemp(inppoblacion, inpoblaestado){
		
		$('#txtCpEmpresanew').val("");
		
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetColonia',
				data: JSON.stringify({"idpoblacion":inppoblacion, "idestado":inpoblaestado}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
					var dcodpos;
					var idpob;
					var cont= 0
					$.each(data, function(i, item) {
						$("#lisColoniaEmpresanew").append('<option value="' + item.CTECP + '">' + item.COLONIA + '</option>');	
						dcodpos =item.CTECP
					   });
					$('#txtCpEmpresanew').val(dcodpos);
				},
				error: function (result) {  
					console.log("errror....");  
				}   
			}); 
	}
	
	function buscaCP( inpCP){
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetCP',
				data: JSON.stringify({"CP":inpCP}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						var idest;
						var idpob;
						var cont= 0
						$('#lisColoniaSolicitantenew').empty();
						$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
						$.each(data, function(i, item) {
                            if(item.CTECP.length== 4){
                                item.CTECP = "0" + item.CTECP;
                            }
							$("#lisColoniaSolicitantenew").append('<option value="' + item.CTECP + '">' + item.COLONIA + '</option>');	
							idest = item.IDESTADO
							idpob = item.IDPOBLACION
						   });
						   
						   
						   //$("#lisEstadoSolicitantenew").empty();
						   //$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
						   //$("#lisEstadoSolicitantenew option:selected").removeAttr("selected");
						  $('#lisEstadoSolicitantenew').empty();
						   $("#lisEstadotem option").each(function () {
							   $("#lisEstadoSolicitantenew").append("<option value='" + this.value + "'>" + this.text + '</option>');
							   
							   });
							$("#lisEstadoSolicitantenew option[value="+ idest +"]").attr("selected","selected");
                            validariconlistas("#lisEstadoSolicitantenew");
						
						$.ajax({ 			
								type: 'POST',
								url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
								data: JSON.stringify({"idestado":idest}),
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								success: function(data){
										$.each(data, function(i, item) {
											$("#lisDelMuniSolicitantenew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');	
										   });
										$("#lisDelMuniSolicitantenew option[value="+ idpob +"]").attr("selected","selected");
                                        validariconlistas("#lisDelMuniSolicitantenew");
										
										
										
								},
								error: function (result) {  
									console.log("errror....");  
								}   
							}); 
						
						
						
				},
				error: function (result) {  
					console.log("errror....");  
				},
				async: false				
			}); 
	}
	
	function buscaMunicipio(inpMuni){
		$('#lisColoniaSolicitantenew').empty();
		$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
		$('#txtCpSolicitantenew').val("");
		$('#lisDelMuniSolicitantenew').empty();
		$("#lisDelMuniSolicitantenew").append('<option value="0">Seleccione...</option>');
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetMunicipio',
				data: JSON.stringify({"idestado":inpMuni}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
					var idest;
					var idpob;
					var cont= 0
					$.each(data, function(i, item) {
						$("#lisDelMuniSolicitantenew").append('<option value="' + item.IDPOBLACION + '">' + item.POBLACION + '</option>');	
					   });	
				},
				error: function (result) {  
					console.log("errror....");  
				}   
			}); 
	}
	
	
	function buscacolonia(inppoblacion, inpoblaestado){
		
		$('#txtCpSolicitantenew').val("");
		
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/AfiliaMaaS.ws/Service1.svc/GetColonia',
				data: JSON.stringify({"idpoblacion":inppoblacion, "idestado":inpoblaestado}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
					var dcodpos;
					var idpob;
					var cont= 0
					$.each(data, function(i, item) {
						$("#lisColoniaSolicitantenew").append('<option value="' + item.CTECP + '">' + item.COLONIA + '</option>');	
						dcodpos =item.CTECP
					   });
					$('#txtCpSolicitantenew').val("");
				},
				error: function (result) {  
					console.log("errror....");  
				}   
			}); 
	}
	
	function Generadatos(NoIDSol){
		console.log("abremodal de sol");
		
		var DOC_IF64; //= data.solicitudes[r].DOC_IF64;
		var DOC_IA64; //= data.solicitudes[r].DOC_IA64;
		var F164; //= data.solicitudes[r].F164;
		var DOC_C164; //= data.solicitudes[r].DOC_C164;
		var DOC_C264; //= data.solicitudes[r].DOC_C264;
		var E164; //= data.solicitudes[r].E164;
		var E264; //= data.solicitudes[r].E264;
		var E36; //= data.solicitudes[r].E364;
		var E464; //= data.solicitudes[r].E464;
		var E564; //= data.solicitudes[r].E564;
		
		
		var datosgrales = [];
		datosgrales = NoIDSol.value.split('|');
		console.log(JSON.stringify({"img":{"imagen":"","tipoDoc":"IF","idSolicitud": datosgrales[2].toString() ,"nameImg":""},"llave":{"idUsuario":datosgrales[5],"Token":datosgrales[6]}}));
		$.ajax({ 			
				type: 'POST',
				url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/GetImagenSol',
				//data: JSON.stringify({"Promotoria":"","RegPromotor":"","Compania":$("#Empresa").val(),"Formato":"","Usuario":$("#Usuario").val(),"Contrasenia":$("#Password").val(),"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"}),
				data: JSON.stringify({"idSolicitud": datosgrales[2].toString(),"llave":{"idUsuario":datosgrales[5],"Token":datosgrales[6]}}),
				contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function(data){
						console.log('Imagen IF');
						console.log(data);
						DOC_IF64 = data[0].DOC_IF64;
						DOC_C164 = data[0].DOC_C164;
						DOC_C264 = data[0].DOC_C264;
					    DOC_IA64 = data[0].DOC_IA64;
					    E164 = data[0].E164;
					    E264 = data[0].E264;
					    E364 = data[0].E364;
					    E464 = data[0].E464;
					    E564 = data[0].E564;
					    F164 = data[0].F164;
						$("#txttokenWS").val(data[0].Token);
						muestramodalSolirecrea(NoIDSol, DOC_IF64, DOC_IA64, F164, DOC_C164, DOC_C264, E164, E264, E36, E464, E564 )					
				},
				error: function (result) {  
					console.log("errror" + result);  
				},
				async: false   
			}); 
		
		
		
		
		
	}
	
	function muestramodalSolirecrea(NoIDSol, DOC_IF64, DOC_IA64, F164, DOC_C164, DOC_C264, E164, E264, E36, E464, E564 ){
		
		var datosgrales = [];
		datosgrales = NoIDSol.value.split('|');
		$('#mdlgralnombre').text("Solicitud ID: " + datosgrales[2].toString());
        $('#recreasolicitudinput').val("SI");


		var xml = datosgrales[7],
		xmlDoc = $.parseXML( xml ),
		//generales
		$Pnombre = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Pmrnombre"),null);
		$snombre = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Sdonombre"),null);
		$Apellidopaterno = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Apaterno"),null);
		$Apellidomaterno = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Amaterno"),null); 
		$Tpoidentif = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Tpoidentif"),0); 
		$Noidenficacion = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Noidenficacion"),0); 
		$Sexo = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Sexo"),null);
		$Fechanacdia = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Fechanacdia"),null); 
		$Rfc = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Rfc"),null); 
		$Edocivil = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Edocivil"),0); 
		$Nodependiente = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Nodependiente"),0); 
		$Cveperspol = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Cveperspol"),0); 
		$FechasnacMes = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("FechasnacMes"),0); 
		$FechanacAnio = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("FechanacAnio"),0); 
		var sexobool;
		if($Sexo =="FEMENINO"){
			$('#chksexosolicitante').prop('checked', true)
			}
		$Nacionalidad = validaexiste(xmlDoc.documentElement.getElementsByTagName("generales")[0].getElementsByTagName("Nacionalidad"),0); 
		
		//Llenado de combo Nacionalidad
		//fncargaNacionalidad($('#lstNacionalidadconsulsol' + r), $Nacionalidad);
		$fechanac = $FechanacAnio +"-"+ $FechasnacMes +"-"+ $Fechanacdia;

		//console.log($fechanac);
		$nomcompleto = $Pnombre + ' ' +  $Apellidopaterno + ' ' + $Apellidomaterno;
		  //console.log($nomcompleto);
		//doc
		$IdentificacionFrentePath = validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("IdentificacionFrentePath"),"INE(frente)");
		$IdentificacionAtrasPath= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("IdentificacionAtrasPath"),"INE(atras)"); 
		$Contrato1Path= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Contrato1Path"),"Contrato 1-2");
		$Contrato2Path= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Contrato2Path"),"Contrato 2-2");
		$FirmaPath= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("FirmaPath"),"Firma");
		$Extra1= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Extra1"),"Extra");
		$Extra2= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Extra2"),"Extra");
		$Extra3= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Extra3"),"Extra");
		$Extra4= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Extra4"),"Extra");
		$Extra5= validaexiste(xmlDoc.documentElement.getElementsByTagName("doc")[0].getElementsByTagName("Extra5"),"Extra");

        if($Extra1 == "................................................................"){
            $Extra1 = "Extra";
        }
        if($Extra2 == "................................................................"){
            $Extra2 = "Extra";
        }
        if($Extra3 == "................................................................"){
            $Extra3 = "Extra";
        }
        if($Extra4 == "................................................................"){
            $Extra4 = "Extra";
        }
        if($Extra5 == "................................................................"){
            $Extra5 = "Extra";
        }

		
		$('#txtNomSolicitantenew').val($Pnombre);
		$('#txtSegundonombrenew').val($snombre);
		$('#txtApePaternonew').val($Apellidopaterno);
		$('#txtApeMaternonew').val($Apellidomaterno);
		$("#txtTipIdentificacionnew option[value="+$Tpoidentif+"]").attr("selected","selected");
		$('#txtNumIdentificanew').val($Noidenficacion);
		
		
		$('#dateFechanacnew').val($fechanac);
		$('#txtRFCnew').val($Rfc);
		$("#lstEdoCivilnew option[value="+$Edocivil+"]").attr("selected","selected");
		$('#txtDependientesnew').val($Nodependiente);
		$('#dateFechanacnewdia').val($Fechanacdia);
		$('#dateFechanacnewmes').val($FechasnacMes);
		$('#dateFechanacnewanio').val($FechanacAnio);
		$("#lstNacionalidadnew option[value="+$Nacionalidad+"]").attr("selected","selected");
		$('#dateFechanacnewanio').val($FechanacAnio);
		

		$("#result_imagefin").attr("src",DOC_IF64);
		$("#result_imagefinmod").attr("src",DOC_IF64);
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#lnknombremodalINEFrente').attr("disabled","disabled");
		//$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefinatras").attr("src",DOC_IA64);
		$("#result_imagefinmodatras").attr("src",DOC_IA64);
		$('#lnknombremodalINEAtras').text($IdentificacionAtrasPath);
		$('#lnknombremodalINEAtras').attr("disabled","disabled");
		//$('#titulomodalfinINEAtras').text($IdentificacionAtrasPath);
		
		$("#imagenpresenta").attr("src",F164);
		$("#firma-img").attr("src",F164);
		$("#firma-img").removeAttr("class","hide");
		
		$("#DivdelaFirmaBorrar").css("display","none");
		$("#validarCliente").css("display","none");
		
		
		
		$("#firma-canvas").css("display","none");
		$("#linkmodalopen").attr("class", "overlay");
		$('#nomfirma').text($FirmaPath);
		$('#nomfirma').attr("disabled","disabled");

		if(E164){

			$("#imaextramodal").attr("src",E164);
			$("#result_imageextra").attr("src",E164);
			$('#titulomodalfin').text($Extra1);
			$("#linkmodalopenextra").attr("class", "overlay");
			$('#lblextra').text($Extra1);
			$('#lblextra').attr("disabled","disabled");

		}

		if(E264){

			$("#imaextramodal2").attr("src",E264);
			$("#result_imageextra2").attr("src",E264);
			$('#titulomodalfin2').text($Extra2);
			$("#linkmodalopenextra2").attr("class", "overlay");
			$('#lblextra2').text($Extra2);
			$('#lblextra2').attr("disabled","disabled");
			$('#Imagesextras2').show();
		}
		
		if(E364){

			$("#imaextramodal3").attr("src",E364);
			$("#result_imageextra3").attr("src",E364);
			$('#titulomodalfin3').text($Extra3);
			$("#linkmodalopenextra3").attr("class", "overlay");
			$('#lblextra3').text($Extra3);
			$('#lblextra3').attr("disabled","disabled");
			$('#Imagesextras3').show();
		}

		if(E464){

			$("#imaextramodal4").attr("src",E464);
			$("#result_imageextra4").attr("src",E464);
			$('#titulomodalfin4').text($Extra4);
			$("#linkmodalopenextra4").attr("class", "overlay");
			$('#lblextra4').text($Extra4);
			$('#lblextra4').attr("disabled","disabled");
			$('#Imagesextras4').show();
		}

		if(E564){

			$("#imaextramodal5").attr("src",E564);
			$("#result_imageextra5").attr("src",E564);
			$('#titulomodalfin5').text($Extra5);
			$("#linkmodalopenextra5").attr("class", "overlay");
			$('#lblextra5').text($Extra5);
			$('#lblextra5').attr("disabled","disabled");
			$('#Imagesextras5').show();
		}
		
		
		
		/*$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);*/
		
		
		
		//domiciliosolicitante
		$Calle= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Calle"),null);
		$NoInt= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("NoInt"),0);
		$NoExt= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("NoExt"),0);
		$Cpdom= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Cpdom"),null);
		$Estado= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Estado"),0);
		//fncargaEdo($('#lisEstadoSolicitanteconsulsol' + r), $Estado);
		$Delegacion= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Delegacion"),0);
		
		$('#txtCalleSolicitantenew').val($Calle);
		$('#txtNumInteriornew').val($NoInt);
		$('#txtNumExteriornew').val($NoExt);
		$('#txtCpSolicitantenew').val($Cpdom);
		buscaCP($Cpdom);
		$("#lisEstadoSolicitantenew option[value="+$Estado+"]").attr("selected","selected");
		$("#lisDelMuniSolicitantenew option[value="+$Delegacion+"]").attr("selected","selected");
		
		
		
		$Colonia= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Colonia"),0);
		$TiempoResidencia= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("TiempoResidencia"),0);
		$EstatusResidencia= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("EstatusResidencia"),0);
		$MontoVivienda= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("MontoVivienda"),"$ 0.00");
		$Email= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Email"),null);
		$Telcasa= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Telcasa"),null);
		$Telmovil= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("Telmovil"),null);
		$CompaniaMovil= validaexiste(xmlDoc.documentElement.getElementsByTagName("domicilio")[0].getElementsByTagName("CompaniaMovil"),0);
		
		//$("#lisColoniaSolicitantenew option[text="+$Colonia+"]").attr("selected","selected");
		
		$("#lisColoniaSolicitantenew option:contains('"+ $Colonia.replace("amp;aacute","á").replace("amp;eacute","é").replace("amp;íacute","í").replace("amp;oacute","ó").replace("amp;uacute","ú").replace("amp;Aacute","Á").replace("amp;Eacute","É").replace("amp;Iacute","Í").replace("amp;Oacute","Ó").replace("amp;Uacute","Ú") + "')").attr("selected",true);
		
		/*$("#lisColoniaSolicitantenew option").each(function () {
			
			
			if($("#lisColoniaSolicitantenew option").text == $Colonia){
				$("#lisColoniaSolicitantenew option").attr("selected","selected");
			}
		});*/
		$('#txtTiempoResidencianew').val($TiempoResidencia);
		$("#lisEstatusResidencianew option[value="+$EstatusResidencia+"]").attr("selected","selected");
		$('#txtMontoViviendanew').val($MontoVivienda);
		$('#txtCorreonew').val($Email);
		$('#txtTelefonoCasanew').val($Telcasa);
		$('#txtTelefonoCelularnew').val($Telmovil);
		$("#lisCompaniaMovilnew option[value="+$CompaniaMovil+"]").attr("selected","selected");
		
		
		
		
		//Personapolitica
		$TipoParentesco= validaexiste(xmlDoc.documentElement.getElementsByTagName("Personapolitica")[0].getElementsByTagName("TipoParentesco"),null);
		$Descfuncion= validaexiste(xmlDoc.documentElement.getElementsByTagName("Personapolitica")[0].getElementsByTagName("Descfuncion"),null);
		$Descparentesco= validaexiste(xmlDoc.documentElement.getElementsByTagName("Personapolitica")[0].getElementsByTagName("Descparentesco"),null);
		$TieneParentesco= validaexiste(xmlDoc.documentElement.getElementsByTagName("Personapolitica")[0].getElementsByTagName("TieneParentesco"),"NO");
		$EsPersonaPolitica= validaexiste(xmlDoc.documentElement.getElementsByTagName("Personapolitica")[0].getElementsByTagName("EsPersonaPolitica"),"NO");
		
		if($EsPersonaPolitica =="SI"){
			$('#optpersonapoliticonew').prop('checked', true);
            $('#rowfunciondesempeñasolnew').show();

			}
			
		if($TieneParentesco =="SI"){
			$('#optparenpoliticonew').prop('checked', true);
            $('#rowfunciondesempeñaparentescosolnew').show();
            $('#rowqueparentescosolnew').show();
		}
		
		$('#txfuncionpoliticoSolicitantenew').val($Descfuncion);
		$('#txparentescofuncionpoliticoSolicitantenew').val($Descparentesco);
		$('#txqueparenfuncionpoliticoSolicitantenew').val($TipoParentesco);


		//Ref1
		$Pmrnombreref1 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer")[0].getElementsByTagName("Pmrnombre"),null);
		$Sdonombreref1 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer")[0].getElementsByTagName("Sdonombre"),null);
		$Apaternoref1= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer")[0].getElementsByTagName("Apaterno"),null);
		$Amaternoref1= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer")[0].getElementsByTagName("Amaterno"),null);
		$Nacionalidadref1= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer")[0].getElementsByTagName("Nacionalidad"),0);
		$TelefonoCasaref1= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer")[0].getElementsByTagName("TelefonoCasa"),null);
		
		$('#txtNombreRef1new').val($Pmrnombreref1);
		$('#txtApellidoPaternoRef1new').val($Apaternoref1);
		$('#txtApellidoMaternoRef1new').val($Amaternoref1);
		$("#lisNacionalidadRef1new option[value="+$Nacionalidadref1+"]").attr("selected","selected");
		$('#txtTelCasaRef1new').val($TelefonoCasaref1);

		
		//Ref2
		$Pmrnombreref2 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer2")[0].getElementsByTagName("Pmrnombre"),null);
		$Sdonombreref2 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer2")[0].getElementsByTagName("Sdonombre"),null);
		$Apaternoref2= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer2")[0].getElementsByTagName("Apaterno"),null);
		$Amaternoref2= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer2")[0].getElementsByTagName("Amaterno"),null);
		$Nacionalidadref2= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer2")[0].getElementsByTagName("Nacionalidad"),0);
		$TelefonoCasaref2= validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer2")[0].getElementsByTagName("TelefonoCasa"),null);
		
		$('#txtNombreRef2new').val($Pmrnombreref2);
		$('#txtApellidoPaternoRef2new').val($Apaternoref2);
		$('#txtApellidoMaternoRef2new').val($Amaternoref2);
		$("#lisNacionalidadRef2new option[value="+$Nacionalidadref2+"]").attr("selected","selected");
		$('#txtTelCasaRef2new').val($TelefonoCasaref2);
		
		//Ref3
		$Pmrnombreref3 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer3")[0].getElementsByTagName("Pmrnombre"),null);
		$Sdonombreref3 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer3")[0].getElementsByTagName("Sdonombre"),null);
		$Apaternoref3 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer3")[0].getElementsByTagName("Apaterno"),null);
		$Amaternoref3 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer3")[0].getElementsByTagName("Amaterno"),null);
		$Nacionalidadref3 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer3")[0].getElementsByTagName("Nacionalidad"),0);
		$TelefonoCasaref3 = validaexiste(xmlDoc.documentElement.getElementsByTagName("Refer3")[0].getElementsByTagName("TelefonoCasa"),null);
		
		$('#txtNombreRef3new').val($Pmrnombreref3);
		$('#txtApellidoPaternoRef3new').val($Apaternoref3);
		$('#txtApellidoMaternoRef3new').val($Amaternoref3);
		$("#lisNacionalidadRef3new option[value="+$Nacionalidadref3+"]").attr("selected","selected");
		$('#txtTelCasaRef3new').val($TelefonoCasaref3);

		//Promotor
		$Compania= validaexiste(xmlDoc.documentElement.getElementsByTagName("Promotor")[0].getElementsByTagName("Compania"),0);
		$Usuario= validaexiste(xmlDoc.documentElement.getElementsByTagName("Promotor")[0].getElementsByTagName("Usuario"),null);
		$Contrasenia= validaexiste(xmlDoc.documentElement.getElementsByTagName("Promotor")[0].getElementsByTagName("Contrasenia"),null);
	  
		$FolioLocal= validaexiste(xmlDoc.documentElement.getElementsByTagName("FolioLocal"),null);
		$DiaCreacion= validaexiste(xmlDoc.documentElement.getElementsByTagName("DiaCreacion"),0);
		$MesCreacion= validaexiste(xmlDoc.documentElement.getElementsByTagName("MesCreacion"),0);
		$AnioCreacion= validaexiste(xmlDoc.documentElement.getElementsByTagName("AnioCreacion"),0);
	  
		//Deconominos
		$TipoContrato = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("TipoContrato"),null);
		$AntiguedadEmpleo = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("AntiguedadEmpleo"),0);
		$AniosCasada = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("AniosCasada"),0);
		$Ingresos = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Ingresos"),"$ 0.00");
		$NombreEmpresa = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("NombreEmpresa"),null);
		$GiroEmpresa = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("GiroEmpresa"),null);
		$Puesto = validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Puesto"),null);
		
		$("#lisTipoContratonew option[value="+$TipoContrato+"]").attr("selected","selected");
		$('#txtantiguedadnew').val(parseInt($AntiguedadEmpleo));
		$('#txtAosCasadonew').val(parseInt($AniosCasada));
		$("#txtIngresonew").val($Ingresos);
		$('#txtNombreEmpresanew').val($NombreEmpresa);
		$("#txtGironew").val($GiroEmpresa);
		$("#txtPuestonew").val($Puesto);
		
		//Deconominos -> Domicilio
		  $Calleemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Calle"),null);
		  $NoIntemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("NoInt"),null);
		  $NoExtemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("NoExt"),null);
		  $Cpdomemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Cpdom"),null);
		  $Estadoemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Estado"),0);
		  $Delegacionemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Delegacion"),0);
		  $Coloniaempresa= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Colonia"),0);
		  $TiempoResidenciaemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("TiempoResidencia"),0);
		  $EstatusResidenciaemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("EstatusResidencia"),0);
		  $MontoViviendaemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("MontoVivienda"),"$ 0.00");
		  $Telcasaemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Telcasa"),null);
		  $Telmovilemp= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("Domicilio")[0].getElementsByTagName("Telmovil"),null);

		$OtrosIngresos= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("OtrosIngresos"),"$ 0.00");
		$FuenteOtrosIngresos= validaexiste(xmlDoc.documentElement.getElementsByTagName("Deconominos")[0].getElementsByTagName("FuenteOtrosIngresos"),null);
		
		$("#txtCalleEmpresanew").val($Calleemp);
		$("#txtNumeroInteriorempnew").val($NoIntemp);
		$("#txtNumeroExteriorEmpresa").val($NoExtemp);
		$("#txtCpEmpresanew").val($Cpdomemp);
		buscaCPemp($Cpdomemp);
		$("#lisEstadoEmpresanew option[value="+$Estadoemp+"]").attr("selected","selected");
		$("#lisDelMuniEmpresanew option[value="+$Delegacionemp+"]").attr("selected","selected");
		
		
		$("#lisColoniaEmpresanew").find('option:contains("'+$Coloniaempresa.replace("amp;aacute","á").replace("amp;eacute","é").replace("amp;íacute","í").replace("amp;oacute","ó").replace("amp;uacute","ú").replace("amp;Aacute","Á").replace("amp;Eacute","É").replace("amp;Iacute","Í").replace("amp;Oacute","Ó").replace("amp;Uacute","Ú") +'")').attr("selected","selected");
		/*$("#lisColoniaEmpresanew option").each(function () {
			if($("#lisColoniaEmpresanew option").text == $Colonia){
				$("#lisColoniaEmpresanew option").attr("selected","selected");
			}
		});*/
		
		
		//$("#txtTiempoResidencianew").val($TiempoResidenciaemp);
		$("#txtTelOficinanew").val($Telcasaemp);
		$("#txtOtrosIngresosnew").val($OtrosIngresos);
		$("#txtFuenteOtrosIngrenew").val($FuenteOtrosIngresos);
		
		//disabled
		$('#txtNomSolicitantenew').attr("disabled","disabled");
		$('#txtSegundonombrenew').attr("disabled","disabled");
		$('#txtApePaternonew').attr("disabled","disabled");
		$('#txtApeMaternonew').attr("disabled","disabled");
		$('#chksexosolicitante').attr("disabled","disabled");
		$('#sldsexosoli').css("background-color","#e2dede");
		$('#sldpersopoli').css("background-color","#e2dede");
		$('#sldparentescopoli').css("background-color","#e2dede");


		
		
		$('.glyphicon-circle-arrow-up').attr("disabled",true);
		$('.glyphicon-circle-arrow-down').attr("disabled",true);
		$('#optpersonapoliticonew').attr("disabled","disabled");
		$('#optparenpoliticonew').attr("disabled","disabled");
		$("#txtTipIdentificacionnew").attr("disabled","disabled");
		$('#txtNumIdentificanew').attr("disabled","disabled");
		$('#dateFechanacnew').attr("disabled","disabled");
		$('#txtRFCnew').attr("disabled","disabled");
		$("#lstEdoCivilnew").attr("disabled","disabled");
		$('#txtDependientesnew').attr("disabled","disabled");
		$('#dateFechanacnewdia').attr("disabled","disabled");
		$('#dateFechanacnewmes').attr("disabled","disabled");
		$('#dateFechanacnewanio').attr("disabled","disabled");
		$("#lstNacionalidadnew").attr("disabled","disabled");
		$('#dateFechanacnewanio').attr("disabled","disabled");
		

		/*$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefinatras").attr("src",datosgrales[6].toString());
		$("#result_imagefinmodatras").attr("src",datosgrales[6].toString());
		$('#lnknombremodalINEAtras').text($IdentificacionAtrasPath);
		$('#titulomodalfinINEAtras').text($IdentificacionAtrasPath);
		
		$("#imagenpresenta").attr("src",datosgrales[7].toString());
		$("#firma-img").attr("src",datosgrales[7].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);*/
		
		$('#txtCalleSolicitantenew').attr("disabled","disabled");
		$('#txtNumInteriornew').attr("disabled","disabled");
		$('#txtNumExteriornew').attr("disabled","disabled");
		$('#txtCpSolicitantenew').attr("disabled","disabled");

		$("#lisEstadoSolicitantenew").attr("disabled","disabled");
		$("#lisDelMuniSolicitantenew").attr("disabled","disabled");
		
		$("#lisColoniaSolicitantenew").attr("disabled","disabled");
		$('#txtTiempoResidencianew').attr("disabled","disabled");
		$("#lisEstatusResidencianew").attr("disabled","disabled");
		$('#txtMontoViviendanew').attr("disabled","disabled");
		$('#txtCorreonew').attr("disabled","disabled");
		$('#txtTelefonoCasanew').attr("disabled","disabled");
		$('#txtTelefonoCelularnew').attr("disabled","disabled");
		$("#lisCompaniaMovilnew").attr("disabled","disabled");

		$('#txtNombreRef1new').attr("disabled","disabled");
		$('#txtApellidoPaternoRef1new').attr("disabled","disabled");
		$('#txtApellidoMaternoRef1new').attr("disabled","disabled");
		$("#lisNacionalidadRef1new").attr("disabled","disabled");
		$('#txtTelCasaRef1new').attr("disabled","disabled");

		$('#txtNombreRef2new').attr("disabled","disabled");
		$('#txtApellidoPaternoRef2new').attr("disabled","disabled");
		$('#txtApellidoMaternoRef2new').attr("disabled","disabled");
		$("#lisNacionalidadRef2new").attr("disabled","disabled");
		$('#txtTelCasaRef2new').attr("disabled","disabled");
		
		$('#txtNombreRef3new').attr("disabled","disabled");
		$('#txtApellidoPaternoRef3new').attr("disabled","disabled");
		$('#txtApellidoMaternoRef3new').attr("disabled","disabled");
		$("#lisNacionalidadRef3new").attr("disabled","disabled");
		$('#txtTelCasaRef3new').attr("disabled","disabled");

		$("#lisTipoContratonew").attr("disabled","disabled");
		$('#txtantiguedadnew').attr("disabled","disabled");
		$('#txtAosCasadonew').attr("disabled","disabled");
		$("#txtIngresonew").attr("disabled","disabled");
		$('#txtNombreEmpresanew').attr("disabled","disabled");
		$("#txtGironew").attr("disabled","disabled");
		$("#txtPuestonew").attr("disabled","disabled");
		
		
		$("#txtCalleEmpresanew").attr("disabled","disabled");
		$("#txtNumeroInteriorempnew").attr("disabled","disabled");
		$("#txtNumeroExteriorEmpresa").attr("disabled","disabled");
		$("#txtCpEmpresanew").attr("disabled","disabled");
		$("#lisEstadoEmpresanew").attr("disabled","disabled");
		$("#lisDelMuniEmpresanew").attr("disabled","disabled");
		$("#lisColoniaEmpresanew").attr("disabled","disabled");
		$("#txtantiguedadnew").attr("disabled","disabled");
		$("#txtTelOficinanew").attr("disabled","disabled");
		$("#txtOtrosIngresosnew").attr("disabled","disabled");
		$("#txtFuenteOtrosIngrenew").attr("disabled","disabled");
		
		
		
		/*DOC_IF64 = "data:image/jpeg;base64," + DOC_IF64;
								DOC_IA64 = "data:image/jpeg;base64," + DOC_IA64;
								F164 = "data:image/png;base64,"+F164;
								DOC_C164 = "data:image/jpeg;base64," + DOC_C164 
								DOC_C264*/
								
								
								
								
								//ubicación
								/*$Lattitude = validaexiste(xmlDoc.documentElement.getElementsByTagName("Lattitude"),null);
								$Longuitud = validaexiste(xmlDoc.documentElement.getElementsByTagName("Longuitud"),null);*/
		$('#DatGrales').modal();
		//$("#lisColoniaSolicitantenew option:contains('Benito Juárez (La Aurora)')").attr("selected",true);
	}
	
	function NuevaSolicitud(){

        $('#recreasolicitudinput').val("NO");

        $('#2b').modal('show');

		$('#mdlgralnombre').text("Nueva solicitud");
		$('#txtNomSolicitantenew').removeAttr("disabled");
		$('#txtSegundonombrenew').removeAttr("disabled");
		$('#txtApePaternonew').removeAttr("disabled");
		$('#txtApeMaternonew').removeAttr("disabled");
		$("#txtTipIdentificacionnew").removeAttr("disabled");
		$('#txtNumIdentificanew').removeAttr("disabled");
		$('#dateFechanacnew').removeAttr("disabled");
		$('#txtRFCnew').removeAttr("disabled");
		$("#lstEdoCivilnew").removeAttr("disabled");
		$('#txtDependientesnew').removeAttr("disabled");
		$('#dateFechanacnewdia').removeAttr("disabled");
		$('#dateFechanacnewmes').removeAttr("disabled");
		$('#dateFechanacnewanio').removeAttr("disabled");
		$("#lstNacionalidadnew").removeAttr("disabled");
		$('#dateFechanacnewanio').removeAttr("disabled");
		
		
		$("#firma-img").removeAttr("src");
		$("#firma-img").attr("class","hide");
		
		$("#DivdelaFirmaBorrar").css("display","");
        //$('#terminar').css("display", "");
		$("#validarCliente").css("display","");
		
		
		
		
		
		$("#firma-canvas").css("display","");
		$("#linkmodalopen").removeAttr("class", "overlay");
		$('#nomfirma').text("Agregar firma");
		$('#nomfirma').removeAttr("disabled");
		

		/*$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefinatras").attr("src",datosgrales[6].toString());
		$("#result_imagefinmodatras").attr("src",datosgrales[6].toString());
		$('#lnknombremodalINEAtras').text($IdentificacionAtrasPath);
		$('#titulomodalfinINEAtras').text($IdentificacionAtrasPath);
		
		$("#imagenpresenta").attr("src",datosgrales[7].toString());
		$("#firma-img").attr("src",datosgrales[7].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);*/
		
		$('#txtCalleSolicitantenew').removeAttr("disabled");
		$('#txtNumInteriornew').removeAttr("disabled");
		$('#txtNumExteriornew').removeAttr("disabled");
		$('#txtCpSolicitantenew').removeAttr("disabled");

		$("#lisEstadoSolicitantenew").removeAttr("disabled");
		$("#lisDelMuniSolicitantenew").removeAttr("disabled");
		
		$('.glyphicon-circle-arrow-up').removeAttr("disabled");
		$('.glyphicon-circle-arrow-down').removeAttr("disabled");
		
		$("#lisColoniaSolicitantenew").removeAttr("disabled");
		$('#txtTiempoResidencianew').removeAttr("disabled");
		$("#lisEstatusResidencianew").removeAttr("disabled");
		$('#txtMontoViviendanew').removeAttr("disabled");
		$('#txtCorreonew').removeAttr("disabled");
		$('#txtTelefonoCasanew').removeAttr("disabled");
		$('#txtTelefonoCelularnew').removeAttr("disabled");
		$("#lisCompaniaMovilnew").removeAttr("disabled");

		$('#txtNombreRef1new').removeAttr("disabled");
		$('#txtApellidoPaternoRef1new').removeAttr("disabled");
		$('#txtApellidoMaternoRef1new').removeAttr("disabled");
		$("#lisNacionalidadRef1new").removeAttr("disabled");
		$('#txtTelCasaRef1new').removeAttr("disabled");

		$('#txtNombreRef2new').removeAttr("disabled");
		$('#txtApellidoPaternoRef2new').removeAttr("disabled");
		$('#txtApellidoMaternoRef2new').removeAttr("disabled");
		$("#lisNacionalidadRef2new").removeAttr("disabled");
		$('#txtTelCasaRef2new').removeAttr("disabled");
		
		$('#txtNombreRef3new').removeAttr("disabled");
		$('#txtApellidoPaternoRef3new').removeAttr("disabled");
		$('#txtApellidoMaternoRef3new').removeAttr("disabled");
		$("#lisNacionalidadRef3new").removeAttr("disabled");
		$('#txtTelCasaRef3new').removeAttr("disabled");

		$("#lisTipoContratonew").removeAttr("disabled");
		$('#txtantiguedadnew').removeAttr("disabled");
		$('#txtAosCasadonew').removeAttr("disabled");
		$("#txtIngresonew").removeAttr("disabled");
		$('#txtNombreEmpresanew').removeAttr("disabled");
		$("#txtGironew").removeAttr("disabled");
		$("#txtPuestonew").removeAttr("disabled");
		
		
		$("#txtCalleEmpresanew").removeAttr("disabled");
		$("#txtNumeroInteriorempnew").removeAttr("disabled");
		$("#txtNumeroExteriorEmpresa").removeAttr("disabled");
		$("#txtCpEmpresanew").removeAttr("disabled");
		$("#lisEstadoEmpresanew").removeAttr("disabled");
		$("#lisDelMuniEmpresanew").removeAttr("disabled");
		$("#lisColoniaEmpresanew").removeAttr("disabled");
		//$("#txtantiguedadnew").removeAttr("disabled");
		$("#txtTelOficinanew").removeAttr("disabled");
		$("#txtOtrosIngresosnew").removeAttr("disabled");
		$("#txtFuenteOtrosIngrenew").removeAttr("disabled");
		$('#chksexosolicitante').removeAttr("disabled");
		$('#sldsexosoli').css("background-color","#2196f3");
		$('#optpersonapoliticonew').removeAttr("disabled");
		$('#sldpersopoli').css("background-color","#2196f3");

        //$('#terminar').removeAttr("disabled");
		
		$('#optparenpoliticonew').removeAttr("disabled");
		$('#sldparentescopoli').css("background-color","#2196f3");

        document.getElementById("btnsiguiente").tabIndex = "13";
		reseteavalores();
		
	}
	
	function validaexiste(campo, tipocampo)
	{
		if(campo.length > 0){
			if(!campo[0].textContent)
			{
				return tipocampo; //alert("the string is null or empty");
			}
			else{
				return campo[0].textContent;
			}
		}else{
			return tipocampo;
		}
		
	}
	
	function validaexisteocr(campo, tipocampo)
	{
		if(!campo)
		{
			return tipocampo; //alert("the string is null or empty");
		}
		else{
			return campo;
		}
		
	}
	
	
	
	function reseteavalores(){
		$('#txtNomSolicitantenew').val();
        $('#txtNomSolicitantenew').focus();
		$('#txtSegundonombrenew').val();
		$('#txtApePaternonew').val();
		$('#txtApeMaternonew').val();
		$("#txtTipIdentificacionnew").empty();
		$("#txtTipIdentificacionnew").append('<option value="0">Seleccione...</option>');
		
		
		$('#txtNumIdentificanew').val();
		$('#dateFechanacnew').val();
		$('#txtRFCnew').val();
		$("#lstEdoCivilnew").empty();
		$("#lstEdoCivilnew").append('<option value="0">Seleccione...</option>');
		$('#txtDependientesnew').val("0");
		$('#dateFechanacnewdia').val();
		$('#dateFechanacnewmes').val();
		$('#dateFechanacnewanio').val();
		$("#lstNacionalidadnew").empty();
		$("#lstNacionalidadnew").append('<option value="0">Seleccione...</option>');
		$('#dateFechanacnewanio').val();
		

		/*$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefinatras").attr("src",datosgrales[6].toString());
		$("#result_imagefinmodatras").attr("src",datosgrales[6].toString());
		$('#lnknombremodalINEAtras').text($IdentificacionAtrasPath);
		$('#titulomodalfinINEAtras').text($IdentificacionAtrasPath);*/
		
		$("#imagenpresenta").attr("src","images/fondo.jpg");
		//$("#firma-img").attr("src",null);
		$('#lnknombremodalINEFrente').text();
		$('#titulomodalfinINEFrente').text();


        $("#imaextramodal").attr("src","images/fondo.jpg");
        $("#result_imageextra").attr("src",null);
        $('#titulomodalfin').text("Extra");
        $("#linkmodalopenextra").removeClass("overlay");
        $('#lblextra').text("Extra");
        $('#lblextra').attr("disabled",false);


        $("#imaextramodal2").attr("src","images/fondo.jpg");
        $("#result_imageextra2").attr("src",null);
        $('#titulomodalfin2').text("Extra");
        $("#linkmodalopenextra2").removeClass("overlay");
        $('#lblextra2').text("Extra");
        $('#lblextra2').attr("disabled",false);
        $('#Imagesextras2').hide();

        $("#imaextramodal3").attr("src","images/fondo.jpg");
        $("#result_imageextra3").attr("src",null);
        $('#titulomodalfin3').text("Extra");
        $("#linkmodalopenextra3").removeClass("overlay");
        $('#lblextra3').text("Extra");
        $('#lblextra3').attr("disabled",false);
        $('#Imagesextras3').hide();

        $("#imaextramodal4").attr("src","images/fondo.jpg");
        $("#result_imageextra4").attr("src",null);
        $('#titulomodalfin4').text("Extra");
        $("#linkmodalopenextra4").removeClass("overlay");
        $('#lblextra4').text("Extra");
        $('#lblextra4').attr("disabled",false);
        $('#Imagesextras4').hide();

        $("#imaextramodal5").attr("src","images/fondo.jpg");
        $("#result_imageextra5").attr("src",null);
        $('#titulomodalfin5').text("Extra");
        $("#linkmodalopenextra5").removeClass("overlay");
        $('#lblextra5').text("Extra");
        $('#lblextra5').attr("disabled",false);
        $('#Imagesextras5').hide();

		
		/*$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);
		
		$("#result_imagefin").attr("src",datosgrales[5].toString());
		$("#result_imagefinmod").attr("src",datosgrales[5].toString());
		$('#lnknombremodalINEFrente').text($IdentificacionFrentePath);
		$('#titulomodalfinINEFrente').text($IdentificacionFrentePath);*/
		
		$('#txtCalleSolicitantenew').val();
		$('#txtNumInteriornew').val(null);
		$('#txtNumExteriornew').val(null);
		$('#txtCpSolicitantenew').val(null);

		$("#lisEstadoSolicitantenew").empty();
		$("#lisEstadoSolicitantenew").append('<option value="0">Seleccione...</option>');
		$("#lisDelMuniSolicitantenew").empty();
		$("#lisDelMuniSolicitantenew").append('<option value="0">Seleccione...</option>');
		
		$("#lisColoniaSolicitantenew").empty();
		$("#lisColoniaSolicitantenew").append('<option value="0">Seleccione...</option>');
		
		$('#txtTiempoResidencianew').val("0");
		$("#lisEstatusResidencianew").empty();
		$("#lisEstatusResidencianew").append('<option value="0">Seleccione...</option>');
		$('#txtMontoViviendanew').val("$ 0.00");
		$('#txtCorreonew').val(null);
		$('#txtTelefonoCasanew').val(null);
		$('#txtTelefonoCelularnew').val(null);
		$("#lisCompaniaMovilnew").empty();
		$("#lisCompaniaMovilnew").append('<option value="0">Seleccione...</option>');

		$('#txtNombreRef1new').val(null);
		$('#txtApellidoPaternoRef1new').val(null);
		$('#txtApellidoMaternoRef1new').val(null);
		$("#lisNacionalidadRef1new").empty();
		$("#lisNacionalidadRef1new").append('<option value="0">Seleccione...</option>');
		$('#txtTelCasaRef1new').val(null);

		$('#txtNombreRef2new').val(null);
		$('#txtApellidoPaternoRef2new').val(null);
		$('#txtApellidoMaternoRef2new').val(null);
		$("#lisNacionalidadRef2new").empty();
		$("#lisNacionalidadRef2new").append('<option value="0">Seleccione...</option>');
		$('#txtTelCasaRef2new').val(null);
		
		$('#txtNombreRef3new').val(null);
		$('#txtApellidoPaternoRef3new').val(null);
		$('#txtApellidoMaternoRef3new').val(null);
		$("#lisNacionalidadRef3new").empty();
		$("#lisNacionalidadRef3new").append('<option value="0">Seleccione...</option>');
		$('#txtTelCasaRef3new').val(null);

		$("#lisTipoContratonew").empty();
		$("#lisTipoContratonew").append('<option value="0">Seleccione...</option>');
		$('#txtantiguedadnew').val("0");
		$('#txtAosCasadonew').val("0");
		$("#txtIngresonew").val("$ 0.00");
		$('#txtNombreEmpresanew').val(null);
		$("#txtGironew").val(null);
		$("#txtPuestonew").val(null);
		
		
		$("#txtCalleEmpresanew").val(null);
		$("#txtNumeroInteriorempnew").val(null);
		$("#txtNumeroExteriorEmpresa").val(null);
		$("#txtCpEmpresanew").val(null);
		$("#lisEstadoEmpresanew").empty();
		$("#lisEstadoEmpresanew").append('<option value="0">Seleccione...</option>');
		$("#lisDelMuniEmpresanew").empty();
		$("#lisDelMuniEmpresanew").append('<option value="0">Seleccione...</option>');
		$("#lisColoniaEmpresanew").empty();
		$("#lisColoniaEmpresanew").append('<option value="0">Seleccione...</option>');
		$("#txtantiguedadnew").val("0");
		$("#txtTelOficinanew").val(null);
		$("#txtOtrosIngresosnew").val("$ 0.00");
		$("#txtFuenteOtrosIngrenew").val(null);
		$("#btnifeok").prop( "disabled", false );
		$("#btnifeok").fadeOut();
		
		
		
		fncargatipoidentificacion();
		fncargaNacionalidad();
		fncargaEdocivil();
		fncargaEdo();
		fnestatusrecidencia();
		fncompaniamovil();
		fntipocontrato();
	}
	
function validalistas(lista)
{
	if($(lista).val() != '0' )
	{
		return 1;
	}else{
		return 0;
		
	}
	
	return 
}

function validatext(txtcontrol)
{
	if($(txtcontrol).val() != '' && $(txtcontrol).val().length >= 1)
	{
		return 1;
	}else{
		return 0;
		
	}
}


function validatextcorreo(txtcontrol)
{
    var texto=$(txtcontrol).val();
    var reg=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(texto)) {
        return 1;

    } else {
        return 0;
    }
}


function validatextCP(CP)
{
	if($(CP).val() != '' && $(CP).val().length == 5)
	{
		return 1;
	}else{
		return 0;
		
	}
}

function validamontos(txtmonto)
{
	
	if(parseInt($(txtmonto).val().replace('$ ', '')) > 0 )
	{
		return 1;
	}else{
		return 0;
		
	}
}

function validafechas(fecha){
	
	if($('#dateFechanacnew')[0].value != '' )
	{
		return 1;
	}else{
		return 0;
		
	}
	
}

function validaspiners(txtespiner)
{
	if(parseInt($(txtespiner).val()) > 0 )
	{
		return 1;
	}else{
		return 0;
		
	}
}

function validatelefono(txttelfono)
{
	if(parseInt($(txttelfono).val().replace('(', '').replace(')', '').replace(' ', '')) > 0 )
	{
		return 1;
	}else{
		return 0;
		
	}
}

function enablecontroles(controles){
	$(controles).css('border', 'none');
	$(controles).css('border-bottom', '2px solid #cecfd3'); 
}

function enablecontrolesicon(controles){
	
	var nombrecladiv = "#" + $(controles)[0].id + "div";
    var nombreclaspan = "#" + $(controles)[0].id + "span";
    $(nombreclaspan).removeClass('glyphicon glyphicon-remove form-control-feedback').removeClass('glyphicon glyphicon-warning-sign form-control-feedback').removeClass('glyphicon glyphicon-ok form-control-feedback');
    $(nombrecladiv).removeClass('form-group has-error has-feedback').removeClass('form-group has-warning has-feedback').removeClass('form-group has-success has-feedback');
	
}

function enablecontrolesiconspin(controles){
	
	var nombrecladiv = "#" + $(controles)[0].element[0].id + "div";
			var nombreclaspan = "#" + $(controles)[0].element[0].id + "span";
			$(nombreclaspan).removeClass('glyphicon glyphicon-remove form-control-feedback').removeClass('glyphicon glyphicon-warning-sign form-control-feedback').removeClass('glyphicon glyphicon-ok form-control-feedback');
			$(nombrecladiv).removeClass('form-group has-error has-feedback').removeClass('form-group has-warning has-feedback').removeClass('form-group has-success has-feedback');
	
}


function validaricontxt(txt){

                  var valororigi = $(txt).val();
    var posicion = valororigi.indexOf(' ');
    if (posicion == 0){
            $(txt).val(null);

    }else{
              $(txt).val(valororigi);
	
		if($(txt).val().length == 0){
			var nombrecladiv = "#" + $(txt)[0].id + "div";
			var nombreclaspan = "#" + $(txt)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
            $(txt).val($(txt).val());
			
		}else if($(txt).val().length > 0 && $(txt).val().length < 1){
			var nombrecladiv = "#" + $(txt)[0].id + "div";
			var nombreclaspan = "#" + $(txt)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-warning has-feedback');
            $(txt).val($(txt).val());
			
		}else if($(txt).val().length > 0 && $(txt).val().length >= 1){
			var nombrecladiv = "#" + $(txt)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(txt)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
            $(txt).val($(txt).val());
		}
    }
	
}



function validariconcorreo(correoctl){

    var texto=$(correoctl).val();
    var reg=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(texto == ''){
        var nombrecladiv = "#" + $(correoctl)[0].id + "div";
        var nombreclaspan = "#" + $(correoctl)[0].id + "span";
        $(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
        $(nombrecladiv).attr('class', 'form-group has-error has-feedback');
        $(correoctl).val()
    }else if(reg.test(texto)) {
        var nombrecladiv = "#" + $(correoctl)[0].id + "div";
        $(nombrecladiv).attr('class', 'form-group has-success has-feedback');
        var nombreclaspan = "#" + $(correoctl)[0].id + "span";
        $(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
    } else {
        var nombrecladiv = "#" + $(correoctl)[0].id + "div";
        var nombreclaspan = "#" + $(correoctl)[0].id + "span";
        $(nombreclaspan).attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
        $(nombrecladiv).attr('class', 'form-group has-warning has-feedback');
    }
}

function validariconlistas(lista){
	
	if(parseInt($(lista).val()) == 0){
			var nombrecladiv = "#" + $(lista)[0].id + "div";
			var nombreclaspan = "#" + $(lista)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		}else{
			var nombrecladiv = "#" + $(lista)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(lista)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
		}
	
}

function validariconfecha(fecha){
	
	if($(fecha)[0].value == ''){
			var nombrecladiv = "#" + $(fecha)[0].id + "div";
			var nombreclaspan = "#" + $(fecha)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		}else{
			var nombrecladiv = "#" + $(fecha)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(fecha)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
		}
	
}

function validariconmonto(monto){	
	if(parseInt($(monto).val().replace('$ ', '')) == 0){
		//$(monto).val('$ 0.00');
			var nombrecladiv = "#" + $(monto)[0].id + "div";
			var nombreclaspan = "#" + $(monto)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		}else if(parseInt($(monto).val().replace('$ ', '')) > 0 && parseInt($(monto).val().replace('$ ', '').length) <= 2) {
			var nombrecladiv = "#" + $(monto)[0].id + "div";
			var nombreclaspan = "#" + $(monto)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-warning has-feedback');
			
		}else{
			var nombrecladiv = "#" + $(monto)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(monto)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
		}
	
	
}

function validaricontelefonos(telefono){
	
	var valortelefono = $(telefono).val();

    valortelefono = replaceAll(valortelefono, "_", "" );
    valortelefono = replaceAll(valortelefono, "(", "" );
    valortelefono = replaceAll(valortelefono, ")", "" );
    valortelefono = replaceAll(valortelefono, " ", "" );
    valortelefono = valortelefono.trim();
	//var valorfinal = $(valortelefono).unmask();

	//if($(telefono).val().replace('(', '').replace(')', '').replace(' ', '').length == 0 ){
    if(valortelefono.length == 0 ){
            $("#lbltelefonosdiferentes").css('display', 'none');
			var nombrecladiv = "#" + $(telefono)[0].id + "div";
			var nombreclaspan = "#" + $(telefono)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		//}else if(($(telefono).val().replace('(', '').replace(')', '').replace(' ', '').length > 0) && ($(telefono).val().replace('(',
        //'').replace(')', '').replace(' ', '').length < 10)){
    }else if(valortelefono.length < 10){
        $("#lbltelefonosdiferentes").css('display', 'none');
        var nombrecladiv = "#" + $(telefono)[0].id + "div";
        var nombreclaspan = "#" + $(telefono)[0].id + "span";
        $(nombreclaspan).attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
		$(nombrecladiv).attr('class', 'form-group has-warning has-feedback');
			
    }
    else if(valortelefono.length == 10 ){

        if(telefono == "#txtTelefonoCelularnew"){

            if($("#txtTelefonoCasanew").val() == $("#txtTelefonoCelularnew").val()){
                /*$("#txtTelefonoCasanewspan").attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
                $("#txtTelefonoCasanewdiv").attr('class', 'form-group has-warning has-feedback');*/

                $("#txtTelefonoCelularnewspan").attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
                $("#txtTelefonoCelularnewdiv").attr('class', 'form-group has-warning has-feedback');

                var nomcompleto = 'Los teléfonos de casa y celular deben ser diferentes.';
                $('#lbltelefonosdiferentes').text(nomcompleto);

                /*var demoTimeout7;

                clearTimeout(demoTimeout7);
                //$("#txtTelefonoCasanewspan").css('display', 'inline');
                $('#txtTelefonoCasanew').trigger('startRumble');
                //$("#lblreferenciassolicitante").css('color', 'red');
                demoTimeout7 = setTimeout(function(){$('#txtTelefonoCasanew').trigger('stopRumble')},1000);*/

                var demoTimeout2;

                clearTimeout(demoTimeout2);
                //$("#txtTelefonoCasanewspan").css('display', 'inline');
                $('#txtTelefonoCelularnew').trigger('startRumble');
                //$("#lblreferenciassolicitante").css('color', 'red');
                demoTimeout2 = setTimeout(function(){$('#txtTelefonoCelularnew').trigger('stopRumble')},1000);


                var demoTimeout4;

                        clearTimeout(demoTimeout4);
                        $("#lbltelefonosdiferentes").css('display', 'inline');
                        $('#lbltelefonosdiferentes').trigger('startRumble');
                        $("#lbltelefonosdiferentes").css('color', 'red');
                        demoTimeout4 = setTimeout(function(){$('#lbltelefonosdiferentes').trigger('stopRumble')},1000);

            }else
                {
                     //var nombrecladiv = "#txtTelefonoCelularnewdiv";
			         $("#txtTelefonoCelularnewdiv").attr('class', 'form-group has-success has-feedback');
                     var nombreclaspan = "#txtTelefonoCelularnewspan";
                     $(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');

                }

        }
        else
        {

			var nombrecladiv = "#" + $(telefono)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(telefono)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
        }



		}
	
	
}

function validariconspiner(txtespiner){
	
	if(parseInt($(txtespiner).val()) == 0 ){
			var nombrecladiv = "#" + $(txtespiner)[0].id + "div";
			var nombreclaspan = "#" + $(txtespiner)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		}else if(parseInt($(txtespiner).val()) > 0 ){
			var nombrecladiv = "#" + $(txtespiner)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(txtespiner)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
		}
	
}

function validariconspinereditjs(txtespiner){
	
	if(parseInt($(txtespiner)[0].element[0].value) == 0 ){
			var nombrecladiv = "#" + $(txtespiner)[0].element[0].id + "div";
			var nombreclaspan = "#" + $(txtespiner)[0].element[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		}else if(parseInt($(txtespiner)[0].element[0].value) > 0 ){
			var nombrecladiv = "#" + $(txtespiner)[0].element[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(txtespiner)[0].element[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
		}
	
}

function validariconCP(CP){
	
	if($(CP).val().length == 0){
			var nombrecladiv = "#" + $(CP)[0].id + "div";
			var nombreclaspan = "#" + $(CP)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-remove form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-error has-feedback');
			
		}else if($(CP).val().length > 0 && $(CP).val().length < 4) {
			var nombrecladiv = "#" + $(CP)[0].id + "div";
			var nombreclaspan = "#" + $(CP)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
			$(nombrecladiv).attr('class', 'form-group has-warning has-feedback');
			
		}else if($(CP).val().length == 5) {
			var nombrecladiv = "#" + $(CP)[0].id + "div";
			$(nombrecladiv).attr('class', 'form-group has-success has-feedback');
			var nombreclaspan = "#" + $(CP)[0].id + "span";
			$(nombreclaspan).attr('class', 'glyphicon glyphicon-ok form-control-feedback');
		}
}

function navegasliderheader(headlink, step){
	switch(step) {
		case 1:
		
			$('#rowvalida2').addClass('rowvalida2').removeClass('rowiniciostepactivo2');
			$('#rowvalida3').addClass('rowvalida3').removeClass('rowiniciostepactivo3');
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6');
			
			break;
		case 2:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowvalida3').removeClass('rowiniciostepactivo3');
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6');
			break;
		case 3:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6');
			break;
		case 4:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6');
			break;
		case 5:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4');
			$('#rowvalida5').addClass('rowiniciostepactivo5').removeClass('rowvalida5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6');
			break;
		case 6:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4');
			$('#rowvalida5').addClass('rowiniciostepactivo5').removeClass('rowvalida5');
			$('#rowvalida6').addClass('rowiniciostepactivo6').removeClass('rowvalida6');
			break;
		default:
			break;
	}
	
}

function navegasliderheaderlibre(headlink, step){
	switch(step) {
		case 1:
		
			$('#rowvalida2').addClass('rowvalida2').removeClass('rowiniciostepactivo2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowvalida3').removeClass('rowiniciostepactivo3').removeClass('rowiniciostepactivosuccess3');
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4').removeClass('rowiniciostepactivosuccess4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');
			/*$('#titulostep').css('color','#96c03d');
			$('#titulostep2').css('color','#2c3f4c');
			$('#titulostep3').css('color','#2c3f4c');
			$('#titulostep4').css('color','#2c3f4c');
			$('#titulostep5').css('color','#2c3f4c');
			$('#titulostep6').css('color','#2c3f4c');
			$('#titulostep').css('color','#96c03d');*/

            if($('#titulostep').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
            }
            if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep2').css('color','#2c3f4c');
            }
            if($('#titulostep3').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep3').css('color','#2c3f4c');
            }
            if($('#titulostep4').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep4').css('color','#2c3f4c');
            }
            if($('#titulostep5').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep5').css('color','#2c3f4c');
            }
            if($('#titulostep6').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep6').css('color','#2c3f4c');
            }
			
			break;
		case 2:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowvalida3').removeClass('rowiniciostepactivo3').removeClass('rowiniciostepactivosuccess3');
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4').removeClass('rowiniciostepactivosuccess4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');
			/*$('#titulostep').css('color','#96c03d');
			$('#titulostep2').css('color','#96c03d');
			$('#titulostep3').css('color','#2c3f4c');
			$('#titulostep4').css('color','#2c3f4c');
			$('#titulostep5').css('color','#2c3f4c');
			$('#titulostep6').css('color','#2c3f4c');*/
            if($('#titulostep').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
            }
            if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep2').css('color','#96c03d');
            }
            if($('#titulostep3').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep3').css('color','#2c3f4c');
            }
            if($('#titulostep4').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep4').css('color','#2c3f4c');
            }
            if($('#titulostep5').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep5').css('color','#2c3f4c');
            }
            if($('#titulostep6').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep6').css('color','#2c3f4c');
            }

			break;
		case 3:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3').removeClass('rowiniciostepactivosuccess3');
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4').removeClass('rowiniciostepactivosuccess4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');
			/*$('#titulostep').css('color','#96c03d');
			$('#titulostep2').css('color','#96c03d');
			$('#titulostep3').css('color','#96c03d');
			$('#titulostep4').css('color','#2c3f4c');
			$('#titulostep5').css('color','#2c3f4c');
			$('#titulostep6').css('color','#2c3f4c');*/

            if($('#titulostep').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
            }
            if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep2').css('color','#96c03d');
            }
            if($('#titulostep3').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep3').css('color','#96c03d');
            }
            if($('#titulostep4').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep4').css('color','#2c3f4c');
            }
            if($('#titulostep5').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep5').css('color','#2c3f4c');
            }
            if($('#titulostep6').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep6').css('color','#2c3f4c');
            }
			break;
		case 4:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3').removeClass('rowiniciostepactivosuccess3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4').removeClass('rowiniciostepactivosuccess4');
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');
			/*$('#titulostep').css('color','#96c03d');
			$('#titulostep2').css('color','#96c03d');
			$('#titulostep3').css('color','#96c03d');
			$('#titulostep4').css('color','#96c03d');
			$('#titulostep5').css('color','#2c3f4c');
			$('#titulostep6').css('color','#2c3f4c');*/

            if($('#titulostep').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
            }
            if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep2').css('color','#96c03d');
            }
            if($('#titulostep3').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep3').css('color','#96c03d');
            }
            if($('#titulostep4').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep4').css('color','#96c03d');
            }
            if($('#titulostep5').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep5').css('color','#2c3f4c');
            }
            if($('#titulostep6').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep6').css('color','#2c3f4c');
            }
			break;
		case 5:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3').removeClass('rowiniciostepactivosuccess3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4').removeClass('rowiniciostepactivosuccess4');
			$('#rowvalida5').addClass('rowiniciostepactivo5').removeClass('rowvalida5').removeClass('rowiniciostepactivosuccess5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');

            /*if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
                $('#titulostep2').css('color','#96c03d');
                $('#titulostep3').css('color','#96c03d');
                $('#titulostep4').css('color','#96c03d');
                $('#titulostep5').css('color','#96c03d');
                $('#titulostep6').css('color','#2c3f4c');
            }*/

            if($('#titulostep').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
            }
            if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep2').css('color','#96c03d');
            }
            if($('#titulostep3').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep3').css('color','#96c03d');
            }
            if($('#titulostep4').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep4').css('color','#96c03d');
            }
            if($('#titulostep5').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep5').css('color','#96c03d');
            }
            if($('#titulostep6').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep6').css('color','#2c3f4c');
            }


			break;
		case 6:
			$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3').removeClass('rowiniciostepactivosuccess3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4').removeClass('rowiniciostepactivosuccess4');
			$('#rowvalida5').addClass('rowiniciostepactivo5').removeClass('rowvalida5').removeClass('rowiniciostepactivosuccess5');
			$('#rowvalida6').addClass('rowiniciostepactivo6').removeClass('rowvalida6').removeClass('rowiniciostepactivosuccess6');
			/*$('#titulostep').css('color','#96c03d');
			$('#titulostep2').css('color','#96c03d');
			$('#titulostep3').css('color','#96c03d');
			$('#titulostep4').css('color','#96c03d');
			$('#titulostep5').css('color','#96c03d');
			$('#titulostep6').css('color','#96c03d');*/
            //$('#terminar').css("display","none");

            if($('#titulostep').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep').css('color','#96c03d');
            }
            if($('#titulostep2').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep2').css('color','#96c03d');
            }
            if($('#titulostep3').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep3').css('color','#96c03d');
            }
            if($('#titulostep4').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep4').css('color','#96c03d');
            }
            if($('#titulostep5').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep5').css('color','#96c03d');
            }
            if($('#titulostep6').css("color") != "rgb(245, 238, 11)"){
                $('#titulostep6').css('color','#96c03d');
            }

            if($('#recreasolicitudinput').val() == "NO")
                {
                    $('#terminar').css("display", "");
                }else{
                    $('#terminar').css("display", "none");
                }
			break;
		default:
			break;
	}
	
}

function navegasliderheaderatras(step){
	switch(step) {
		case 1:
		
			$('#rowvalida2').addClass('rowvalida2').removeClass('rowiniciostepactivo2').removeClass('rowiniciostepactivosuccess2');
			$('#rowvalida3').addClass('rowvalida3').removeClass('rowiniciostepactivo3').removeClass('rowiniciostepactivosuccess3');;
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4').removeClass('rowiniciostepactivosuccess4');;
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');;
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');;
            var controles=['#txtCalleSolicitantenew','#txtNumExteriornew','#txtCpSolicitantenew','#txtTelefonoCasanew','#txtTelefonoCelularnew','#txtCorreonew'];

            $.each(controles, function (ind, elem) {
                if($(controles[ind]).val() == ''){
                    enablecontrolesicon(elem);
                   }

			});

            var controlesmonto=['#txtMontoViviendanew'];

            $.each(controlesmonto, function (ind, elem) {
                if($(controlesmonto[ind]).val() == '$ 0.00'){
                    enablecontrolesicon(elem);
                   }

			});

            var controleslistas = ['#lisEstadoSolicitantenew','#lisDelMuniSolicitantenew', '#lisColoniaSolicitantenew','#lisCompaniaMovilnew', '#lisEstatusResidencianew','#txtTiempoResidencianew'];
            $.each(controleslistas, function (ind, elem) {
                if($(controleslistas[ind]).val() == '0'){
                    enablecontrolesicon(elem);
                   }

			});
			
			break;
		case 2:

			//$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowvalida3').removeClass('rowiniciostepactivo3').removeClass('rowiniciostepactivosuccess3');;
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4').removeClass('rowiniciostepactivosuccess4');;
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');;
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');;


            var controles=['#txtNombreEmpresanew','#txtGironew', '#txtPuestonew','#txtCalleEmpresanew','#txtNumeroExteriorEmpresa','#txtCpEmpresanew','#txtTelOficinanew'];

            $.each(controles, function (ind, elem) {
                if($(controles[ind]).val() == ''){
                    enablecontrolesicon(elem);
                   }

			});

            var controlesmonto=['#txtIngresonew'];

            $.each(controlesmonto, function (ind, elem) {
                if($(controlesmonto[ind]).val() == '$ 0.00'){
                    enablecontrolesicon(elem);
                   }

			});

            var controleslistas = ['#lisTipoContratonew','#lisEstadoEmpresanew', '#lisDelMuniEmpresanew','#lisColoniaEmpresanew','#txtantiguedadnew'];
            $.each(controleslistas, function (ind, elem) {
                if($(controleslistas[ind]).val() == '0'){
                    enablecontrolesicon(elem);
                   }

			});


			break;
		case 3:
			/*$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');*/
			$('#rowvalida4').addClass('rowvalida4').removeClass('rowiniciostepactivo4').removeClass('rowiniciostepactivosuccess4');;
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5').removeClass('rowiniciostepactivosuccess5');;
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');;



            var controles=['#txfuncionpoliticoSolicitantenew','#txparentescofuncionpoliticoSolicitantenew', '#txqueparenfuncionpoliticoSolicitantenew'];

			$.each(controles, function (ind, elem) {
                if($(controles[ind]).val() == ''){
                    enablecontrolesicon(elem);
                   }

			});



			break;
		case 4:
			/*$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4');*/
			$('#rowvalida5').addClass('rowvalida5').removeClass('rowiniciostepactivo5');
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6');


            var controles=['#txtNombreRef1new','#txtNombreRef2new', '#txtApellidoPaternoRef1new','#txtApellidoPaternoRef2new','#txtApellidoMaternoRef1new','#txtApellidoMaternoRef2new','#txtTelCasaRef1new','#txtTelCasaRef2new'];
			 $.each(controles, function (ind, elem) {
                if($(controles[ind]).val() == ''){
                    enablecontrolesicon(elem);
                   }

			});


			var controleslistas=['#lisNacionalidadRef1new','#lisNacionalidadRef2new'];
            $.each(controleslistas, function (ind, elem) {
                if($(controleslistas[ind]).val() == '0'){
                    enablecontrolesicon(elem);
                   }

			});

			break;
		case 5:
			/*$('#rowvalida2').addClass('rowiniciostepactivo2').removeClass('rowvalida2');
			$('#rowvalida3').addClass('rowiniciostepactivo3').removeClass('rowvalida3');
			$('#rowvalida4').addClass('rowiniciostepactivo4').removeClass('rowvalida4');
			$('#rowvalida5').addClass('rowiniciostepactivo5').removeClass('rowvalida5');*/
			$('#rowvalida6').addClass('rowvalida6').removeClass('rowiniciostepactivo6').removeClass('rowiniciostepactivosuccess6');;
			break;
		
		default:
			break;
	}
	
}

function validacontrolespantall(pantalla, kinkheader, e){
	
	switch(pantalla) {
		case '1':
			var controles=['#txtNomSolicitantenew','#txtApePaternonew', '#txtNumIdentificanew','#txtRFCnew'];
			var contlisterror=[];
			
			/*var prueba=['#txtNumIdentificanew'];
			var prueba2=[];
			
			$.each(prueba, function (ind, elem) { 
				agregaeventos(elem);
			});*/
			
			var controleslist=['#txtTipIdentificacionnew','#lstNacionalidadnew', '#lstEdoCivilnew'];
			var controleslisterror=[];
			var controlesfecha=['#dateFechanacnew'];
			var controlesfechaterror=[];
			var totalvalidar = 8;
			var controlvalidados=0;

			$.each(controles, function (ind, elem) { 
				if(validatext(elem)== 1)
				{
					controlvalidados += 1;
				}else{
					if(contlisterror.length == 0)
					{
						contlisterror[0] = elem;
					}else 
					{
						contlisterror[contlisterror.length] = elem;
					}
					
					
				}
			});
			
			$.each(controleslist, function (ind, elem) { 
			
				if(validalistas(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					
					if(controleslisterror.length == 0)
					{
						controleslisterror[0] = elem;
					}else 
					{
						controleslisterror[controleslisterror.length] = elem;
					}
					//contlisterror[ind] = elem;
					
				}
			});
			
			$.each(controlesfecha, function (ind, elem) { 
				if(validatext(elem)== 1)
				{
					controlvalidados += 1;
				}else{
					if(controlesfechaterror.length == 0)
					{
						controlesfechaterror[0] = elem;
					}else 
					{
						controlesfechaterror[controlesfechaterror.length] = elem;
					}
					
					
				}
			});
			
			if(controlvalidados == totalvalidar ){
                $('#titulostep').css('color','rgb(150, 192, 61)');
                $("#stOkTitstepgrales").attr('class', 'glyphicon glyphicon-ok');
				$("#stOkTitstepgrales").show();
				$("#stOkTitstepgrales").show();
				$("#stOkTitModgrales").show();
				$('#rowvalida').addClass('rowiniciostepactivosuccess').removeClass('rowiniciostepactivo');
                $('#rowvalida').css('background-color','#96c03d');
			}else{
				//$('#rowvalida').addClass('novalidorow').removeClass('rowiniciostepactivo');
				//$('#anumpaso1').css('color','yellow');
				
				$.each(controleslisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					//$(elem).css('border', '1px solid red');
					validariconlistas(elem);
					//$(elem).css('border', '1px solid red');
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
					
					
				
				
				});
				
				$.each(contlisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontxt(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
					
					
				
				
				});
				$.each(controlesfechaterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validariconfecha(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
					
					
				
				
				});
				
				
				/*$("#stOkTitstepgrales").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepgrales").show();*/
				if(!kinkheader){
					e.preventDefault();
				}
				
				
			}
		
			break;
		case '2':
			var controles=['#txtCalleSolicitantenew','#txtNumExteriornew'];
			var contlisterror=[];
			var controlesCP=['#txtCpSolicitantenew'];
			var contlistCPerror=[];
			var contlistmonto = ['#txtMontoViviendanew'];
			var contlisterrormonto = [];
			var controlestelefono=['#txtTelefonoCasanew','#txtTelefonoCelularnew'];
			var contlisterrortelefono=[];

            var controlescorreo=['#txtCorreonew'];
			var contlisterrorcorreo=[];
			
			var controlesspiner=['#txtTiempoResidencianew'];
			var contlisterrorspiner=[];
			var controleslist=['#lisEstadoSolicitantenew','#lisDelMuniSolicitantenew', '#lisColoniaSolicitantenew','#lisCompaniaMovilnew', '#lisEstatusResidencianew'];
			var controleslisterror=[];
            //TOTAL DE CONTROLES QUE SE VALIDAN, SI SE AGREGAN CONTROLES SE DEBE INCREMENTAR ESTA VARIABLE.
			var totalvalidar = 13;
			var controlvalidados=0;

			$.each(controles, function (ind, elem) { 
				if(validatext(elem) == 1)
				{
					controlvalidados += 1;
				}else{
					if(contlisterror.length == 0)
					{
						contlisterror[0] = elem;
					}else 
					{
						contlisterror[contlisterror.length] = elem;
					}
					
				}
			});

            $.each(controlescorreo, function (ind, elem) {
				if(validatextcorreo(elem) == 1)
				{
					controlvalidados += 1;
				}else{
					if(contlisterrorcorreo.length == 0)
					{
						contlisterrorcorreo[0] = elem;
					}else
					{
						contlisterrorcorreo[contlisterrorcorreo.length] = elem;
					}

				}
			});
			
			
			$.each(controleslist, function (ind, elem) { 
				if(validalistas(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					if(controleslisterror.length == 0)
					{
						controleslisterror[0] = elem;
					}else 
					{
						controleslisterror[controleslisterror.length] = elem;
					}				
				}
			});
			
			$.each(controlesspiner, function (ind, elem) { 
				if(validalistas(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					if(contlisterrorspiner.length == 0)
					{
						contlisterrorspiner[0] = elem;
					}else 
					{
						contlisterrorspiner[contlisterrorspiner.length] = elem;
					}				
				}
			});
			
			
			
			$.each(contlistmonto, function (ind, elem) { 
				if(validamontos(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					if(contlisterrormonto.length == 0)
					{
						contlisterrormonto[0] = elem;
					}else 
					{
						contlisterrormonto[contlisterrormonto.length] = elem;
					}				
				}
			});
			
			
			
			$.each(controlestelefono, function (ind, elem) { 
				if(validatelefono(elem) == 1 )
				{
                    if(elem=="#txtTelefonoCelularnew"){
                       if($(elem).val() == $("#txtTelefonoCasanew").val())
                           {
                               contlisterrortelefono[contlisterrortelefono.length] = elem;
                           }
                        else
                            {
                                controlvalidados += 1;
                            }

                    }else
                    {
					   controlvalidados += 1;
                    }
				}else{
					if(contlisterrortelefono.length == 0)
					{
						contlisterrortelefono[0] = elem;
					}else 
					{
						contlisterrortelefono[contlisterrortelefono.length] = elem;
					}	
					
					
				}
			});
			
			$.each(controlesCP, function (ind, elem) { 
				if(validatelefono(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					
					if(contlistCPerror.length == 0)
					{
						contlistCPerror[0] = elem;
					}else 
					{
						contlistCPerror[contlistCPerror.length] = elem;
					}	
					
					
				}
			});
			
			
			
			
			
			
			if(controlvalidados == totalvalidar ){
                $('#titulostep2').css('color','rgb(150, 192, 61)');
                $("#stOkTitstepDomicilio").attr('class', 'glyphicon glyphicon-ok');
				$("#stOkTitstepDomicilio").show();
				$("#stOkTitModDomicilio").show();
				$('#rowvalida2').addClass('rowiniciostepactivosuccess2').removeClass('rowiniciostepactivo').removeClass('rowvalida2');
                $('#rowvalida2').css('background-color','#96c03d');
			}else{
				//$('#rowvalida2').addClass('novalidorow').removeClass('rowiniciostepactivo');
				//$('#anumpaso2').css('color','yellow')
				
				$.each(controleslisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					//$(elem).css('border', '1px solid red');
					validariconlistas(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});

                $.each(contlisterrorcorreo, function (ind, elem) {
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					//$(elem).css('border', '1px solid red');
					validariconcorreo(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
				});

				$.each(contlisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontxt(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				$.each(contlisterrormonto, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validariconmonto(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				
				
				$.each(contlisterrortelefono, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontelefonos(elem);
					//$(elem).css('border', '1px solid red');
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(contlistCPerror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					//$(elem).css('border', '1px solid red');
					validariconCP(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(contlisterrorspiner, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					//$(elem).css('border', '1px solid red');
					validariconspiner(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				
				
				
				
				/*$("#stOkTitstepDomicilio").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepDomicilio").show();*/
				
				if(!kinkheader){
					e.preventDefault();
				}
				
				
			}
			break;
		case '3':
			var controles=['#txtNombreEmpresanew','#txtGironew', '#txtPuestonew','#txtCalleEmpresanew','#txtNumeroExteriorEmpresa','#txtCpEmpresanew'];
			var contlisterror=[];
			
            var controleslistmontos=['#txtIngresonew'];
			var controleslistmontoserror=[];

			var controlestelefono=['#txtTelOficinanew'];
			var contlisterrortelefono=[];

			var controleslist=['#lisTipoContratonew','#lisEstadoEmpresanew', '#lisDelMuniEmpresanew','#lisColoniaEmpresanew'];
			var controleslisterror=[];
			
			var controleslistspiners=['#txtantiguedadnew'];
			var controleslistspinerserror=[];
			
			var totalvalidar = 13;
			var controlvalidados=0;

			$.each(controles, function (ind, elem) { 
				if(validatext(elem) == 1)
				{
					controlvalidados += 1;
				}else{
					if(contlisterror.length == 0)
					{
						contlisterror[0] = elem;
					}else 
					{
						contlisterror[contlisterror.length] = elem;
					}	

					
				}
			});
			
			
			$.each(controleslist, function (ind, elem) { 
				if(validalistas(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					if(controleslisterror.length == 0)
					{
						controleslisterror[0] = elem;
					}else 
					{
						controleslisterror[controleslisterror.length] = elem;
					}

					
				}
			});
			
			
			$.each(controleslistspiners, function (ind, elem) { 
				if(validaspiners(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					if(controleslistspinerserror.length == 0)
					{
						controleslistspinerserror[0] = elem;
					}else 
					{
						controleslistspinerserror[controleslistspinerserror.length] = elem;
					}				
				}
			});
			
			$.each(controlestelefono, function (ind, elem) { 
				if(validatelefono(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					contlisterrortelefono[contlisterrortelefono.length] = elem;
					
				}
			});
			
			$.each(controleslistmontos, function (ind, elem) { 
				if(validamontos(elem) == 1)
				{
					controlvalidados += 1;
				}else{
					controleslistmontoserror[controleslistmontoserror.length] = elem;
					
				}
			});
			if(controlvalidados == totalvalidar ){
                $('#titulostep3').css('color','rgb(150, 192, 61)');
                $("#stOkTitstepDatEco").attr('class', 'glyphicon glyphicon-ok');
				$("#stOkTitstepDatEco").show();
				$("#stOkTitModDatEco").show();
				$('#rowvalida3').addClass('rowiniciostepactivosuccess3').removeClass('rowiniciostepactivo').removeClass('rowvalida3');
                $('#rowvalida3').css('background-color','#96c03d');
			}else{
				//$('#rowvalida3').addClass('novalidorow').removeClass('rowiniciostepactivo');
				//$('#anumpaso3').css('color','yellow')
				
				$.each(controleslisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validariconlistas(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(contlisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontxt(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(contlisterrortelefono, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontelefonos(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(controleslistspinerserror, function (ind, elem) {
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validariconspiner(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
				});
				$.each(controleslistmontoserror, function (ind, elem) { 
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validariconmonto(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
				});
				/*$("#stOkTitstepDatEco").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepDatEco").show();*/
				if(!kinkheader){
				e.preventDefault();
				}
				
				
			}
			break;
		case '4':
		
			var totalvalidar1 = 1;
			var totalvalidar2 = 2;
			var controlvalidados=0;
			var totalvalidar = 0;
			
			if($("#optpersonapoliticonew").is(':checked')){
				totalvalidar = totalvalidar + totalvalidar1;
				// Hacer algo si el checkbox ha sido seleccionado
				var controles=['#txfuncionpoliticoSolicitantenew'];
				var contlisterror1=[];
				
				
				$.each(controles, function (ind, elem) { 
					if(validatext(elem) == 1)
					{
						controlvalidados += 1;
					}else{
						contlisterror1[contlisterror1.length] = elem;
						
					}
				});
				
				
			}
			
			if($("#optparenpoliticonew").is(':checked')){
				totalvalidar = totalvalidar + totalvalidar2;
				// Hacer algo si el checkbox ha sido seleccionado
				var controles=['#txparentescofuncionpoliticoSolicitantenew', '#txqueparenfuncionpoliticoSolicitantenew'];
				
				
				
				$.each(controles, function (ind, elem) { 
					if(validatext(elem) == 1)
					{
						controlvalidados += 1;
					}else{
						contlisterror1[contlisterror1.length] = elem;
						
					}
				});
			}
			
			if(controlvalidados == totalvalidar ){
                    $('#titulostep4').css('color','rgb(150, 192, 61)');
                $("#stOkTitstepPerPol").attr('class', 'glyphicon glyphicon-ok');
					$("#stOkTitstepPerPol").show();
					$("#stOkTitModPerPol").show();
					$('#rowvalida4').addClass('rowiniciostepactivosuccess4').removeClass('rowiniciostepactivo').removeClass('rowvalida4');
                    $('#rowvalida4').css('background-color','#96c03d');
				}else{
					//$('#rowvalida5').addClass('novalidorow').removeClass('rowiniciostepactivo');
					//$('#anumpaso5').css('color','yellow')
					
					$.each(contlisterror1, function (ind, elem) { 
					
						var demoTimeout;
						clearTimeout(demoTimeout);
						$(elem).trigger('startRumble');
						validaricontxt(elem);
						demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
					});
					
					
					
					/*$("#stOkTitstepRefFam").attr('class', 'glyphicon glyphicon-warning-sign');
					$("#stOkTitstepRefFam").show();*/
					if(!kinkheader){
					e.preventDefault();
					}
					
					
				}
			
			
			

			
			
			
			//validar que es requerido
			break;
		case '5':
			var controles=['#txtNombreRef1new','#txtNombreRef2new', '#txtApellidoPaternoRef1new','#txtApellidoPaternoRef2new'];
			var contlisterror=[]
			
			
			var controlestelefono=['#txtTelCasaRef1new','#txtTelCasaRef2new'];
			var contlisterrortelefono=[]
			var controleslist=['#lisNacionalidadRef1new','#lisNacionalidadRef2new'];
			var controleslisterror=[];
			
			var totalvalidar = 8;
			var controlvalidados=0;

			$.each(controles, function (ind, elem) { 
				if(validatext(elem) == 1)
				{
					controlvalidados += 1;
				}else{
					contlisterror[contlisterror.length] = elem;
					
				}
			});
			
			
			$.each(controleslist, function (ind, elem) { 
				if(validalistas(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					controleslisterror[controleslisterror.length] = elem;
					
				}
			});
			
			
			
			$.each(controlestelefono, function (ind, elem) { 
				if(validatelefono(elem) == 1 )
				{
					controlvalidados += 1;
				}else{
					contlisterrortelefono[contlisterrortelefono.length] = elem;
					
				}
			});
			
			
			if(controlvalidados == totalvalidar ){
                $('#titulostep5').css('color','rgb(150, 192, 61)');
                $("#stOkTitstepRefFam").attr('class', 'glyphicon glyphicon-ok');
				$("#stOkTitstepRefFam").show();
				$("#stOkTitModRefFam").show();
				$('#rowvalida5').addClass('rowiniciostepactivosuccess5').removeClass('rowiniciostepactivo').removeClass('rowvalida5');
                $('#rowvalida5').css('background-color','#96c03d');
			}else{
				//$('#rowvalida5').addClass('novalidorow').removeClass('rowiniciostepactivo');
				//$('#anumpaso5').css('color','yellow')
				
				$.each(contlisterror , function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontxt(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(controleslisterror, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validariconlistas(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});
				
				$.each(contlisterrortelefono, function (ind, elem) { 
				
					var demoTimeout;
					clearTimeout(demoTimeout);
					$(elem).trigger('startRumble');
					validaricontelefonos(elem);
					demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);							
				});

                var textoref=$('#txtNombreRef1new').val() + " " + $('#txtApellidoPaternoRef1new').val() + " " + $('#txtApellidoMaternoRef1new').val();
                var textoref2=$('#txtNombreRef2new').val() + " " + $('#txtApellidoPaternoRef2new').val() + " " + $('#txtApellidoMaternoRef2new').val();
                var textoref3=$('#txtNombreRef3new').val() + " " + $('#txtApellidoPaternoRef3new').val() + " " + $('#txtApellidoMaternoRef3new').val();
                var textosol;
                if($('#txtSegundonombrenew').val().length > 0){
                    textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtSegundonombrenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val();
                }else{
                    textosol=$('#txtNomSolicitantenew').val() + " " + $('#txtApePaternonew').val() + " " + $('#txtApeMaternonew').val();
                }

                if(textoref.trim().length > 0){

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
                       $("#lblreferenciassolicitante").css('color', 'red');
                        demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);

                       $('#txtNombreRef1new').focus();


                    }

                }

                if(textoref2.trim().length > 0){
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
                       $("#lblreferenciassolicitante").css('color', 'red');
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
                        $("#lblreferenciassolicitante").css('color', 'red');
                        demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);
                        $('#txtNombreRef2new').focus();



                    }
                }









			 if(textoref3.trim().length > 0){
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
                   $("#lblreferenciassolicitante").css('color', 'red');
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
                    $("#lblreferenciassolicitante").css('color', 'red');
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
                    $("#lblreferenciassolicitante").css('color', 'red');
                    demoTimeout4 = setTimeout(function(){$('#lblreferenciassolicitante').trigger('stopRumble')},1000);
                    $('#txtNombreRef3new').focus();



                }
            }
				
				
				/*$("#stOkTitstepRefFam").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepRefFam").show();*/
				if(!kinkheader){
				e.preventDefault();
				}
				
				
			}
			break;
		default:
			break;
	}
}


function validacontrolespantallGral(){

    var totalcontrolesheader = [];

    var totalvalidargral=42;
    var controlvalidadosgral=0;

    var controles=['#txtNomSolicitantenew','#txtApePaternonew', '#txtNumIdentificanew','#txtRFCnew'];
    var contlisterror=[];

    var controleslist=['#txtTipIdentificacionnew','#lstNacionalidadnew', '#lstEdoCivilnew'];
    var controleslisterror=[];
    var controlesfecha=['#dateFechanacnew'];
    var controlesfechaterror=[];
    var totalvalidar = 8;
    var controlvalidados=0;


    $.each(controles, function (ind, elem) {
        if(validatext(elem)== 1)
        {
            controlvalidados += 1;
            controlvalidadosgral += 1;
        }else{
            if(contlisterror.length == 0)
            {
                contlisterror[0] = elem;
            }else
            {
                contlisterror[contlisterror.length] = elem;
            }


        }
    });

    $.each(controleslist, function (ind, elem) {

        if(validalistas(elem) == 1 )
        {
            controlvalidados += 1;
            controlvalidadosgral += 1;
        }else{

            if(controleslisterror.length == 0)
            {
                controleslisterror[0] = elem;
            }else
            {
                controleslisterror[controleslisterror.length] = elem;
            }
            //contlisterror[ind] = elem;

        }
    });

    $.each(controlesfecha, function (ind, elem) {
        if(validatext(elem)== 1)
        {
            controlvalidados += 1;
            controlvalidadosgral += 1;
        }else{
            if(controlesfechaterror.length == 0)
            {
                controlesfechaterror[0] = elem;
            }else
            {
                controlesfechaterror[controlesfechaterror.length] = elem;
            }


        }
    });

    if(controlvalidados == totalvalidar ){
         $('#titulostep').css('color','rgb(150, 192, 61)');
        $("#stOkTitstepgrales").attr('class', 'glyphicon glyphicon-ok');
        $("#stOkTitstepgrales").show();
        $("#stOkTitModgrales").show();
        $('#rowvalida').addClass('rowiniciostepactivosuccess').removeClass('rowiniciostepactivo');
        $('#rowvalida').css('background-color','#96c03d');
    }else{
        totalcontrolesheader[totalcontrolesheader.length]= "Generales";
        $('#rowvalida').css('background-color','#f5ee0b');
        $('#titulostep').css('color','#f5ee0b');

        $("#stOkTitstepgrales").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepgrales").show();

        $.each(controleslisterror, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            //$(elem).css('border', '1px solid red');
            validariconlistas(elem);
            //$(elem).css('border', '1px solid red');
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);




        });

        $.each(contlisterror, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontxt(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);




        });
        $.each(controlesfechaterror, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validariconfecha(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);




        });

    }

    var controles2=['#txtCalleSolicitantenew','#txtNumExteriornew'];
    var contlisterror2=[];
    var controlesCP2=['#txtCpSolicitantenew'];
    var contlistCPerror2=[];
    var contlistmonto2 = ['#txtMontoViviendanew'];
    var contlisterrormonto2 = [];
    var controlestelefono2=['#txtTelefonoCasanew','#txtTelefonoCelularnew'];
    var contlisterrortelefono2=[];

    var controlescorreo2=['#txtCorreonew'];
    var contlisterrorcorreo2=[];

    var controlesspiner2=['#txtTiempoResidencianew'];
    var contlisterrorspiner2=[];
    var controleslist2=['#lisEstadoSolicitantenew','#lisDelMuniSolicitantenew', '#lisColoniaSolicitantenew','#lisCompaniaMovilnew', '#lisEstatusResidencianew'];
    var controleslisterror2=[];
    //TOTAL DE CONTROLES QUE SE VALIDAN, SI SE AGREGAN CONTROLES SE DEBE INCREMENTAR ESTA VARIABLE.
    var totalvalidar2 = 13;
    var controlvalidados2=0;

    $.each(controles2, function (ind, elem) {
        if(validatext(elem) == 1)
        {
            controlvalidados2 += 1;
            controlvalidadosgral += 1;
        }else{
            if(contlisterror2.length == 0)
            {
                contlisterror2[0] = elem;
            }else
            {
                contlisterror2[contlisterror2.length] = elem;
            }

        }
    });

    $.each(controlescorreo2, function (ind, elem) {
        if(validatextcorreo(elem) == 1)
        {
            controlvalidados2 += 1;
            controlvalidadosgral += 1;
        }else{
            if(contlisterrorcorreo2.length == 0)
            {
                contlisterrorcorreo2[0] = elem;
            }else
            {
                contlisterrorcorreo2[contlisterrorcorreo2.length] = elem;
            }

        }
    });


    $.each(controleslist2, function (ind, elem) {
        if(validalistas(elem) == 1 )
        {
            controlvalidados2 += 1;
            controlvalidadosgral += 1;
        }else{
            if(controleslisterror2.length == 0)
            {
                controleslisterror2[0] = elem;
            }else
            {
                controleslisterror2[controleslisterror2.length] = elem;
            }
        }
    });

    $.each(controlesspiner2, function (ind, elem) {
        if(validalistas(elem) == 1 )
        {
            controlvalidados2 += 1;
            controlvalidadosgral += 1;
        }else{
            if(contlisterrorspiner2.length == 0)
            {
                contlisterrorspiner2[0] = elem;
            }else
            {
                contlisterrorspiner2[contlisterrorspiner2.length] = elem;
            }
        }
    });



    $.each(contlistmonto2, function (ind, elem) {
        if(validamontos(elem) == 1 )
        {
            controlvalidados2 += 1;
            controlvalidadosgral += 1;
        }else{
            if(contlisterrormonto2.length == 0)
            {
                contlisterrormonto2[0] = elem;
            }else
            {
                contlisterrormonto2[contlisterrormonto2.length] = elem;
            }
        }
    });



    $.each(controlestelefono2, function (ind, elem) {
        if(validatelefono(elem) == 1 )
        {

            if(elem=="#txtTelefonoCelularnew"){
                if($(elem).val() == $("#txtTelefonoCasanew").val())
                   {
                       contlisterrortelefono2[contlisterrortelefono2.length] = elem;
                       var demoTimeout4;

                        clearTimeout(demoTimeout4);
                        $("#lbltelefonosdiferentes").css('display', 'inline');
                        $('#lbltelefonosdiferentes').trigger('startRumble');
                        $("#lbltelefonosdiferentes").css('color', 'red');
                        demoTimeout4 = setTimeout(function(){$('#lbltelefonosdiferentes').trigger('stopRumble')},1000);
                   }
                else
                    {
                        controlvalidados2 += 1;
                        controlvalidadosgral += 1;
                    }

                }else
                {
                    controlvalidados2 += 1;
                    controlvalidadosgral += 1;
                }

        }else{
            if(contlisterrortelefono2.length == 0)
            {
                contlisterrortelefono2[0] = elem;
            }else
            {
                contlisterrortelefono2[contlisterrortelefono2.length] = elem;
            }


        }
    });


    $.each(controlesCP2, function (ind, elem) {
        if(validatelefono(elem) == 1 )
        {
            controlvalidados2 += 1;
            controlvalidadosgral += 1;
        }else{

            if(contlistCPerror2.length == 0)
            {
                contlistCPerror2[0] = elem;
            }else
            {
                contlistCPerror2[contlistCPerror2.length] = elem;
            }


        }
    });






    if(controlvalidados2 == totalvalidar2 ){
        $('#titulostep2').css('color','rgb(150, 192, 61)');
        $("#stOkTitstepDomicilio").attr('class', 'glyphicon glyphicon-ok');
        $("#stOkTitstepDomicilio").show();
        $("#stOkTitModDomicilio").show();
        $('#rowvalida2').addClass('rowiniciostepactivosuccess2').removeClass('rowiniciostepactivo').removeClass('rowvalida2');
        $('#rowvalida2').css('background-color','#96c03d');
    }else{

        totalcontrolesheader[totalcontrolesheader.length]= "Domicilio";
        //$('#rowvalida2').addClass('novalidorow').removeClass('rowiniciostepactivo');
        $('#rowvalida2').css('background-color','#f5ee0b');
        $('#titulostep2').css('color','#f5ee0b');
        $("#stOkTitstepDomicilio").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepDomicilio").show();

        $.each(controleslisterror2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            //$(elem).css('border', '1px solid red');
            validariconlistas(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlisterrorcorreo2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            //$(elem).css('border', '1px solid red');
            validariconcorreo(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlisterror2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontxt(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });
        $.each(contlisterrormonto2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validariconmonto(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });



        $.each(contlisterrortelefono2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontelefonos(elem);
            //$(elem).css('border', '1px solid red');
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlistCPerror2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            //$(elem).css('border', '1px solid red');
            validariconCP(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlisterrorspiner2, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            //$(elem).css('border', '1px solid red');
            validariconspiner(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });
    }


    var controles3=['#txtNombreEmpresanew','#txtGironew', '#txtPuestonew','#txtCalleEmpresanew','#txtNumeroExteriorEmpresa','#txtCpEmpresanew'];
    var contlisterror3=[];

    var controleslistmontos3=['#txtIngresonew'];
    var controleslistmontoserror3=[];

    var controlestelefono3=['#txtTelOficinanew'];
    var contlisterrortelefono3=[];

    var controleslist3=['#lisTipoContratonew','#lisEstadoEmpresanew', '#lisDelMuniEmpresanew','#lisColoniaEmpresanew'];
    var controleslisterror3=[];

    var controleslistspiners3=['#txtantiguedadnew'];
    var controleslistspinerserror3=[];

    var totalvalidar3 = 13;
    var controlvalidados3=0;

    $.each(controles3, function (ind, elem) {
        if(validatext(elem) == 1)
        {
            controlvalidados3 += 1;
            controlvalidadosgral += 1;
        }else{
            if(contlisterror3.length == 0)
            {
                contlisterror3[0] = elem;
            }else
            {
                contlisterror3[contlisterror3.length] = elem;
            }


        }
    });


    $.each(controleslist3, function (ind, elem) {
        if(validalistas(elem) == 1 )
        {
            controlvalidados3 += 1;
            controlvalidadosgral += 1;
        }else{
            if(controleslisterror3.length == 0)
            {
                controleslisterror3[0] = elem;
            }else
            {
                controleslisterror3[controleslisterror3.length] = elem;
            }


        }
    });


    $.each(controleslistspiners3, function (ind, elem) {
        if(validaspiners(elem) == 1 )
        {
            controlvalidados3 += 1;
            controlvalidadosgral += 1;
        }else{
            if(controleslistspinerserror3.length == 0)
            {
                controleslistspinerserror3[0] = elem;
            }else
            {
                controleslistspinerserror3[controleslistspinerserror3.length] = elem;
            }
        }
    });

    $.each(controlestelefono3, function (ind, elem) {
        if(validatelefono(elem) == 1 )
        {
            controlvalidados3 += 1;
            controlvalidadosgral += 1;
        }else{
            contlisterrortelefono3[contlisterrortelefono3.length] = elem;

        }
    });

    $.each(controleslistmontos3, function (ind, elem) {
        if(validamontos(elem) == 1)
        {
            controlvalidados3 += 1;
            controlvalidadosgral += 1;
        }else{
            controleslistmontoserror3[controleslistmontoserror3.length] = elem;

        }
    });
    if(controlvalidados3 == totalvalidar3 ){
        $('#titulostep3').css('color','rgb(150, 192, 61)');
        $("#stOkTitstepDatEco").attr('class', 'glyphicon glyphicon-ok');
        $("#stOkTitstepDatEco").show();
        $("#stOkTitModDatEco").show();
        $('#rowvalida3').addClass('rowiniciostepactivosuccess3').removeClass('rowiniciostepactivo').removeClass('rowvalida3');
        $('#rowvalida3').css('background-color','#96c03d');
    }else{
        totalcontrolesheader[totalcontrolesheader.length]= "Datos Económicos";
        //$('#rowvalida3').addClass('novalidorow').removeClass('rowiniciostepactivo');
        $('#rowvalida3').css('background-color','#f5ee0b');
        $('#titulostep3').css('color','#f5ee0b');
        $("#stOkTitstepDatEco").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepDatEco").show();


        $.each(controleslisterror3, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validariconlistas(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlisterror3, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontxt(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlisterrortelefono3, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontelefonos(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(controleslistspinerserror3, function (ind, elem) {
            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validariconspiner(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });
        $.each(controleslistmontoserror3, function (ind, elem) {
            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validariconmonto(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });
    }



    var totalvalidar14 = 1;
    var totalvalidar24 = 2;
    var controlvalidados4=0;
    var totalvalidar4 = 0;

    if($("#optpersonapoliticonew").is(':checked')){
        totalvalidar4 = totalvalidar4 + totalvalidar14;
        // Hacer algo si el checkbox ha sido seleccionado
        var controles4=['#txfuncionpoliticoSolicitantenew'];
        var contlisterror14=[];


        $.each(controles4, function (ind, elem) {
            if(validatext(elem) == 1)
            {
                controlvalidados4 += 1;
                controlvalidadosgral += 1;
            }else{
                contlisterror14[contlisterror14.length] = elem;

            }
        });


    }

    if($("#optparenpoliticonew").is(':checked')){
        totalvalidar4 = totalvalidar4 + totalvalidar24;
        // Hacer algo si el checkbox ha sido seleccionado
        var controles4=['#txparentescofuncionpoliticoSolicitantenew', '#txqueparenfuncionpoliticoSolicitantenew'];



        $.each(controles4, function (ind, elem) {
            if(validatext(elem) == 1)
            {
                controlvalidados4 += 1;
                controlvalidadosgral += 1;
            }else{
                contlisterror14[contlisterror14.length] = elem;

            }
        });
    }

    totalvalidargral = totalvalidargral + totalvalidar4;

    if(controlvalidados4 == totalvalidar4 ){
            $('#titulostep4').css('color','rgb(150, 192, 61)');
            $("#stOkTitstepPerPol").attr('class', 'glyphicon glyphicon-ok');
            $("#stOkTitstepPerPol").show();
            $("#stOkTitModPerPol").show();
            $('#rowvalida4').addClass('rowiniciostepactivosuccess4').removeClass('rowiniciostepactivo').removeClass('rowvalida4');
            $('#rowvalida4').css('background-color','#96c03d');
        }else{
            totalcontrolesheader[totalcontrolesheader.length]= "Persona Política";
            //$('#rowvalida5').addClass('novalidorow').removeClass('rowiniciostepactivo');
            $('#rowvalida4').css('background-color','#f5ee0b');
            $('#titulostep4').css('color','#f5ee0b');
            $("#stOkTitstepPerPol").attr('class', 'glyphicon glyphicon-warning-sign');
					$("#stOkTitstepPerPol").show();

            $.each(contlisterror14, function (ind, elem) {

                var demoTimeout;
                clearTimeout(demoTimeout);
                $(elem).trigger('startRumble');
                validaricontxt(elem);
                demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
            });
        }




    var controles5=['#txtNombreRef1new','#txtNombreRef2new', '#txtApellidoPaternoRef1new','#txtApellidoPaternoRef2new'];
    var contlisterror5=[]


    var controlestelefono5=['#txtTelCasaRef1new','#txtTelCasaRef2new'];
    var contlisterrortelefono5=[]
    var controleslist5=['#lisNacionalidadRef1new','#lisNacionalidadRef2new'];
    var controleslisterror5=[];

    var totalvalidar5 = 8;
    var controlvalidados5=0;

    $.each(controles5, function (ind, elem) {
        if(validatext(elem) == 1)
        {
            controlvalidados5 += 1;
            controlvalidadosgral += 1;
        }else{
            contlisterror5[contlisterror5.length] = elem;

        }
    });


    $.each(controleslist5, function (ind, elem) {
        if(validalistas(elem) == 1 )
        {
            controlvalidados5 += 1;
            controlvalidadosgral += 1;
        }else{
            controleslisterror5[controleslisterror5.length] = elem;

        }
    });



    $.each(controlestelefono5, function (ind, elem) {
        if(validatelefono(elem) == 1 )
        {
            controlvalidados5 += 1;
            controlvalidadosgral += 1;
        }else{
            contlisterrortelefono5[contlisterrortelefono5.length] = elem;

        }
    });


    if(controlvalidados5 == totalvalidar5 ){
        $('#titulostep5').css('color','rgb(150, 192, 61)');
        $("#stOkTitstepRefFam").attr('class', 'glyphicon glyphicon-ok');
        $("#stOkTitstepRefFam").show();
        $("#stOkTitModRefFam").show();
        $('#rowvalida5').addClass('rowiniciostepactivosuccess5').removeClass('rowiniciostepactivo').removeClass('rowvalida5');
        $('#rowvalida5').css('background-color','#96c03d');
    }else{
        totalcontrolesheader[totalcontrolesheader.length]= "Referencias Familiares";
        //$('#rowvalida5').addClass('novalidorow').removeClass('rowiniciostepactivo');
        $('#rowvalida5').css('background-color','#f5ee0b');
        $('#titulostep5').css('color','#f5ee0b');
        $("#stOkTitstepRefFam").attr('class', 'glyphicon glyphicon-warning-sign');
				$("#stOkTitstepRefFam").show();

        $.each(contlisterror5 , function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontxt(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(controleslisterror5, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validariconlistas(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });

        $.each(contlisterrortelefono5, function (ind, elem) {

            var demoTimeout;
            clearTimeout(demoTimeout);
            $(elem).trigger('startRumble');
            validaricontelefonos(elem);
            demoTimeout = setTimeout(function(){$(elem).trigger('stopRumble');},1500);
        });
    }

   return totalcontrolesheader;








}

function agregaeventostextos(control)
{
	$(control).on({
		  keyup: function() {
			
			validaricontxt($(control));		
		  },
		  blur: function() {
            var valorcorrec = $(control).val().trim();
              $(control).val(valorcorrec);
			validaricontxt($(control));		
		  },
		  click: function() {
			enablecontrolesicon(control);	
		  }
		});
}


function agregaeventoslistas(lista)
{
	$(lista).on({
			change: function() {
			
				enablecontrolesicon($(lista));		
			},
			focus:	function () {
				enablecontrolesicon(lista);
			},
			blur: function() {
				validariconlistas($(lista));		
			},
			click: function() {
				enablecontrolesicon(lista);	
			}
		});
}

function agregaeventosspiners(control)
{
	$(control).on({
		  keyup: function() {
			
			validaricontxt($(control));		
		  },
		  blur: function() {
			validaricontxt($(control));		
		  },
		  click: function() {
			enablecontrolesicon(control);	
		  }
		});
}

function agregaeventosmontos(montos)
{
	$(montos).on({
	  blur: function() {
		  
			if($(montos).val().length > 0){
				validariconmonto($(montos));
			}else{
				$(montos).val('$ 0.00');
				validariconmonto($(montos));
			}		
	  },
	  click: function() {
		enablecontrolesicon(montos);	
	  }  
	});
}

function agregaeventostelefonos(telefono)
{
	$(telefono).on({
		  keydown: function(e) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
                validaricontelefonos("#" + e.target.id);
					 return;
			}
	 
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                validaricontelefonos("#" + e.target.id);
				e.preventDefault();
			}
		  },
		  keypress: function(tecla) {
			var texto=tecla.key; 
			var reg=  /^([()0-9\s])+$/i; 
		   if(reg.test(texto)) { 
				validaricontelefonos(telefono);
				return true;
		 
			} else { 
				return false;
			} 
			//if((tecla.charCode < 97 || tecla.charCode > 122) && (tecla.charCode < 65 || tecla.charCode > 90) && (tecla.charCode != 45)) return false;
		  },
		  blur: function() {
			validaricontelefonos(telefono);
		  },
		 
		});
}

function ValidaAcentos(controlelement){
	controlelement = controlelement.replace('á', '&aacute').replace('é', '&eacute').replace('í', '&iacute').replace('ó', '&oacute').replace('ú', '&uacute').replace('Á', '&Aacute').replace('É', '&Eacute').replace('Í', '&Iacute').replace('Ó', '&Oacute').replace('Ú', '&Uacute');

}


function replaceAll( text, busca, reemplaza )
{
    while (text.toString().indexOf(busca) != -1)
    text = text.toString().replace(busca,reemplaza);
    return text;
}



function consultasolicitudes(idUsr,token,Nomusuario,tipouser,pwd,compniare){
    console.log(JSON.stringify({"objPromotor":{"Promotoria":"","RegPromotor":"","Compania":compniare,"Formato":"","Usuario":Nomusuario,"Contrasenia":pwd,"Coordinador":{"ClaveC":"","NombreC":""},"Gerente":{"ClaveG":"","NombreG":""},"TipoUsuario":"4"},"llave":{"idUsuario":idUsr,"Token":token}}));
					$.ajax({
                        timeout:10000,
						type: 'POST',
						url: 'https://sminet.com.mx/mx.com.stefanini.service.api.rest/Service1.svc/getBuzonWeb',
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
																'<div class="image-box '+ tiporow +'">'+
																	'<div class="overlay-container">'+
																		'<h4 class="modal-title" id="project-1-label" style=" background-color: white;text-align: -webkit-center;color: #2c82c9;border-radius: 5px;">ID: ' + topoproy +' <i class="' + icono + '"></i></h4>'+
																		'<h4 class="contenidoficha">' + $nomcompleto + '<h4>'+
																		'<h4 class="contenidoficha">'+
																			'<p>' + data.solicitudes[r].FECHA_ALTA +'<p>'+
																			'<p></p>'+
																			'<p>Comentario:'+ data.solicitudes[r].COMENTARIO ? data.solicitudes[r].COMENTARIO: "Ninguno" +'<p>'+
																			'<p></p>'+
																			'<div>'+
																				'<div></div>'+
																			'</div>'+
																		'</h4>'+
																		"<input type='hidden' id='ResulConsulSolicitud" + r + "' name='ResulConsulSolicitud" + r + "' value='" + resulgral + "'/>"+
																		'<a class="overlay" onclick="Generadatos(ResulConsulSolicitud' + r + ')">'+
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
}


function deshabilitaRetroceso(){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
}


	


	


