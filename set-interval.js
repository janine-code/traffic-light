var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval(){
        counter++;
        if(counter===60){
          counter=0;
        }
        }// write some code here

        showNumber(counter);
}

setInterval(interval, 500);
