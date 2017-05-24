function addWidgetsfrmSetting() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Please provide the URL to your Kony Engagement Service."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 5, 2, 3],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxurl = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTxtKonyThemeNormal",
        "id": "txtBoxurl",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 4,
        "placeholder": "< Enter kony Engagement cloud instance url.>",
        "skin": "sknTxtKonyThemeNormal",
        "text": "TextArea2",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblInfo2 = new kony.ui.Label({
        "id": "lblInfo2",
        "isVisible": true,
        "skin": "sknLblKonyThemeSmallFont",
        "text": "You can modify the URL above to reconfigure the demo app to use a different Kony Engagement instance."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbxAppId = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbxAppId",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label4152904429982 = new kony.ui.Label({
        "id": "label4152904429982",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Application ID :"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxAppId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxAppId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter App ID",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbxAppId.add(label4152904429982, txtBoxAppId);
    var hbox41529044210924 = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbox41529044210924",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label41529044210927 = new kony.ui.Label({
        "id": "label41529044210927",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Sender ID :"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxSenderID = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxSenderID",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter Sender ID",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox41529044210924.add(label41529044210927, txtBoxSenderID);
    var line214054342142757 = new kony.ui.Line({
        "id": "line214054342142757",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 10, 1, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var btnReset = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeReset",
        "id": "btnReset",
        "isVisible": true,
        "onClick": p2kwiet428023489565_btnReset_onClick_seq0,
        "skin": "sknBtnKonyThemeReset",
        "text": "Reset Demo App"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [20, 10, 20, 5],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblInfo3 = new kony.ui.Label({
        "id": "lblInfo3",
        "isVisible": true,
        "skin": "sknLblKonyThemeSmallFont",
        "text": "Resetting the Demo App will remove all data stored locally on the server for this device."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxurl1 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxurl1",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "onTextChange": p2kwiet428023489565_txtBoxurl1_onTextChange_seq0,
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 3, 1, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hbox21405434215921 = new kony.ui.Box({
        "focusSkin": "sknHbxKonyThemeTransparent",
        "id": "hbox21405434215921",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnSubmitProfile = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeNormal",
        "id": "btnSubmitProfile",
        "isVisible": true,
        "onClick": p2kwiet428023489565_btnSubmitProfile_onClick_seq0,
        "skin": "sknBtnKonyThemeNormal",
        "text": "DONE"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox21405434215921.add(btnSubmitProfile);
    var hboxHeader = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hboxHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "sknHbxKonyThemeHeader"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label158654807140518 = new kony.ui.Label({
        "id": "label158654807140518",
        "isVisible": true,
        "skin": "sknLblKonyThemeAppHeader",
        "text": "Demo App Settings"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hboxHeader.add(label158654807140518);
    frmSetting.add(lblInfo, txtBoxurl, lblInfo2, hbxAppId, hbox41529044210924, line214054342142757, btnReset, lblInfo3, txtBoxurl1, hbox21405434215921, hboxHeader);
};

function frmSettingGlobals() {
    frmSetting = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSetting,
        "enabledForIdleTimeout": false,
        "id": "frmSetting",
        "needAppMenu": true,
        "preShow": p2kwiet428023489565_frmSetting_preshow_seq0,
        "skin": "sknKonyThemeForm",
        "title": "Demo App Setting"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "sknTitleKonyTheme",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};