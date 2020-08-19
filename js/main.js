//carroseu

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    smartSpeed:150,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__zoomIn',
})

$('.btn_filter').on('click',function(){
    event.preventDefault()
    var categoria = $(this).attr('data-type')

    if(categoria == 'all') {
        $('.portfolio div').show()
    }
        else {
        $('.portfolio .card').each(function(){
            if(!$(this).hasClass(categoria)){
                $(this).hide()
            }
                else{
                    $(this).show()
                }
        })
    }
})