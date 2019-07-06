function inputprimenumber(){
    var a = prompt("Please input a positive integer than 1");
    if(a>1&&a%1==0){

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
    
    
    }
    else{
       alert( "Input error!!! Please input a postive integer than 1");
       inputprimenumber();
    }
}
inputprimenumber();





