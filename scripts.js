$('.add-to-cart').on('click', function () {
    var cart = $('.topnav');
    var imgtodrag = $(this).parent('.img').find("img").eq(0);

    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    
            })
            
            .appendTo($('body'))
        .animate({
        'top': cart.offset().top + 10,
            'left': cart.offset().left + 10,
            'width': 75,
            'height': 75
    }, 1000);
    imgclone.animate({
        'width': 0,
            'height': 0
    })
    
        }
}); 