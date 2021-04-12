var submitBtn = document.getElementById('submitBtn');

var dayDisplay = document.getElementById('day');
var movieDisplay = document.getElementById('movie');
var timeDisplay = document.getElementById('time');

var selectedSeatsDisplay = document.getElementById("selectedSeats");

var queryString = location.search.substring(1);
var a = queryString.split("|");
var day = a[0];
var movie = a[1];

var time = sessionStorage.getItem("selectedTime");

var seats = document.querySelectorAll('.seats');
var selectedSeats = [];

dayDisplay.innerHTML = day;
movieDisplay.innerHTML = movie;
timeDisplay.innerHTML = time;

seats.forEach(seat => {
  var selected = false;
  seat.style.borderColor="blue";

  if(seat.style.borderColor=="blue"){
    if(seat.style.backgroundColor == ""){
      seat.addEventListener('click', () =>{
        if(!selected){
          seat.classList.add('selected');
          selected = true;

          selectedSeats.push(seat.attributes.value.value);
          selectedSeatsDisplay.innerHTML = selectedSeats;

          console.log(selectedSeats);
        }else{
          seat.classList.remove('selected');
          selected = false;

          var i;

          if(i = selectedSeats.indexOf(seat)){
            selectedSeats.splice(i,1);
          }

          selectedSeatsDisplay.innerHTML = selectedSeats;
        }  
      });
    }
  }
});



function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

submitBtn.addEventListener('click', () =>{
  $(document).ready(function(){
    createCookie("day",day,"10");
    createCookie("movie",movie,"10");
    createCookie("time",time,"10");
    createCookie("selectedSeats",selectedSeats,"10");
  });
});






