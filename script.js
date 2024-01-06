const button = document.querySelector('.btn2');
const button1 = document.querySelector('.btn1');
button.addEventListener('mouseover' , function(){

    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click' , function(){
    
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

button1.addEventListener('click' , function(){
   alert("Thankyou ji ");
});


