function addWidgetsfrmProfile() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Please provide the following profile information."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 5, 1, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox21405434215911 = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbox21405434215911",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxWhite"
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
    var vbox21405434215912 = new kony.ui.Box({
        "id": "vbox21405434215912",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var txtBoxFname = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxFname",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "First Name",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "text": "Dharmendra",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 0, 1],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var txtBoxLname = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxLname",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Last Name",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "text": "Kumar",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line21405434215916 = new kony.ui.Line({
        "id": "line21405434215916",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 0, 1],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var txtBoxEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "E-mail Address",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "text": "dharmendra.kumar@Kony.com",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": false,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 0, 1],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var txtBoxCountry = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxCountry",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Country",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "text": "India",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line186678808140 = new kony.ui.Line({
        "id": "line186678808140",
        "isVisible": false,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 0, 1],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var txtBoxState = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxState",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "State",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "text": "Andhra Pradesh",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var line18667880811326 = new kony.ui.Line({
        "id": "line18667880811326",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var listbox5316540885527 = new kony.ui.ListBox({
        "focusSkin": "sknListboxKonyThemeNormal",
        "id": "listbox5316540885527",
        "isVisible": true,
        "onSelection": p2kwiet428023489545_listbox5316540885527_onSelection_seq0,
        "skin": "sknListboxKonyThemeNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dropDownImage": "d_arrow_grey.png",
        "groupCells": false,
        "placeholder": "Select Country",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lineState = new kony.ui.Line({
        "id": "lineState",
        "isVisible": false,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var lstboxStates = new kony.ui.ListBox({
        "focusSkin": "sknListboxKonyThemeNormal",
        "id": "lstboxStates",
        "isVisible": false,
        "onSelection": p2kwiet428023489545_lstboxStates_onSelection_seq0,
        "skin": "sknListboxKonyThemeNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dropDownImage": "d_arrow_grey.png",
        "groupCells": false,
        "placeholder": "Select State",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var line5316540882080 = new kony.ui.Line({
        "id": "line5316540882080",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 0, 1],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var txtBoxMob = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxMob",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Mobile Number",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "text": "+918008419258",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    vbox21405434215912.add(txtBoxFname, line1, txtBoxLname, line21405434215916, txtBoxEmail, line3, txtBoxCountry, line186678808140, txtBoxState, line18667880811326, listbox5316540885527, lineState, lstboxStates, line5316540882080, txtBoxMob);
    hbox21405434215911.add(vbox21405434215912);
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
        "onClick": p2kwiet428023489545_btnSubmitProfile_onClick_seq0,
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbox21405434215921.add(btnSubmitProfile);
    frmProfile.add(lblInfo, hbox21405434215911, hbox21405434215921);
};

function frmProfileGlobals() {
    frmProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProfile,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmProfile",
        "init": p2kwiet428023489545_frmProfile_init_seq0,
        "needAppMenu": true,
        "preShow": p2kwiet428023489545_frmProfile_preshow_seq0,
        "skin": "sknKonyThemeForm",
        "title": "My Profile"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "none",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleKonyTheme"
    });
};