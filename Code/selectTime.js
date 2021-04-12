    var times = document.querySelectorAll("input[name = 'slot']");
    var buttons = document.getElementsByTagName('button');

    for(button of buttons){
      button.addEventListener('click', () =>{
        for(time of times){
          if(time.checked){
            var selectedTime = time.value;
            sessionStorage.setItem("selectedTime",selectedTime);
            break;
          }
        }      
      });
    }


