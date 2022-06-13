// Oncicks which will be turned to web port signals

$(".turbine-status__vibration").on("click", function () {
  $( this ).addClass("complete");
  $('.turbine-status__exclamation--vibration').hide();
  $('.turbine-status__okay-text--vibration').show();
  $('.turbine-status__triangle--vibration').addClass("complete");
  $(".action-required__action-text--vibration").remove();
});


$(".turbine-status__temp").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--temp').hide();
    $('.turbine-status__okay-text--temp').show();
    $('.turbine-status__triangle--temp').addClass("complete");
    $(".action-required__action-text--temp").remove();
  });

  $(".turbine-status__oil-pressure").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--oil-pressure').hide();
    $('.turbine-status__okay-text--oil-pressure').show();
    $('.turbine-status__triangle--oil-pressure').addClass("complete");
    $(".action-required__action-text--oil-pressure").remove();
  });

  $(".turbine-status__oil-level").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--oil-level').hide();
    $('.turbine-status__okay-text--oil-level').show();
    $('.turbine-status__triangle--oil-level').addClass("complete");
    $(".action-required__action-text--oil-level").remove();
  });
  

  $(".turbine-status__bolt-tension").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--bolt-tension').hide();
    $('.turbine-status__okay-text--bolt-tension').show();
    $('.turbine-status__triangle--bolt-tension').addClass("complete");
    $(".action-required__action-text--tension").remove();
  });

// Cycle through error messages

var jobs = $(".action-required__action-text--incomplete");
var jobIndex = -1;
  
  function showNextJob() {
    ++jobIndex;
    jobs.eq(jobIndex % jobs.length)
        .fadeIn(1000)
        .delay(1000)
        .fadeOut(1000, showNextJob);
}

showNextJob();