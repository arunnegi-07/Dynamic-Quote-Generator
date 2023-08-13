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