function details(){
    var Username = document.form.fname.value;
    var Lastname = document.form.lname.value;
    
    var gender = document.form.gen.value;
    var dob = document.form.dob.value;
    var todayDate= new Date();
    var bday= new Date(dob);
    var age;
    
  if(Username.length<0){
alert("Username is empty!");
  }else if(Lastname.length<0){
    alert("Please fill the lastname");
  }else if(dob.length<0){
    alert("Please fill the date of birth");
  }
//gender checking
  if(gender=='male'){
    
    alert("The gender is a male");
  }else if(gender=='female'){
    
    alert("The gender is a Female");
  }else if(gender==""){
    alert("Give the gender");
  }
//Eligibility for vote
age=todayDate.getFullYear()-bday.getFullYear();
if(age>18){
  alert(Username+" m"+Lastname+" age "+age+" is eligible to vote");
}else{
  alert(Username+" m"+Lastname+" age "+age+" Wait to reach 18 years’");

}

}