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

