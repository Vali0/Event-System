(function(){
    $('#filter').on('click', function(){
        var pageNumber = $('#page-number').val(),
            windowUrl = window.location.href;

        if(windowUrl.indexOf('?') != -1){
            windowUrl = windowUrl.substring(0, windowUrl.indexOf('?'));
        }
        var request = windowUrl + '?page=' + pageNumber;

        window.location.href = request;
    });
}())