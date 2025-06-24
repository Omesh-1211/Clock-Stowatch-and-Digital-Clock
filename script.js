const box = document.querySelector('.box')
const clock = document.querySelector('.clock')

//console.log(box)



setInterval(function(){
    let datee = new Date()
 newdate = datee.toLocaleTimeString();
clock.innerHTML=newdate

},1000)



