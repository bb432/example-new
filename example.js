function getMessage{
let message;
if(login == "Empleyee"){
message = "Hi";
}
else if(login == "Mr Prezident"){
message = "Good evening!";
}
else if(login == ""){
message = "user is not authorized";
}
else{
message = "";
}
return message;
}
