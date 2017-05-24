//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "kmsapp1",
    appName: "KMSDemo",
    appVersion: "2.0.0",
    platformVersion: null,
    serverIp: "10.10.12.145",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "kmsapp1",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeUserWidgets();
    frmBrowserGlobals();
    frmEventGlobals();
    frmHomeGlobals();
    frmOptionGlobals();
    frmPreferenceGlobals();
    frmProfileGlobals();
    frmSettingGlobals();
    frmUrlGlobals();
    optionPopupGlobals();
    Popup0fdec1725e93e4eGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        preappinit: kmsapppreappinit,
        init: appInit,
        postappinit: kmsapppostappinit,
        showstartupform: function() {
            frmUrl.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;