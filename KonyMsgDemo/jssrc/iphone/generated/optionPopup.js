function addWidgetsoptionPopup() {
    var lblInfo1 = new kony.ui.Label({
        "id": "lblInfo1",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "This App would like to send you push"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 5, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblInfo2 = new kony.ui.Label({
        "id": "lblInfo2",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "notifications to fully demonstrate the"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblInfo3 = new kony.ui.Label({
        "id": "lblInfo3",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "capabilities of Kony Engagement."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 5],
        "marginInPixel": false,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxBtns = new kony.ui.Box({
        "focusSkin": "sknHbxKonyThemeTransparent",
        "id": "hbxBtns",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 5],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnCancel = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeNegative",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": p2kwiet428023489603_btnCancel_onClick_seq0,
        "skin": "sknBtnKonyThemeNegative",
        "text": "No"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 1, 3, 1],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnProceed = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeNormal",
        "id": "btnProceed",
        "isVisible": true,
        "onClick": p2kwiet428023489603_btnProceed_onClick_seq0,
        "skin": "sknBtnKonyThemeNormal",
        "text": "OK"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [3, 1, 4, 1],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbxBtns.add(btnCancel, btnProceed);
    optionPopup.add(lblInfo1, lblInfo2, lblInfo3, hbxBtns);
};

function optionPopupGlobals() {
    optionPopup = new kony.ui.Popup({
        "addWidgets": addWidgetsoptionPopup,
        "id": "optionPopup",
        "isModal": true,
        "skin": "sknPopupKonyThemeNormal",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_DEVICE_REFERENCE,
        "containerWeight": 100,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendTop": false,
        "extendTop": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "fromBottom",
            "transitionEffect": "transitionMoveIn"
        },
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};