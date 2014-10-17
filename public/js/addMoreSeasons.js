(function(){
    $('#add-seasons').on('click', function() {
        var initiatives = $('#seasons').clone();

        $('#seasons').before(initiatives);
    });
}())