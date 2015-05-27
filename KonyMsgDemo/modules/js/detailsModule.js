/**
 * Name		:	frmProfilePreShow
 * Author	:	Kony
 * Purpose	:	For setting some values to the form in the preshow of it.
**/
function frmProfilePreShow()
{
         if(audienceID!=null)
    			{   
    			  // getAudience();       
    			}
    			else{
    			 frmProfile.btnSubmitProfile.text ="DONE";   			  
    			}
	
}

function updateAudience(){
	kony.print("\n\n-----------in update audience---------------\n");
	function asyncCallback(status, result) 
	{
    	kony.print("\n------status------>"+status);
    	kony.print("\n result:-"+JSON.stringify(result));
    	if(status==400 && result["httpresponse"]!=undefined)
    	{
    			if(result["httpresponse"]["responsecode"]==400){
    				kony.print("\nError in updateAudience:-\n"+ JSON.stringify(result));
    				alert("unable to process please try later.");
    				return;
    			}else if(result["httpresponse"]["responsecode"]==200){
    				kony.print("\n result:-"+JSON.stringify(result));
    				kony.store.setItem("AUDIENCE_FIRSTNAME", audienceFirstName);
    				kony.store.setItem("AUDIENCE_LASTNAME", audienceLastName);
    				kony.store.setItem("AUDIENCE_EMAIL", audienceEmail);
    				kony.store.setItem("AUDIENCE_MOB", audienceMob);
    				kony.store.setItem("AUDIENCE_STATUS", audienceStatus);
    				kony.store.setItem("AUDIENCE_SMS_SUBSCRIPTION", audienceSmsSubs);
    				kony.store.setItem("AUDIENCE_EMAIL_SUBSCRIPTION", audienceEmailSubs);
    				kony.store.setItem("AUDIENCE_PUSH_SUBSCRIPTION", audiencePushSubs);
    				setpreferences();
    				updateMessaageAlert(result["message"]);
    			}
    	//		frmTest.textArea1.text=frmTest.textArea1.text+"\n"+JSON.stringify(result);
    	}
    	kony.application.dismissLoadingScreen();
    }
  	var payload0='{'
  		+'"ksid":2380599554376807948,' 
  		+'"lastName" :"kumar",'
  		+'"email" : "abc@kony.com",'
  		+'"active" : true,'
  		+'"firstName" : "abc",'
  		+'"mobileNumber" : "+918909878909",'
  		+'"smsSubscription" : false,'
  		+'"emailSubscription": false,'
  		+'"pushSubscription":true'
  		+'}';
  		audienceStatus=true;
  		//ksid=12345;	
  		/*audienceStatus=true;
    	audienceFirstName="dharmendra";
    	audienceLastName="kumar";
    	audienceEmail="dharmendra.kumar@Kony.com";
    	audienceSmsSubs=true;
    	audiencePushSubs=true;
    	audienceEmailSubs=true;
    	audienceID=null;*/
    	if(audienceSmsSubs==undefined||audienceSmsSubs==null){
    		audienceSmsSubs=true;
    		}
    	if(audienceEmailSubs==undefined||audienceEmailSubs==null){
    		audienceEmailSubs=true;}
  	var payload1='{'
  		+'"ksid":'+ksid+',' 
  		+'"lastName" :'+'\"'+audienceLastName+'\",'
  		+'"email" : '+'\"'+audienceEmail+'\",'
  		+'"active" :'+ audienceStatus+','
  		+'"firstName" :'+'\"'+audienceFirstName+'\",'
  		+'"mobileNumber" :'+'\"'+audienceMob+'\",'
  		+'"smsSubscription" :'+ audienceSmsSubs+','
  		+'"emailSubscription":'+audienceEmailSubs+','
  		+'"pushSubscription":'+audiencePushSubs
  		+'}';
  	kony.print("\npayload1:-"+payload1);
  //	kony.print("\npayload3:-"+payload3);
	var inputParamTable={
			httpheaders:{
            	"Content-Type":"application/json"
            	},
			postdata:payload1
			//channel:"rc"
    };
    try{
		var url=KMSPROP.kmsServerUrl+"/api/v1/subscribeaudience";
		//var url="http://10.10.12.64:8282/kpns/api/v1/subscribeaudience/";
		//var url="http://10.10.12.86:8080/LoginDemo1/login";
	   	kony.print("\nurl-->"+url);
	   	kony.print("\n ipTable-->"+JSON.stringify(inputParamTable));
	   	kony.application.showLoadingScreen("sknLoading","updating..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   	var connHandle = kony.net.invokeServiceAsync(
                        url,inputParamTable,asyncCallback);
	}catch(err){
    	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
		alert("Error"+err);
    }	
}

