var lat,lon;
function updatedLoc()
{
	function asyncCallback(status, result)
	{
    	kony.print("\n------status------>"+status);
    	if(status==400)
    	{
    		kony.print("\n------result------>"+JSON.stringify(result));
    		   	//	kony.application.dismissLoadingScreen();
			if(result["opstatus"]==0)
			{
				kony.print("\ngeo coordinate updated..");
			}
    	}
    }
    ipurl=KMSPROP.kmsServerUrl.substring(8);
	//ipurl="mobilefabric-demo.messaging.konycloud.com";
    var inputParamTable={
         	httpheaders:{
           		"Content-Type":"application/json"
           	},
			httpconfig:{method:"POST"},
			serviceID:"geoUpdate",
			appID:"kmsapp",
			channel:"rc",
   			kmsurl:ipurl,
   			"ksid":ksid,
			"lat":lat,
			"locname":"xxx",
			"lon":lon
	};
    var url=appConfig.url;
    kony.print("\n----url----->"+url) ;  
    kony.print("\nIP update loc:-"+JSON.stringify(inputParamTable));
    try{
		var connHandle = kony.net.invokeServiceAsync(
                       url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	}	
}
function updatedLoc1()
{
	function asyncCallback(status, result)
	{
    	kony.print("\n------status------>"+status);
    	if(status==400)
    	{
    		kony.print("\n------result------>"+JSON.stringify(result));
    		   	//	kony.application.dismissLoadingScreen();
			/*if(result["opstatus"]==0)
			{
				kony.print("\ngeo coordinate updated..");
			}*/
    	}
    }
    ipurl=KMSPROP.kmsServerUrl.substring(8);
	//ipurl="mobilefabric-demo.messaging.konycloud.com";
	var payload={"ksid":"12345","lat":"17.4","locname":"xxx","lon":"78.3"};
    var inputParamTable={
         	httpheaders:{
           		"Content-Type":"application/json"
           	},
			channel:"rc",
			postdata:JSON.stringify(payload)
	};
    var url=KMSPROP.kmsServerUrl+"/service/geolocupdate";
    kony.print("\n----url----->"+url) ;  
    kony.print("\nIP update loc:-"+JSON.stringify(inputParamTable));
    try{
		var connHandle = kony.net.invokeServiceAsync(
                       url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  	alert("Error"+err);
	}	
}


/*****************************************************************
*	Name    : geoPosition
*	Author  : Kony
*	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
******************************************************************/
function geoPosition()
{
	kony.print("\n\n---in geo position---\n\n");
	function geoSuccessCallBack(position)
	{
		lat =position.coords.latitude;
		lon=position.coords.longitude;
		if(lat==null)
			lat=0;
		if(lon==null)
			lon=0;
		kony.print("latitutde:-"+lat);
		kony.print("longitude:-"+lon);
		kony.application.dismissLoadingScreen();
		updatedLoc();
	}
	function geoErrorCallBack(positionerror)
	{
		kony.print("Error occured while retrieving the data:-\n" +"Error code:"+positionerror.code+" : "+ positionerror.message);
		kony.application.dismissLoadingScreen();
	}
	//var positionoptions1={};
	var positionoptions=new Object();
	//var positionoptions={};
	positionoptions.enablehighaccuracy=true;
	positionoptions.timeout=10000;
	positionoptions.maximumage=1000;
	watchFlag = false;
	//kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
	try
 	{
	 	kony.location.getCurrentPosition(geoSuccessCallBack, geoErrorCallBack,positionoptions);
	}
	catch(exception)
	{
		alert("Exception is ::"+exception.message);
	}
}
function updateLocations(){
	
	kony.timer.schedule("mytimer123",geoPosition, 3600, true);
	//The function timerFunc will be executed after every 3600 seconds.
}