sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.b84sapui5app.controller.View2", {
        onInit() {
        },
        onNavBack:function(){
           // this.getOwnerComponent().getRouter().navTo("RouteView1");
           history.go(-1);
        }
        
    });
});