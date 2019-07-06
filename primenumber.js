var a = prompt("Please input a positive integer");
var d = true;

for(b = 2;b<=a**0.5;b++){
    
    if (a%b==0){
        d=false;
        break;    
    }       
}

if(d){
    alert(a+" is a prime number");
}
else{
    alert(a+" isn't a prime number");
}
