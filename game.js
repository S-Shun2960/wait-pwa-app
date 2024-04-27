var count = 0
window.setInterval(countup, 1000);

function countup(){
  count = count + 1
  document.getElementById("count").innerHTML = count;
}

function stop(){
  window.location.replace('index.html')
  if (sessionStorage.getItem("Highscore") < count){
    sessionStorage.setItem("Highscore", count);
  }
}
