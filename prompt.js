 function fn1() {
   var n= prompt("Enter a number");
   var p = parseInt(n);
   if(isNaN(p))
   {
   document.write("Please enter a valid number");
   }
   else{
   document.write(p);
   }
}