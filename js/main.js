// Oncicks which will be turned to web port signals

$(".turbine-status__temp").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--temp').hide();
    $('.turbine-status__okay-text--temp').show();
    $('.turbine-status__triangle--temp').addClass("complete");
  });

  $(".turbine-status__oil-pressure").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--oil-pressure').hide();
    $('.turbine-status__okay-text--oil-pressure').show();
    $('.turbine-status__triangle--oil-pressure').addClass("complete");
  });

  $(".turbine-status__bolt-tension").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--bolt-tension').hide();
    $('.turbine-status__okay-text--bolt-tension').show();
    $('.turbine-status__triangle--bolt-tension').addClass("complete");
  });

// Cycle through error messages

// $(".action-required__action-text").each(function(index){
//     if (!$( this ).hasClass("complete")) {
//         $(this).delay(3000*index).fadeIn(3000).delay(300).fadeOut(1000);
//         console.log(this);
//     }
// });

$(function() {
    var i = 0;
    var delay = 3000; 
    var items = $(".action-required__action-text-wrapper .action-required__action-text");
    items.eq(0).show();
    var len = items.length;
    setInterval(function() {
        //items.fadeOut().eq(++i % len).fadeIn();
        items.filter(":visible").fadeOut(function() {
            items.eq(++i % len).fadeIn();
        });
    }, delay);
});
