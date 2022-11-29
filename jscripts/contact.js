const submitFunc = () => {
    const mobileRegex = /^04\d{8}$/;
    const mobileNum = document.querySelector('#mobileNum').value;
    if(!mobileRegex.test(mobileNum.toString())){
        alert("invalid mobile number");
    }
}

const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.querySelector('#email').value;
    if(email === ""){
        document.querySelector(".err-msg-email").innerHTML = "Please enter your email";
     }else if(!emailRegex.test(email)){
        document.querySelector(".err-msg-email").innerHTML = "Invalid email";
     }else{
         document.querySelector(".err-msg-email").innerHTML ="";
     }
}

const validateMobileNum = () => {
    
    const mobileRegex = /^04\d{8}$/;
    const mobileNum = document.querySelector('#mobileNum').value;
    if(mobileNum === ""){
        document.querySelector(".err-msg-mobile").innerHTML ="";
    }else if(!mobileRegex.test(mobileNum.toString())){
        document.querySelector(".err-msg-mobile").innerHTML = "Invalid mobile number";
    }else{
        document.querySelector(".err-msg-mobile").innerHTML ="";
    }
}