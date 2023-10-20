javascript:(function() {
    var currentUrl = window.location.href;
    if (currentUrl.endsWith('?v3=true')) {
        var newUrl = currentUrl.replace('?v3=true', '?v3=false');
        window.location.href = newUrl;
    } else {
        window.location.href = 'https://make.powerautomate.com/environments/Default-6f5c8419-f724-4deb-b347-fd9b9691ca5f/flows/new';
    }
})();
