$(function(){

  // Sets the proportion for height to width on load to work on any resolution.
  $(window).load(function(e) { 
    $(".dot")
      .height($(".dot")
        .width()
      );
    });
  
  // On window resize, ties the height of the pips to the width.
  window.addEventListener("resize", function(e) { 
    $(".dot")
      .height($(".dot")
        .width()
      ); 
  });

  // Each array corresponds to the dots that would comprise the proper location of pips
  // to make up the numbers 1-6 on a domino.
  var topPips = [".t5", ".t3, .t7", ".t3, .t5, .t7", ".t1, .t3, .t7, .t9", ".t1, .t3, .t5, .t7, .t9", ".t1, .t3, .t4, .t6, .t7, .t9"];
  var bottomPips = [".b5", ".b3, .b7", ".b3, .b5, .b7", ".b1, .b3, .b7, .b9", ".b1, .b3, .b5, .b7, .b9", ".b1, .b3, .b4, .b6, .b7, .b9"];

  var allPips = ".t1, .t3, .t4, .t5, .t6, .t7, .t9, .b1, .b3, .b4, .b5, .b6, .b7, .b9";
  var rotateAmt = 90;

  // Based on going either right or left, this will make the domino transform in 90 degree increments
  var rotate = function(){ 
    $(".domino").css("transform", "rotate(" + rotateAmt + "deg)");          
    };

  $(".rotate-right")
    .click(function(){
      rotate();
      rotateAmt = rotateAmt + 90;
    });
  $(".rotate-left")
    .click(function(){
      rotate();
      rotateAmt = rotateAmt - 90;
    });

  // Selects a string at random from the arrays of the topPips and bottomPips and passes it through 
  // to the function to add the class in order to show the pips
  $(".randomize")
    .click(function(){
      var randomedTop = topPips[Math.floor(Math.random()*topPips.length)];
      var randomedBottom = bottomPips[Math.floor(Math.random()*bottomPips.length)];
      randomizeTilePips(randomedTop, randomedBottom);
    });

  var randomizeTilePips = function(top, bottom){
    $(allPips).removeClass("pip");
    $(top).addClass("pip");
    $(bottom).addClass("pip");
  };


});