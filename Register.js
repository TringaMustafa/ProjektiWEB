function validation(){
    if(document.Formfill.Username.value == ""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.Formfill.Email.value == ""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value == ""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if (document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits*";
        return false;
    }

    else if (document.Formfill.cPassword.value== ""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if (document.Formfill.cPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't match*";
        return false;
    }
    else if (document.Formfill.Password.value == document.Formfill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }

}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")

   document.getElementById("loginLink").addEventListener("click" , function() {
    var registerForm = document.querySelector(".contaiinner");

    registerForm.style.display = "block";
   });
}
