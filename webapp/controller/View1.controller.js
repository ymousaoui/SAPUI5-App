sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TestAPP.TestApp.controller.View1", {
		onInit: function () {
			//t
		},
		FirstFeatureFunction: function(){
			//Code 1
		},
		SecondFeatureFunction: function(){
			//Code 2
		},
		ThirdFeatureFunction: function(){
			//Code 3
		},
		ConflictFonction: function(){
			//Code Regression	
			var correct = false;
		}
		
	});
});