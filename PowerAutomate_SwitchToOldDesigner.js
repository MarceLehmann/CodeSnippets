javascript:(function() {
    var currentUrl = window.location.href;
    if (currentUrl.endsWith('?v3=true')) {
        var newUrl = currentUrl.replace('?v3=true', '?v3=false');
        window.location.href = newUrl;
    } else {
        alert('The URL does not end with ?v3=true');
    }
})();
