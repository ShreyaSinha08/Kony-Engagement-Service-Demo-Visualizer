Kony Engagement Service
====================

Application to showcase the featues of Kony Engagement Service:
- Registering a user as an audience member
- Subscribing to the email, push and sms messages.

# To run this app

1. Download the project zip file.
2. Unzip the project to any folder.
3. Launch Kony Visualizer Enterprise version 7.0.
4. Import the project by selecting the KonyMsgDemo folder.
5. In the project, Go to js folder under modules and open 'configproperties.js' file.
6. Write down below required details in the space provided against each parameter in config.js file.
	* kmsserverurl :  kony Engagement cloud instance url,
	* senderID 	: clientID generated in google console for google cloud Engagement (applicable for android only). 
	* appId		: appID generated or given in the cloud KMS console.
7. Build and run the app.
8. Publish the services to your cloud instance.

 
config.js:

var KMSPROP = {
		kmsserverurl : "<Enter your Engagement cloud instance url...>",
		senderID :"<Enter your senderID..>", // applicable for android only- clientID generated in google console
		appID:"<Enter your app id...>", // appID generated or given in the cloud KMS console
};
	

**Note:**
You need to setup and configure your Kony Engagement environment on your Engagement cloud before running the app. Follow these tutorials 
at  http://docs.kony.com/KonyLibrary/Default.htm#../Subsystems/KMS_Console_User_Guide/Content/Notification.htm%3FTocPath%3DKony%2520MobileFabric%7CKony%2520Messaging%2520Services%7CKony%2520Messaging%2520Services%2520Console%2520User%2520Guide%7CNotification%7C_____0 
to know how to set up Kony Engagement service environment.

# Supported platforms:
**Mobile**
 * iPhone
 * Android
