sap.ui.define([
    "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("smarttable.controller.smartTable", {
        onInit() {
        },
        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oSmartTable = this.getView().byId("EmployeesSmartTable");
            var oTable = oSmartTable.getTable(); // Get the actual table inside SmartTable
            var oBinding = oTable.getBinding("rows") || oTable.getBinding("items"); // Handle different table types
            
            if (!oBinding) {
                console.warn("Table binding not found.");
                return;
            }
        
            var aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
            }
        
            oBinding.filter(aFilters);
        }
        
    });
});