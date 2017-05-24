function addWidgetsfrmHome() {
    var imgLogo = new kony.ui.Image2({
        "id": "imgLogo",
        "isVisible": true,
        "src": "logo.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 5, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "skin": "sknLblKonyThemeTitleSmall",
        "text": "Welcome to"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblInfo2 = new kony.ui.Label({
        "id": "lblInfo2",
        "isVisible": true,
        "skin": "sknLblKonyThemeTitleLarge",
        "text": "Kony Engagement Service Demo App"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbox214054342110256 = new kony.ui.Box({
        "focusSkin": "sknHbxKonyThemeTransparent",
        "id": "hbox214054342110256",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 10, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox214054342110889 = new kony.ui.Box({
        "id": "vbox214054342110889",
        "isVisible": true,
        "onClick": p2kwiet428023489493_vbox214054342110889_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknVboxKonyThemeBlue"
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [8, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgProfile = new kony.ui.Image2({
        "id": "imgProfile",
        "isVisible": true,
        "src": "profile.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 10, 0, 10],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblProfile = new kony.ui.Label({
        "id": "lblProfile",
        "isVisible": true,
        "skin": "sknLblKonyThemeWhite",
        "text": "My Profile"
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
    vbox214054342110889.add(imgProfile, lblProfile);
    var vbox214054342112105 = new kony.ui.Box({
        "id": "vbox214054342112105",
        "isVisible": true,
        "onClick": p2kwiet428023489493_vbox214054342112105_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknVboxKonyThemeBlue"
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 0, 8, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgPreference = new kony.ui.Image2({
        "id": "imgPreference",
        "isVisible": true,
        "src": "preferences.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 10, 0, 10],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblPreference = new kony.ui.Label({
        "id": "lblPreference",
        "isVisible": true,
        "skin": "sknLblKonyThemeWhite",
        "text": "My Preference"
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
    vbox214054342112105.add(imgPreference, lblPreference);
    hbox214054342110256.add(vbox214054342110889, vbox214054342112105);
    var hbox214054342115246 = new kony.ui.Box({
        "focusSkin": "sknHbxKonyThemeTransparent",
        "id": "hbox214054342115246",
        "isVisible": true,
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
    var vbox214054342115915 = new kony.ui.Box({
        "id": "vbox214054342115915",
        "isVisible": true,
        "onClick": p2kwiet428023489493_vbox214054342115915_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknVboxKonyThemeBlue"
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [8, 8, 4, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgTriggerEvent = new kony.ui.Image2({
        "id": "imgTriggerEvent",
        "isVisible": true,
        "src": "events.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 10, 0, 10],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblEvent = new kony.ui.Label({
        "id": "lblEvent",
        "isVisible": true,
        "skin": "sknLblKonyThemeWhite",
        "text": "Trigger Event"
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
    vbox214054342115915.add(imgTriggerEvent, lblEvent);
    var vbox15865480716587 = new kony.ui.Box({
        "id": "vbox15865480716587",
        "isVisible": false,
        "onClick": p2kwiet428023489493_vbox15865480716587_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknVboxKonyThemeBlue"
    }, {
        "containerWeight": 50,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 8, 8, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image215865480716589 = new kony.ui.Image2({
        "id": "image215865480716589",
        "isVisible": true,
        "src": "events.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 5, 0, 5],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label15865480716591 = new kony.ui.Label({
        "id": "label15865480716591",
        "isVisible": true,
        "skin": "sknLblKonyThemeWhite",
        "text": "Trigger Event"
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
    vbox15865480716587.add(image215865480716589, label15865480716591);
    hbox214054342115246.add(vbox214054342115915, vbox15865480716587);
    var hbox214054342123714 = new kony.ui.Box({
        "focusSkin": "sknHbxKonyThemeTransparent",
        "id": "hbox214054342123714",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {});
    var lbldummy = new kony.ui.Label({
        "id": "lbldummy",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal"
    }, {
        "containerWeight": 69,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [10, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var button158654807166987 = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeFocus",
        "id": "button158654807166987",
        "isVisible": false,
        "onClick": p2kwiet428023489493_button158654807166987_onClick_seq0,
        "skin": "sknBtnKonyThemeNormal",
        "text": "locate beacon"
    }, {
        "containerWeight": 19,
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
    var button214054342124383 = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeSetting",
        "id": "button214054342124383",
        "isVisible": true,
        "onClick": p2kwiet428023489493_button214054342124383_onClick_seq0,
        "skin": "sknBtnKonyThemeSetting"
    }, {
        "containerWeight": 12,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox214054342123714.add(lbldummy, button158654807166987, button214054342124383);
    var Button095e1cf7d187c45 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "Button095e1cf7d187c45",
        "isVisible": false,
        "onClick": AS_Button_fde30cd5d3d749e989b0623c9a3c3c5c,
        "skin": "slButtonGlossBlue",
        "text": "Button"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHome.add(imgLogo, lblInfo, lblInfo2, hbox214054342110256, hbox214054342115246, hbox214054342123714, Button095e1cf7d187c45);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "needAppMenu": true,
        "skin": "sknFormNormal"
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};