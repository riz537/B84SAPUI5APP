sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("com.demo.b84sapui5app.controller.View1", {
        onInit() {
        },
        onGoTo2ndView: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmit: function () {
            this.byId("oIpEmpId").setValueState("None");
            this.byId("oIpName").setValueState("None");

            var empId = this.byId("oIpEmpId").getValue();
            var name = this.byId("oIpName").getValue();

            if (empId === "") {
                this.byId("oIpEmpId").setValueState("Error");
                this.byId("oIpEmpId").setValueStateText("Employee ID is mandatory please fill it");
            }
            else {
                var empIdRegExp = "^[0-9]{8}$";
                if (!empId.match(empIdRegExp)) {
                    this.byId("oIpEmpId").setValueState("Error");
                    this.byId("oIpEmpId").setValueStateText("Employee ID is not valid");
                }
            }
            //Name validation
            if (name === "") {
                this.byId("oIpName").setValueState("Error");
                this.byId("oIpName").setValueStateText("Employee name is mandatory please fill it");
            }
            else {
                var empNameRegExp = "^[a-zA-Z ]{1,25}$";
                if (!name.match(empNameRegExp)) {
                    this.byId("oIpName").setValueState("Error");
                    this.byId("oIpName").setValueStateText("Employee name is not valid");
                }

            }

        }
        // onSubmit: function () {
        //     var name = this.byId("oIpName").getValue();
        //     var newTitle = name + ", Welcome to SAPUI5";
        //     this.byId("oTxtWelcome").setText(newTitle);
        //     var alignment = this.byId("oIpAlignment").getValue();
        //     this.byId("oTxtWelcome").setTextAlign(alignment);
        //     this.byId("oIpName").setEnabled(false);
        //     this.byId("oIpAlignment").setEnabled(false);
        // },
        // onPressKeyStroke: function () {
        //     var value = this.byId("oIpName").getValue();
        //     this.byId("oBtnRed").setType("Default");
        //     this.byId("oBtnGreen").setType("Default");
        //     this.byId("oBtnBlue").setType("Default");

        //     if (value === "red") {
        //         this.byId("oBtnRed").setType("Reject");
        //     }
        //     else if (value === "green") {
        //         this.byId("oBtnGreen").setType("Accept");
        //     }
        //     else if (value === "blue") {
        //         this.byId("oBtnBlue").setType("Emphasized");
        //     }
        // }
    });
});