//github
 prevProximityUUIDString = null;
 beaconManager = null;
 proximityUUIDString=null;
 major=null;
 minor=null;
 

/**
****************************************************************
*	Name    : monitoringCallback
*	Author  : Kony
*	Purpose : This function will perform monitoringCallback once BeaconRegionStateInside then startRangingBeacons in region.
*****************************************************************/

function monitoringCallback(beaconRegion, beaconRegionState) {
    kony.print("BeaconRegion: ", kony.type(beaconRegion), " ", beaconRegion, " state is: ", beaconRegionState);
   //alert("Inside monitoringCallback");
    if (beaconRegionState == "BeaconRegionStateInside") {
        beaconManager.startRangingBeaconsInRegion(beaconRegion);
    }
}

/**
****************************************************************
*	Name    : rangingCallback
*	Author  : Kony
*	Purpose : In the rangingCallback, the developer can determine the relative distance of the beacon from the device.
*****************************************************************/


function rangingCallback(beaconRegion, beacons) {
   kony.print("Beacons found for BeaconRegion: ", kony.type(beaconRegion), " ", beaconRegion, " Beacons: ", beacons);
   // kony.print("Inside rangingCallback");
    var beaconLabel = "No beacons";
    var proximityLabel = "...";
    if (beacons.length > 0) {
        beacon = beacons[0];
        
        /*
        kony.print("Beacon proximityUUIDString:", beacon.getProximityUUIDString());
        kony.print("Beacon major:", beacon.getMajor());
        kony.print("Beacon minor:", beacon.getMinor());
        kony.print("Beacon proximity:", beacon.getProximity());
        kony.print("Beacon accuracy:", beacon.getAccuracy());
        kony.print("Beacon rssi:", beacon.getrssi());
        
        */
       	 proximityUUIDString=beacon.getProximityUUIDString();
		 major=beacon.getMajor();
		 minor=beacon.getMinor();
        
        beaconLabel = beacon.getProximityUUIDString() + " " + beacon.getMajor() + " " + beacon.getMinor();
        proximityLabel = beacon.getProximity();
        
    }

        if((prevProximityUUIDString != proximityUUIDString) && (ksid != null))
      {  
            beaconUpdate();         
      }
          
}

/**
****************************************************************
*	Name    : errorCallback
*	Author  : Kony
*	Purpose : This function is used to get error updates from BeaconManager.
*****************************************************************/

function errorCallback(beaconManagerError, errorName, errorInfo, beaconRegion) {
    kony.print("Error occurred: ", beaconManagerError, " Error Name: ", errorName, " erorrInfo: ", errorInfo);
    if (beaconRegion) {
        kony.print("For Region: ", kony.type(beaconRegion), " ", beaconRegion);
    }
}


/**
****************************************************************
*	Name    : monitoringStartedForRegionCallback
*	Author  : Kony
*	Purpose : This function helps to start monitoring for the specified Beacon Region.
*****************************************************************/
function monitoringStartedForRegionCallback(beaconRegion) {
	kony.print("Inside monitoringStartedForRegionCallback");
    kony.print("Monitoring started for region: ", kony.type(beaconRegion), " ", beaconRegion);
}


/**
****************************************************************
*	Name    : authorizationStatusChangedCallback
*	Author  : Kony
*	Purpose : This Function helps to set the authorization status changed callback.
*****************************************************************/
function authorizationStatusChangedCallback(status) {
	kony.print(">>>>>>>>>> Location Authorization status changed to: ", status);   
    if (status === "BeaconManagerAuthorizationStatusAuthorized") {
        var proximityUUID = "92699174-4D9C-4179-B04C-C9C4B6C67DF4";
        var major = 100;
        var minor = 1;
        var identifier = "com.kone.testKms"
        beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);
        beaconManager.startMonitoringBeaconRegion(beaconRegion);
        beaconManager.startRangingBeaconsInRegion(beaconRegion);
    }
}



