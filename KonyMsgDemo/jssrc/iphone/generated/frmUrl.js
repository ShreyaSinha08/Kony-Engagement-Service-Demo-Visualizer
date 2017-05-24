function addWidgetsfrmUrl() {
    frmUrl.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "height": "17.56%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblKonyThemeNormal",
        "text": "Welcome to the Kony Engagement demo app.To get started,please provide the URL to your Kony Engagement service.",
        "top": "6%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDesc = new kony.ui.Label({
        "height": "8%",
        "id": "lblDesc",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblKonyThemenew",
        "text": "Demo App Settings",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblExample = new kony.ui.Label({
        "id": "lblExample",
        "isVisible": true,
        "left": "0.01%",
        "skin": "sknLblKonyThemeSmallFont",
        "text": "(example:https://mycompany.messaging.konycloud.com)",
        "top": "20.74%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblStrip = new kony.ui.Label({
        "height": "3px",
        "id": "lblStrip",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel08224d07ec6b046",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "66%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-0.03%",
        "skin": "slFbox",
        "top": "26.02%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxURL = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxURL",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxURL.setDefaultUnit(kony.flex.DP);
    var lblURL = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblURL",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblKonyThemeNormal",
        "text": "Url : ",
        "top": "18dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxUrl = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50.18%",
        "focusSkin": "sknTbxKonyThemeLogin",
        "height": "40dp",
        "id": "txtBoxUrl",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "7dp",
        "width": "68%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxURL.add(lblURL, txtBoxUrl);
    var lblEg1 = new kony.ui.Label({
        "height": "11.67%",
        "id": "lblEg1",
        "isVisible": true,
        "left": "30.03%",
        "skin": "CopysknLblKonyThemeSmallFont06eee8a571c374f",
        "text": "e.g : https://demo.messaging.com",
        "top": "-3.59%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxAppId = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxAppId",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-0.03%",
        "skin": "slFbox",
        "top": "-2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAppId.setDefaultUnit(kony.flex.DP);
    var lblAppId = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblAppId",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblKonyThemeNormal",
        "text": "Application ID :",
        "top": "18dp",
        "width": "28%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxAppId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50.18%",
        "focusSkin": "sknTbxKonyThemeLogin",
        "height": "40dp",
        "id": "txtBoxAppId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "7dp",
        "width": "68%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxAppId.add(lblAppId, txtBoxAppId);
    var lblEg23 = new kony.ui.Label({
        "height": "7%",
        "id": "lblEg23",
        "isVisible": true,
        "left": "30.00%",
        "skin": "sknLblKonyThemeSmallFont2",
        "text": "e.g :11233-232423",
        "top": "-2.00%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxSenderId = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxSenderId",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-0.03%",
        "skin": "slFbox",
        "top": "-1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSenderId.setDefaultUnit(kony.flex.DP);
    var lblSenderId = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSenderId",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblKonyThemeNormal",
        "text": "Sender ID :",
        "top": "18dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtBoxSenderID = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "sknTbxKonyThemeLogin",
        "height": "40dp",
        "id": "txtBoxSenderID",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "30%",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "7dp",
        "width": "68%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxSenderId.add(lblSenderId, txtBoxSenderID);
    var lblEg3 = new kony.ui.Label({
        "height": "7%",
        "id": "lblEg3",
        "isVisible": true,
        "left": "30.03%",
        "skin": "sknLblKonyThemeSmallFont2",
        "text": "e.g :4545454543",
        "top": "-2%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDesc3 = new kony.ui.Label({
        "id": "lblDesc3",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLblKonyThemeSmallFont",
        "text": "If you don't have access to Kony Engagement.you can create",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDesc4 = new kony.ui.Label({
        "id": "lblDesc4",
        "isVisible": true,
        "left": "0.00%",
        "skin": "sknLblKonyThemeSmallFont",
        "text": "a trial of MobileFabric at",
        "top": "1.00%",
        "width": "37.04%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblLink = new kony.ui.Label({
        "id": "lblLink",
        "isVisible": true,
        "left": "33%",
        "onTouchStart": AS_Label_84f74b6b79c041408d1040a98c773ec6,
        "skin": "CopysknLblKonyThemeSmallFont041654108b88e4c",
        "text": "kony.com/trial",
        "top": "-3.30%",
        "width": "37.04%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxMain.add(flxURL, lblEg1, flxAppId, lblEg23, flxSenderId, lblEg3, lblDesc3, lblDesc4, lblLink);
    var btnSubmitProfile = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeNormal",
        "height": "8%",
        "id": "btnSubmitProfile",
        "isVisible": true,
        "left": "0.06%",
        "onClick": AS_Button_8490bc4cb2a54fc087c9cc1a99bdd195,
        "skin": "sknBtnKonyThemeNormal",
        "text": "DONE",
        "top": "92.04%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmUrl.add(lblHeader, lblDesc, lblExample, lblStrip, flxMain, btnSubmitProfile);
};

function frmUrlGlobals() {
    frmUrl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUrl,
        "enabledForIdleTimeout": false,
        "id": "frmUrl",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_0dbd82e8de294f0db00405898c49ea0a,
        "skin": "sknKonyThemeForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};