// Manipulating DOM

var check = document.querySelector('#check');

check.addEventListener('change',function(){
    if(this.checked == true){
        document.body.setAttribute('style',"background-color:#1D2A35; color: white;")
        document.body.classList.add('night-style');
    }
    else{
        document.body.setAttribute('style',"background-color:white; color: black;")
        document.body.classList.remove('night-style');  
    }
})
  
// Initial loader if site loaded slowely 
var loader = document.getElementById('loader');
window.addEventListener("load",function(){
    loader.style.display = "none";
})


const quoteElement = document.getElementById("quote-text");
const authorElement = document.getElementById("author");
const copyFeedback = document.getElementById("copy-feedback");

quoteElement.addEventListener("click", async () => {
    const textToCopy = `${quoteElement.textContent} - ${authorElement.textContent}`;
    try {
        await navigator.clipboard.writeText(textToCopy);

        copyFeedback.textContent = "Text Copied!";
        copyFeedback.classList.remove("hidden");
        setTimeout(() => {
            copyFeedback.classList.add("hidden");
        }, 1000);
    } catch (error) {
        console.error("Failed to copy text:", error);
    }
});


