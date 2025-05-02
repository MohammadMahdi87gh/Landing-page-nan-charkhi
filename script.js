$(document).ready(function() {

    // بیسکوئیت شیرین
    $('.thumb').on('click', function() {
        let newImg = $(this).data('img');
        let newTitle = $(this).data('title');
        let newScore = $(this).data('score');
        $('#main-img').attr('src', newImg);
        $('#main-title').text(newTitle);
        $('#main-score').text(newScore);
    })

})