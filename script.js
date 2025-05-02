$(document).ready(function() {

    // بیسکوئیت شیرین
    $('.thumb').on('click', function() {

        $('.thumb').removeClass('active');
        $(this).addClass('active');
        
        let newImg = $(this).data('img');
        let newTitle = $(this).data('title');
        let newScore = $(this).data('score');

        $('#main-img').fadeOut(300, function() {
            $(this).attr('src', newImg).fadeIn(300);
        });

        $('#main-title').fadeOut(300, function() {
            $(this).text(newTitle).fadeIn(300);
        });

        $('#main-score').fadeOut(300, function() {
            $(this).text(newScore).fadeIn(300);
        });

    });

});
