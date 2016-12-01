let count=0;
let opened=0;
let idopen=0;
let matches=0;
let array=[]
let rands=[];
let score=0;
let numspots=12; /*edit this to increase number of clickable squares*/
for(var i=0;i<numspots;i++){
  rands.push(Math.random());
}
for(var k=0;k<numspots;k++){
for(var j=0;j<numspots;j++){
  if( rands[j]==Math.min.apply(Math,rands)){
    array.push(j+1);
    rands[j]+=10;
    j=numspots+1;
  }
}
}


alert("ready to play?");

function open(id) {
    var property = document.getElementById(id);
    switch(id){
      case array[1]:property.innerHTML="<i class='fa fa-cloud'></i>";
      break;
      case array[2]:property.innerHTML="<i class='fa fa-cloud'></i>";
      break;
      case array[3]:property.innerHTML="<i class='fa fa-car'></i>";
      break;
      case array[4]:property.innerHTML="<i class='fa fa-car'></i>";
      break;
      case array[5]:property.innerHTML="<i class='fa fa-child'></i>";
      break;
      case array[6]:property.innerHTML="<i class='fa fa-child'></i>";
      break;
      case array[7]:property.innerHTML="<i class='fa fa-diamond'></i>";
      break;
      case array[8]:property.innerHTML="<i class='fa fa-diamond'></i>";
      break;
      case array[9]:property.innerHTML="<i class='fa fa-music'></i>";
      break;
      case array[10]:property.innerHTML="<i class='fa fa-music'></i>";
      break;
      case array[11]:property.innerHTML="<i class='fa fa-paper-plane'></i>";
      break;
      case array[0]:property.innerHTML="<i class='fa fa-paper-plane'></i>";
    }
  }

function close(id){
  document.getElementById(id).innerHTML="";
}

function flip(id){
  score++;
  switch (count){
    case 0:
      open(id);
      count++;
      opened=document.getElementById(id).innerHTML;
      idopen=id;
      break;
    case 1:
      if(id==idopen){
        close(id);
        count--;
      }
      else{
        open(id);
        if (document.getElementById(id).innerHTML==opened){
          document.getElementById(id).style.backgroundColor="#00FF00";
          document.getElementById(idopen).style.backgroundColor="#00FF00";
          count--;
          matches++;

        }else{
          document.getElementById(id).style.backgroundColor="#FF0000";
          document.getElementById(idopen).style.backgroundColor="#FF0000";
          setTimeout(function(){close(id)},1000);
          setTimeout(function(){close(idopen)},1000);
          count--;
          setTimeout(function(){document.getElementById(id).style.backgroundColor="yellow";},1000);
          setTimeout(function(){document.getElementById(idopen).style.backgroundColor="yellow";},1000);
        }
      }
  }
  document.getElementById("score").innerHTML=Math.floor(score/2);
  if (matches==numspots/2){
    alert(`you win with ${score/2} guesses!`);
    location.reload();
  }
}
