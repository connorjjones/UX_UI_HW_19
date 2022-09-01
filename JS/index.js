console.log("Your index.js is loaded correctly");
$("#myWorkBtn").on("click", function(){
    console.log("You Clicked on My Work")
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#myWorkSection").offset().top
io/UX_UI_HW_20/    }, 400);
});