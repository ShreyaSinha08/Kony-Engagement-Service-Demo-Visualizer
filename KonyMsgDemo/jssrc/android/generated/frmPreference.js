function addWidgetsfrmPreference() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Please select the type of message you want to receive."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 3, 2, 3],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbox15865480715900 = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbox15865480715900",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var checkBxPreference = new kony.ui.CheckBoxGroup({
        "focusSkin": "sknCbxKonyThemeNormal",
        "id": "checkBxPreference",
        "isVisible": true,
        "masterData": [
            ["0", "Push Message"],
            ["1", "SMS"],
            ["2", "E-Mail"]
        ],
        "selectedKeyValues": [
            ["0", "Push Message"],
            ["1", "SMS"],
            ["2", "E-Mail"]
        ],
        "selectedKeys": ["1", "2", "0"],
        "skin": "sknCbxKonyThemeNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [1, 2, 0, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "tickedImage": "checkbox_tick.png",
        "untickedImage": "checkbox.png"
    });
    hbox15865480715900.add(checkBxPreference);
    var hbox158654807143408 = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbox158654807143408",
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
    var vbox158654807144197 = new kony.ui.Box({
        "id": "vbox158654807144197",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknVboxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var line158654807145066 = new kony.ui.Line({
        "id": "line158654807145066",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var checkboxgroup158654807145067 = new kony.ui.CheckBoxGroup({
        "focusSkin": "sknCbxKonyThemeFocus",
        "id": "checkboxgroup158654807145067",
        "isVisible": true,
        "masterData": [
            ["0", "abc"]
        ]
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line158654807145068 = new kony.ui.Line({
        "id": "line158654807145068",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var checkboxgroup158654807145069 = new kony.ui.CheckBoxGroup({
        "focusSkin": "sknCbxKonyThemeFocus",
        "id": "checkboxgroup158654807145069",
        "isVisible": true,
        "masterData": [
            ["0", "bfc"]
        ]
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line158654807145070 = new kony.ui.Line({
        "id": "line158654807145070",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var checkboxgroup158654807145071 = new kony.ui.CheckBoxGroup({
        "focusSkin": "sknCbxKonyThemeFocus",
        "id": "checkboxgroup158654807145071",
        "isVisible": true,
        "masterData": [
            ["0", "sdv"]
        ]
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line158654807145072 = new kony.ui.Line({
        "id": "line158654807145072",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox158654807144197.add(line158654807145066, checkboxgroup158654807145067, line158654807145068, checkboxgroup158654807145069, line158654807145070, checkboxgroup158654807145071, line158654807145072);
    hbox158654807143408.add(vbox158654807144197);
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
        "text": "My Preferences"
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
        "onClick": p2kwiet428023489520_btnSubmitProfile_onClick_seq0,
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
    frmPreference.add(lblInfo, hbox15865480715900, hbox158654807143408, hboxHeader, hbox21405434215921);
};

function frmPreferenceGlobals() {
    frmPreference = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPreference,
        "enabledForIdleTimeout": false,
        "id": "frmPreference",
        "needAppMenu": true,
        "preShow": p2kwiet428023489520_frmPreference_preshow_seq0,
        "skin": "sknKonyThemeForm",
        "title": "My Preferences"
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