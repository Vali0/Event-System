(function(){
    $('#add-initiative').on('click', function() {
        var initiatives = $('#initiatives').clone();

        $('#initiatives').before(initiatives);
    });
}())