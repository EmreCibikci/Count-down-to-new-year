

// Set the date we're counting down to
let nextYear = new Date("Jan 1, 2023 00:00:00").getTime();

//  Update the count down every 1 second
 let x = setInterval(function() {

 //   Get today's date and time
   let now = new Date().getTime();
    
  //  Find the distance between now and the count down date
   let distance = nextYear - now;
    
   // Time calculations for days, hours, minutes and seconds
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  //  Output the result in an element with id="demo"
   document.getElementById("demo").innerHTML = "to new year in " + days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";
    
 }, 1000);