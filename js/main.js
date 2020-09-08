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
    event.preventDefault();
    var categoria = $(this).attr('data-type');
    var card = $(".portfolio1 [data-target='card']");

    if (categoria == 'all') {
        card.show();
    } else {
        card.each(function(){
            if ($(this).data('type') !== categoria) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    }
});


//--------------------------------------------------------------------

//$(.class) - seletor de class

//$(#class) - seletor de id

//$('span') - seletor de elementos html

//var type = 'photografy'; - criação de variavel com uma sting atribuida

//$(["data-type='" + type +"'"]) - seletor de attributo concatenado com variavel

//$(["data-type='photografy'"]) - seletor de atributo simples