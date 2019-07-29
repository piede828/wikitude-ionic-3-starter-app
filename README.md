How to install

*please not this works on Android, haven't tested this on iOS yet*

ionic start YourProjectName tabs --cordova
cd into YourProjectName
ionic cordova platform add android 
ionic cordova build android 

ionic cordova plugin add https://github.com/Wikitude/wikitude-cordova-plugin.git

copy this src folder over

change wikitude plugin key in 
"YourProjectName\plugins\com.wikitude.phonegap.WikitudePlugin\www\WikitudePlugin.js"

ionic cordova android run
