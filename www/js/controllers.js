// angular.module is a local, controller camera barcode scanner
angular.module('lector.controllers',['ionic','ngCordova'])
	.controller('lectorController', function($scope, $cordovaBarcodeScanner){
		$scope.leerCodigo = function(){
			$cordovaBarcodeScanner.scan().then(function(imagenscaneada){
				alert(imagenscaneada.text);
			}, function(error){
				alert("Ha ocurrido un error: "+error);
			});
		}
	});