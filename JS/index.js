console.log("Your index.js is loaded correctly");
$("#myWorkBtn").on("click", function(){
    console.log("You Clicked on My Work")
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#myWorkSection").offset().top
    }, 400);
});