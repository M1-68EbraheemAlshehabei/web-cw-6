// 👇🏻 قم بحل السؤال الأول هنا
let username = prompt(`ما هو أسمك؟`); 

function sayHello(){
    alert(`مرحبا!${username}`);
}


if (username== null){
    alert(`مرحبا!${username}`);
    
}
else {
    sayHello(username);
}