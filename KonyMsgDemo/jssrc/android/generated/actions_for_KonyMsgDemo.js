//actions.js file 
function AS_Button_054011ab838e416bb8c2dac3b80c3f86(eventobject) {
    return pushRegistration.call(this);
}

function AS_Button_fde30cd5d3d749e989b0623c9a3c3c5c(eventobject) {
    frmTrigerPush.show();
}

function AS_Form_0dbd82e8de294f0db00405898c49ea0a(eventobject) {
    frmUrl.txtBoxUrl.text = "";
    frmUrl.txtBoxAppId.text = "";
    frmUrl.txtBoxSenderID.text = "";
    firstRegister = true;
}

function AS_Form_7f2e95aecefe4dd2bb10f01e5f358be4(eventobject) {}

function AS_Form_bd1d28b201764f7ea607778f5b4b10af(eventobject, neworientation) {
    kony.print("--on Device Back Clicked---");
}

function AS_Label_84f74b6b79c041408d1040a98c773ec6(eventobject, x, y) {
    kony.application.openURL("http://www.kony.com/trials");
}

function AS_TitleBar_7a3353e61d5f4c7c8bd23efd8373487e(eventobject) {}

function kmsapppostappinit(params) {
    return preAppinit.call(this);
}

function kmsapppreappinit(params) {
    return setApplicationCallBacks.call(this);
}

function p2kwiet428023489458_btnReload_onClick_seq0(eventobject) {
    return reloadCOntent.call(this);
}

function p2kwiet428023489469_btnSubmitProfile_onClick_seq0(eventobject) {
    return triggerEvent.call(this);
}

function p2kwiet428023489469_frmEvent_preshow_seq0(eventobject, neworientation) {
    frmEvent.lblInfo2.setVisibility(false);
}

function p2kwiet428023489469_txtBoxEventId_onTextChange_seq0(eventobject, changedtext) {
    frmEvent.lblInfo2.setVisibility(false);
}

function p2kwiet428023489493_button158654807166987_onClick_seq0(eventobject) {
    return locate_iBeacons.call(this);
}

function p2kwiet428023489493_button214054342124383_onClick_seq0(eventobject) {
    frmSetting.show();
}

function p2kwiet428023489493_vbox15865480716587_onClick_seq0(eventobject) {
    frmEvent.show();
}

function p2kwiet428023489493_vbox214054342110889_onClick_seq0(eventobject) {
    frmProfile.show();
}

function p2kwiet428023489493_vbox214054342112105_onClick_seq0(eventobject) {
    frmPreference.show();
}

function p2kwiet428023489493_vbox214054342115915_onClick_seq0(eventobject) {
    frmEvent.show();
}

function p2kwiet428023489501_frmOption_postshow_seq0(eventobject, neworientation) {
    return showOptionPopUp.call(this);
}

function p2kwiet428023489520_btnSubmitProfile_onClick_seq0(eventobject) {
    return preferences.call(this);
}

function p2kwiet428023489520_frmPreference_preshow_seq0(eventobject, neworientation) {
    return setpreferences.call(this);
}

function p2kwiet428023489545_btnSubmitProfile_onClick_seq0(eventobject) {
    return updatePushSubscription.call(this);
}

function p2kwiet428023489545_frmProfile_init_seq0(eventobject, neworientation) {
    return countryName.call(this);
}

function p2kwiet428023489545_frmProfile_postshow_seq0(eventobject, neworientation) {}

function p2kwiet428023489545_frmProfile_preshow_seq0(eventobject, neworientation) {
    return frmProfilePreShow.call(this);
}

function p2kwiet428023489545_listbox5316540885527_onSelection_seq0(eventobject) {
    selectedCountry = frmProfile.listbox5316540885527.selectedKeyValue[1];
    if (selectedCountry == "United States") {
        frmProfile.lstboxStates.placeholder = "Select State";
        frmProfile.lstboxStates.setVisibility(true);
        frmProfile.lineState.setVisibility(true);
    } else {
        frmProfile.lstboxStates.setVisibility(false);
        frmProfile.lineState.setVisibility(false);
        selectedState = "";
    }
}

function p2kwiet428023489545_lstboxStates_onSelection_seq0(eventobject) {
    selectedState = frmProfile.lstboxStates.selectedKeyValue[1];
    //alert(selectedState);
}

function p2kwiet428023489565_btnReset_onClick_seq0(eventobject) {
    return resetDemo.call(this);
}

function p2kwiet428023489565_btnSubmitProfile_onClick_seq0(eventobject) {
    return resetback.call(this);
}

function p2kwiet428023489565_frmSetting_preshow_seq0(eventobject, neworientation) {
    frmSetting.txtBoxurl.text = KMSPROP.kmsServerUrl;
    frmSetting.txtBoxAppId.text = KMSPROP.appId;
    frmSetting.txtBoxSenderID.text = KMSPROP.senderID;
}

function p2kwiet428023489565_txtBoxurl1_onTextChange_seq0(eventobject, changedtext) {
    frmSetting.txtBoxurl.text = "https://mycompany.messaging. konycloud.com";
}

function p2kwiet428023489589_btnSubmitProfile_onClick_seq0(eventobject) {
    return pushRegistration.call(this);
}

function p2kwiet428023489589_frmUrl_preshow_seq0(eventobject, neworientation) {
    frmUrl.txtBoxUrl.text = "";
    frmUrl.txtBoxAppId.text = "";
    frmUrl.txtBoxSenderID.text = "";
    firstRegister = true;
}

function p2kwiet428023489589_linkAccount_onClick_seq0(eventobject) {
    kony.application.openURL("http://www.kony.com/trials");
}

function p2kwiet428023489603_btnCancel_onClick_seq0(eventobject) {
    return negativeSelection.call(this);
}

function p2kwiet428023489603_btnProceed_onClick_seq0(eventobject) {
    return positiveSelection.call(this);
}

function p2kwiet428023489568_resetback_titlebarAction(eventobject) {
    return resetback.call(this);
}