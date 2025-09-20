const body = document.querySelector("body")

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", function(){
     
    const preloader = document.getElementById("preloader")
    const content = this.document.getElementById("content");

    content.style.display = "none"
    body.style.overflow = "hidden"

    setTimeout(() => {
        preloader.style.display = "none"
        content.style.display = "block" 
        body.style.overflow = "scroll"
    }, 4300)
})



