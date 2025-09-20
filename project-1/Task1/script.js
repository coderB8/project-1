window.addEventListener("load", function(){
    const preloader = document.getElementById("preloader")
    const content = this.document.getElementById("content");

    content.style.display = "none"

    setTimeout(() => {
        preloader.style.display = "none"
        content.style.display = "block" 
    }, 4300)
})