/**
 * Name		:	ManageProfile
 * Author	:	Kony
 * Purpose	:	To Update the Audience modifications.
**/
function manageProfile(){
        if(audienceID==null )
        {   
             registerAudience();
        }
        else if(initialReg == true){
            frmPreference.show();
        }
        else if((audienceFirstName ==frmProfile.txtBoxFname.text) && (audienceLastName == frmProfile.txtBoxLname.text) && (audienceEmail==frmProfile.txtBoxEmail.text) && (audienceMob==frmProfile.txtBoxMob.text))
               {
                 frmHome.show();
                }
          else{
        
            updateDeatils();
        }
}



/**
 * Name		:	updateActivityStatus
 * Author	:	Kony
 * Purpose	:	To update the activity status of the audience member while updating the details.
**/
function updateActivityStatus(list){
	if(list["selectedKeys"][0]=="1")
		audienceStatus=true;
	else
		audienceStatus=false;
	
}

function pushPrefSubs(){
	function asyncCallback(status, result) 
	{
    	kony.print("\n------status------>"+status);
		if(status==400)
		{
			kony.print("\n\n----in result------>"+JSON.stringify(result) );
			if(result["subscriptionResponse"]!=undefined){
				if(result["subscriptionResponse"]["statusCode"]=200){
					kony.print("\n subscription updated\n");
					updateAudience();
				}
			}
			kony.application.dismissLoadingScreen();
		}
	}
	kony.print("\n\n<----------in updateSubscription-------->\n\n");
    var payload={
 			"subscriptionService": {
  				"subscribe": {
  	 				"sid": registrationID,
  	 				"appId": KMSPROP.appId,
   					"ufid": audienceEmail,
  	 				"osType":opSystem,
  		 			"deviceId":kony.os.deviceInfo().deviceid
  					}
 				}
			};
	var jsonPayload=JSON.stringify(payload);
	var inputParamTable={
			 httpheaders:{
            	"Content-Type":"application/json"
            	},
       			postdata:jsonPayload,
       		channel:"rc"
			};
    //var pushSubscUrl=KMSPROP.kmsServerUrl+"/subscription";
	var pushSubscUrl="http://10.10.12.64:8282/kpns/subscription";
   // kony.print("\n pushSubscUrl:-"+pushSubscUrl);
   // kony.print("\ninputParamTable:-"+JSON.stringify(inputParamTable));
    try{ 
   		// kony.application.showLoadingScreen("sknLoading","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   var connHandle = kony.net.invokeServiceAsync(
                        pushSubscUrl,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexception in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	  	kony.application.dismissLoadingScreen();
    }

}
function pushPrefUnSubs(){
}



/**
 * Name		:	updateDeatils
 * Author	:	Kony
 * Purpose	:	To update the details oh the audience member.
**/
function updateDeatils()
{
	/*audienceFirstName=frmProfile.txtBoxFname.text;
  	if(audienceFirstName==null||audienceFirstName==""){
  	alert("please enter first name");
  	return;
  	}
   	audienceLastName=frmProfile.txtBoxLname.text;
   	if(audienceLastName==null||audienceLastName==""){
  	alert("please enter last name");
  	return;
  	}
   	audienceEmail=frmProfile.txtBoxEmail.text;
   	if(audienceEmail==null|| audienceEmail==""){
  		alert("please enter email id");
  		return;
  	}else if(emailReg.test(audienceEmail)==false){
  			alert("please enter valid email..");
  			return;
  	}
   	audienceMob=frmProfile.txtBoxMob.text;
   	if(audienceMob==null||audienceMob==""){
  	alert("please enter mobile number");
  	return;
  	}else if(mobReg.test(audienceMob)==false)
  	{
  		alert("please enter valid mobile number with country code");
  		return;
  	}*/
  //	kony.application.showLoadingScreen("sknLoading","please wait..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	kony.print("\nksid->"+ksid);
	if((isPushSubs==false) && (audiencePushSubs==true))
	{
		if(kony.os.deviceInfo().name=="iPhone Simulator"){
			alert("push doesn't support in iPhone simulator.");
			return;
		}else{
			updatePushSubscription();
		}
	}else if((isPushSubs==true)&&(audiencePushSubs==false))
	{
		//pushdeRegister();
		kony.print("---------------push de registering-----------");
		unSubscribePushSubscription();
		
	}else
		updateAudience();
}



/**
 * Name		:	updateMessaageAlert
 * Author	:	Kony
 * Purpose	:	To display the messages as an alert.
**/
function updateMessaageAlert(msg)
{
	//Defining basicConf parameter for alert
	var basicConf = {message:msg ,alertType: constants.ALERT_TYPE_INFO};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
}

/**
 * Name		:	trigger updateMessaageAlert
 * Author	:	Kony
 * Purpose	:	To display the messages as an alert.
**/
function triggerUpdateMessaageAlert(msg)
{
	//Defining basicConf parameter for alert
	var basicConf = {message:msg ,alertType: constants.ALERT_TYPE_INFO, alertHandler: handle2};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
	function handle2(response)
	{
		kony.print(JSON.stringify(response));
		var response = JSON.stringify(response);
		if(response == "true")
		{
		   frmEvent.txtBoxEventId.text=null;
		}
	}	
}






