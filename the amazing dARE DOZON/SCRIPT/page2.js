

//the dialog box which will pop on the screen
$( function() {
    $( "#dialog" ).dialog({
      modal: true,
      resizable: false,
      draggable:false,
      width: 300,
      height: "auto",
     
  });
});
// Start button will play the animation
$(`#close-dialog`).click((e)=>{
  e.preventDefault();
  timer();
})



//closing dialog box
$('#close_dialog').click(function() {
  $('#dialog').dialog('close');
  timer();

  });

$(document).ready(function() {

  //start the animation
    $(".start").click(function(){
      for (let index = 0; index < 1000; index++) {
      // $(".move1").animate({marginLeft:"84%"},1250,"linear"),$(".move1").animate({marginLeft:"3%"},1800,"linear"),
      $(".move2").animate({marginLeft:"83%"},1000,"linear"),$(".move2").animate({marginLeft:"4%"},1659,"linear"),
      $(".move3").animate({marginLeft:"83%"},1460,"linear"),$(".move3").animate({marginLeft:"4%"},1000,"linear"),
      $(".move4").animate({marginLeft:"83%"},1660,"linear"),$(".move4").animate({marginLeft:"4%"},1260,"linear"),
      $(".move5").animate({marginLeft:"83%"},1890,"linear"),$(".move5").animate({marginLeft:"4%"},1099,"linear");
      }

    });


  
});





//change the image from egg to broken-egg

$(document).ready(function(){
      $(".egg").click(function(){
          // Change src attribute of image
          $(this).attr("src", "images/broken-egg.png");
      
      console.log("Broken Egg");
          
      }); 
    
});

//count the number of click on egg
var count = 0;

 
$(document).ready(function(){

  $(".egg").click(function() {
      count++;
      if (count==4) {
       //setting alert when the user has popped 4eggs
        setTimeout(function () {
           score =25*count;
           initialscore = score;
      //Take user name and print it on home page.     
       Name = prompt('Game Over \n Your Score is:-'+score+' /n Enter Your Name: \n ');
          window.location.href = "Index.htm";
      }, 700);
      
      }
    
  });

});

//adding a timer to the game

function timer(){

  const startingmunutes = 1.5;
  let time = startingmunutes *60;
  
  const countdown = document.getElementById("#time");
  setInterval (updatetimer,1000);
  function  updatetimer(){
  
       const min = Math.floor(time/60);
       let sec = time %60;
  
      sec = sec <10 ? '0' + sec :sec;
      
       document.getElementById("time").innerHTML = min+":"+sec;
       time--;
       //game over when the time runs out
       if(time==0){
        setTimeout(function () {
          score =25*count+50*(time+1);            //issue   if the user poop all the eggs before tims runs out still this isnt adding to it yet.
            //because countdown in internal starts with 0 so it goes to -1 when it apperantly gives 00
          Name = prompt('Game Over \n Your Score is:-'+score+' \n Enter Your Name:  ');
          window.location.href = "Index.htm";
        }, 2000);
      }  
  }

 

  }


