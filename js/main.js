$(document).ready(function(){
    $(".sk-chase").fadeOut(1500 , function(){
        $("#loading").fadeOut(1500);
        $("body").css('overflow','auto')
    })
})

$(".Open").click(function(){
    $("#TheMenu").animate({ width:'250px'},50)
   $("#homecontent").animate({marginLeft :'250px'},50)
})

$(".xbtn").click(function(){
    $("#TheMenu").animate({ width:'0px'},50)
   $("#homecontent").animate({marginLeft :'0px'},50)
})

$("#TheMenu a").click(function(){
    var sectionId= $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    $("html , body").animate({scrollTop:positionOfSection},2000);
})

$('#slideDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function() {
   
    CountDownTo("30 august 2023 9:56:00");
  }

  function CountDownTo(countTo) {
  
        let TheDate = new Date(countTo);
    TheDate = (TheDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (TheDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  CountDownTo(countTo); }, 1000);
  }

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var CharLeft = maxLength-length;
  if(CharLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(CharLeft);
        }
});