
for(var i=1;i<101;i++){
   var li=document.createElement('li');
  li.textContent=i;
   if(i%3==0){
      li.textContent='Fizz'; 
   
   }
   else if(i%5==0)
   {
      li.textContent='Buzz'; 
   }
   else if(i%5==0&&i%3==0)
   {
     li.textContent='FizzBuzz'; 
   }
  document.getElementById('FiBuzz').appendChild(li);
}

document.getElementById('form').onsubmit=function(){
   window.alert(document.getElementById('form').word.value);
    window.alert('押されました')
};
