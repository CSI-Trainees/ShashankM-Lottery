function myFunction() {
    var x = Math.floor((Math.random() * 10) + 10);
    document.getElementById("demo").innerHTML = x;
    
  }
function myFunction1() {
    var x = document.getElementById("myNumber").value;
    var s="You Win";
    var s1="You Lose";
    if(x==12 || x==14 || x==15) 
    {
    document.getElementById("d").innerHTML=s ;
    }
    else
    {
    document.getElementById("d").innerHTML=s1 ;
    }
  }