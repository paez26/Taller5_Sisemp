sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("namespace1.productsmanager.Component", {
            metadata: {
                manifest: "json"
            }
        });
    }
);
sap.ui.define(['sap/suite/ui/generic/template/lib/AppComponent'], function(AppComponent) { 
    return AppComponent.extend("productsmanager.Component", { 
        metadata: { 
            manifest: "json" 
        } 
    }); 
}); 