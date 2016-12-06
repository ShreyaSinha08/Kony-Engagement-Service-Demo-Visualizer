
function resetDemo(){
      if(initialReg==true){
       frmSetting.show();
      }
      else{
       //Defining basicConf parameter for alert
	var basicConf = {message: "Resetting the Demo App will remove all data stored locally on the server for this device.",alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle:"Alert",yesLabel:"OK",
	noLabel:"Cancel","alertIcon": "conf.png", alertHandler: handle2};

	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	kony.ui.Alert(basicConf,pspConf);
	//var infoAlert = kony.ui.Alert(basicConf,pspConf);
	function handle2(response)
	{
		kony.print(JSON.stringify(response));
		var response = JSON.stringify(response);
		if(response == "true")
		{
			//frmUrl.txtBoxUrl.text=KMSPROP.kmsServerUrl;
		//	KMSPROP.kmsServerUrl=frmSetting.txtBoxurl;
		   deleteAudience();
		   KMSPROP.kmsServerUrl=frmSetting.txtBoxurl.text;
		   KMSPROP.appId=frmSetting.txtBoxAppId.text;
		   KMSPROP.senderID=frmSetting.txtBoxSenderID.text;   
		   
		}
		
	}
	optionPopup.destroy();
 
      
      }
   
}








/**
****************************************************************
*	Name    : delete
*	Author  : Kony
*	Purpose : This function will delete the details of registered User.
*****************************************************************/

 function deleteAudience(){
 kony.print("\n\n-----in deleteAudience------>\n");
 	function asyncCallback(status, result) 
 	{
    	kony.print("\n------status------>"+status);
    	kony.print("\n----result---->"+JSON.stringify(result));
    	if(status==400)
    	{
    		if(result["httpresponse"]!=undefined && result["httpresponse"]["responsecode"]==200)
    		{
    			//updateMessaageAlert(""+result["message"]);
              	updateMessaageAlert("User Deleted Successfully");
    			kony.store.removeItem("KSID");
    			kony.store.removeItem("KMSURL");
    			kony.store.removeItem("KMSAppID");
    			kony.store.removeItem("KMSSenderID");
    			kony.store.removeItem("AUDIENCE_FIRSTNAME");
    			kony.store.removeItem("AUDIENCE_LASTNAME");
    			kony.store.removeItem("AUDIENCE_EMAIL");
    			kony.store.removeItem("AUDIENCE_MOB");
    			kony.store.removeItem("AUDIENCE_STATUS");
    			kony.store.removeItem("AUDIENCE_SMS_SUBSCRIPTION");
    			kony.store.removeItem("AUDIENCE_EMAIL_SUBSCRIPTION");
    			kony.store.removeItem("AUDIENCE_PUSH_SUBSCRIPTION");
    			frmProfile.txtBoxFname.text="";
    			frmProfile.txtBoxLname.text="";
    			frmProfile.txtBoxEmail.text="";
    			frmProfile.txtBoxMob.text="";
    			frmEvent.txtBoxEventId.text="";
    			frmUrl.txtBoxAppId.text="";
    			frmUrl.txtBoxSenderID.text="";
    			initialReg=true;
    			audienceFirstName=null;
    			audienceLastName=null;
    			audienceMob=null;
    			audienceEmail=null;
    			audiencePushSubs=null;
    			audienceSmsSubs=null;
    			audienceEmailSubs=null;
    			emailStatusBefore=null;
    			smsStatusBefore=null;
    			pushStatusBefore=null;
    			isPushSubs=false;
                isDeleteAudience=true;
   			    unSubscribePushSubscription();
    		}else{
    			updateMessaageAlert("Unable to process please try later..");
    			kony.print("\n------updated result--->"+JSON.stringify(result));
    		}
    		kony.application.dismissLoadingScreen();
    	}
    }
   
  	var inputParamTable={
			httpconfig:{method:"POST"},
			channel:"rc"
    }
    var url=KMSPROP.kmsServerUrl+"/api/v1/subscribeaudience/"+ksid+"/delete";
    kony.print("\n-----inputparamtable is"+JSON.stringify(inputParamTable));
    kony.print("\n----url----->"+url) ; 
    try{ 
    kony.application.showLoadingScreen("sknLoading","deleting..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   var connHandle = kony.net.invokeServiceAsync(
                        url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
    }	
 }
function resetback(){
 KMSPROP.kmsServerUrl=frmSetting.txtBoxurl.text;
     if(initialReg==true)
     {
        //frmUrl.show();
		frmOption.show();
     }
     else
       frmHome.show();
 }
 
 
 
 
 
 
 
 
 
 