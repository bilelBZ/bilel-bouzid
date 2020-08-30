

// Show Back To Top Link

window.addEventListener("scroll", function(){
  const scrollHeight = window.pageYOffset;
  const topLink = document.querySelector("#top-link");

  if(scrollHeight > 400){
    topLink.style.display = "block";
  }else{
    topLink.style.display = "none";
  }
})
