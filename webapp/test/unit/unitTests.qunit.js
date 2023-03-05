/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TestAPP/TestApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});