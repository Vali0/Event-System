(function () {
    $('#join-event').on('click', function () {
        alert('click');
        httpRequester.request(window.location.href, 'PUT');
    });
}());