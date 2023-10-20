javascript:(function() {
    var currentUrl = new URL(window.location.href);
    var pathComponents = currentUrl.pathname.split('/');
    var envIndex = pathComponents.indexOf('environments');
    var environmentId = pathComponents[envIndex + 1];
    
    if (currentUrl.search.endsWith('?v3=true')) {
        var newUrl = currentUrl.href.replace('?v3=true', '?v3=false');
        window.location.href = newUrl;
    } else {
        var newFlowUrl = 'https://make.powerautomate.com/environments/' + environmentId + '/flows/new';
        window.location.href = newFlowUrl;
    }
})();
