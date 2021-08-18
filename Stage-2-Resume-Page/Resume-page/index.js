function showAfter4s() {
  let element = document.getElementById("resume")
  setTimeout(()=>{
    element.style.display = 'flex';
    element.style.transition = 'display .5s ease-in-out';
  }, 2800); 
}

document.onload = showAfter4s();