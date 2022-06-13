// Oncicks which will be turned to web port signals

$(".turbine-status__temp").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--temp').hide();
    $('.turbine-status__okay-text--temp').show();
    $('.turbine-status__triangle--temp').addClass("complete");
    $(".action-required__action-text--temp").removeClass("action-required__action-text--incomplete");
  });

  $(".turbine-status__oil-pressure").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--oil-pressure').hide();
    $('.turbine-status__okay-text--oil-pressure').show();
    $('.turbine-status__triangle--oil-pressure').addClass("complete");
    $(".action-required__action-text--oil-pressure").removeClass("action-required__action-text--incomplete");
    
  });

  $(".turbine-status__bolt-tension").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--bolt-tension').hide();
    $('.turbine-status__okay-text--bolt-tension').show();
    $('.turbine-status__triangle--bolt-tension').addClass("complete");
    $(".action-required__action-text--tension").removeClass("action-required__action-text--incomplete");
  });

// Cycle through error messages

var quotes = $(".action-required__action-text--incomplete");
var quoteIndex = -1;
  
  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(2000)
        .fadeOut(2000, showNextQuote);
}

showNextQuote();