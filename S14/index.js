console.log('**********************175 What is JQuery************************');
console.log('**********************176 How to incorporate JQuery************************');
let myH1 = document.querySelector('h1');
myH1.innerHTML = 'Changed'

$('h1').css("color", 'red');

// check if jQuery is ready
$(document).ready(function () {
    $('h1').css("color", 'orange');
})


console.log('**********************177 Minification************************');
console.log('**********************178 Select elements from jQuery************************');
$('h1')
$('.aButton').css("background-color", 'orange');
$('button') // selecting all buttons

console.log('**********************179 Manipulating styles************************');
$('.aButton').css("background-color", 'green');
$('.aButton').addClass('rounded-big-btn margin-50'); // add multiple classes
$('.aButton').removeClass('margin-50');
let btnHas = $('.aButton').hasClass('rounded-big-btn');
console.log('has class: ' + btnHas);

console.log('**********************180 Manipulating text************************');
$('.aButton').text('btn changed with JQuery');
$('section').html('<h2> subheading added with jQuery</h2>');

console.log('**********************181 Manipulating attributes************************');
$('img').attr('src', 'http://hospitalveterinariopeninsular.com/Mine/img/char-personal.png')

console.log('**********************182 add eventlistenre************************');
$('.aButton').click(function () {
    $('.aButton').toggleClass('yellow');
});

// event listener on
$('h1').on('mouseover', () => $('h1').css('color', 'green'))

console.log('**********************183 add elements with jQuery************************');
$('h1').after("<h3>Subheading added jQuery: AFTER</h3>")
$('h1').before("<h3>Subheading added jQuery: BEFORE</h3>")
$('h1').prepend("<h3>Subheading added jQuery: PREPEND</h3>")
$('h1').append("<h3>Subheading added jQuery: APPEND</h3>")
$('h1').append("<h3 class='remove-me'>Subheading added jQuery: REMOVEME</h3>")
$('.remove-me').remove()

console.log('**********************184 animations************************');
$('h1').after("<h3 class='hide-on-click'>Subheading added jQuery: CLICK MEEEEEEEEE</h3>")
$('.hide-on-click').on('click', function name(params) {
    // .hide(), .show(), .toggle(), .fadeOut(), .fadeIn(), .slideUp, .slideDown, .slideToggle(), animation()
    $('.hide-on-click').animate({
        opacity: 0.2
    })
    // can be chained
    $('.hide-on-click').slideUp().slideDown().fadeOut().fadeIn().animate({
        opacity: 0.2
    })

})