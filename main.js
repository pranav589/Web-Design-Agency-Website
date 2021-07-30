//counter variable so that we know what image we are currently on
let slideIndex = 0;
//Select all images
const slides = document.querySelectorAll(".main > img");

const main = () => {
    //remove active class for all slides 
    slides.forEach(slide => slide.classList.remove('active'))
    //Add 1 to the counter variable
    slideIndex++;
    //if the counter gets bigger than the total amount of slides, reset the counter
    if (slideIndex > slides.length) slideIndex = 1;
    //select the slide after the slide thats currently active and give it active class
    slides[slideIndex - 1].classList.add('active');
}

// use set interval to continuously run the slider() function over and over
main();

setInterval(() => {
    main();
}, 3000)// <--- 3000 milliseconds = 3 seconds. This means run the slider() function every 3 seconds

//Hide or show the menu links dependent on the browser width
$(window).resize(function () {
    if ($(window).outerWidth() >= 900) {
        $(".list").css("display", "flex")
    } else {
        $(".list").css("display", "none")
    }
});

$("#burger").on("click", function (event) {
    // When burger menu is clicked prevent the default of going to the top
    event.preventDefault();
    // When burger menu is clicked select list and toggle it
    $(".list").slideToggle("slow");
});
// When ancor links are clicked remove the active class
$(".list a").on("click", function () {
    $(".list a").removeClass("active")
    // Check if it has the active class,if it does remove it if not add it back
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
    } else {
        $(this).addClass("active")
    }
    // If list has the display block slideUp ('close the menu')
    if ($('.list').css('display') == 'block') $('.list').slideUp('slow');
});