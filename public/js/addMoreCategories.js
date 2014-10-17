(function(){
    $('#add-category').on('click', function() {
        var initiatives = $('#categories').clone();

        $('#categories').before(initiatives);
    });
}())