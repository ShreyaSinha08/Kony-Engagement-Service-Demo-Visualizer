audienceStatus=true;
audienceEmailSubs=false;
audiencePushSubs=false;
audienceSmsSubs=false;
smsStatusBefore=false;
emailStatusBefore=false;
pushStatusBefore=false;
initialReg=false;
emailReg=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
mobReg=/^\+[1-9]{1}[0-9]{6,14}$/; 

/**
 * Name		:	registerAudience
 * Author	:	Kony
 * Purpose	:	To get the user details to register as the audience member on the KMS.
**/

function registerAudience(){
  	audienceFirstName=frmProfile.txtBoxFname.text;
  	if(audienceFirstName==null||audienceFirstName==""){
  		alert("please enter first name");
  		return;
  	}
   	audienceLastName=frmProfile.txtBoxLname.text;
   	if(audienceLastName==null ||audienceLastName==""){
  		alert("please enter last name");
  		return;
  	}
   	audienceEmail=frmProfile.txtBoxEmail.text;
   	if(audienceEmail==null||audienceEmail==""){
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
  	}
  	//frmPreference.show();
 /*
	if(audiencePushSubs){
	kony.print("\n--calling pushregister()--");
	if(kony.os.deviceInfo().name=="iPhone Simulator"){
		//audiencePushSubs=false;
		alert("push doesn't support in iPhone simulator.");
	}else{
		pushRegister();
	}
	kony.print("\n--returned from pushregister()--");
	} 
	*/
		register();
}
/**
 * Name		:	register
 * Author	:	Kony
 * Purpose	:	To register the user as an audience member on the KMS. 
**/
function register(){
	function asyncCallback(status, result){
    	kony.print("\n------status------>"+status);
    	if(status==400){
    		kony.print("\n------result------>"+JSON.stringify(result));
    		if(result["opstatus"]==8009){
    			if(result["message"]!=undefined){
    			   updateMessaageAlert(result["message"]);
    			   kony.print("message is "+result["message"]);
    			   kony.application.dismissLoadingScreen();
    				return;
    			}
    			/*else if(result["errmsg"]!=undefined){
    				updateMessaageAlert("invalid email");
    				kony.print("error msg:-"+result["errmsg"]);
    				kony.application.dismissLoadingScreen();
    				return;
    			}*/
    			else{
    				updateMessaageAlert("email/mobile already registered");
    			 	//kony.print("message is...... "+result["message"]);
    				kony.application.dismissLoadingScreen();
    				return;
    			}
    		}
    		if(result["errmsg"]!=undefined){
    			updateMessaageAlert(result["errmsg"]);
    			 kony.print("errmsg message is "+result["errmsg"]);
    			kony.application.dismissLoadingScreen();
    			return;
    		}if(result["opstatus"]==0){	
    			audienceID=result["id"];
    			kony.store.setItem("audienceID", audienceID);
    			//updateMessaageAlert(""+result["message"]);
    			kony.print("message on opstatus 0 is  "+result["message"]);
    			initialReg=true;
    			//frmHome.show();
    			//frmPreference.show();
				registrationInfoAlert(""+result["message"]);
    			kony.application.dismissLoadingScreen();
    		}
    		else{
    			updateMessaageAlert("unable to process please try later..");
    			//kony.application.dismissLoadingScreen();
    			return;
    		}
    		kony.application.dismissLoadingScreen();
    	}
    }
    ipurl=KMSPROP.kmsServerUrl.substring(8);
   
    var inputParamTable={
         	httpheaders:{
           		"AccessSecret":accessSecret,
           		"AccessToken":accessToken,
           		"Content-Type":"application/json"
           	},
			httpconfig:{method:"POST"},
			serviceID:"CreateAudience",appID:"kmsapp",
			channel:"rc",
			active: "\""+audienceStatus+"\"",
   			email: "\""+audienceEmail+"\"",
   			emailSubscription:"\""+audienceEmailSubs+"\"",
   			firstName: "\""+audienceFirstName+"\"",
   			lastName: "\""+audienceLastName+"\"",
   			mobileNumber: "\""+audienceMob+"\"",
  			pushSubscription: "\""+audiencePushSubs+"\"",
   			smsSubscription: "\""+audienceSmsSubs+"\"",
   			kmsurl:ipurl
	};
	//kony.print("inputparamTables is "+JSON.stringify(inputParamTable));
	//kony.print("AccessSecret is "+accessSecret);
	//kony.print("AccessToken is "+accessToken);
	//var url= "https://"+KMSPROP.kmsserverurl+"/api/v1/audience";
    var url=appConfig.url;
   // var url="http://10.10.12.145:8080/middleware/MWServlet";
    kony.print("\n----url----->"+url) ;  
    try{
    kony.application.showLoadingScreen("sknLoading","registering...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		var connHandle = kony.net.invokeServiceAsync(
                       url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	  	kony.application.dismissLoadingScreen();
	}	
}





/**
 * Name		:	preferences.
 * Author	:	Kony
 * Purpose	:	To handle the checkboxgroup event for the push subscription,smsSubscription,emailSubscription. 
**/

function preferences(){
	firstRegister=false;
	var selectedKeys = frmPreference.checkBxPreference.selectedKeys;
	initialReg = false;
	audiencePushSubs=false;
	audienceSmsSubs=false;
	audienceEmailSubs=false; 
	for(var i = 0; selectedKeys != null && i< selectedKeys.length; i++){
		if(selectedKeys[i] == 0)
			audiencePushSubs=true;
		else if(selectedKeys[i] == 1)
			audienceSmsSubs=true;
		else
			audienceEmailSubs=true;		
		}
		if((audienceEmailSubs!=emailStatusBefore) ||( audienceSmsSubs!=smsStatusBefore) || (audiencePushSubs != pushStatusBefore))
		{
		    kony.print("\naudiencePushSubs---------------->"+audiencePushSubs);
		    kony.print("\naudienceSmsSubs---------------->"+audienceSmsSubs);
		    kony.print("\naudienceEmailSubs---------------->"+audienceEmailSubs);
		    kony.application.showLoadingScreen("sknLoading","updating..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
		   	updateDeatils();
		}
		else{
		   frmHome.show();
		}
}

/**
 * Name		:	Setpreferences
 * Author	:	Kony
 * Purpose	: To read the checkboxgroup selected status for the push subscription,smsSubscription,emailSubscription.
**/



function setpreferences(){
     var arr=[];
		  smsStatusBefore=false;
		  emailStatusBefore=false;
		  pushStatusBefore=false;
     if(audiencePushSubs == true){
        arr.push("0");
        pushStatusBefore=true;
     }  
     if(audienceSmsSubs == true){
        arr.push("1");
      smsStatusBefore=true;
     }
      
     if(audienceEmailSubs == true){
      arr.push("2");
      emailStatusBefore=true;
     }
     frmPreference.checkBxPreference.selectedKeys=arr;
     kony.print("array is "+arr);      
}


function preAppinit(){
	/*	
		kony.store.setItem("KSID",ksid);
		KMSPROP.kmsServerUrl=frmUrl.txtBoxUrl.text;
		kony.store.setItem("KMSURL",KMSPROP.kmsServerUrl);
		kony.store.setItem("AUDIENCE_FIRSTNAME", audienceFirstName);
    	kony.store.setItem("AUDIENCE_LASTNAME", audienceLastName);
    	kony.store.setItem("AUDIENCE_EMAIL", audienceEmail);
    	kony.store.setItem("AUDIENCE_MOB", audienceMob);
    	kony.store.setItem("AUDIENCE_STATUS", audienceStatus);
    	kony.store.setItem("AUDIENCE_SMS_SUBSCRIPTION", audienceSmsSubs);
    	kony.store.setItem("AUDIENCE_EMAIL_SUBSCRIPTION", audienceEmailSubs);
    	kony.store.setItem("AUDIENCE_PUSH_SUBSCRIPTION", audiencePushSubs);*/



	ksid = kony.store.getItem("KSID");
   /* audienceFirstName    =		kony.store.getItem("AUDIENCE_FIRSTNAME");
    audienceLastName  	 =		kony.store.getItem("AUDIENCE_LASTNAME");
    audienceEmail     	 =		kony.store.getItem("AUDIENCE_EMAIL");
    audienceMob       	 =		kony.store.getItem("AUDIENCE_MOB");
    audienceStatus    	 =		kony.store.getItem("AUDIENCE_STATUS");
    audienceSmsSubs    	 =		kony.store.getItem("AUDIENCE_SMS_SUBSCRIPTION");
    audienceEmailSubs 	 =		kony.store.getItem("AUDIENCE_EMAIL_SUBSCRIPTION");
    audiencePushSubs  	 =		kony.store.getItem("AUDIENCE_PUSH_SUBSCRIPTION");
    registrationID		 =      kony.store.getItem("REGISTRATIONID");
    opSystem			 =		kony.store.getItem("OSTYPE");
    isPushSubs			 =		audiencePushSubs;*/
    isDeleteAudience=false;
      kony.print("\n ksid-->"+ksid);
      kony.print("\nKMSPROP.kmsServerUrl-->"+KMSPROP.kmsServerUrl);
    //  kony.print("\naudienceID-->"+audienceID);
      if(kony.os.deviceInfo().name=="iPhone")
      	   locate_iBeacons();
    if(ksid!=null){
       kony.print("entered with ksid & audience ID");
       //ipurl=kmsUrl.substring(8);
      // getAudience();
		audienceFirstName    =		kony.store.getItem("AUDIENCE_FIRSTNAME");
    	audienceLastName  	 =		kony.store.getItem("AUDIENCE_LASTNAME");
    	audienceEmail     	 =		kony.store.getItem("AUDIENCE_EMAIL");
    	audienceMob       	 =		kony.store.getItem("AUDIENCE_MOB");
    	audienceStatus    	 =		kony.store.getItem("AUDIENCE_STATUS");
   	 	audienceSmsSubs    	 =		kony.store.getItem("AUDIENCE_SMS_SUBSCRIPTION");
    	audienceEmailSubs 	 =		kony.store.getItem("AUDIENCE_EMAIL_SUBSCRIPTION");
    	audiencePushSubs  	 =		kony.store.getItem("AUDIENCE_PUSH_SUBSCRIPTION");
    	registrationID		 =      kony.store.getItem("REGISTRATIONID");
    	opSystem			 =		kony.store.getItem("OSTYPE");
    	isPushSubs			 =		audiencePushSubs;
		KMSPROP.kmsServerUrl = kony.store.getItem("KMSURL");
		frmProfile.txtBoxFname=audienceFirstName;
		frmProfile.txtBoxLname=audienceLastName;
		frmProfile.txtBoxEmail=audienceEmail;
		frmProfile.txtBoxMob=audienceMob;
		pushStatusBefore=true;
		smsStatusBefore=false;
		emailStatusBefore=false;
		var arr=[];
		if( audiencePushSubs == true){
       	 	arr.push("0");
        	pushStatusBefore=true;
     	}  
     	if(audienceSmsSubs == true){
        	arr.push("1");
      		smsStatusBefore=true;
     	}
	    if(audienceEmailSubs == true){
      		arr.push("2");
      		emailStatusBefore=true;
     	}
     	frmPreference.checkBxPreference.selectedKeys=arr;
		//setpreferences();
		if(audienceFirstName==null){
			audiencePushSubs=true;
			audienceSmsSubs=false;
			audienceEmailSubs=false;
			return frmProfile;
		}
        return frmHome;
    }   
   else{
   kony.print("entered without ksid");
    return  frmOption;
    }
}






