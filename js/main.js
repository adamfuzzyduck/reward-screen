// Oncicks which will be turned to web port signals

$(".turbine-status__vibration").on("click", function () {
  $( this ).addClass("complete");
  $('.turbine-status__exclamation--vibration').hide();
  $('.turbine-status__okay-text--vibration').show();
  $('.turbine-status__triangle--vibration-inner').addClass("complete");
  $(".action-required__action-text--incomplete-1").remove();

  let totalNumber = parseInt($(".number-count").attr("data-id")) -1;
  $('.number-count').attr('data-id', totalNumber );
});


$(".turbine-status__temp").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--temp').hide();
    $('.turbine-status__okay-text--temp').show();
    $('.turbine-status__triangle--temp-inner').addClass("complete");
    $(".action-required__action-text--incomplete-2").remove();

    let totalNumber = parseInt($(".number-count").attr("data-id")) -1;
    $('.number-count').attr('data-id', totalNumber );
  });

  $(".turbine-status__oil-pressure").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--oil-pressure').hide();
    $('.turbine-status__okay-text--oil-pressure').show();
    $('.turbine-status__triangle--oil-pressure-inner').addClass("complete");
    $(".action-required__action-text--incomplete-3").remove();

    let totalNumber = parseInt($(".number-count").attr("data-id")) -1;
    $('.number-count').attr('data-id', totalNumber );
  });

  $(".turbine-status__oil-level").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--oil-level').hide();
    $('.turbine-status__okay-text--oil-level').show();
    $('.turbine-status__triangle--oil-level-inner').addClass("complete");
    $(".action-required__action-text--incomplete-4").remove();

    let totalNumber = parseInt($(".number-count").attr("data-id")) -1;
    $('.number-count').attr('data-id', totalNumber );
  });
  

  $(".turbine-status__bolt-tension").on("click", function () {
    $( this ).addClass("complete");
    $('.turbine-status__exclamation--bolt-tension').hide();
    $('.turbine-status__okay-text--bolt-tension').show();
    $('.turbine-status__triangle--bolt-tension-inner').addClass("complete");
    $(".action-required__action-text--incomplete-5").remove();

    let totalNumber = parseInt($(".number-count").attr("data-id")) -1;
    $('.number-count').attr('data-id', totalNumber );
  });


let actionText = $('g[class^="action-required__action-text--incomplete-"]').hide(),
    triangle = $('path[class^="turbine-status__triangle-"]').hide(),
    i = 0;

  let knownLength = setInterval(function() {
    $('.number-count').attr("data-id");
  }, 1000);

function cycle(list,itemNbr) {
    
    list.eq(itemNbr)
      .fadeIn(400)
      .delay(5000)
      .fadeOut(400,function(){ 
        cycle(list, ++itemNbr % 5)
      });
      
};
  
cycle(actionText,i);
cycle(triangle,i); 

var timer2 = setInterval(function() {
  if($('.number-count').attr("data-id") == 0 ) {
    $('.video-wrapper').fadeIn(1000);
    $('.video-source').trigger('play');
  }
}, 1000);

$("#video").bind("ended", function() {
  window.location.reload(true);
});