function determineAuthorizationStatus() {
	if (beaconManager == null) {
    	beaconManager = new com.kony.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
    	beaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback);
    	beaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChangedCallback);
    }
    
     /* 
 	"BeaconManagerAuthorizationStatusNotDetermined" 
    "BeaconManagerAuthorizationStatusRestricted"
    "BeaconManagerAuthorizationStatusDenied"
    "BeaconManagerAuthorizationStatusAuthorized"
    */
    kony.print("Status : ",beaconManager.authorizationStatus());
    
    if (beaconManager.isMonitoringAvailableForBeaconRegions()) {
        kony.print("Monitoring available");
    } else {
    	kony.print("Monitoring NOT available");
    }
    
    if (beaconManager.isRangingAvailableForBeaconRegions()) {
        kony.print("Ranging available");
    } else {
        kony.print("Ranging NOT available");
    }
    
    var proximityUUID = "92699174-4D9C-4179-B04C-C9C4B6C67DF4";
    var major = 100;
    var minor = 1;
    
    var identifier = "com.kone.testKms"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);
    beaconManager.startMonitoringBeaconRegion(beaconRegion);
}


/**
****************************************************************
*	Name    : locate_iBeacons
*	Author  : Kony
*	Purpose : This function is used to creating a BeaconManager with callbacks .
*****************************************************************/

function locate_iBeacons() {

	if (beaconManager == null) {
    	beaconManager = new com.kony.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
    	beaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback);
    	beaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChangedCallback);
    }
  
  
  
    
     /* 
 	"BeaconManagerAuthorizationStatusNotDetermined" 
    "BeaconManagerAuthorizationStatusRestricted"
    "BeaconManagerAuthorizationStatusDenied"
    "BeaconManagerAuthorizationStatusAuthorized"
    */
    if (beaconManager.authorizationStatus() != "BeaconManagerAuthorizationStatusAuthorized") {
        kony.print("Unathorized to use location services");
       // alert("Unathorized to use location services");
        //return;
    }
    
    if (!beaconManager.isMonitoringAvailableForBeaconRegions()) {
       kony.print("Monitoring not available");
       // alert("Monitoring not available");
        return;
    }
    if (!beaconManager.isRangingAvailableForBeaconRegions()) {
        kony.print("Ranging not available");
       // alert("Ranging not available");
        return;
    }
    var proximityUUID = "92699174-4D9C-4179-B04C-C9C4B6C67DF4";
    var identifier = "com.kone.testKms"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, null, null, identifier);
   // alert("Started monitoring");
    beaconRegion.setNotifyEntryStateOnDisplay(true);
    beaconManager.startMonitoringBeaconRegion(beaconRegion);   
}

/**
****************************************************************
*	Name    : beaconUpdate
*	Author  : Kony
*	Purpose : This function will update the beacon details to the KMS Server .
*****************************************************************/

 function beaconUpdate(){
		       function asyncCallback(status, result) {
		    	kony.print("\n------status------>"+status);
		    	if(status==400)
		    	{
				    		if(result["opstatus"]==0){
				    			//updateMessaageAlert(""+result["message"]);
				    			kony.print("\n------updated result--->"+JSON.stringify(result));
				    			
				    		}else if(result["opstatus"]==8009)
				    		{
				    		   kony.print("\ndescription is\n"+result["description"]);
				    			if(result["message"]!=undefined)
				    				//updateMessaageAlert(""+result["message"]);
				    			kony.print("\n------updated result--->"+JSON.stringify(result));
				    		}else{
				    			//updateMessaageAlert("unable to process please try later..");
				    			kony.print("\n------updated result--->"+JSON.stringify(result));
				    		}
				    		kony.application.dismissLoadingScreen();
				    	}
		         }
    
        kony.print("**************** beconupdate service*****************");
        prevProximityUUIDString = proximityUUIDString;
        kony.print("prevProximityUUIDString after update is -------->",prevProximityUUIDString);
        
     
    
  	var inputParamTable={
            httpheaders:{
            	"Content-Type":"application/json"
            },
			httpconfig:{method:"POST"},
			serviceID:"BeaconUpdate",appID:"kmsapp",
			channel:"rc",
			"ksid":ksid,
   			"uuid":proximityUUIDString,
   			"major":major,
   			"minor":minor,
   			"kmsurl":ipurl
	};
    var url=appConfig.url;
    kony.print("\n-----inputparamtable is"+JSON.stringify(inputParamTable));
    kony.print("\n----url----->"+url) ; 
    try{ 
    kony.application.showLoadingScreen("sknLoading","updating...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	   var connHandle = kony.net.invokeServiceAsync(
                        url,inputParamTable,asyncCallback);
	}catch(err){
     	kony.print("\nexeption in invoking service---\n"+JSON.stringify(err));
	  
    }	
   
   }