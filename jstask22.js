function validate(){
    var username = document.getElementById("name").value;
    var password = document.getElementById("pwd").value;
    var cpassword= document.getElementById("cpwd").value;

    //validation for username
    var vuname = /^[a-zA-Z]{5,16}$/;
    var password0 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,10}$/;

    if(!vuname.test(username)){
        alert("Enter a valid username only 5 to 16 characters of alphabets are allowed");
    }else if(username==""){
        alert("Please give the userrname");
    }
    else if(!password0.test(password)){
        alert("Enter a valid password with alphabets, numbers and special characters");
    }else if(password==""){
        alert("Password should not be blank");
    }else if(cpassword==""){
        alert("Confirm password should not be blank");
    }else if(password!=cpassword){
        alert("Password and confirm password mismatched");
    }else {
        alert("Successfully logged in");

    }

     window.location="http://127.0.0.1:5501/.vscode/jstask2.html"
}