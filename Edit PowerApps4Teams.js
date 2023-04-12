javascript:(function() {
  var currentUrl = window.location.href;
  var environmentId = currentUrl.match(/environments\/([\w-]+)\//)[1];
  var appId = prompt("Please paste the App ID from your clipboard:");
  var newUrl = "https://make.powerapps.com/e/" + environmentId + "/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2F" + appId;
  window.open(newUrl, "_blank");
})();
