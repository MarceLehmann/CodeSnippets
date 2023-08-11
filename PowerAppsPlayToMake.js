javascript:(function() {
    var currentUrl = window.location.href;
    
    var pathComponents = currentUrl.split('/');
    var environmentId = pathComponents[5].replace('default-', 'Default-');
    var appId = pathComponents[7].split('?')[0];
    
    environmentId = prompt("Environment ID:", environmentId);
    appId = prompt("App ID:", appId);
    
    if (environmentId && appId) {
        var newUrl = "https://make.powerapps.com/e/" + environmentId + "/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2F" + appId;
        window.open(newUrl, "_blank");
    }
})();
