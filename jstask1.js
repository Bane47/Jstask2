var friendsname = [];

var text="";


function fnamesAtEnd(){
     fname=document.getElementById("names").value;
friendsname.push(fname);
alert(friendsname);
}
function fnamesAtBegin(){
     fname=document.getElementById("names").value;

friendsname.unshift(fname);
alert(friendsname)
}

function separateByCommas(){

    alert(friendsname.toString(friendsname));
}

function deleteEnd(){
     fname=document.getElementById("names").value;

    friendsname.pop();
    alert("One item is deleted at the end of the array");
}

function deleteBegin(){
     fname=document.getElementById("names").value;

    friendsname.shift();
    alert("One item is deleted at the beginning of the array");
}

function sort(){
    friendsname.sort();
    alert("Here are the sorted list of the friends names: ");
    alert(friendsname);
}

function printWithFor(){
    for(var i=0;i<friendsname.length;i++){
    text += friendsname[i];    
    }
    alert(text);
}

function printWithForEach(){
 friendsname.forEach(x=>{
    alert(x);
 }); 

}

function prinWithForIn(){
    var final="";
    for(let x in friendsname){
      final+=friendsname[x]+" , ";
    }
    alert(final);

}

function printWithForOf(){
    for(let x of friendsname){
        alert(friendsname);
    }
}

function dateTime(){
    alert("The date is: "+Date());
    
}