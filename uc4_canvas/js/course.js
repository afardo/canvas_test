//sample custom script linking to the activity.attempt event
$('#tryit-responsive-review').on('activity.attempt', function (e, o) {
    var IMG_SIZE = 130,
        NUM_IMGS = 7,
        INIT_POSITION = 4,
        img = $('#div-w-img-bg'),
        position = img.data('position');
    if (!position) {
        position = INIT_POSITION;
        img.data('position', INIT_POSITION);
    }
    if (o.isCorrect && position < NUM_IMGS) {
        img.css({backgroundPosition:'+='+ IMG_SIZE +'px 0'});
        img.data('position', position + 1);
    }
    else if (!o.isCorrect && position > 1) {
        img.css({backgroundPosition:'-='+ IMG_SIZE +'px 0'});
        img.data('position', position - 1);
    }
});

$('.dlc-fillin-return').find('.fillin-info .dlsg-click').html('Enter');

$('.dlc-fillin-remove').find('.fillin-info').html('');