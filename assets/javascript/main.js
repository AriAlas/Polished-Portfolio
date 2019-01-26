$(".aboutLink").click(function(){
   
    $("html,body").animate({
        scrollTop: $("#about").offset().top}, "slow");
    
});
$(".portfolioLink").click(function(){
   
    $("html,body").animate({
        scrollTop: $("#portfolio").offset().top}, "slow");
    
});
$(".contactLink").click(function(){
   
    $("html,body").animate({
        scrollTop: $("#contact").offset().top}, "slow");
    
});
$(".back-to-top").click(function(){
   
    $("html,body").animate({
        scrollTop: $(".hero1").offset().top}, "slow");
    
});


document.querySelector('a#open-modal').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
  });

  $(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
 });
 $("#modal-close").click(function() {
    $(".modal").removeClass("is-active");
 });