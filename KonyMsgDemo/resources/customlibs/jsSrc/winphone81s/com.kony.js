var com.kony={};
com.kony.Beacon=function(){}
com.kony.Beacon.prototype.getProximityUUIDString= function(){};
com.kony.Beacon.prototype.getMajor= function(){};
com.kony.Beacon.prototype.getMinor= function(){};
com.kony.Beacon.prototype.getProximity= function(){};
com.kony.Beacon.prototype.getAccuracy= function(){};
com.kony.Beacon.prototype.getrssi= function(){};

com.kony.BeaconManager=function(){}
com.kony.BeaconManager.prototype.getMonitoredRegions= function(){};
com.kony.BeaconManager.prototype.getRangedRegions= function(){};
com.kony.BeaconManager.prototype.startMonitoringBeaconRegion= function(beaconRegion){};
com.kony.BeaconManager.prototype.stopMonitoringBeaconRegion= function(beaconRegion){};
com.kony.BeaconManager.prototype.requestStateForRegion= function(beaconRegion){};
com.kony.BeaconManager.prototype.startRangingBeaconsInRegion= function(beaconRegion){};
com.kony.BeaconManager.prototype.stopRangingBeaconsInRegion= function(beaconRegion){};
com.kony.BeaconManager.prototype.getMonitoringStartedForRegionCallback= function(){};
com.kony.BeaconManager.prototype.setMonitoringStartedForRegionCallback= function(callback){};
com.kony.BeaconManager.prototype.getAuthorizationStatusChangedCallback= function(){};
com.kony.BeaconManager.prototype.setAuthorizationStatusChangedCallback= function(callback){};
com.kony.BeaconManager.prototype.authorizationStatus= function(){};
com.kony.BeaconManager.prototype.isMonitoringAvailableForBeaconRegions= function(){};
com.kony.BeaconManager.prototype.isRangingAvailableForBeaconRegions= function(){};

com.kony.BeaconRegion=function(){}
com.kony.BeaconRegion.prototype.getProximityUUIDString= function(){};
com.kony.BeaconRegion.prototype.getMajor= function(){};
com.kony.BeaconRegion.prototype.getMinor= function(){};
com.kony.BeaconRegion.prototype.getNotifyEntryStateOnDisplay= function(){};
com.kony.BeaconRegion.prototype.setNotifyEntryStateOnDisplay= function(state){};
com.kony.BeaconRegion.prototype.getIdentifier= function(){};

com.kony.PeripheralManager=function(){}
com.kony.PeripheralManager.prototype.startAdvertisingWithMeasuredPower= function(beaconRegion,measuredPower){};
com.kony.PeripheralManager.prototype.stopAdvertising= function(){};
com.kony.PeripheralManager.prototype.isAdvertising= function(){};
com.kony.PeripheralManager.prototype.authorizationStatus= function(){};

