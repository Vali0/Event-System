(function(){
    $('#update-profile').on('click', function () {
        var userProfile = {};
        userProfile.username = $('#username').text();
        userProfile.points = $('#points').text();
        userProfile.phoneNumber = $('#phoneNumber').text();
        userProfile.googleProfile = $('#googleProfile').text();
        userProfile.githubProfile = $('#githubProfile').text();
        userProfile.facebookProfile = $('#facebookProfile').text();
        userProfile.linkedInProfile = $('#linkedInProfile').text();
        var url = window.location.href;

        httpRequester.request(url, 'PUT', JSON.stringify(userProfile));
    });
}())